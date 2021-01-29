const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CitySchema = new Schema({
    Name: {
        type: String,
    },
});

//collection named 
module.exports = mongoose.model('City', CitySchema);