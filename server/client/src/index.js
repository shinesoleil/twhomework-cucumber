$.getJSON("http://localhost:8080/api/bookmarks", function(data) {
    var bookmarks = data;

    renderList(bookmarks);
    filterBookmarks(bookmarks);
});