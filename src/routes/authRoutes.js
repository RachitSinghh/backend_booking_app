const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const{registerUser, loginUser} = require('../controllers/authController.js');

const protect = require('../middlewares/authMiddleware.js');

router.get('/me',protect, (req,res) =>{
  res.json(req.user);
})

router.post('/register',[
  body('name').notEmpty().withMessage('Name is required'),
  body('email').isEmail().withMessage('Valid email required'),
  body('phone').notEmpty().withMessage('Phone number required'),
  body('password').isLength({ min: 6}).withMessage('Password must be at least 6 characters'),
], registerUser);


router.post('/login',[
  body('email').isEmail().withMessage('Valid email is required'),
  body('password').notEmpty().withMessage('Password is required')
],   loginUser);

module.exports = router; 

