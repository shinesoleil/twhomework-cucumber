function searchBox() {
    //"change keyup paste --> keyup paste"
    $("#input").on("keyup paste",function() {
        refresh($(this).val());
    });
}