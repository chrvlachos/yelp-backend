const Comment = require('../models/Comment');

const getComments = async (req, res, next) => {
    try {
        const comments = await Comment.find();
        res.json({ success: true, mes: 'show all comments', data: comments })
    } catch(err) {
        next(err)
    }
  }

  module.exports = {
    getComments
  }