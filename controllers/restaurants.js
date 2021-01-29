const Restaurant = require('../models/Restaurant');

const getRestaurants = async (req, res, next) => {
    try {
        const restaurants = await Restaurant.find();
        res.json({ success: true, mes: 'show all restaurants', data: restaurants })
    } catch(err) {
        next(err)
    }
  }
const createRestaurant = async (req, res, next) => {
    try {
        const { Name, Description, Picture, City_id } = req.body;
        const restaurants = await Restaurant.create({ Name, Description, Picture, City_id  });
        res.json({ success: true, msg: 'entered new restaurant', data: restaurants })
    } catch(err) {
        next(err)
    }
}  
  module.exports = {
    getRestaurants,
    createRestaurant
}