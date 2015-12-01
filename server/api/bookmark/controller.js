var bookmark = require('./model');

exports.index = function(req, res) {
    console.log('get all api');
    res.send('hello world');
};

exports.show = function(req, res) {
    console.log('get one api');
};

exports.create = function(req, res) {
    console.log('post api');
};

exports.remove = function(req, res) {
    console.log('delete api');
};

