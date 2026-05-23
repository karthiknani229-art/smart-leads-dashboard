# Smart Leads Dashboard

A full-stack Lead Management Dashboard built using the MERN stack with TypeScript, JWT authentication, role-based access control, advanced filtering, pagination, and CSV import/export.

## Live Demo

- Frontend: https://smart-leads-dashboard-ecru.vercel.app/
- Backend API: https://smart-leads-dashboard-zu8w.onrender.com

## Tech Stack

**Frontend:** React.js, TypeScript, Tailwind CSS, Axios, Vite

**Backend:** Node.js, Express.js, TypeScript, MongoDB Atlas, Mongoose, JWT Authentication

**DevOps:** Docker, Docker Compose, Vercel, Render

## Features

- User registration and login with JWT authentication
- Role-based access control (Admin / User)
- Lead CRUD operations with form validation
- Advanced filtering, sorting, and debounced search
- Backend pagination for scalable data handling
- CSV import and export workflows
- Protected routes with token-based authorization
- Toast notifications and responsive UI
- Docker support for local development

## Project Structure
smart-leads-dashboard/
│
├── client/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── context/
│   │   ├── services/
│   │   └── App.tsx
│
├── server/
│   ├── src/
│   │   ├── controllers/
│   │   ├── middleware/
│   │   ├── models/
│   │   ├── routes/
│   │   └── index.ts
│   └── .env.example
│
└── docker-compose.yml

## API Endpoints

**Auth**

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /api/auth/register | Register new user |
| POST | /api/auth/login | Login and get token |
| GET | /api/auth/me | Get current user |

**Leads**

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/leads | Get all leads (with filters) |
| POST | /api/leads | Create new lead |
| PUT | /api/leads/:id | Update lead |
| DELETE | /api/leads/:id | Delete lead |
| POST | /api/leads/import | Import leads via CSV |

## Local Setup

**1. Clone the repository**

```bash
git clone https://github.com/karthiknani229-art/smart-leads-dashboard.git
cd smart-leads-dashboard
```

**2. Backend setup**

```bash
cd server
npm install
npm run dev
```

Create a `.env` file inside `/server`:
PORT=5000
MONGO_URI=your_mongodb_atlas_uri
JWT_SECRET=your_secret_key

**3. Frontend setup**

```bash
cd client
npm install
npm run dev
```

## Docker Setup

```bash
docker compose up
```

This starts both the frontend and backend together using Docker Compose.

## Deployment

- Frontend: Vercel
- Backend: Render
- Database: MongoDB Atlas

## Author

Karthik — [GitHub](https://github.com/karthiknani229-art)
