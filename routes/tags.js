const express = require('express');
const { 
  getTags
} =require('../controllers/tags');

const router = express.Router();

router
  .route('/tags')
  .get(getTags)


module.exports = router;
