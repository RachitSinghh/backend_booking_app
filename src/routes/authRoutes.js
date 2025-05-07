const express = require('express');
const router = express.Router();
const{registerUser, loginUser} = require('../controllers/authController.js');

const protect = require('../middlewares/authMiddleware.js');

router.get('/me',protect, (req,res) =>{
  res.json(req.user);
})

router.post('/register', registerUser);
router.post('/login', loginUser);

module.exports = router; 

