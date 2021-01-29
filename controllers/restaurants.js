const Restaurant = require('../models/Restaurant');

const getRestaurants = async (req, res, next) => {
    try {
        const restaurants = await Restaurant.find();
        res.json({ success: true, mes: 'show all restaurants', data: restaurants })
    } catch(err) {
        next(err)
    }
  }

  module.exports = {
    getRestaurants
}