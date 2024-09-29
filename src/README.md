
# Blog Backend API

This is a simple backend API for managing blogs using basic CRUD operations. The project is built using **Node.js**, **Express**, and **Prisma** with a **PostgreSQL** database.

## Features

- **Create a blog**
- **Get all blogs**
- **Get a single blog by ID**
- **Update a blog**
- **Delete a blog**

## Technologies

- **Node.js**: Server-side JavaScript runtime.
- **Express**: Web framework for building APIs.
- **Prisma**: ORM (Object Relational Mapper) for interacting with the database.
- **MySQL**: Relational database system.

## Folder Structure

```plaintext
backend/
├── prisma/
│   └── schema.prisma         
├── src/
│   ├── controllers/          # Handles incoming HTTP requests
│   ├── services/             # Business logic and data processing
│   ├── models/               # Prisma database interactions
│   ├── routes/               # API routes setup
│   ├── app.js                # Express app setup
│   └── server.js             # Entry point to start the server
├── package.json              # Dependencies and scripts
└── .env                      # Environment variables (database connection, etc.)
```

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-repo-url
cd backend
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up your environment

Create a `.env` file with your database connection:

```
DATABASE_URL="postgresql://username:password@localhost:5432/database"
```

### 4. Run Prisma migrations

```bash
npx prisma migrate dev --name init
npx prisma generate
```

### 5. Start the development server

```bash
npm run dev
```

Server will run on `http://localhost:3000`.

## API Endpoints

### 1. **Create a Blog**
- **Endpoint**: `POST /api/blogs`
- **Request Body** (JSON):
  ```json
  {
    "title": "My Blog Title",
    "content": "Blog content here",
    "image": "https://example.com/image.jpg"
  }
  ```
- **Response** (201 Created):
  ```json
  {
    "id": 1,
    "title": "My Blog Title",
    "content": "Blog content here",
    "image": "https://example.com/image.jpg",
    "createdAt": "2024-09-28T12:34:56.789Z"
  }
  ```

### 2. **Get All Blogs**
- **Endpoint**: `GET /api/blogs`
- **Response** (200 OK):
  ```json
  [
    {
      "id": 1,
      "title": "My Blog Title",
      "content": "Blog content here",
      "image": "https://example.com/image.jpg",
      "createdAt": "2024-09-28T12:34:56.789Z"
    },
    {
      "id": 2,
      "title": "Another Blog Title",
      "content": "Another blog content",
      "image": null,
      "createdAt": "2024-09-29T08:12:56.789Z"
    }
  ]
  ```

### 3. **Get a Blog by ID**
- **Endpoint**: `GET /api/blogs/:id`
- **Response** (200 OK):
  ```json
  {
    "id": 1,
    "title": "My Blog Title",
    "content": "Blog content here",
    "image": "https://example.com/image.jpg",
    "createdAt": "2024-09-28T12:34:56.789Z"
  }
  ```
- **Error** (404 Not Found):
  ```json
  {
    "message": "Blog not found"
  }
  ```

### 4. **Update a Blog**
- **Endpoint**: `PUT /api/blogs/:id`
- **Request Body** (JSON):
  ```json
  {
    "title": "Updated Blog Title",
    "content": "Updated content",
    "image": "https://example.com/new-image.jpg"
  }
  ```
- **Response** (200 OK):
  ```json
  {
    "id": 1,
    "title": "Updated Blog Title",
    "content": "Updated content",
    "image": "https://example.com/new-image.jpg",
    "createdAt": "2024-09-28T12:34:56.789Z"
  }
  ```
- **Error** (404 Not Found):
  ```json
  {
    "message": "Blog not found"
  }
  ```

### 5. **Delete a Blog**
- **Endpoint**: `DELETE /api/blogs/:id`
- **Response** (204 No Content):
  No response body.
  
- **Error** (404 Not Found):
  ```json
  {
    "message": "Blog not found"
  }
  ```

## Environment Variables

Make sure you have the following environment variables set in a `.env` file:

```
DATABASE_URL="postgresql://username:password@localhost:5432/database"
```

## Running the Project

- Run the development server:

```bash
npm run dev
```

- Prisma database migration and client generation:

```bash
npx prisma migrate dev --name init
npx prisma generate
```
