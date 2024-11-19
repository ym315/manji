$(document).ready(function(){
   
    $('header').load('common.html .head');
    $('footer').load('common.html .foot');
    $('.mypage_com').load('common.html .mypage_menu');

    
    setTimeout( function() {
        mobile();
      },100);

    function mobile(){   

        $('.mobile_menu_oepn').on("click", function(e){
            e.preventDefault();
            $('.mobile_menu').css({"transform":"translateX(0)","transition":"all 0.3s ease-in-out"})

        });
        $('.mobile_menu_close').on("click", function(e){
            e.preventDefault();
            $('.mobile_menu').css({"transform":"translateX(100%)","transition":"all 0.3s ease-in-out"})

        });
        
     }
  
});
