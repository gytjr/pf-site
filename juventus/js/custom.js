$(document).ready(function(){

    //-----con2-----//

    $con2nav = $(".con2nav a");
    $con2con = $(".con2right1 li");

    $con2nav.on("click", function(e){
        e.preventDefault();

        $con2index = $(this).parent("li").index();

        $con2nav.parent("li").removeClass("on");
        $(this).parent("li").addClass("on");
        $con2con.removeClass("on");
        $con2con.eq($con2index).addClass("on");

    });

    //-----con3-----//

    $icon = $(".material-icons")
    $iconleft =  $(".material-icons.left")
    $iconright = $(".material-icons.right")

    $(".player>li>a").on("click", function(e){
        e.preventDefault();

        if ($(this).next("div").children(".sub").hasClass(".on")){
            $(this).next("div").children(".sub").stop().slideUp().removeClass(".on");
            $(this).next("div").children($icon).css({"opacity" : "0"});
        }else{
            $(".player>li>a").next("div").children(".sub").stop().slideUp().removeClass(".on");
            $(".player>li>a").next("div").children($icon).css({"opacity" : "0"});
            $(this).next("div").children(".sub").stop().slideDown().addClass(".on");
            $(this).next("div").children($icon).css({"opacity" : "1"});
            
        };
    });

    $iconright.on("click", function sr(){
            $(this).prev(".sub").stop().animate({"margin-left": "-20%"});

    })

    $(".dfbox").children($iconright).on("click", function(){
        $(this).prev(".sub").stop().animate({"margin-left": "-41%"});

})

    $iconleft.on("click", function sl(){
        $(this).next(".sub").stop().animate({"margin-left": "0%"});
    })


    //-----지도-----//

    function map(){
        var X_point = 7.6411481; // X 좌표
        var Y_point = 45.1095368; // Y 좌표

        var zoomLevel = 16;
        var myLatlng = new google.maps.LatLng(Y_point, X_point);
        var mapOptions = {
            zoom: zoomLevel,
            center: myLatlng,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        var map = new google.maps.Map(document.getElementById('map'), mapOptions);
        var marker = new google.maps.Marker({
            position: myLatlng,
            map: map,
            title: markerTitle
        });

        var infowindow = new google.maps.InfoWindow({
            content: contentString,
            maxWidth: markerMaxWidth
        });
        google.maps.event.addListener(marker, 'click', function () {
            infowindow.open(map, marker);
        });
    }
    map();
});