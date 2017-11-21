// $('h1.counter').each(function () {
//     var $this = $(this),
//         countTo = $this.attr('data-count');//258
//
//     $({countNum: $this.text()}).animate({ // text: 0
//             countNum: countTo //258
//         },
//
//         {
//             duration: 8000,
//             easing: 'linear',
//             step: function () {
//                 $this.text(Math.floor(this.countNum));// 258 steps
//             },
//             complete: function () {
//                 $this.text(this.countNum); // done at 258
//             }
//         });
// });

// scrollmagic panel slide
// scene swipe
// var controller = new ScrollMagic.Controller({
//     globalSceneOptions: {
//         triggerHook : 'onLeave'
//     }
// });
//
// var slides = document.querySelectorAll("section.panel");
// for(var i=0; i<slides.length; i++){
//     new ScrollMagic.Scene({
//         triggerElement : slides[i]
//     })
//         .setPin(slides[i])
//         // .addIndicators()
//         .addTo(controller);
// }



$(document).ready(function () {

    // HEADER--------------------------------------------------------------------
    // responsive menu toggle
    $("#menutoggle").click(function () {
        $('.xs-menu').toggleClass('displaynone');
    });
    //add active class on menu
    $('ul li').click(function (e) {
        e.preventDefault();
        $('li').removeClass('active');
        $(this).addClass('active');
    });

    //drop down menu
    $(".drop-down.ecommerce").click(function () {
        if($(".mega-menu.digital").hasClass("display-on")){
            $(".mega-menu.digital").removeClass("display-on"); // megamenu
            $('.header_arrow.digital').removeClass("display-on"); //toggle button
        }
        if($(".mega-menu.soft").hasClass("display-on")){
            $(".mega-menu.soft").removeClass("display-on");
            $('.header_arrow.soft').removeClass("display-on");
        }
       $('.mega-menu.ecommerce').toggleClass("display-on");
        $('.header_arrow.ecommerce').toggleClass("display-on");
    });


    $(".drop-down.digital").click(function () {
        if($(".mega-menu.ecommerce").hasClass("display-on")){
            $(".mega-menu.ecommerce").removeClass("display-on");
            $('.header_arrow.ecommerce').removeClass("display-on");
        }
        if($(".mega-menu.soft").hasClass("display-on")){
            $(".mega-menu.soft").removeClass("display-on");
            $('.header_arrow.soft').removeClass("display-on");
        }
        $('.mega-menu.digital').toggleClass("display-on") ;
        $('.header_arrow.digital').toggleClass("display-on");

    });

    $(".drop-down.soft").click(function () {
        if($(".mega-menu.ecommerce").hasClass("display-on")){
            $(".mega-menu.ecommerce").removeClass("display-on");
            $('.header_arrow.ecommerce').removeClass("display-on");
        }
        if($(".mega-menu.digital").hasClass("display-on")){
            $(".mega-menu.digital").removeClass("display-on");
            $('.header_arrow.digital').removeClass("display-on");
        }
        $('.mega-menu.soft').toggleClass('display-on');
        $('.header_arrow.soft').toggleClass("display-on");
    });

    // FRONT: scroll down blue button  -----------------------------------------------------------------------
    $(function () {
        $('a.go_down[href*=#]').on('click', function (e) {
            e.preventDefault();
            $('html, body').animate({scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
        });
    });

    // BESPOKE : tab control---------------------------------------------------------------------
    var $swipeTabsContainer = $('.swipe-tabs'),
        $swipeTabs = $('.swipe-tab'),
        $swipeTabsContentContainer = $('.swipe-tabs-container'),
        currentIndex = 0,
        activeTabClassName = 'active-tab';

    $swipeTabsContainer.on('init', function(event, slick) {
            $swipeTabsContentContainer.removeClass('invisible');
            $swipeTabsContainer.removeClass('invisible');

            currentIndex = slick.getCurrent();
            $swipeTabs.removeClass(activeTabClassName);
            $('.swipe-tab[data-slick-index=' + currentIndex + ']').addClass(activeTabClassName);
    });

    $swipeTabsContainer.slick({
        //slidesToShow: 3.25,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        infinite: false,
        swipeToSlide: true,
        touchThreshold: 10
    });
    $swipeTabsContentContainer.slick({
        asNavFor: $swipeTabsContainer,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        infinite: false,
        swipeToSlide: true,
        draggable: false,
        touchThreshold: 10
    });

    $swipeTabs.on('click', function(event) {
        // gets index of clicked tab
        currentIndex = $(this).data('slick-index');
        $swipeTabs.removeClass(activeTabClassName);
        $('.swipe-tab[data-slick-index=' + currentIndex +']').addClass(activeTabClassName);
        $swipeTabsContainer.slick('slickGoTo', currentIndex);
        $swipeTabsContentContainer.slick('slickGoTo', currentIndex);
    });

    //initializes slick navigation tabs swipe handler
    $swipeTabsContentContainer.on('swipe', function(event, slick, direction) {
        currentIndex = $(this).slick('slickCurrentSlide');
        $swipeTabs.removeClass(activeTabClassName);
        $('.swipe-tab[data-slick-index=' + currentIndex + ']').addClass(activeTabClassName);
    });


    //SERVICE : vertical timeline -----------------------------------------------------------------------
    window.sr = ScrollReveal();

    if ($(window).width() < 768) {

        if ($('.timeline-content').hasClass('js--fadeInLeft')) {
            $('.timeline-content').removeClass('js--fadeInLeft').addClass('js--fadeInRight');
        }
        sr.reveal('.js--fadeInRight', {
            origin: 'right',
            distance: '300px',
            easing: 'ease-in-out',
            duration: 800
        });

    } else {
        sr.reveal('.js--fadeInLeft', {
            origin: 'left',
            distance: '300px',
            easing: 'ease-in-out',
            duration: 800
        });
        sr.reveal('.js--fadeInRight', {
            origin: 'right',
            distance: '300px',
            easing: 'ease-in-out',
            duration: 800
        });
    }
    sr.reveal('.js--fadeInLeft', {
        origin: 'left',
        distance: '300px',
        easing: 'ease-in-out',
        duration: 800
    });
    sr.reveal('.js--fadeInRight', {
        origin: 'right',
        distance: '300px',
        easing: 'ease-in-out',
        duration: 800
    });

    // CAROUSEL ------------------------------------------------------------------------
    $('.card_carousel').slick({
        dots: false,
        infinite: true,
        cssEase: 'linear',
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    dots: true,
                    arrows: false,
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 800,
                settings: {
                    dots: true,
                    arrows: false,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    dots: true,
                    arrows: false,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $('.top4_carousel').slick({
        dots: false,
        arrows: false,
        infinite: true,
        cssEase: 'linear',
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    dots: true,
                    arrows: false,
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 800,
                settings: {
                    dots: true,
                    arrows: false,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    dots: true,
                    arrows: false,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    $('.product_carousel').slick({
        dots: false,
        arrows: false,
        cssEase: 'linear',
        speed: 300,
        slidesToShow: 4,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    infinite: false,
                    dots: true,
                    arrows: false,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 800,
                settings: {
                    dots: true,
                    arrows: false,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    dots: true,
                    arrows: false,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    $('.testimonial_carousel').slick({
        dots: false,
        arrows: true,
        infinite: true,
        cssEase: 'linear',
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    dots: true,
                    arrows: false,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 800,
                settings: {
                    dots: true,
                    arrows: false,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    dots: true,
                    arrows: false,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

});



