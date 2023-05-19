$(function(){
    $('.header-slider').slick({
        dots: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="images/prev.svg" alt=""></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="images/next.svg" alt=""></button>',
        vertical: true,
        responsive: [{
            breakpoint: 371,
            settings: {
                dots: false,
                arrows: false,
                autoplay: true,
                autoplaySpeed: 2000,
            }
        }]
    });

    $('.nation__name').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        focusOnSelect: true,
        asNavFor: '.nation__content',
        vertical: true,
        prevArrow: '<button type="button" class="nation-prev"><img src="images/nation-prev.svg" alt=""></button>',
        nextArrow: '<button type="button" class="nation-next"><img src="images/nation-next.svg" alt=""></button>',
        responsive: [{
            breakpoint: 891,
            settings: {
               vertical: false,
               slidesToShow: 3,
               arrows: false,
               dots: true
            },
            breakpoint: 461,
            settings: {
                vertical: false,
                slidesToShow: 1,
                arrows: false,
                dots: true
            }
        }]
    });
    $('.nation__content').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.nation__name',
        fade: true,
        arrows: false
    });

    $('.menu__btn').on('click', function(){
        $('.menu__list').toggleClass('menu__list--active');
    });
});