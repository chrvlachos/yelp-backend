const express = require('express');
const { 
  getComments,
  createComment
} =require('../controllers/comments');

const router = express.Router();

router
  .route('/comments')
  .get(getComments)

router
  .route('/comments/post')
  .post(createComment)

module.exports = router;
