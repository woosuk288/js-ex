$(document).ready(function() {
	$('#mymenu').on('click', function() {
		console.log('ddd')
		$('#submenu').toggle();
	})
    
    $('.slide').slick({
        arrows: false,
        dots: true,
    })
    
    $('.ad_banner').slick({
        arrows: false,
        dots: true,
    })
    
//    $('.slide_multi').slick({
////        arrows: false,
////        slidesToShow: 1,
//        slidesToScroll: 1,
//        infinite: false,
//        variableWidth: true,
//    })
})