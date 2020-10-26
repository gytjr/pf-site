var scroll = function(){
    
    var $nav = null,
        $cnt = null,
        moveCnt = null,
        moveIndex = 0,
        moveCntTop = 0,
        winH = 0,
        time = false; // 새로 만든 변수

    $(document).ready(function(){
        init();
        initEvent();
    });
    
    var init = function(){
        $cnt = $(".contents");
        $nav = $("#nav a");
    };
    
    var initEvent = function(){
        $("html ,body").scrollTop(0);
        winResize();
        $(window).resize(function(){
            winResize();
        });
        $nav.on("click", function(){
            moveIndex = $(this).parent("li").index();
            moving(moveIndex);
            return false;
        });
        $cnt.on("mousewheel", function(e){
            if(time === false){ // time 변수가 펄스일때만 휠 이벤트 실행
              wheel(e);
            }
        });
    };
        
    var winResize = function(){
        winH = $(window).height();
        var $except = $(".con6");
        $cnt.children("div").not($except).height(winH);
        $("html ,body").scrollTop(moveIndex.scrollTop);
    };
    
    var wheel = function(e){
        time = true // 휠 이벤트가 실행 동시에 트루로 변경
        if(e.originalEvent.wheelDelta < 0){
            if(moveIndex < 7){
                moveIndex += 1;
                moving(moveIndex);
            };
        }else{
                moveIndex -= 1;
                moving(moveIndex);
            };
    };
    
    var moving = function(index){
        moveCnt = $cnt.children("div").eq(index);
        moveCntTop = moveCnt.offset().top;
        $("html ,body").stop().animate({
            scrollTop: moveCntTop
        }, 1000, function(){
          time = false; // 휠 이벤트가 끝나면 펄스로 변경
        });
        $nav.parent("li").eq(index).addClass("on").siblings().removeClass("on");
    };
    
};
scroll();