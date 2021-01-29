const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RestaurantTagSchema = new Schema({
    Id_restaurant: {
        type: String,
    },
    Id_tag: {
        type: String,
    },
});

//collection named 
module.exports = mongoose.model('RestaurantTag', RestaurantTagSchema);