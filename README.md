---

# Task Management MERN App

This project is a Task Management web application built using the MERN stack (MongoDB, Express.js, React.js, and Node.js). It allows users to register, log in, manage tasks (CRUD), and maintain authentication through sessions using Passport.js.

## Table of Contents
- [Features](#features)
- [Technologies](#technologies)
- [Installation](#installation)
- [Backend Setup](#backend-setup)
  - [Database](#database)
  - [Server Routes](#server-routes)
- [Frontend Setup](#frontend-setup)
  - [Auth Context](#auth-context)
  - [React Components](#react-components)
- [Authentication](#authentication)
  - [Login](#login)
  - [Signup](#signup)
  - [Logout](#logout)
  - [Check Authentication](#check-authentication)
- [Project Structure](#project-structure)

## Features
- User registration and login
- Authentication using Passport.js (local strategy and session-based)
- Task management: Create, Read, Update, Delete (CRUD)
- Session management for user authentication (check auth status, logout)
- Responsive UI built with React
- Authentication managed with React Context API

## Technologies
- **Backend**: Node.js, Express.js, MongoDB, Mongoose, Passport.js, passport-local, passport-local-mongoose
- **Frontend**: React.js, Axios, React Router, Context API
- **Other**: express-session, pbkdf2 for password hashing

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/task-management-mern.git
   ```

2. Navigate into the project directory:
   ```bash
   cd task-management-mern
   ```

3. Install dependencies for both backend and frontend:
   ```bash
   cd backend && npm install
   cd ../frontend && npm install
   ```

## Backend Setup

### Database
- Ensure you have MongoDB installed and running locally.
- Default MongoDB URL is: `mongodb://localhost:27017/TaskApp`.

### Server Setup
1. Configure `index.js`:
   - The backend is set up with Express.js and Passport.js for authentication.
   - Passport.js is configured using `passport-local` and `passport-local-mongoose`.
   - Server listens on port 8000.

2. Run the backend:
   ```bash
   cd backend
   node index.js
   ```

### Server Routes
- **User Routes** (`routes/users.js`):
  - `POST /api/user/`: Register a new user.
  - `POST /api/user/login`: Login an existing user.
  - `GET /api/user/auth`: Check authentication status.
  - `POST /api/user/logout`: Logout the current user.
  
- **Task Routes** (`routes/listing.js`):
  - `GET /api/tasks`: Get all tasks for the logged-in user.
  - `POST /api/tasks`: Create a new task.
  - `PUT /api/tasks/:id`: Update a task.
  - `DELETE /api/tasks/:id`: Delete a task.

## Frontend Setup

### Auth Context
- The `AuthContext.jsx` file is used to manage the authentication state in the frontend using React Context API.
- The context provides methods for login, signup, logout, and checking the authentication status.

### React Components
- **Login Component**: Users can log in with their credentials.
- **Signup Component**: Allows new users to register.
- **Listing Component**: Displays tasks for authenticated users and includes CRUD functionality for tasks.
  
To start the frontend:
```bash
cd frontend
npm run dev
```

## Authentication

### Login
- The login route (`POST /api/user/login`) handles user login via Passport.js (local strategy).
- Upon successful login, a session is created, and the user’s authentication status is saved.

### Signup
- The signup route (`POST /api/user/`) registers new users, storing credentials securely using `passport-local-mongoose` for hashing passwords.

### Logout
- The logout route (`POST /api/user/logout`) ends the session for the current user and clears authentication.

### Check Authentication
- The authentication check route (`GET /api/user/auth`) checks if the user is authenticated based on session status.


This should give a clear overview of how the backend integrates with the frontend and how authentication is managed. You can adjust or expand this README based on additional project details or features.
