$(function () {
	$('#fullpage').fullpage({
		//				options here
//		sectionsColor: ['#ccc', '#e9fdf5', '#ff0', '#9ff923'],
		menu: '#header',
		anchors:['home', 'about', 'portfolio', 'video', 'contact'],
		afterLoad: function(origin, destination, direction) {
			// 홈페이지 플러그인은 인덱스 번호를 1부터 시작
			var listNum = destination.index;

			$('#header-gnb li').eq(listNum).addClass('on');
			$('#header-gnb li').eq(listNum).siblings().removeClass('on');
			
			if(listNum==3) {
				$('#lego01').stop().animate({left:0, opacity:1});
			}else {
				$('#lego01').stop().animate({left:-500, opacity:0});
			}
			
		},
		
	
		
		navigation: true,
		
//		navigationTooltips: ['firstSlide', 'secondSlide'],
//		slidesNavigation: true,
//		slidesNavPosition: 'bottom',
		//				autoScrolling: true,
		//				scrollHorizontally: true
	});

	//methods
	$.fn.fullpage.setAllowScrolling(true);
})
