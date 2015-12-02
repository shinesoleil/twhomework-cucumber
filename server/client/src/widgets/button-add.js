$(function() {
    $( "#addButton" )
        .button()
        .click(function( event ) {
            $("#dialog-add").dialog("open");
            event.preventDefault();
        });
});