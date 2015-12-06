var bookmark = require('./model');

exports.bookmarkNumber = function(req, res) {
    var textToBeSearched = req.query.text;
    var searchCondition;
    if(textToBeSearched == undefined || textToBeSearched == "undefined") {
        searchCondition = {}
    }
    else {
        searchCondition = {name: new RegExp(textToBeSearched, 'i')}
    }
    bookmark.find(searchCondition, function(err, bookmarks) {
        if(err) {
            console.error(err);
        }
        console.log(bookmarks.length);
        res.json({"bookmarkNumber": bookmarks.length});
    });
};

exports.index = function(req, res) {
    var page = req.query.page;
    var textToBeSearched = req.query.text;
    var searchCondition;
    if(textToBeSearched == undefined || textToBeSearched == "undefined") {
        searchCondition = {}
    }
    else {
        searchCondition = {name: new RegExp(textToBeSearched, 'i')}
    }
    bookmark.find(searchCondition, null, {skip: (page-1)*10, limit: 10},function(err, bookmarks) {
        if(err) {
            console.error(err);
        }
        res.json(bookmarks);
    });
};

exports.insert = function(req, res) {
    var newBookmarkName = req.query.name;
    var newBookmarkAddress = req.query.address;
    var newBookmark = {
        "name": newBookmarkName,
        "address": newBookmarkAddress
    };
    console.log(newBookmark);
    bookmark.create(newBookmark, function(err, bookmarks) {
        if(err) {
            console.error(err);
        }
        res.send('new bookmark added.');
    });
};

exports.remove = function(req, res) {
    var _idBookmarkToBeDeleted = req.query._id;
    console.log(_idBookmarkToBeDeleted);
    bookmark.remove({_id: _idBookmarkToBeDeleted}, function(err, bookmarks) {
        if(err) {
            console.error(err);
        }
        res.send('bookmark deleted');
    });
};

