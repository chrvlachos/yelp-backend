const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
    Text: {
        type: String,
    },
    Date: {
        type: Date,
    },
});

//collection named 
module.exports = mongoose.model('Comment', CommentSchema);