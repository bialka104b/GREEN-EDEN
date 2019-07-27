
$(document).ready(function(){
    $(window).bind('scroll', function () {
        var num = 120; //number of pixels before modifying styles
        if ($(window).scrollTop() > num) {
            $('.navigation1').addClass('fixed');
        } else {
            $('.navigation1').removeClass('fixed');
        }
    });
});
