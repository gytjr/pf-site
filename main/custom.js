$(document).ready(function() {
    // 햄버거 버튼 애니메이션
    var burger = $('.menu-trigger');
  
    burger.on('click', function(e){
    e.preventDefault();
    $(this).toggleClass('active');
    modal();
    })
    function modal(){
        if(burger.hasClass('active') == true) {
            $('.modal').css('transform', 'translateX(0%)').css('opacity', '1');
        }else {
            $('.modal').css('transform', 'translateX(100%)').css('opacity', '0');
        }
    }

    // $(window).on('scroll', function(){
    //     var scroll = $(this).scrollTop();
    //     if (scroll >= $('.wrap>div').eq(2).offset().top && scroll < $('.wrap>div').eq(3).offset().top) {
    //         $('.nav').css('background', 'rgba(0, 0, 0, 0.1)');
    //     }else {
    //         $('.nav').css('background', 'none');
    //     }
    // })
    

    // 메뉴 버튼 스크롤
    var modalbtn = $('.modal>.menu>li');

    modalbtn.on('click', function(){
        var i = $(this).index();
        burger.removeClass('active');
        modal();
        $('html,body').animate({ 'scrollTop' : $('.wrap>div').eq(i).offset().top}, 500);
    })

    $(".nav>.logo").on("click", function () {
        $('html, body').animate({
            scrollTop: 0
        }, 500);
    })
    

    /* 발견되면 활성화시키는 라이브러리 시작 */
    function ActiveOnVisible__init() {
        $(window).resize(ActiveOnVisible__initOffset);
        ActiveOnVisible__initOffset();

        $(window).scroll(ActiveOnVisible__checkAndActive);
        ActiveOnVisible__checkAndActive();
    }

    function ActiveOnVisible__initOffset() {
        $('.active-on-visible').each(function (index, node) {
            var $node = $(node);

            var offsetTop = $node.offset().top;
            $node.attr('data-active-on-visible-offsetTop', offsetTop);

            if (!$node.attr('data-active-on-visible-diff-y')) {
                $node.attr('data-active-on-visible-diff-y', '0');
            }

            if (!$node.attr('data-active-on-visible-delay')) {
                $node.attr('data-active-on-visible-delay', '0');
            }
        });

        ActiveOnVisible__checkAndActive();
    }

    function ActiveOnVisible__checkAndActive() {
        $('.active-on-visible:not(.actived)').each(function (index, node) {
            var $node = $(node);

            var offsetTop = $node.attr('data-active-on-visible-offsetTop') * 1;
            var diffY = parseInt($node.attr('data-active-on-visible-diff-y'));
            var delay = parseInt($node.attr('data-active-on-visible-delay'));

            var callbackFuncName = $node.attr('data-active-on-visible-callback-func-name');

            if ($(window).scrollTop() + $(window).height() + diffY > offsetTop) {
                $node.addClass('actived');

                setTimeout(function () {
                    $node.addClass('active');
                    if (window[callbackFuncName]) {
                        window[callbackFuncName]($node);
                    }
                }, delay);
            }
        });
    }

    ActiveOnVisible__init();

    /* 발견되면 활성화시키는 라이브러리 끝 */
});