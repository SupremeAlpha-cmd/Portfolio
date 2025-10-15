"""Script to seed initial portfolio data into MongoDB"""
import asyncio
from motor.motor_asyncio import AsyncIOMotorClient
from datetime import datetime
import os
from dotenv import load_dotenv
from pathlib import Path

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]


async def seed_portfolio_settings():
    """Seed portfolio personal information"""
    portfolio_data = {
        "personal": {
            "name": "Oreoluwa Ifedinma Chiazor",
            "title": "Flutter Developer",
            "tagline": "Building beautiful mobile experiences with Flutter & Dart",
            "about": "Junior Flutter developer passionate about creating smooth, performant mobile applications. Focused on clean code architecture and intuitive user interfaces.",
            "email": "chiazor.oreoluwa17@gmail.com",
            "github": "https://github.com/SupremeAlpha",
            "linkedin": "https://linkedin.com/in/your-profile",
            "location": "Nigeria"
        },
        "updated_at": datetime.utcnow()
    }
    
    # Delete existing and insert new
    await db.portfolio_settings.delete_many({})
    result = await db.portfolio_settings.insert_one(portfolio_data)
    print(f"✓ Portfolio settings seeded: {result.inserted_id}")


async def seed_skills():
    """Seed skills data"""
    skills = [
        {"name": "Flutter", "level": 85, "category": "framework", "order": 1},
        {"name": "Dart", "level": 80, "category": "language", "order": 2},
        {"name": "Firebase", "level": 70, "category": "backend", "order": 3},
        {"name": "REST APIs", "level": 75, "category": "integration", "order": 4},
        {"name": "Git", "level": 80, "category": "tools", "order": 5},
        {"name": "State Management", "level": 70, "category": "architecture", "order": 6},
        {"name": "React", "level": 65, "category": "framework", "order": 7},
        {"name": "JavaScript", "level": 70, "category": "language", "order": 8}
    ]
    
    await db.skills.delete_many({})
    result = await db.skills.insert_many(skills)
    print(f"✓ Skills seeded: {len(result.inserted_ids)} documents")


async def seed_projects():
    """Seed projects data"""
    projects = [
        {
            "title": "WeatherNow",
            "category": "Mobile App",
            "description": "A beautiful weather forecasting app built with Flutter. Features real-time weather data, 7-day forecast, and location-based weather updates.",
            "technologies": ["Flutter", "Dart", "OpenWeather API", "Geolocator", "Provider"],
            "image": "https://images.unsplash.com/photo-1530563885674-66db50a1af19?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njd8MHwxfHNlYXJjaHwyfHx3ZWF0aGVyJTIwYXBwJTIwbW9iaWxlfGVufDB8fHx8MTc2MDU0NDg1MHww&ixlib=rb-4.1.0&q=85",
            "featured": True,
            "year": "2024",
            "github_url": None,
            "demo_url": None,
            "created_at": datetime.utcnow()
        },
        {
            "title": "TaskFlow",
            "category": "Productivity",
            "description": "A task management application with smart prioritization and deadline tracking. Helps users organize daily tasks efficiently.",
            "technologies": ["Flutter", "Dart", "SQLite", "BLoC Pattern", "Local Notifications"],
            "image": "https://images.unsplash.com/photo-1649433391841-02a04e22ad50?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzR8MHwxfHNlYXJjaHwyfHx0YXNrJTIwbWFuYWdlciUyMGFwcHxlbnwwfHx8fDE3NjA1NDQ4NTd8MA&ixlib=rb-4.1.0&q=85",
            "featured": True,
            "year": "2024",
            "github_url": None,
            "demo_url": None,
            "created_at": datetime.utcnow()
        },
        {
            "title": "ShopEase",
            "category": "E-commerce",
            "description": "Mobile shopping app with seamless checkout experience. Features product browsing, cart management, and secure payment integration.",
            "technologies": ["Flutter", "Dart", "Firebase", "Stripe API", "GetX"],
            "image": "https://images.unsplash.com/photo-1758524944006-ba8116008496?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDJ8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBzaG9wcGluZyUyMGFwcHxlbnwwfHx8fDE3NjA1NDQ4NjN8MA&ixlib=rb-4.1.0&q=85",
            "featured": True,
            "year": "2024",
            "github_url": None,
            "demo_url": None,
            "created_at": datetime.utcnow()
        },
        {
            "title": "FitTracker",
            "category": "Health & Fitness",
            "description": "Fitness tracking app with workout plans and progress monitoring. Includes exercise library and personalized workout suggestions.",
            "technologies": ["Flutter", "Dart", "Firebase", "Charts", "Provider"],
            "image": "https://images.pexels.com/photos/7222952/pexels-photo-7222952.jpeg",
            "featured": False,
            "year": "2024",
            "github_url": None,
            "demo_url": None,
            "created_at": datetime.utcnow()
        }
    ]
    
    await db.projects.delete_many({})
    result = await db.projects.insert_many(projects)
    print(f"✓ Projects seeded: {len(result.inserted_ids)} documents")


async def main():
    print("Starting database seeding...\n")
    
    try:
        await seed_portfolio_settings()
        await seed_skills()
        await seed_projects()
        
        print("\n✅ Database seeded successfully!")
    except Exception as e:
        print(f"\n❌ Error seeding database: {str(e)}")
    finally:
        client.close()


if __name__ == "__main__":
    asyncio.run(main())
