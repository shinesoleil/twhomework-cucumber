function renderArticle(title, time, _id) {
    $("#content")
        .append('<div class="bookmark">' +
        '<p class="phrase">' + title + '</p>' +
        '<span class="timestamp">Created @ ' + time + '</span>' +
        '<input id=' + _id + ' class="deleteButton" type="button" value="Delete">' +
        '</div>' +
        '<hr>');
}

function renderList(bookmarks) {
    bookmarks.forEach(function(element) {
        renderArticle(element.title, convertTime(element.created + "000"), element._id);
    });
    var defered = $.Deferred();
    defered
        .done($("#input").val(""))
        .done(deleteWidget());
}