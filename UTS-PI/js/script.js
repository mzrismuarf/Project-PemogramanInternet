$(document).ready(function () {
    $('#autoWidth').MizarIsmuArief_lightSlider({
        autoWidth: true,
        loop: true,
        onSliderLoad: function () {
            $('#autoWidth').removeClass('MizarIsmuArief_cS-hidden');
        }
    });
});