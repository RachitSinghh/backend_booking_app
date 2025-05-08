const express = require('express'); 
const router = express.Router(); 
const { bookActivity, getMyBookings } = require('../controllers/bookingController.js'); 
const protect = require('../middlewares/authMiddleware.js'); 


// @route POST /api/book/:activityId
router.post('/book/:activityId', protect, bookActivity); 


// @route GET /api/my-bookings

router.get('/my-bookings', protect, getMyBookings);


module.exports = router; 

