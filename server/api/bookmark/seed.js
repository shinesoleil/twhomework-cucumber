var bookmark = require('./model');

var bookmarkSeed = require('./bookmarks.json');

bookmark.remove(function(err, bookmarks) {
    if(err) {
        return console.error(err);
    }
    bookmark.create(bookmarkSeed);
});
