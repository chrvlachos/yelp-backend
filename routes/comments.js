const express = require('express');
const { 
  getComments
} =require('../controllers/comments');

const router = express.Router();

router
  .route('/comments')
  .get(getComments)


module.exports = router;
