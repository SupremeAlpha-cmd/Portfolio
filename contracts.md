# Backend Integration Contracts

## Current Mock Data Location
- **File**: `/app/frontend/src/data/mock.js`
- **Data Structure**: portfolioData object containing personal info, skills, projects, experience

## Database Collections

### 1. Portfolio Settings (Single Document)
```json
{
  "_id": ObjectId,
  "personal": {
    "name": "string",
    "title": "string",
    "tagline": "string",
    "about": "string",
    "email": "string",
    "github": "string",
    "linkedin": "string",
    "location": "string"
  },
  "updated_at": "datetime"
}
```

### 2. Skills Collection
```json
{
  "_id": ObjectId,
  "name": "string",
  "level": "number (0-100)",
  "category": "string (framework|language|backend|integration|tools|architecture)",
  "order": "number"
}
```

### 3. Projects Collection
```json
{
  "_id": ObjectId,
  "title": "string",
  "category": "string",
  "description": "string",
  "technologies": ["string"],
  "image": "string (URL)",
  "featured": "boolean",
  "year": "string",
  "github_url": "string (optional)",
  "demo_url": "string (optional)",
  "created_at": "datetime"
}
```

### 4. Contact Messages Collection
```json
{
  "_id": ObjectId,
  "name": "string",
  "email": "string",
  "message": "string",
  "created_at": "datetime",
  "read": "boolean"
}
```

## API Endpoints

### Portfolio Settings
- `GET /api/portfolio` - Get portfolio personal info
- `PUT /api/portfolio` - Update portfolio info (admin only - future)

### Skills
- `GET /api/skills` - Get all skills
- `POST /api/skills` - Add new skill (admin only - future)

### Projects
- `GET /api/projects` - Get all projects (with optional category filter)
- `GET /api/projects/{id}` - Get single project
- `POST /api/projects` - Add new project (admin only - future)

### Contact
- `POST /api/contact` - Submit contact form message

## Frontend Integration Changes

### Files to Modify:
1. **Hero.jsx** - Fetch personal data from API
2. **About.jsx** - Fetch personal data from API
3. **Skills.jsx** - Fetch skills from API
4. **Projects.jsx** - Fetch projects from API, add category filter param
5. **Contact.jsx** - POST form data to API
6. **Footer.jsx** - Fetch personal data from API

### Integration Pattern:
```javascript
// Replace mock imports with API calls
import axios from 'axios';
const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

// Example: Fetch projects
const fetchProjects = async () => {
  const response = await axios.get(`${API}/projects`);
  return response.data;
};
```

### Error Handling:
- Add loading states
- Add error states with user-friendly messages
- Fallback to empty arrays/objects if API fails

## Implementation Steps

### Phase 1: Backend Setup
1. Create Pydantic models for all collections
2. Implement GET endpoints (read-only)
3. Implement POST endpoint for contact form
4. Seed database with mock data

### Phase 2: Frontend Integration
1. Create API service file (`/frontend/src/services/api.js`)
2. Update components to use API calls
3. Add loading/error states
4. Remove mock.js imports

### Phase 3: Testing
1. Test all API endpoints with curl
2. Test frontend data fetching
3. Test contact form submission
4. Verify error handling

## Data Seeding Script
Create initial data in database from mock.js values for:
- Portfolio personal info (1 document)
- Skills (8 documents)
- Projects (4 documents)
