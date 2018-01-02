window.onload = function(){

/*------------------------------showListNAV----------------------------------*/
    $('.navList li').mouseenter(function(){
        $('.cover').css('display','block');
        var index = $('.navList li').index($(this));
        $('.showList .showLi').css('display','none').eq(index).css('display','block');
        $('.showList .showLi').eq(index).mouseenter(function(){
            $('.cover').css('display','block');
            $('.showList .showLi').eq(index).css('display','block');
        })
        $('.showList .showLi').eq(index).mouseleave(function(){
            $('.showList .showLi').eq(index).css('display','none');
            $('.cover').css('display','none');
        })
        $('.navList .empty').mouseenter(function(){
            $('.cover').css('display','none');
        })
    })
    $('.navList').mouseleave(function(){
        $('.cover').css('display','none');
        $('.showList .showLi').css('display','none');
    })
    /*------------------------------showListBrand----------------------------------*/
    
    $('.showEList .showEListA').mouseenter(function(){
        var index = $('.showEList .showEListA').index($(this));
        $('.showLiRight .showCList2').eq(index).css('display','block');
    })
    $('.showEList .showEListA').mouseleave(function(){
        $('.showLiRight .showCList2').css('display','none');
        $('.showLiRight .showCList2').eq(0).css('display','block');
    })
    /*------------------------------showListUser----------------------------------*/
    
    $('.showBList .showBListA').mouseenter(function(){
        var index = $('.showBList .showBListA').index($(this));
        $('.showLiRight .showCList1').eq(index).css('display','block');
    })
    $('.showBList .showBListA').mouseleave(function(){
        $('.showLiRight .showCList1').css('display','none');
        $('.showLiRight .showCList1').eq(0).css('display','block');
    })
    
    /*------------------------------showListMore----------------------------------*/
    // $(window).resize(function(){
    // console.log($(window).width());
    
        if($(window).width() <= 1100){
            $('.hideListBtn1').click(function(){
                $('.hideListShow').stop(true).slideDown();
                $('.hideListBtn1').css('display','none');
                $('.hideListBtn2').css('display','block');
            })
            $('.hideListBtn2').click(function(){
                $('.hideListShow').stop(true).slideUp();
                $('.hideListBtn1').css('display','block');
                $('.hideListBtn2').css('display','none');
            }) 
        }else{
            $('.hideListShow').stop(true).slideUp();
        }   
    // })
    /*--------------------------------slider------------------------------------*/
    
    //读取$('.imgList')的高度，赋值为$('.showImg')
    //$('.showImg').css('height',$('.imgList').css('height'));
    // console.log($('.imgList li img').css('height'));
    $('.showImg').css('height',$('.imgList li img').css('height'));
    window.onresize = function(){
        $('.showImg').css('height',$('.imgList li img').css('height'));
    }
    

    
    //hover
    var iTimer = null;
    $('.slider').mouseenter(function(){
        $('.leftCon').stop(true).animate({'left':'3%'},500);
        $('.rightCon').stop(true).animate({'right':'3%'},500);
        clearInterval(iTimer)
    })
    $('.slider').mouseleave(function(){
        $('.leftCon').stop(true).animate({'left':'-500px'},500);
        $('.rightCon').stop(true).animate({'right':'-500px'},500);
        autoMove()
    })
    //newLi（）
    $('.imgList').append('<li>');
    $('.imgList li').last().html($('.imgList li').first().html());
    var length = $('.imgList').children().length;
    //control
    $('.point li').click(function(){
        var cIndex = $(this).index()
        $('.point li').removeClass('active').eq(cIndex).addClass('active');
        var cLeft = -cIndex*$(window).width();
        $('.imgList').stop(true).animate({'left':cLeft},500)
    })
    
    
    var iIndex = 0;
    $('.leftCon').click(function(){
        iIndex--;
        if(iIndex < 0){
            iIndex = length -2;
            var oLeft = -(length-1) * $(window).width();
            $('.imgList').css('left',oLeft)
        }
        var left = -iIndex * $(window).width();
        $('.imgList').stop(true).animate({'left':left},500)
        if(iIndex > length -2){
            $('.point li').removeClass('active').eq(0).addClass('active');
        }else{
            $('.point li').removeClass('active').eq(iIndex).addClass('active');
        }
    })
    $('.rightCon').click(function(){
        RightMove();
    });
    function RightMove(){
        iIndex++;
        if(iIndex >= length){
            iIndex = 1;
            $('.imgList').css('left',0)
        }
        var left = -iIndex * $(window).width();
        $('.imgList').stop(true).animate({'left':left},500);
        if(iIndex > length -2){
            $('.point li').removeClass('active').eq(0).addClass('active');
        }else{
            $('.point li').removeClass('active').eq(iIndex).addClass('active');
        }
    }
    function autoMove(){
        iTimer = setInterval(function(){
            RightMove();
        },2000)
    }
    autoMove();
    /*--------------------------------news------------------------------------*/
    $('.newsLeft').mouseenter(function(){   
        $('.newsLeft h3').stop(true).animate({'bottom': 100},500);
        $('.newsLeft p').stop(true).animate({'bottom': 60,'opacity':1},500);
        $('.newsLeft span').stop(true).animate({'bottom': 30,'opacity':1},500);
    })
    $('.newsLeft').mouseleave(function(){
        $('.newsLeft h3').stop(true).animate({'bottom': 30},500);
        $('.newsLeft p').stop(true).animate({'bottom': 20,'opacity':0},500);
        $('.newsLeft span').stop(true).animate({'bottom': 20,'opacity':0},500);
    })
    $('.newsRight').mouseenter(function(){
        $('.newsRight h3').stop(true).animate({'bottom': 100},500);
        $('.newsRight p').stop(true).animate({'bottom': 60,'opacity':1},500);
        $('.newsRight span').stop(true).animate({'bottom': 30,'opacity':1},500);
    })
    $('.newsRight').mouseleave(function(){
        $('.newsRight h3').stop(true).animate({'bottom': 30},500);
        $('.newsRight p').stop(true).animate({'bottom': 20,'opacity':0},500);
        $('.newsRight span').stop(true).animate({'bottom': 20,'opacity':0},500);
    })
    /*--------------------------------server------------------------------------*/
    $('.serverA').mouseenter(function(){
        $(this).find('h3').stop(true).animate({'bottom': 100},500);
        $(this).find('p').stop(true).animate({'bottom': 60,'opacity':1},500);
        $(this).find('span').stop(true).animate({'bottom': 30,'opacity':1},500);
    })
    $('.serverA').mouseleave(function(){
        $(this).find('h3').stop(true).animate({'bottom': 30},500);
        $(this).find('p').stop(true).animate({'bottom': 20,'opacity':0},500);
        $(this).find('span').stop(true).animate({'bottom': 20,'opacity':0},500);
    })
    
    /*--------------------------------server------------------------------------*/
    $('.toTop').click(function(){
        $('html').stop(true).animate({'scrollTop':0},300)
    })
    
    
    /*-------------------------------------login-----------------------------------------*/
    // 关闭登录注册框
    $('.LPclose').click(function(){
        $('.LoginPopup').css('display','none');
        $('.BGcover').css('display','none');
    })
    // 打开
    $('.login').click(function(){
        $('.LoginPopup').css('display','block');
        $('.LoginPopup .LPentry').css('display','block');
        $('.LoginPopup .LPregister').css('display','none');
        $('.LoginPopup .TiaoZhuan').css('display','none');
        $('.BGcover').css('display','block');
    })
    $('.register').click(function(){
        $('.LoginPopup').css('display','block');
        $('.LoginPopup .LPentry').css('display','none');
        $('.LoginPopup .LPregister').css('display','block');
        $('.LoginPopup .TiaoZhuan').css('display','none');
        $('.BGcover').css('display','block');
    })
    //切换
    $('#NewUse').click(function(){
        $('.LoginPopup .LPentry').css('display','none');
        $('.LoginPopup .LPregister').css('display','block');
    })
    $('.LPregisterSubLOG').click(function(){
        $('.LoginPopup .LPentry').css('display','block');
        $('.LoginPopup .LPregister').css('display','none');
    })
    //登录切换
    $('.LPentryTit a').click(function(){
        $('.LPentryTit a').removeClass('LPactive').eq($('.LPentryTit a').index($(this))).addClass('LPactive');
    })
    $('.LPdouble').click(function(){
        $('#code').css('display','none');
        $('#ZFB').css('display','none');
        $('.spanNO').css('display','none');
    })
    $('.LPnormal').click(function(){
        $('#code').css('display','');
        $('#ZFB').css('display','');
        $('.spanNO').css('display','');
    })
    //切换扫码登录
    $('#code').click(function(){
        $('.LPentryUi').css('display','none');
        $('.LPbyCode').css('display','block');
    })
    $('.LPbackLogin').click(function(){
        $('.LPentryUi').css('display','');
        $('.LPbyCode').css('display','');
    })
    $('.LPdouble').click(function(){
        $('.LPentryUi').css('display','');
        $('.LPbyCode').css('display','none');
    })
    
    //登录输入框
    $('#LGFORM').submit(function(){
        if($('#Username').val() == ''){
            alert('请输入用户名');
            return false
        }
        if($('#Password').val() == ''){
            alert('请输入密码');
            return false
        }
    })
    //用户名
    $('#Username').focus(function(){
        $('#Username').attr('placeholder','');
    })
    $('#Username').blur(function(){
        $('#Username').attr('placeholder','用户名');
        var oUsername = $('#Username').val();
        var oReg = /^.+[刘震]$/ig;
        if(oReg.test(oUsername)){
            
        }else{
            alert('用户名格式错误 必须以刘震结尾')
        }
    })
    //注册输入框
    $('#REFORM').submit(function(){
        if($('#NUsername').val() == ''){
            alert('请输入用户名');
            return false
        }
        if($('#NRPassword').val() == ''){
            alert('请输入密码');
            return false
        }
    })
    //用户名
    $('#NUsername').focus(function(){
        $('#NUsername').attr('placeholder','');
    })
    $('#NUsername').blur(function(){
        $('#NUsername').attr('placeholder','用户名');
        var oNUsername = $('#NUsername').val();
        var oReg = /^.+[刘震]$/ig;
        if(oReg.test(oNUsername)){
            
        }else{
            alert('用户名格式错误 必须以刘震结尾')
        }
    })

    //密码
    $('#NPassword').focus(function(){
        $('#NPassword').attr('placeholder','');
        $('#NPassword').css({'color':'','border-color':''});
    });
    $('#NPassword').blur(function(){
        $('#NPassword').attr('placeholder','您的密码');
        var oNPassword = $('#NPassword').val();
        if(oNPassword!=''){
            var oReg = /^\d{6,18}$/ig; 
            if(oReg.test(oNPassword)){
                $('#NPassword').css({'border-color':'#00ff40'});
            }else{
                alert('密码格式错误，6-18位数字');
            }
        }
    });
    //再次确认密码
        $('#NRPassword').focus(function(){
            $('#NRPassword').attr('placeholder','');
            $('#NRPassword').css({'color':'','border-color':''});
        });
        $('#NRPassword').blur(function(){
            $('#NRPassword').attr('placeholder','再次输入确认密码');
            var oNRPassword = $('#NRPassword').val();
            if(oNRPassword != ''){
                if($('#NRPassword').val() === $('#NPassword').val()){
                    $('#NRPassword').css({'border-color':'#00ff40'});
                }else{
                    alert('密码输入不一致');
                }
            }
        });



}
