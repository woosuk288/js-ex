$(function () {
    getNavLiLength();
    var ulLeft = $('.gnb_list ul').position().left;
        
    $('.btn_arrowLeft').on('click', function() {
        var navEl = $('.gnb_list ul');
        var testWidth = navEl.width();
        
        ulLeft += testWidth;
        
        if ( ulLeft < 0 ) {
            navEl.animate({left:ulLeft});    
        } else {
            ulLeft = 0
            navEl.animate({left:ulLeft});
            // opacity, cursor 도 추가
        }
    });
    
    $('.btn_arrowRight').on('click', function() {
        var navEl = $('.gnb_list ul');
        var testWidth = navEl.width();
        
        ulLeft -= testWidth;
        
        var allWidth = getNavLiLength().allWidth;
        var endLeftPos = getNavLiLength().endLeftPos;
        
        console.log(`allWidth : ${allWidth}, endLeftPos : ${endLeftPos}`)
        
        if ( -ulLeft < -endLeftPos ) {
            navEl.animate({left:ulLeft})
        } else {
            ulLeft = endLeftPos;
            navEl.animate({left:ulLeft});
            // opacity, cursor 도 추가
        }
    });
    
    function getNavLiLength () {
        var ulWidth = $('.gnb_list ul').width();
        var liCount = $('.gnb_list ul li').length;
        var marginLeftLength = 16 * ( liCount - 1 )
        var liAllWidth = 0;
        
        for ( var i = 0; i < liCount; i++ ){
            liAllWidth += $('.gnb_list ul li').eq(i).width();
        }
        
        var allWidth = liAllWidth + marginLeftLength;
        console.log('allWidth : ',allWidth);
        console.log('ulWidth : ',ulWidth);
        var endLeftPos = -(allWidth - ulWidth);
        console.log('endLeftPos : ',endLeftPos);
        
        var rtnObj = {
            'allWidth' : allWidth,
            'endLeftPos' : endLeftPos
        }
        
        return rtnObj;
    }
    
    $('.gnb_list ul li').on('click', function(e) {
//        var uloffset = $('.gnb_list ul').offset().left;
//        var lioffset = $(this).offset().left;
//        console.log(`uloffset : ${uloffset}, lioffset : ${lioffset}`);
        
        $(this).children('a').addClass('on')
        $(this).siblings().children('a').removeClass('on');
    })
    
    $(window).on('scroll', function () {
        
    })
});