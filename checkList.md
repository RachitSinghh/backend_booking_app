# Checklist: Backend Auth System Setup

## 1. Project Initialization
- **Created project folder** and initialized with `npm init -y`.
- **Installed dependencies**:
  - `express`, `mongoose`, `bcryptjs`, `jsonwebtoken`, `dotenv`, `cors`, `express-validator`.
  - `nodemon` as a dev dependency.
- **Created file structure**:
  ```
  /config
  /controllers
  /models
  /routes
  /middlewares
  app.js
  server.js
  .env
  ```

## 2. Environment Configuration
- **Created `.env` file** with:
  ```
  PORT=5000
  MONGO_URI=your_mongodb_connection_string
  JWT_SECRET=supersecretkey
  ```
- **Called `dotenv.config()`** at the top of `server.js`.

## 3. Database Connection
- **Created `config/db.js`** to connect MongoDB using `mongoose`.
- **Confirmed successful DB connection** via console log.

## 4. Express Server Setup
- **Configured `app.js`** to use:
  - `express.json()`
  - `cors()`
  - `/api/auth` route.
- **Created `server.js`** to start the server on `process.env.PORT`.
- **Verified server runs** with `npm run dev`.

## 5. User Model
- **Created `models/User.js`** with fields:
  - `name`, `email`, `phone`, `password`.
- **Used `timestamps: true`** for tracking created/updated times.

## 6. Auth Routes and Controllers
- **Created `routes/authRoutes.js`** with:
  - `POST /register`
  - `POST /login`.
- **Created `controllers/authController.js`** with:
  - `registerUser`:
    - Hash password using `bcryptjs`.
    - Save user.
    - Return JWT.
  - `loginUser`:
    - Verify email and password.
    - Return JWT.
- **Used `jsonwebtoken`** and `process.env.JWT_SECRET` to generate tokens.

## 7. Testing Functionality (Manual)
- **Register endpoint tested** via Postman:
  - `POST http://localhost:5000/api/auth/register`.
  - Valid user created in DB.
- **Login endpoint tested**:
  - `POST http://localhost:5000/api/auth/login`.
  - Correct JWT returned on valid credentials.
- **Handled issues**:
  - Undefined secret (`"secretOrPrivateKey must have a value"`).
  - Routing issue (`Cannot POST /api/auth/login`) caused by:
    - Missing or incorrect route mount.
    - Incorrect method (GET instead of POST).

## Final Notes for Stability Check
- **Server logs should confirm**:
  - `"MongoDB connected"`.
  - `"Server running on port 5000"`.
- **Registering and logging in** should return a valid JSON response (not an HTML error).
- **JWT token** should be returned after both actions.
