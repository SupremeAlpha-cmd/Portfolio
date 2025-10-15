from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from typing import List, Optional
from models import (
    PortfolioSettings,
    PortfolioSettingsResponse,
    Skill,
    SkillCreate,
    Project,
    ProjectCreate,
    ContactMessage,
    ContactMessageCreate,
    ContactMessageResponse
)


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# Portfolio Settings Endpoints
@api_router.get("/portfolio", response_model=PortfolioSettingsResponse)
async def get_portfolio():
    """Get portfolio personal information"""
    portfolio = await db.portfolio_settings.find_one()
    if not portfolio:
        raise HTTPException(status_code=404, detail="Portfolio settings not found")
    return PortfolioSettingsResponse(**portfolio)


# Skills Endpoints
@api_router.get("/skills", response_model=List[Skill])
async def get_skills():
    """Get all skills"""
    skills = await db.skills.find().sort("order", 1).to_list(100)
    return [Skill(**skill) for skill in skills]


@api_router.post("/skills", response_model=Skill)
async def create_skill(skill: SkillCreate):
    """Create a new skill (admin only in future)"""
    skill_dict = skill.dict()
    result = await db.skills.insert_one(skill_dict)
    skill_dict['_id'] = str(result.inserted_id)
    return Skill(**skill_dict)


# Projects Endpoints
@api_router.get("/projects", response_model=List[Project])
async def get_projects(category: Optional[str] = None):
    """Get all projects with optional category filter"""
    query = {}
    if category and category.lower() != 'all':
        query['category'] = category
    
    projects = await db.projects.find(query).sort("created_at", -1).to_list(100)
    result = []
    for project in projects:
        project['_id'] = str(project['_id'])
        result.append(Project(**project))
    return result


@api_router.get("/projects/{project_id}", response_model=Project)
async def get_project(project_id: str):
    """Get a single project by ID"""
    from bson import ObjectId
    
    try:
        project = await db.projects.find_one({"_id": ObjectId(project_id)})
        if not project:
            raise HTTPException(status_code=404, detail="Project not found")
        project['_id'] = str(project['_id'])
        return Project(**project)
    except Exception as e:
        raise HTTPException(status_code=400, detail=f"Invalid project ID: {str(e)}")


@api_router.post("/projects", response_model=Project)
async def create_project(project: ProjectCreate):
    """Create a new project (admin only in future)"""
    project_dict = project.dict()
    result = await db.projects.insert_one(project_dict)
    project_dict['_id'] = str(result.inserted_id)
    return Project(**project_dict)


# Contact Endpoints
@api_router.post("/contact", response_model=ContactMessageResponse)
async def submit_contact_message(message: ContactMessageCreate):
    """Submit a contact form message"""
    message_dict = message.dict()
    message_dict['read'] = False
    
    result = await db.contact_messages.insert_one(message_dict)
    
    if result.inserted_id:
        return ContactMessageResponse(
            success=True,
            message="Thank you for your message! I'll get back to you soon."
        )
    else:
        raise HTTPException(status_code=500, detail="Failed to submit message")


@api_router.get("/contact/messages", response_model=List[ContactMessage])
async def get_contact_messages(unread_only: bool = False):
    """Get all contact messages (admin only in future)"""
    query = {"read": False} if unread_only else {}
    messages = await db.contact_messages.find(query).sort("created_at", -1).to_list(100)
    result = []
    for msg in messages:
        msg['_id'] = str(msg['_id'])
        result.append(ContactMessage(**msg))
    return result


# Health check
@api_router.get("/")
async def root():
    return {"message": "Portfolio API is running", "status": "healthy"}


# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()