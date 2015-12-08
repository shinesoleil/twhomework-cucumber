function renderArticle(name, address, _id) {
    $("#content")
        .append('<div class="bookmark">' +
        '<p class="phrase">' + name + '</p>' +
        '<span class="timestamp">' + address + '</span>' +
        '<input id=' + _id + ' class="deleteButton" type="button" value="Delete">' +
        '</div>' +
        '<hr>');
}

function renderList(bookmarks) {
    bookmarks.forEach(function(element) {
        renderArticle(element.name, element.address, element._id);
    });
    var defered = $.Deferred();
    defered.done(deleteWidget());
}