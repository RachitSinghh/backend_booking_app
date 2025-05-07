const express = require("express");
const cors = require("cors");
const authRoutes = require("./src/routes/authRoutes.js");
const activityRoutes = require("./src/routes/activityRoutes.js");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/activities", activityRoutes);
app.get("/", (req, res) => {
  res.send("API is running...");
});

module.exports = app;