var mongoose = require('mongoose');

var bookmarkSchema = mongoose.Schema({
    name: String,
    address: String
});

module.exports = mongoose.model('bookmark', bookmarkSchema);