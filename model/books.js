const mongoose = require('mongoose');

const BookSchema = mongoose.Schema({   
    bookName: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true        
    },
    author: {
        type: String,
        required: true       
    },
    pubYear: {
        type: Number       
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('book', BookSchema);