//slider
$(document).ready(function() {
  	  $(".owl-carousel").owlCarousel({
  	  autoPlay: 3000,
      slideSpeed : 300,
      paginationSpeed : 900,
      singleItem:true,
      nav: false,
      stopOnHover: true,
  });
});
//fixed header

$(document).ready(function(){
			// Фикмированная шапка при скролле
			$("#header").removeClass("default");
			$(window).scroll(function(){
				if ($(this).scrollTop() > 20) {
					$("#header").addClass("default").fadeIn('fast');
					$(".logo").addClass("black_logo").fadeIn('fast');
				} else {
					$("#header").removeClass("default").fadeIn('fast');
					$(".logo").removeClass("black_logo").fadeIn('fast');
				};
			});
		});



$(document).ready(function(){
 
$(window).scroll(function(){
if ($(this).scrollTop() > 100) {
$('.scrollup').fadeIn();
} else {
$('.scrollup').fadeOut();
}
});
 
$('.scrollup').click(function(){
$("html, body").animate({ scrollTop: 0 }, 600);
return false;
});
 
});

$(document).ready(function() {
 
  $(".owl-carousel-partners").owlCarousel({
 
      autoPlay: 2000, //Set AutoPlay to 3 seconds
 
      items : 4,
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [979,3],
  });
 
});


$(document).ready(function () {
    $("a").click(function () {
        var elementClick = $(this).attr("href");
        var destination = $(elementClick).offset().top;
        if ($.browser.safari) {
            $('body').animate({ scrollTop: destination - 80 }, 800); //1100 - скорость прокрутки
        } else {
            $('html').animate({ scrollTop: destination - 80}, 800);
        }
        return false; 
    });
});
