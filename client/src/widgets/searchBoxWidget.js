function searchBox() {
    $("#input").on("change keyup paste",function() {
        refresh($(this).val());
    });
}