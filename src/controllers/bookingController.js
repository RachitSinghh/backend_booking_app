const Booking = require("../models/Booking.js");
const Activity = require("../models/Activity.js");

exports.bookActivity = async (req, res) => {
  if (!req.user || !req.user._id) {
    return res.status(401).json({ message: "Unauthorized: user not found" });
  }
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

exports.getMyBookings = async (req, res) => {
  try {
    const userId = req.user._id; // id of the currently logged-in user(added by authMiddleware)

    // Find all bookings where user = current user
    const bookings = await require("../models/Booking.js")
      .find({ user: userId })
      .populate("activity"); // pull full activity details

    res.status(200).json(bookings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.cancelBooking = async (req, res) => {
  try {
    const userId = req.user._id;
    const { activityId } = req.params;

    const booking = await Booking.findOneAndDelete({
      user: userId,
      activity: activityId,
    });

    if (!booking) {
      return res
        .status(404)
        .json({ message: "No booking found for this activity" });
    }
    res.status(200).json({ message: "Booking cancelled successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
