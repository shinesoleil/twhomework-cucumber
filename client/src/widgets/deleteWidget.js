function deleteWidget() {
    $(".deleteButton")
        .button()
        .click(function() {
            var _idBookmarkToBeDeleted = $(this).attr("id");
            var deleteDialogHtml = '<div id="dialog-delete" title="Delete Bookmark"> ' +
                '<p>Are you sure?</p> ' +
                '</div>';

            $(deleteDialogHtml).appendTo(document.body);

            $("#dialog-delete").dialog({
                close: function() {
                    $(this).remove();
                },
                buttons: [
                    {
                        text:"Yes",
                        id: "deleteConfirmButton",
                        click: function() {
                            $.ajax({
                                url: "http://localhost:8080/api/bookmarks" + "?_id=" + _idBookmarkToBeDeleted,
                                type: 'DELETE',
                                success: function(data) {
                                    refresh();
                                }
                            });
                            $(this).remove();
                        }
                    },
                    {
                        text:"No",
                        click: function() {
                            $(this).remove();
                        }
                    }
                ]
            });
    });
}
