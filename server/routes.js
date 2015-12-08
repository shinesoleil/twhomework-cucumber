var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

module.exports = function(app) {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({
        extended:true
    }));

    app.use(express.static(__dirname + '/../client'));

    app.use('/page', function(req, res) {
       res.sendFile(path.join(__dirname + '/../client/index.html'));
    });
    app.use('/api/bookmarks', require('./api/bookmark/index'));
};