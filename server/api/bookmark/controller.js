var bookmark = require('./model');

exports.index = function(req, res) {
    bookmark.find(function(err, bookmarks) {
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
        "title": newBookmarkName,
        "created": newBookmarkAddress
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

