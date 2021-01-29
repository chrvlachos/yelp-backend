const City = require('../models/City');

const getCities = async (req, res, next) => {
    try {
        const cities = await City.find();
        res.json({ success: true, mes: 'show all cities', data: cities })
    } catch(err) {
        next(err)
    }
  }

  const getCity = async (req, res, next) => {
    try {
        const {id} = req.params;
        const city = await City.findById(id);
        res.json({ success: true, mes: 'show the city', data: city })
    } catch(err) {
        next(err)
    }
  }
const createCity = async (req, res, next) => {
    try {
        const { Name } = req.body;
        const city = await City.create({ Name });
        res.json({ success: true, msg: 'entered new city', data: city })
    } catch(err) {
        next(err)
    }
}  
  module.exports = {
    getCities,
    getCity,
    createCity
}




