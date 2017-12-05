$(document).ready(function () {

    // vertical timeline --------------------------------------------------------//
    window.sr = ScrollReveal();

    if ($(window).width() < 768) {

        if ($('.timeline-content').hasClass('js--fadeInLeft')) {
            $('.timeline-content').removeClass('js--fadeInLeft').addClass('js--fadeInRight');
        }
        sr.reveal('.js--fadeInRight', {
            origin: 'right',
            distance: '400px',
            easing: 'ease-in-out',
            duration: 1000
        });

    } else {
        sr.reveal('.js--fadeInLeft', {
            origin: 'left',
            distance: '400px',
            opacity: 0,
            easing: 'ease-in-out',
            duration: 1000
        });
        sr.reveal('.js--fadeInRight', {
            origin: 'right',
            distance: '400px',
            opacity: 0,
            easing: 'ease-in-out',
            duration: 1000
        });
    }
    sr.reveal('.js--fadeInLeft', {
        origin: 'left',
        distance: '400px',
        opacity: 0,
        easing: 'ease-in-out',
        duration: 1000
    });
    sr.reveal('.js--fadeInRight', {
        origin: 'right',
        distance: '400px',
        opacity: 0,
        easing: 'ease-in-out',
        duration: 1000
    });

    // CAROUSEL --------------------------------------------------------//
    $('.static_carousel').slick({
        dots: false,
        arrows: false,
        infinite: true,
        cssEase: 'linear',
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    dots: true,
                    arrows: false,
                    autoplay: true,
                    autoplaySpeed: 2000,
                    fade: true,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 800,
                settings: {
                    dots: false,
                    arrows: false,
                    autoplay: true,
                    autoplaySpeed: 2000,
                    fade: true,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    dots: false,
                    arrows: false,
                    autoplay: true,
                    autoplaySpeed: 2000,
                    fade: true,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $('.most_loved-carousel').slick({
        dots: true,
        arrows: false,
        infinite: true,
        cssEase: 'linear',
        speed: 300,
        fade: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    dots: true,
                    arrows: false,
                    fade: true,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 800,
                settings: {
                    dots: true,
                    arrows: false,
                    fade: true,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    dots: true,
                    arrows: false,
                    fade: true,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

});



