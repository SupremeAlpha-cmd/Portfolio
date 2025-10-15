from pydantic import BaseModel, Field, EmailStr
from typing import List, Optional
from datetime import datetime


class Personal(BaseModel):
    name: str
    title: str
    tagline: str
    about: str
    email: EmailStr
    github: str
    linkedin: str
    location: str


class PortfolioSettings(BaseModel):
    id: Optional[str] = Field(default=None, alias='_id')
    personal: Personal
    updated_at: datetime = Field(default_factory=datetime.utcnow)

    class Config:
        populate_by_name = True


class PortfolioSettingsResponse(BaseModel):
    personal: Personal


class Skill(BaseModel):
    id: Optional[str] = Field(default=None, alias='_id')
    name: str
    level: int = Field(ge=0, le=100)
    category: str
    order: int = 0

    class Config:
        populate_by_name = True


class SkillCreate(BaseModel):
    name: str
    level: int = Field(ge=0, le=100)
    category: str
    order: int = 0


class Project(BaseModel):
    id: Optional[str] = Field(default=None, alias='_id')
    title: str
    category: str
    description: str
    technologies: List[str]
    image: str
    featured: bool = False
    year: str
    github_url: Optional[str] = None
    demo_url: Optional[str] = None
    created_at: datetime = Field(default_factory=datetime.utcnow)

    class Config:
        populate_by_name = True


class ProjectCreate(BaseModel):
    title: str
    category: str
    description: str
    technologies: List[str]
    image: str
    featured: bool = False
    year: str
    github_url: Optional[str] = None
    demo_url: Optional[str] = None


class ContactMessage(BaseModel):
    id: Optional[str] = Field(default=None, alias='_id')
    name: str
    email: EmailStr
    message: str
    created_at: datetime = Field(default_factory=datetime.utcnow)
    read: bool = False

    class Config:
        populate_by_name = True


class ContactMessageCreate(BaseModel):
    name: str
    email: EmailStr
    message: str


class ContactMessageResponse(BaseModel):
    success: bool
    message: str
