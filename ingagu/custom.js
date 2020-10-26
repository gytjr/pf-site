$(document).ready(function () {

    //header btn//
    $(".btn").on("click", function(e){
        e.preventDefault();

        $(".panel").fadeIn().addClass("on");
    })

    $(".closeicon").on("click", function(e){
        e.preventDefault();

        $(".panel").fadeOut().removeClass("on");
    })

    //visual btn//

    $(".v_menu>li").on("click", function (e) {
        e.preventDefault();

        let i = $(this).index();

        $(".v_menu_b").removeClass("on")
        $(this).addClass("on")

        $(".slideimg li").removeClass("on");
        $(".slideimg li").eq(i).addClass("on");
        current = i;
    });

    //visual slide//

    var slideimg = $(".slideimg>li");
    var imgon = $(".slideimg>li.on");
    var current = 0;

    function timer() {
        setInterval(function () {
            var n = current + 1;
            if (n == slideimg.size()) {
                n = 0
            }

            $(".v_menu>li").eq(n).trigger("click")
        }, 3000);
    };

    timer();


    //menu hover//

    $(".menu>li").on("mouseover", function () {
        $(this).children(".sub").stop().slideDown();
    });

    $(".menu>li").on("mouseleave", function () {
        $(this).children(".sub").stop().slideUp();
    });



    //header 스크롤//

    let didScroll;
    var lastScrollTop = 0;
    var delta = 5; // 동작의 구현이 시작되는 위치
    var navbarHeight = $(".headerwrap").outerHeight(); // 영향을 받을 요소를 선택

    $(window).scroll(function (e) {
        didScroll = true;
    });

    setInterval(function () {
        if (didScroll) {
            hasScrolled();
            didScroll = false;
        }
    }, 250);

    function hasScrolled() {
        var st = $(this).scrollTop();

        if (Math.abs(lastScrollTop - st) <= delta)
            return;

        if (st > lastScrollTop && st > navbarHeight) { // Scroll Down
            $('.headerwrap').removeClass('nav-down').addClass('nav-up');
        } else {
            // Scroll Up
            if (st + $(window).height() < $(document).height()) {
                $('.headerwrap').removeClass('nav-up').addClass('nav-down');
            }
        }
        lastScrollTop = st;

    }

    //콘텐츠//

    //var bottom_of_window = $(window).scrollTop() + $(this).outerHeight();

    $(window).scroll(function () {
        $('.hideme').each(function (i) {
            var bottom_of_object = $(this).offset().top;
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if (bottom_of_window > bottom_of_object) {
                $(this).addClass('showme');
            }
            if (bottom_of_window < bottom_of_object) {
                $(this).removeClass('showme');
            }
        });
    });

    //con4slide//

    $('.con4imgul').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: false,
        dots: false,
        autoplay: false,
        speed: 800,
        infinite: true,
        autoplaySpeed: 3000,
        easing: 'easeInOutQuint',
        pauseOnHover: false,
        prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Prev" tabindex="0" role="button"><i class="fas fa-angle-left"></i></button>',
        nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button"><i class="fas fa-angle-right"></i></button>',
        asNavFor: '.con4text>ul'
    });

    $('.con4text>ul').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		dots:false,
		autoplay: false,
		speed:800,
		infinite:true,
		autoplaySpeed: 3000,
		easing: 'easeInOutQuint',
		pauseOnHover:false,
		asNavFor: '.con4imgul'
	});	
});