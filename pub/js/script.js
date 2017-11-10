$('h1.counter').each(function () {
    var $this = $(this),
        countTo = $this.attr('data-count');//258

    $({countNum: $this.text()}).animate({ // text: 0
            countNum: countTo //258
        },

        {
            duration: 8000,
            easing: 'linear',
            step: function () {
                $this.text(Math.floor(this.countNum));// 258 steps
            },
            complete: function () {
                $this.text(this.countNum); // done at 258
            }
        });
});


//platform, news
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
                arrows:false,
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 800,
            settings: {
                dots: true,
                arrows:false,
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                dots: true,
                arrows:false,
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});

// impact, investing
$('.impact_carousel').slick({
    dots: false,
    arrows:false,
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
                arrows:false,
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 800,
            settings: {
                dots: true,
                arrows:false,
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                dots: true,
                arrows:false,
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});


// product, partners
$('.product_carousel').slick({
    dots: false,
    arrows:false,
    cssEase: 'linear',
    speed: 300,
    slidesToShow: 4,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                infinite: false,
                dots: true,
                arrows:false,
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 800,
            settings: {
                dots: true,
                arrows:false,
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                dots: true,
                arrows:false,
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});

// platform_fearues
$('.feature_carousel').slick({
    dots: false,
    arrows:true,
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
                arrows:false,
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 800,
            settings: {
                dots: true,
                arrows:false,
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                dots: true,
                arrows:false,
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});







