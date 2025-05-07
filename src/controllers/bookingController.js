const Booking = require("../models/Booking.js");
const Activity = require("../models/Activity.js");

exports.bookActivity = async (req, res) => {
  const userId = req.user._id;
  const { activityId } = req.params;

  try {
    // check if activity exists
    const activity = await Activity.findById(activityId);
    if (!activity) {
      return res.status(404).json({ message: "Activity not found" });
    }

    // Prevent double booking
    const exisitingBooking = await Booking.findOne({
      user: userId,
      activity: activityId,
    });

    if (exisitingBooking) {
      return res
        .status(400)
        .json({ message: "You have already booked this activity" });
    }

    // create booking
    const booking = await Booking.create({
      user: userId,
      activity: activityId,
    });

    res.status(201).json({ message: "Booking successful", booking });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
