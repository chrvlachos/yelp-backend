const Tag = require('../models/Tag');

const getTags = async (req, res, next) => {
    try {
        const tags = await Tag.find();
        res.json({ success: true, mes: 'show all tags', data: tags })
    } catch(err) {
        next(err)
    }
  }
  const getTag = async (req, res, next) => {
    try {
        const {id} = req.params;
        const tags = await Tag.find();
        res.json({ success: true, mes: 'show the tags', data: tags })
    } catch(err) {
        next(err)
    }
  }
const createTag = async (req, res, next) => {
    try {
        const { Name } = req.body;
        const tags = await Tag.create({ Name });
        res.json({ success: true, msg: 'entered new tag', data: tags })
    } catch(err) {
        next(err)
    }
}  
  module.exports = {
    getTags,
    getTag,
    createTag
}