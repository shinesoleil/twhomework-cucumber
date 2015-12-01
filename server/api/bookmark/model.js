var mongoose = require('mongoose');

var bookmarkSchema = mongoose.Schema({
    title: String,
    created: String
});

module.exports = mongoose.model('bookmark', bookmarkSchema);