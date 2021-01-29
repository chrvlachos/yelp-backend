const Tag = require('../models/Tag');

const getTags = async (req, res, next) => {
    try {
        const tags = await Tag.find();
        res.json({ success: true, mes: 'show all tags', data: tags })
    } catch(err) {
        next(err)
    }
  }

  module.exports = {
    getTags
}