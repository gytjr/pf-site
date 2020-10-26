
$(document).ready(function(){
    
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

    $(".header>.logo").on("click", function(){
        $('html, body').animate({scrollTop : 0}, 400);
    })

    $con1btn = $(".con1btn>li");

    $(".con1btn>li").on("click", function(e){
        e.preventDefault();

        i = $(this).index();

        $con1btn.removeClass("on");
        $(this).addClass("on");
        $(".con1box>div").removeClass("show");
        $(".con1box>div").eq(i).addClass("show");


    })

    $(".iconleft").on("click", function(){
        $(".simg-t").stop().animate({"margin-left" : "0px"},500,function(){
            $(".simg-t>div").last().prependTo(".simg-t");
            $(".simg-t").css({"margin-left" : "-34%"})
        })
    })

    $(".iconright").on("click", function(){
        $(".simg-t").stop().animate({"margin-left" : "-68%"},500,function(){
            $(".simg-t>div").first().appendTo(".simg-t");
            $(".simg-t").css({"margin-left" : "-34%"})
        })
    })

    $(".cart").on("click", function(){
        alert('장바구니에 추가되었습니다.');
    })
    $(".like").on("click", function(){
        if($(this).hasClass('on') == false){
            $(this).addClass('on');
        } else {
            $(this).removeClass('on');
        }
    })

})