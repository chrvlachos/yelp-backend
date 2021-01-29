const express = require('express');
const { 
  getRestaurants,
  getRestaurant,
  createRestaurant
} =require('../controllers/restaurants');

const router = express.Router();

router
  .route('/restaurants')
  .get(getRestaurants)
  .post(createRestaurant)
router
  .route('/restaurants/:id')
  .get(getRestaurant)

module.exports = router;
