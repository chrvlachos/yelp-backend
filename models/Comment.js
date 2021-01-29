const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
    Text: {
        type: String,
    },
    Date: {
        type: Date,
    },
    Restaurant_id: {
        type: mongoose.Schema.ObjectId, ref: 'Restaurant'
    }
});

//collection named 
module.exports = mongoose.model('Comment', CommentSchema);