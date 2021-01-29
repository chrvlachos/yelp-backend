const Restaurant = require('../models/Restaurant');

const getRestaurants = async (req, res, next) => {
    try {
        const restaurants = await Restaurant.find().populate('City_id tags');
        res.json({ success: true, mes: 'show all restaurants', data: restaurants })
    } catch(err) {
        next(err)
    }
  }
const getRestaurant = async (req, res, next) => {
    try {
        const {id} = req.params;
        const restaurants = await Restaurant.findById(id);
        res.json({ success: true, mes: 'show the restaurant', data: restaurants })
    } catch(err) {
        next(err)
    }
  }

const createRestaurant = async (req, res, next) => {
    try {
        const { Name, Description, Picture, City_id, tags } = req.body;
        const restaurants = await Restaurant.create({ Name, Description, Picture, City_id, tags  });
        res.json({ success: true, msg: 'entered new restaurant', data: restaurants })
    } catch(err) {
        next(err)
    }
}  
  module.exports = {
    getRestaurants,
    getRestaurant,
    createRestaurant
}