const express = require('express');
const { 
  getCities,
  createCity,
  getCity
} =require('../controllers/cities');

const router = express.Router();

router
  .route('/cities')
  .get(getCities)
  .post(createCity)

  router
  .route('/cities/:id')
  .get(getCity)
  


module.exports = router;
