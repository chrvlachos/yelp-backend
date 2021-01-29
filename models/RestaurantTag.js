const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RestaurantTagSchema = new Schema({
    Id_restaurant: {
        type: mongoose.Schema.ObjectId,
    },
    Id_tag: {
        type: mongoose.Schema.ObjectId,
    },
});

//collection named 
module.exports = mongoose.model('Restaurant_Tag', RestaurantTagSchema);