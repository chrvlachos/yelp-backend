const Comment = require('../models/Comment');

const getComments = async (req, res, next) => {
    try {
        const comments = await Comment.find();
        res.json({ success: true, mes: 'show all comments', data: comments })
    } catch(err) {
        next(err)
    }
  }
const createComment = async (req, res, next) => {
    try {
        const { Text, Date } = req.body;
        const comments = await Comment.create({ Text, Date });
        res.json({ success: true, msg: 'entered new comment', data: comments })
    } catch(err) {
        next(err)
    }
}  
  module.exports = {
    getComments,
    createComment
  }