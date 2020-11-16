$(document).ready(function() {
    // 햄버거 버튼 애니메이션
    var burger = $('.menu-trigger');
  
    burger.on('click', function(e){
    e.preventDefault();
    $(this).toggleClass('active');
    })

    
});