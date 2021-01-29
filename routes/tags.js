const express = require('express');
const { 
  getTags,
  createTag
} =require('../controllers/tags');

const router = express.Router();

router
  .route('/tags')
  .get(getTags)
router
   .route('/tags/post')
   .post(createTag)

module.exports = router;
