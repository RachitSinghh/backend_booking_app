const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  user:{
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User', 
    required: true,
  },
  activity:{
    type: mongoose.Schema.Types.ObjectId,
    ref:'Activity', 
    required: true, 
  }, 
  bookedAt:{
    type: Date, 
    default: Date.now,
  }, 
  status:{
    type:String, 
    enum: ['booked', 'cancelled', 'completed'],
    default: 'booked'
    /*
      - when a user cancels, update the status to "cancelled" ( instead of deleting)
      - Use "Completed" for past events (cron job or on retrival logic)
      - Let users see upcoming vs past vs cancelled bookings
     */
  }
}, {timestamps: true});

module.exports = mongoose.model('Booking', bookingSchema);

