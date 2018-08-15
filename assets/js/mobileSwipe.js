$(document).ready(function () {
    //references load carousel on load
    var desktop = $('.desktop-carousel'),
        mobile = $('.mobile-carousel'),
        viewportWidth = $(window).width();

    if (viewportWidth < 767.98) {
        mobile.show();
        mobile.find('.first-item').addClass('active');

        $('.carousel').bcSwipe({ threshold: 50 });

    } else {
        desktop.show();
        desktop.find('.first-item').addClass('active');
    }
})