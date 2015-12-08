function refresh(text) {
    var searchUrl;
    $.getJSON("http://localhost:8080/api/bookmarks/number?text=" + text, function(data) {
        var bookmarkNumber = data.bookmarkNumber;
        console.log(bookmarkNumber);
        $("#page")
            .html('')
            .append('<div class="pagination"> ' +
            '<a href="#" class="first" data-action="first">&laquo;</a> ' +
            '<a href="#" class="previous" data-action="previous">&lsaquo;</a> ' +
            '<input type="text" readonly="readonly" data-max-page="' + (parseInt((bookmarkNumber-1)/10)+1) +'" /> ' +
            '<a href="#" class="next" data-action="next">&rsaquo;</a> ' +
            '<a href="#" class="last" data-action="last">&raquo;</a> ' +
            '</div>');

        $.getJSON("http://localhost:8080/api/bookmarks?text=" + text +"&page=1", function(data) {
            var bookmarks = data;
            $("#content").html("");
            renderList(bookmarks);
        });

        $('.pagination').jqPagination({
            paged: function(page) {
                // do something with the page variable
                $.getJSON("http://localhost:8080/api/bookmarks?text=" + text +"&page=" + page, function(data) {
                    var bookmarks = data;
                    $("#content").html("");
                    renderList(bookmarks);
                })
            }
        });
    });
}

function searchBox() {
    $("#input").on("change keyup paste",function() {
        refresh($(this).val());
    });
}


refresh();

addWidget();
searchBox();