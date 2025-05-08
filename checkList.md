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

## 8. Middleware for Authentication
- **Created `middlewares/authMiddleware.js`**:
  - Checks for `Authorization: Bearer <token>` header.
  - Verifies JWT using `jwt.verify()`.
  - Fetches user from the database and attaches it to `req.user`.
  - Returns `401 Unauthorized` for missing or invalid tokens.

## 9. Protected Route
- **Added `GET /api/auth/me` route** in `authRoutes.js`:
  - Applied `protect` middleware to the route.
  - Returns the currently authenticated user's information.

## 10. Testing Protected Route
- **Tested via Postman**:
  - Logged in via `/login` to obtain a JWT.
  - Called `/api/auth/me` with `Authorization: Bearer <JWT>` header.
  - Verified correct user object is returned from the server.
  - Confirmed `401 Unauthorized` error is returned for invalid or missing tokens.

## 11. Activity Model and Public API

### 📁 Models
- **Created `models/Activity.js`** schema with fields:
  - `title`, `description`, `location`, `date`, `time`.

### 🧠 Controllers
- **Created `controllers/activityController.js`** with:
  - `getActivities()` to fetch all activities from the database.

### 🔀 Routes
- **Created `routes/activityRoutes.js`**:
  - Added `GET /` route to fetch all activities.
- **Linked route in `app.js`** under `/api/activities`.

### 🧪 Testing
- **Added sample activity** directly via MongoDB or `POST` request.
- **Verified `GET /api/activities`**:
  - Returns all activity records in JSON format.
  - Tested using Postman.

## 12. Booking Model and User-Specific Bookings API

### Models
- **Created `models/Booking.js`** schema with fields:
  - References to `User` and `Activity` models.
- **Used `.populate('activity')`** to include activity details in booking list.

### Controllers
- **Created `controllers/bookingController.js`** with:
  - `getMyBookings()`:
    - Retrieved bookings for `req.user._id`.
    - Implemented proper error handling and HTTP status codes.
    - Returned full booking list to the client.

### Routes
- **Defined `GET /api/my-bookings` route** in `routes/bookingRoutes.js`:
  - Protected route using `protect` middleware.
- **Registered booking routes** in `app.js`.

### Testing
- **Tested in Postman**:
  - Sent `GET` request with `Authorization: Bearer <JWT token>` header.
  - Received list of bookings with full activity details.
  - Confirmed only user-specific bookings are returned.




