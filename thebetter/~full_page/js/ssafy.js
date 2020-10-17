$(function () {
	$('#container').fullpage({
		//				options here
//		sectionsColor: ['#ccc', '#e9fdf5', '#ff0', '#9ff923'],
		menu: '.lnb',
		anchors:['lnb-section0', 'lnb-section1', 'lnb-section2', 'lnb-section3', 'lnb-section4'],
		afterLoad: function(origin, destination, direction) {
//            
//            console.log('origin : ', origin)
//            console.log('destination : ', destination)
//            console.log('direction : ', direction)
            
			// 홈페이지 플러그인은 인덱스 번호를 1부터 시작
//			var listNum = destination.index;
//
//			$('#header-gnb li').eq(listNum).addClass('on');
//			$('#header-gnb li').eq(listNum).siblings().removeClass('on');
//			
//			if(listNum==3) {
//				$('#lego01').stop().animate({left:0, opacity:1});
//			}else {
//				$('#lego01').stop().animate({left:-500, opacity:0});
//			}
			
		},
        
        onLeave: function(origin, destination, direction) {
            var sectionIdx = destination.index;
            var lbnIdx = sectionIdx - 1;
            console.log('sectionIdx : ',sectionIdx);
            if(sectionIdx == 0) {
                $('header').show();
                $('.lnb').removeClass('is_fixed');
                
                $('.lnb li').removeClass('is_active');
                
            } else {
                $('header').hide();
                $('.lnb').addClass('is_fixed');

                $('.lnb li').eq(lbnIdx).addClass('is_active');
                $('.lnb li').eq(lbnIdx).siblings().removeClass('is_active');
            }
        },
		
	
		
//		navigation: true,
		
    //		navigationTooltips: ['firstSlide', 'secondSlide'],
    //		slidesNavigation: true,
    //		slidesNavPosition: 'bottom',
		//				autoScrolling: true,
		//				scrollHorizontally: true
	});

	//methods
	$.fn.fullpage.setAllowScrolling(true);
    
    
    $('.lnb li').on('click', function() {
//        $(this).addClass('is_active');
//        $(this).siblings().removeClass('is_active');
        
//        var hrefVal = $(this).attr('href');
        
//        $.fn.fullpage.moveSectionDown();
    })
})