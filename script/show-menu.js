
$(document).ready(function(){
    $(window).bind('scroll', function () {
        var num = 120; //number of pixels before modifying styles
        if ($(window).scrollTop() > num) {
            $('.navigation1').addClass('fixed');
        } else {
            $('.navigation1').removeClass('fixed');
        }
    })
    $('.icon-menu').on('click', function(e){
        e.preventDefault();
        $('.nav-list-menu').slideToggle(500);
        window.onresize = function() {
            if (window.innerWidth > 767) {
              $('.nav-list-menu').css({display : 'block'}); //the script reverses the operation of slideToogle if we extend the browser window
            }
        } 
    });
    $('#aboutAs').on('click', function(e){
        e.preventDefault();
        $('#list-menu1').slideToggle(500); // list AboutUS
        
    });
});
