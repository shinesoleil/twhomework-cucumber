function renderArticle(name, address, _id) {
    $("#content")
        .append('<div class="bookmark">' +
        '<span class="bookmarkName">' + name + '</span>' +
        '<span class="bookmarkAddress">' + address + '</span>' +
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