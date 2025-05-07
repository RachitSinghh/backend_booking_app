const Activity = require("../models/Activity.js");

exports.getActivities = async (req, res) => {
  try {
    const activities = await Activity.find({});
    res.json(activities);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
