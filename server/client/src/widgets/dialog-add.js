$(function() {
    $("#dialog-add").dialog({
        buttons: [
            {
                text:"Add",
                click: function() {
                    var newBookmarkName = $("#newBookmarkName").val();
                    var newBookmarkAddress = $("#newBookmarkAddress").val();
                    $.post("http://localhost:8080/api/bookmarks" + "?name=" + newBookmarkName + "&address=" + newBookmarkAddress
                        , function(data) {

                    });
                    console.log(newBookmarkAddress);
                    $(this).dialog("close");
                }
            }
        ]
    });
    $("#dialog-add").dialog("close");
});