const express = require('express');
const { 
  getRestaurantTags,
  createRestaurantTags
} =require('../controllers/restaurantTags');

const router = express.Router();

router
  .route('/restags')
  .get(getRestaurantTags)
router
   .route('/restags/post')
   .post(createRestaurantTags)

module.exports = router;
