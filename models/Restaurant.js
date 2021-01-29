const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RestaurantSchema = new Schema({
    Name: {
        type: String,
    },
    City_id: {
        type: String,
    },
});

//collection named 
module.exports = mongoose.model('Restaurant', RestaurantSchema);