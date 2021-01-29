const express = require('express');
const { 
  getRestaurants,
  createRestaurant
} =require('../controllers/restaurants');

const router = express.Router();

router
  .route('/restaurants')
  .get(getRestaurants)
router
  .route('/restaurants/post')
  .post(createRestaurant)

module.exports = router;
