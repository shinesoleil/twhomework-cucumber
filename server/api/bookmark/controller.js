var bookmark = require('./model');

exports.index = function(req, res) {
    bookmark.find(function(err, bookmarks) {
        if(err) {
            console.error(err);
        }
        res.send(bookmarks);
    });
};

exports.insert = function(req, res) {
    var newBookmark = req.body;
    bookmark.create(newBookmark, function(err, bookmarks) {
        if(err) {
            console.error(err);
        }
        res.send('new bookmark added.');
    });
};

exports.remove = function(req, res) {
    var _idBookmarkToBeDeleted = req.params.id;
    bookmark.remove({_id: _idBookmarkToBeDeleted}, function(err, bookmarks) {
        if(err) {
            console.error(err);
        }
        res.send('bookmark deleted');
    });
};

