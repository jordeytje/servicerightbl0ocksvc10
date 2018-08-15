// TODO JORDEY: NOTE TO MYSELF, BEFORE GOING LIVE OR CONSIDERING THIS DONE CLEAN THIS UP AND MINIFY IT FOR BEST PERFORMANCE
$(document).ready(function () {

    $('[data-toggle="popover"]').popover();

    $('.popover-trigger').on('click', function (e) {
        if ( $(this).hasClass('popover-open') ) {
            $(this).removeClass('popover-open');
            $('.popover-trigger').popover('hide');
        } else {
            $(this).addClass('popover-open');
            $('.popover-trigger').popover('show');
        }

        $('.popover-trigger').not(this).popover('hide');
    });

    // FAQ dropdown
    $('.faq #collapseOne, .faq #collapseTwo, .faq #collapseThree, .faq #collapseFour, .faq #collapseFive, .faq #collapseSix').on('show.bs.collapse', function () {
        var _this = $(this);
        _this.parent().find('.more-button').toggleClass('minus-icon');
    });

    $('.faq #collapseOne, .faq #collapseTwo, .faq #collapseThree, .faq #collapseFour, .faq #collapseFive, .faq #collapseSix').on('hide.bs.collapse', function () {
        var _this = $(this);
        _this.parent().find('.more-button').toggleClass('minus-icon');
    });

    // sticky header
    var headerHeight = $('.fixed-nav').height();
    $('.header-banner').css('margin-top', headerHeight);

    // serviceright equal boxes
    var addressTitle = $(".serviceright-garages .list .card .location-details");
        // addressContent = $(".serviceright-garages .list .card .location-details");
    equalizeHeights(addressTitle);
    // equalizeHeights(addressContent);

    // car maintenance equal boxes
    var carMaintenanceTitle = $(".car-maintenance .card .card-body .card-title"),
        carMaintenanceContent = $(".car-maintenance .card .card-body .card-text");
    equalizeHeights(carMaintenanceTitle);
    equalizeHeights(carMaintenanceContent);

    // more for you car equal boxes
    var moreForYourCarTitle = $(".more-for-your-car .card .card-body .card-title"),
        moreForYourCarContent = $(".more-for-your-car .card .card-body .card-text");
    equalizeHeights(moreForYourCarTitle);
    equalizeHeights(moreForYourCarContent);

    // serviceright garages by city
    var titleWidth = $('.serviceright-garage-by-city .title h2 span').width(),
        filter = $('.serviceright-garage-by-city .filter');

    filter.css('max-width', titleWidth + 'px');

    // HEADER

    // deze zit er nog steeds in omdat bootstrap geen switch hiervoor heeft (for so far as i know)
    $(window).scroll(function(){
        var sticky = $('.fixed-nav'),
            scroll = $(window).scrollTop();

        if ( scroll >= 10 && !$('.header-banner .container .row .licenseplate-box .licenseplate').visible(true) ) {
            sticky.addClass('navbar-fixed');

            if ( $('.fixed-nav .contact-details').hasClass("open") ) {
                $('.fixed-nav .contact-details').hide();
                $('.fixed-nav .contact-details').removeClass('open');
            }
        }
        else {
            var toggle = $('.fixed-nav .toggle-contact-details');

            if ( toggle.hasClass('open') ) {
                toggle.hide().removeClass("open");
            }

            sticky.removeClass('navbar-fixed');
        }
    });

   // main menu desktop and mobile
    $('.nav-button').on('click', function() {

        var fixed_nav = $('.header .fixed-nav');

        if (fixed_nav.find('.contact-details').hasClass('open-call-details') ) {
            fixed_nav.find('.contact-details').removeClass('open-call-details');
            fixed_nav.find('.contact-details').slideToggle('fast');
        }

        if ( $('.fixed-nav .contact-details').hasClass("open") ) {
            $('.fixed-nav .contact-details').hide();
            $('.fixed-nav .contact-details').removeClass('open');
        }

        var toggle = $('.fixed-nav .toggle-contact-details');

        if ( toggle.hasClass('open') ) {
            toggle.hide().removeClass("open");
        }

        if ( $('.navbar-parent .main-menu-items').hasClass('open') ) {
            $('.navbar-parent .main-menu-items').slideToggle('fast').removeClass('open');
        } else {
            $('.navbar-parent .main-menu-items').slideToggle('fast').addClass('open');
        }

        $(this).find('i').toggleClass('fa-times fa-bars')
    });

    // submenus
    $('.main-menu-items .submenu-parent').on('click', function() {
        var _this = $(this);

        if ( $('.submenu-parent').hasClass('submenu-open') ) {
            $('.submenu-open .submenu').hide();
            $('.submenu-open').removeClass('submenu-open');
        } else {
            _this.addClass('submenu-open').find('.submenu').show();
        }
    });

    // header licenseplate submit button
    $('.header-banner .licenseplate, #licenseplate-mobile .licenseplate').on('input',function(){
        var input = $(this).val();

        if ( $(this).closest('.header-banner').hasClass('alternative-3') ) {
            // without service dropdown
            if (input.length >= 6 && input.length <= 8) {
                $(this).addClass('licenseplate-input');
                $('.header-banner .submit-licenseplate').addClass('highlighted');
            } else {
                $(this).removeClass('licenseplate-input');
                $('.header-banner .submit-licenseplate').removeClass('highlighted');
            }
        } else if ( $(this).closest('.modal').hasClass('licenseplate-mobile') ) {
            // mobile popup
            var _this = $(this);

            if (input.length >= 6 && input.length <= 8) {
                _this.addClass('licenseplate-input');
                _this.parent().parent().find('.select-service').addClass('highlighted');
            } else {
                _this.removeClass('licenseplate-input');
                _this.parent().parent().find('.select-service').removeClass('highlighted');
                _this.parent().parent().find('.submit-licenseplate').removeClass('highlighted');
            }
        } else {
            // with service dropdown
            if (input.length >= 6 && input.length <= 8) {
                $(this).addClass('licenseplate-input');
                // $('#licenseplate-mobile .submit-licenseplate').addClass('highlighted');
                $('.header-banner .select-service').addClass('highlighted');
            } else {
                $(this).removeClass('licenseplate-input');
                // $('#licenseplate-mobile .submit-licenseplate').removeClass('highlighted');
                $('.header-banner .submit-licenseplate').removeClass('highlighted');
                $('.header-banner .select-service').removeClass('highlighted');
            }
        }
    });

    // fixednav licenseplate
    $('.fixed-nav .licenseplate input').on('input', function(){
        var input = $(this).val();

        if (input.length >= 6 && input.length <= 8) {
            $(this).addClass('licenseplate-input');
            $('.navbar-fixed .submit-licenseplate').addClass('highlighted');
        } else {
            $(this).removeClass('licenseplate-input');
            $('.navbar-fixed .submit-licenseplate').removeClass('highlighted');
        }
    });

    // header licenseplate select submit button
    $('.select-service #service, #licenseplate-mobile .select-service #service').on('change',function(){
        var input = $(this).val(),
            _this = $(this);

        if ( $(this).closest('.modal').hasClass('licenseplate-mobile') ) {
            _this.parent().parent().find('.submit-licenseplate').adddClass('highlighted');
        } else {
            if ( input ) {
                $('.header-banner .submit-licenseplate').addClass('highlighted');
            } else {
                $('.header-banner .submit-licenseplate').removeClass('highlighted');
            }
        }
    });

    // sticky menu phone details
    $('.header .contact .icon').on('click', function() {
        var fixed_nav = $('.fixed-nav'),
            navbar_fixed = $('.navbar-fixed'),
            viewportWidth = $(window).width();

        if (fixed_nav.hasClass('navbar-fixed')) {
            // sticky
            if (viewportWidth > 576) {
                $('.fixed-nav .toggle-contact-details').slideToggle('fast').toggleClass("open");

                if ( $('.navbar-parent .main-menu-items').hasClass('open') ) {
                    $('.navbar-parent .main-menu-items').removeClass('open');
                    $('.navbar-parent .main-menu-items').slideToggle('fast');
                    $('.nav-button').find('i').toggleClass('fa-times fa-bars');
                }
            }

        } else {
            // not sticky
            if (viewportWidth < 992 && viewportWidth > 576) {
                $('.fixed-nav .contact-details').slideToggle('fast').toggleClass("open");

                if ( $('.navbar-parent .main-menu-items').hasClass('open') ) {
                    $('.navbar-parent .main-menu-items').slideToggle('fast').removeClass('open');
                    $('.nav-button').find('i').toggleClass('fa-times fa-bars');
                }
            }
        }

    });

    // servicepoints province more locations dropdown
    $('.servicepoints .province .location p').on('click', function() {
        var _this = $(this);

        if (_this.hasClass('dropdown')) {
            _this.parent().parent().find('.more-locations').slideToggle('fast');
        }
    });

    // servicepoints map height
    var locationContent = $('.servicepoints .location-content'),
        locationInnerContent = $('.servicepoints .location-content .content'),
        mapContent = $('.servicepoints .map-content'),
        calculatedHeight,
        viewportWidth = $(window).width();

    if (viewportWidth > 991) {
        calculatedHeight = parseInt(locationInnerContent.height() - 7);
        mapContent.css('height', locationContent.height());
        mapContent.find('.map-img').css('height',calculatedHeight );
    }

    // ALL BRANDS
    // all brands show all brands dropdown
    $('.all-brands .dropdown-cta').on('click', function() {
        $('.dropdown-all-brands').slideToggle('slow');
    });

    // three columns
    (function($) {
        $.fn.isBgColor = function(color) {
            var thisBgColor = this.eq(0).css('backgroundColor');
            var computedColor = $('<div/>').css({
                backgroundColor: color
            }).css('backgroundColor');
            return thisBgColor === computedColor;
        }
    })(jQuery);

    if ( $('.version1').isBgColor('#ffffff') ) {
        $(this).find('.middle-card').css('background', 'lightgray')
    }

    // only show first 5 items
    $(".three-columns .middle-card").each(function(){

        if ( $(this).find(".list-item").length > 5 ) {
            $(this).css('height', 'auto');
        }

        $(this).find(".list-item:lt(5)").show();

    });

    $('.three-columns .read-more a').on('click', function (e) {
        e.preventDefault();

        var currentCard = $(this).parent().parent().parent().parent();

        if ( $(this).hasClass('open') ) {
            currentCard.find(".list-item:gt(10)").hide();
            $(this).removeClass('open');
            $(this).text('Bekijk alle punten...');
        } else {
            currentCard.find(".list-item:gt(5)").show();
            $(this).addClass('open');
            $(this).text('Bekijk minder punten...');
        }

    });

    // three columns
    var threeColumnsCard = $(".three-columns .card");
    equalizeHeights(threeColumnsCard);

    // serviceright garages
    function equalizeHeights(selector) {
        var heights = new Array();

        selector.each(function() {
            heights.push($(this).height());
        });

        var max = Math.max.apply( Math, heights );

        selector.each(function() {
            $(this).css('height', max + 'px');
        });
    }

    var defaultInput = $('.filter-options .default').text();

    $('.filter-item a').each(function(i, elem) {
        var checker = $(elem).text().slice(0,1);
        if ( checker == defaultInput.toLocaleUpperCase()) {
            $(this).parent().show();
        } else {
            $(this).parent().hide();
        }
    });

    // filter
    $('.serviceright-garage-by-city .filter span').on('click', function () {

        $('.filter-options span').removeClass('default');

        var ourInput = $(this).text();

        $('.filter-options span').removeClass('active');

        $(this).addClass('active');

        $('.filter-item a').each(function(i, elem) {

            var checker = $(elem).text().slice(0,1);

            if ( checker == ourInput.toLocaleUpperCase()) {
                $(this).parent().show();
            } else {
                $(this).parent().hide();
            }

        });

    });

    // aggregate modal reviews
    $('#aggregate-rating-modal .review').each(function() {
        var reviewText = $(this).attr("data-content"),
            smallReviewText;

        smallReviewText = reviewText.split(/\s+/).slice(0,8).join(" ");

        // console.log(smallReviewText);

        $(this).find('.review-text').children('p').text(smallReviewText + " ...")
    });

    // jquery visible animations
    $(window).on("scroll", function () {
        if ( $('#arrow1').visible(true) ) {
            $('#arrow1').addClass('arrow-animate');
        }

        if ( $('#arrow2').visible(true) ) {
            $('#arrow2').addClass('arrow-animate');
        }

        if ( $('#arrow3').visible(true) ) {
            $('#arrow3').addClass('arrow-animate');
        }

        if ( $('#arrow4').visible(true) ) {
            $('#arrow4').addClass('arrow-animate');
        }

        if ( $('#arrow5').visible(true) ) {
            $('#arrow5').addClass('arrow-animate');
        }

        if ( $('#arrow6').visible(true) ) {
            $('#arrow6').addClass('arrow-animate');
        }

        if ( $('#arrow7').visible(true) ) {
            $('#arrow7').addClass('arrow-animate');
        }

        if ( $('#arrow8').visible(true) ) {
            $('#arrow8').addClass('arrow-animate');
        }

        if ( $('#arrow9').visible(true) ) {
            $('#arrow9').addClass('arrow-animate');
        }

        if ( $('#arrow10').visible(true) ) {
            $('#arrow10').addClass('arrow-animate');
        }

        if ( $('#text-animation1').visible(true) ) {
            $('#text-animation1').addClass('arrow-animate');
        }

        if ($('#video-bg').length) {
            if ($('#video-bg').visible(true)) {
                // console.log('video played');
                $('#video-bg')[0].play();
            } else {
                // console.log('video paused');
                $('#video-bg')[0].pause();
            }
        }

    });
});