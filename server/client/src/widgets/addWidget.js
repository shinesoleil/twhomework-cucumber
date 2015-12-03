function addWidget() {
    $( "#addButton" )
        .button()
        .click(function() {
            var addDialogHtml = '<div id="dialog-add" title="Add Bookmark">' +
                '<form> ' +
                '<label for="newBookmarkName">Name</label> ' +
                '<input type="text" name="name" id="newBookmarkName" class="text ui-widget-content ui-corner-all"> ' +
                '<label for="newBookmarkAddress">Address</label> ' +
                '<input type="text" name="address" id="newBookmarkAddress" class="text ui-widget-content ui-corner-all"> ' +
                '</form> ' +
                '</div>';
            $(addDialogHtml).appendTo(document.body);

            $("#dialog-add").dialog({
                buttons: [
                    {
                        text:"Add",
                        click: function() {
                            var newBookmarkName = $("#newBookmarkName").val();
                            var newBookmarkAddress = $("#newBookmarkAddress").val();
                            $.post("http://localhost:8080/api/bookmarks" + "?name=" + newBookmarkName + "&address=" + newBookmarkAddress
                                , function(data) {
                                    renderPage();
                                });
                            $(this).remove();  //bug
                        }
                    }
                ]
            });
            event.preventDefault(); //???
    });


}

