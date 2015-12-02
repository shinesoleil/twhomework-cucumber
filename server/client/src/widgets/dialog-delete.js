$(function() {
    $("#dialog-delete").dialog({
        buttons: [
            {
                text:"Yes",
                click: function() {
                    $(this).dialog("close");
                }
            },
            {
                text:"No",
                click: function() {
                    $(this).dialog("close");
                }
            }
        ]
    });
    $("#dialog-delete").dialog("close");
});