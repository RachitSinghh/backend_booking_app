
# 🏏 Basic Activity Booking App API

A simple REST API for booking activities like sports, events, or movie screenings. Built using Node.js, Express, MongoDB, and JWT authentication.

---

## 🚀 Features

- User registration and login with JWT
- Public listing of all available activities
- Authenticated booking of activities
- Retrieve all bookings for the logged-in user
- Secure password hashing with bcrypt
- Input validation using express-validator

---

## 🛠️ Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB (via Mongoose)
- **Authentication**: JWT
- **Security**: bcryptjs for password hashing
- **Validation**: express-validator
- **API Testing**: Postman

---

## 📁 Project Structure

```
backend-booking-app/
├── controllers/
├── models/
├── routes/
├── middlewares/
├── config/
├── .env
├── app.js
├── server.js
└── README.md
```

---

## 📦 Installation & Setup

1. **Clone the repository**
```bash
git clone https://github.com/your-username/backend-booking-app.git
cd backend-booking-app
```

2. **Install dependencies**
```bash
npm install
```

3. **Create a `.env` file** in the root directory and add:

```
PORT=5000
MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_jwt_secret
```

4. **Start the development server**
```bash
npm run dev
```

---

## 🧪 API Endpoints

### 🧍 Auth
- `POST /api/auth/register` — Register a user
- `POST /api/auth/login` — Login and get JWT token
- `GET /api/auth/me` — Get current logged-in user (protected)

### 📅 Activities
- `GET /api/activities` — Public: List all activities
- `POST /api/activities` — Dev-only: Add activity

### 📌 Bookings
- `POST /api/book/:activityId` — Book an activity for the logged-in user (protected)
- `GET /api/my-bookings` — Get bookings by logged-in user with activity details (protected)

---

## 🔐 Auth Header Format

For all protected routes, include the JWT token in the header:

```
Authorization: Bearer <your_token>
```

---

## 💻 Sample User Registration (Postman)
```
POST /api/auth/register
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "1234567890",
  "password": "secure123"
}
```

## 🧾 Sample Activity Creation (Postman)
```
POST /api/activities
{
  "title": "Chess Tournament",
  "description": "City-wide event",
  "location": "Community Hall",
  "date": "2025-05-10",
  "time": "18:00"
}
```

## 📌 Sample Activity Booking (Postman)
```
POST /api/book/<activityId>
Headers:
Authorization: Bearer <your_jwt_token>
```

## 📖 View Booked Activities (Postman)
```
GET /api/my-bookings
Headers:
Authorization: Bearer <your_jwt_token>
```

This returns a list of bookings along with detailed activity information that the user has registered for.

---

## 🌐 Deployment

You can deploy this on platforms like:

- [Render](https://render.com)
- [Cyclic](https://www.cyclic.sh/)

> Remember to add your environment variables on the deployment dashboard.

---

## 👤 Author

**Rachit** – Backend Developer Intern Assignment

---

## 📄 License

MIT License — Feel free to use and modify.
