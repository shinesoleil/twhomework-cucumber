var express = require('express');
var bodyParser = require('body-parser');

module.exports = function(app) {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({
        extended:true
    }));
    app.use('/api/bookmarks', require('./api/bookmark/index'));
};