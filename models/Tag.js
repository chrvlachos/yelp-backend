const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TagSchema = new Schema({
    Name: {
        type: String,
    },
});

//collection named 
module.exports = mongoose.model('Tag', TagSchema);