const express = require('express'); 
const router = express.Router(); 
const { bookActivity, getMyBookings } = require('../controllers/bookingController.js'); 
const { cancelBooking } = require('../controllers/bookingController.js');
const protect = require('../middlewares/authMiddleware.js'); 


// @route POST /api/book/:activityId
router.post('/book/:activityId', protect, bookActivity); 


// @route GET /api/my-bookings

router.get('/my-bookings', protect, getMyBookings);
router.delete('/book/:activityId', protect, cancelBooking);


module.exports = router; 

