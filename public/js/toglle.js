$(document).ready(function () {
    $("#type").on('change', function () {
        $(".data").hide();
        $("#" + $(this).val()).fadeIn(700)
        // alert($(this).val());
    }).change();
});