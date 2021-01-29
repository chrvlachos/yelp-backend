const express = require('express');
const { 
  getTags,
  getTag,
  createTag
} =require('../controllers/tags');

const router = express.Router();

router
  .route('/tags')
  .get(getTags)
  .post(createTag)
router
   .route('/tags/post')
   .get(getTag)

module.exports = router;
