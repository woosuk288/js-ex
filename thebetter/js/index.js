$(function () {
    $('.about_me .icon_list').on('click', function () {
        // class on //
        $(this).parent().siblings().children()
            .children('.icon').removeClass('icon_on');
        $(this).children('.icon').addClass('icon_on');

        $(this).parent().siblings().children()
            .children('.icon_arrow').removeClass('arrow_on');
        $(this).children('.icon_arrow').addClass('arrow_on');

        // replace svg name
        var coreLength = $('.icon_slide_list').length;
        var coreIdx = $(this).parent().index();
        for (var i = 0; i < coreLength; i++) {
            var svgAttr = $('.icon_slide_list').eq(i).children().children('.icon').find('use').attr('xlink:href');

            if( i != coreIdx) {
                svgAttr = svgAttr.replace('-active', '');
            } else if ( i == coreIdx && svgAttr.indexOf('-active') == -1 ) {
                svgAttr += '-active';
            }
            
            $('.icon_slide_list').eq(i).children().
            children('.icon').find('use').attr({'xlink:href': svgAttr});
        }
        
        // core value text show, hide
        
        $('.card').eq(coreIdx).siblings().fadeOut();
        $('.card').eq(coreIdx).fadeIn();
    })
    
    
    $('.pf_nav_item').on('click', function() {
        $(this).siblings().find('.name').removeClass('on');
        $(this).find('.name').addClass('on');
        $(this).siblings().children('.name_ly').removeClass('on');
        $(this).children('.name_ly').addClass('on');
        
        var tabIdx = $(this).index();
        
        // text change
//        $('.text_list').eq(tabIdx).siblings().removeClass('on', 1000);
//        $('.text_list').eq(tabIdx).siblings().addClass('off', 1000);
//        $('.text_list').eq(tabIdx).removeClass('off', 1000);
//        $('.text_list').eq(tabIdx).addClass('on', 1000);
        
        $('.text_list').eq(tabIdx).animate({opacity:1, zIndex:30}); $('.text_list').eq(tabIdx).siblings().animate({opacity:0, zIndex:10});
        
        // image change
        $('.division_spot').eq(tabIdx).animate({opacity:1}); $('.division_spot').eq(tabIdx).siblings().animate({opacity:0});
//        
//        $("text_list.on").animate({
//            opacity: 1,
//            top: "+=50",
//            height: "toggle"
//        }, 1000, function () {})
        
    })
//  


    
    // click logo
    $('#logo').on('click', function() {
        $('#gnb ul li').removeClass('gnb_on');
        $('html,body').animate({scrollTop:0});
    })
    
    var isClickOn = false;
    
    // click gnb li
    $('#gnb ul li').on('click', function() {
       
        var gnbIdx = $(this).index();
        $(this).addClass('gnb_on');
        $(this).siblings().removeClass('gnb_on');
        
        var sectionTop = $('.section').eq(gnbIdx).position().top;
        isClickOn = true;
//        console.log('isClickOn : ', isClickOn)
        $('html,body').animate({scrollTop:sectionTop}, function() {
            isClickOn = false;
//            console.log('isClickOn : ', isClickOn);
        });
    })

    // window scroll
    $(window).on('scroll', function () {
        if( !isClickOn ) {
//            console.log('if scroll isclickon : ', isClickOn);
            var nowScroll = $(window).scrollTop();
            $('.section').each(function (i) {
                var startInit = $('.section').eq(0).position().top;
                var start = $(this).position().top;
                var end = start + $(this).height();
                var bgcolor = $(this).css('background-color');

//                console.log('start : ',start);
//                console.log('end : ',end);
//                console.log('bgcolor : ',bgcolor);

                if (nowScroll >= start && nowScroll < end) {
    //				var nowbg = $(this).css('background-color');
    //					color: nowbg
    //				});
    //				$('.gnb li').eq(i).siblings().children('a').css({
    //					color: '#999'
    //				});

                    $('#gnb ul li').eq(i).siblings().removeClass('gnb_on');
                    $('#gnb ul li').eq(i).addClass('gnb_on');

                }else if ( nowScroll < startInit ) {
                    $('#gnb ul li').removeClass('gnb_on');
                }
            })
        } else {
//            console.log('else scroll isclickon : ', isClickOn);
        }
		
	})

})