var express = require('express');

module.exports = function(app) {
    app.use('/api/bookmarks', require('./api/bookmark/index'));
};