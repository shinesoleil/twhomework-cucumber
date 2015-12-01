var express = require('express');
var mongoose = require('mongoose');

//connect to MongoDB
mongoose.connect('mongodb://localhost/bookmarks');
mongoose.connection.on('error', console.error.bind(console, 'connection error:'));

//TODO: populate database with bookmarks.json
require('./api/bookmark/seed');

//setup server
var app = express();
var server = require('http').createServer(app);
require('./routes')(app);

//start server
server.listen(8080, function() {
    console.log('server listening on port 8080');
});