const express = require('express'); 
const router = express.Router(); 
const { bookActivity } = require('../controllers/bookingController.js'); 
const protect = require('../middlewares/authMiddleware.js'); 

router.post('/book/:activityId', protect, bookActivity); 

module.exports = router; 

