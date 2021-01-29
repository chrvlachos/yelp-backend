const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RestaurantSchema = new Schema({
    Name: {
        type: String,
    },
    City_id: {
        type: mongoose.Schema.ObjectId,
    },
    Comment_id: {
        type: mongoose.Schema.ObjectId,
    }
});

//collection named 
module.exports = mongoose.model('Restaurant', RestaurantSchema);