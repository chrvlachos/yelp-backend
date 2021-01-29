const Restag = require('../models/RestaurantTag');

const getRestaurantTags = async (req, res, next) => {
    try {
        const restags = await Restag.find();
        res.json({ success: true, mes: 'show all restaurant tags', data: restags })
    } catch(err) {
        next(err)
    }
  }
const createRestaurantTags = async (req, res, next) => {
    try {
        const { Restaurant_id, Tag_id } = req.body;
        const restags = await Restag.create({ Restaurant_id, Tag_id });
        res.json({ success: true, msg: 'entered new restaurant tag', data: restags })
    } catch(err) {
        next(err)
    }
}  
  module.exports = {
    getRestaurantTags,
    createRestaurantTags
}