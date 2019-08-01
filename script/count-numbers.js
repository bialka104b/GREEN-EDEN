// $(document).ready(function(){
//     $(window).bind('scroll', function () {
//         var num = 
//         if ($(window).scrollTop() > num) {

//         }
//     });
// });
$('.number').each(function() {
    $(this).prop('Counter', 0).animate({
      Counter: $(this).text()
    }, {
      duration: 10000,
      easing: 'swing',
      step: function(now) {
        $(this).text(Math.ceil(now));
      }
    });
});