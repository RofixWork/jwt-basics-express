# JWT Authentication API with Express.js

## 📌 Overview

This is a simple **JWT-based authentication** API built with **Express.js**. It includes user login and a protected dashboard route that requires authentication.

## 🚀 Features

- User login with **JWT token generation**.
- Protected route (`/dashboard`) requiring authentication.
- Middleware for verifying JWT tokens.
- Error handling using **http-status-codes**.

## 🛠️ Technologies Used

- **Node.js**
- **Express.js**
- **jsonwebtoken (JWT)**
- **http-status-codes**
- **dotenv**

## 📂 Project Structure

```
/project-root
│── controllers
│   ├── auth.controllers.js
│── middlewares
│   ├── authenticated.js
|   |-- error-handler.js
|   |-- not-found.js
│── routes
│   ├── auth.routes.js
│── .env
│── app.js
│── package.json
│── README.md
```

## 📌 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/RofixWork/jwt-basics-express.git
   cd your-repo
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file and add:
   ```env
   JWT_KEY=your_secret_key
   ```

## 🚀 Running the API

Start the server:

```bash
npm start
```

The API will run on **[http://localhost:5000](http://localhost:5000)** (or your configured port).

## 🔑 Authentication Flow

### 1️⃣ Login Endpoint

**POST /api/auth/login**

- Request Body:
  ```json
  {
    "username": "your_username",
    "password": "your_password"
  }
  ```
- Response:
  ```json
  {
    "msg": "Login Successfully...",
    "token": "your_jwt_token"
  }
  ```

### 2️⃣ Protected Dashboard Endpoint

**GET /api/auth/dashboard** (Requires **JWT** token in `Authorization` header)

- Response:
  ```json
  {
    "msg": "Hello username",
    "secret": 42
  }
  ```

## 🛡️ Middleware (authMiddleware.js)

The middleware verifies the JWT token before allowing access to protected routes.

## 📝 License

This project is licensed under the **MIT License**.

