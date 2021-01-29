const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RestaurantTagSchema = new Schema({
    Restaurant_id: {
        type: mongoose.Schema.ObjectId, ref: 'Restaurant'
    },
    Tag_id: {
        type: mongoose.Schema.ObjectId, ref: 'Tag'
    },
});

//collection named 
module.exports = mongoose.model('Restag', RestaurantTagSchema);