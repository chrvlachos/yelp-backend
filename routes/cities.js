const express = require('express');
const { 
  getCities,
  createCity
} =require('../controllers/cities');

const router = express.Router();

router
  .route('/cities')
  .get(getCities)
router
  .route('/cities/post')
  .post(createCity)


module.exports = router;
