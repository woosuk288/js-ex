$(function () {
    $('.slide').slick({
        arrows: false,
    })
    
    $('.slide_multi').slick({
        arrows: false,
//        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        variableWidth: true,
    })
    
    $('.btnAllMenu').on('click', function() {
        $('.all_menu_mask').show();
        $('.all_menu').animate({left:0});
        
        $('.all_menu_mask').on('click', function() {
            $('.all_menu_mask').hide();
            $('.all_menu').animate({left:'-85%'});
        })
    })
    
    $('.all_menu_list ul li').on('click', function() {
        var aIdx = $(this).index();
        var bgUrlOn = 'url(../images/all_menu_icon/menu_icon_on' + (aIdx+1) + '.png)';
        var len = $('.all_menu_list ul li').length;

        for(var i=0; i<len; i++){
            var bgUrlOff = 'url(../images/all_menu_icon/menu_icon_off' + (i+1) + '.png)';
            $('.all_menu_list ul li').eq(i).children('a').css({backgroundImage:bgUrlOff});
            $('.all_menu_list ul li').eq(i).children('a').removeClass('on');
        }
        $('.all_menu_list ul li').eq(aIdx).children('a').css({backgroundImage:bgUrlOn});
        $('.all_menu_list ul li').eq(aIdx).children('a').addClass('on');
    })
    
})
