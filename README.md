# Smart Leads Dashboard

A full-stack Lead Management Dashboard built using the MERN stack with TypeScript, JWT authentication, role-based access control, advanced filtering, pagination, and CSV import/export.

---

# Live Links

## Frontend

https://smart-leads-dashboard-ecru.vercel.app/
## Backend API

https://smart-leads-dashboard-zu8w.onrender.com

---

# GitHub Repository

https://github.com/karthiknani229-art/smart-leads-dashboard

---

# Tech Stack

## Frontend

* React.js
* TypeScript
* Tailwind CSS
* Axios
* Vite

## Backend

* Node.js
* Express.js
* TypeScript
* MongoDB Atlas
* Mongoose
* JWT Authentication

## DevOps

* Docker
* Docker Compose
* Render
* Vercel

---

# Features

* User Registration & Login
* JWT Authentication
* Protected Routes
* Role-Based Access Control
* Lead CRUD Operations
* Search & Filtering
* Sorting
* Backend Pagination
* Debounced Search
* CSV Import & Export
* Responsive UI
* Form Validation
* Toast Notifications
* Docker Support

---

# Environment Variables

Create a `.env` file inside the `server` folder.

```env
PORT=5000
MONGO_URI=your_mongodb_atlas_uri
JWT_SECRET=your_secret_key
```

---

# Local Setup

## Backend

```bash
cd server
npm install
npm run dev
```

## Frontend

```bash
cd client
npm install
npm run dev
```

---

# Docker Setup

```bash
docker compose up
```

---

# API Endpoints

## Auth

* POST `/api/auth/register`
* POST `/api/auth/login`
* GET `/api/auth/me`

## Leads

* GET `/api/leads`
* POST `/api/leads`
* PUT `/api/leads/:id`
* DELETE `/api/leads/:id`
* POST `/api/leads/import`

---

# Deployment

* Frontend: Vercel
* Backend: Render
* Database: MongoDB Atlas

---

# Author

Karthik
