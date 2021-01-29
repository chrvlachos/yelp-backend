const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RestaurantSchema = new Schema({
    Name: {
        type: String,
    },
    Description: {
        type: String,
    },
    Picture: {
        type: String,
    },
    City_id: {
        type: mongoose.Schema.ObjectId, ref: 'City'
    },
});


//collection named 
module.exports = mongoose.model('Restaurant', RestaurantSchema);

