$(function(){
    
    /*--------------------------------------------GLconList------------------------------------------*/
            $('.GLconNav a').click(function(){
                var index = $(this).index();
                $('.GLconNav a').removeClass('GLconNavActive').eq(index).addClass('GLconNavActive');
                $('.GLcontent ul').css('display','none').eq(index).css('display','block');
            })
    
   
    
        });