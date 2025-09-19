![screen](https://arcdevoff.site/portfolio/todolist.png?upd)

# 📝 Todo List App

A full-stack Todo List application built with **TypeScript**, **NestJS**, **Prisma**, **PostgreSQL**, and **Vite (React)**.  
Features user authentication with **JWT**, task management, and secure API integration.

---

## ⚡ Stack

- **Frontend**: Vite + React + TailwindCSS
- **Backend**: NestJS (TypeScript)
- **Database**: PostgreSQL with Prisma ORM
- **Auth**: JWT (JSON Web Tokens)

---

## 📦 Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/arcdevoff/todolist.git
cd todolist
```

Install dependencies for backend and frontend:

```bash
# Backend
cd server
npm install

# Frontend
cd client
npm install
```

---

## ⚙️ Environment Variables

Create `.env` files:

### Backend (`server/.env`)

```env
DATABASE_URL="postgresql://USER:PASSWORD@localhost:5432/todolist"

PORT=3000
NODE_ENV=development

CLIENT_URL=http://localhost:5173

ACCESS_TOKEN_SECRET=replace_this_access_secret
REFRESH_TOKEN_SECRET=replace_this_refresh_secret
ACCESS_TOKEN_EXPIRES_IN=15m
REFRESH_TOKEN_EXPIRES_IN=7d
```

### Frontend (`client/.env`)

```env
VITE_API_URL="http://localhost:3000"
VITE_PORT=5173
```

---

## 🗄️ Database (Prisma + PostgreSQL)

1. Make sure PostgreSQL is running.
2. Push schema to database:
   ```bash
   cd server
   npx prisma migrate dev --name init
   ```
3. Generate Prisma client:
   ```bash
   npx prisma generate
   ```

---

## 🚀 Running the Project

### Backend (NestJS)

```bash
cd server
# development
npm run start:dev

# production
npm run build
npm run start:prod
```

### Frontend (Vite)

```bash
cd client
# development
npm run dev

# production build
npm run build
npm run preview
```

---

## 🌐 Access

- Frontend: `http://localhost:5173`
- Backend API: `http://localhost:3000`

---

## 🛠️ Scripts

### Backend

- `npm run start:dev` → run NestJS in dev mode
- `npm run start:prod` → run NestJS in production
- `npx prisma studio` → open Prisma Studio (DB UI)

### Frontend

- `npm run dev` → run Vite dev server
- `npm run build` → build for production
- `npm run preview` → preview production build

---

## 📸 Features

- ✅ JWT Authentication (register/login)
- ✅ User-based tasks
- ✅ Secure API with NestJS guards
- ✅ Database schema with Prisma
- ✅ Modern frontend with React + TailwindCSS
