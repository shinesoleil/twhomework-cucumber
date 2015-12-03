function renderPage() {
    $.getJSON("http://localhost:8080/api/bookmarks", function(data) {
        var bookmarks = data;
        console.log(data);
        renderList(bookmarks);
        filterBookmarks(bookmarks);
    });
}

renderPage();

addWidget();