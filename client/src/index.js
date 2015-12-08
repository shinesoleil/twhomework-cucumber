function refresh(text) {
    var searchUrl;
    $.getJSON('http://localhost:8080/api/bookmarks/number?text=' + text, function(data) {
        var bookmarkNumber = data.bookmarkNumber;
        $("#page")
            .html('')
            .append('<div class="pagination"> ' +
            '<a href="#" class="first" data-action="first">&laquo;</a> ' +
            '<a href="#" class="previous" data-action="previous">&lsaquo;</a> ' +
            '<input type="text" readonly="readonly" data-max-page="' + (parseInt((bookmarkNumber-1)/10)+1) +'" /> ' +
            '<a href="#" class="next" data-action="next">&rsaquo;</a> ' +
            '<a href="#" class="last" data-action="last">&raquo;</a> ' +
            '</div>');

        $('#resultNumber').remove();
        $("#inputDiv").append('<span id="resultNumber">' + bookmarkNumber + ' bookmarks found</span>');

        $.getJSON('http://localhost:8080/api/bookmarks?text=' + text + '&page=1', function(data) {
            var bookmarks = data;
            $("#content").html("");
            renderList(bookmarks);
        });

        $('.pagination').jqPagination({
            paged: function(page) {
                $.getJSON('http://localhost:8080/api/bookmarks?text=' + text +'&page=' + page, function(data) {
                    var bookmarks = data;
                    $("#content").html("");
                    renderList(bookmarks);
                })
            }
        });
    });
}

refresh();
searchBox();
addWidget();