const express = require('express');
const router = express.Router();
const { getActivities } = require('../controllers/activityController');
const Activity = require('../models/Activity.js');

// get all activities (PUBLIC);
router.get('/', getActivities);

// Temporary create new acitivity (for testing only);

router.post('/',async(req,res) =>{
  try{
    const acitivity = await Activity.create(req.body);
    res.status(201).json(acitivity);
  }catch(err){
    res.status(400).json({message: err.message});
  }
});


module.exports = router; 
