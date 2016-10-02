//slider
$(document).ready(function() {
  	  $(".owl-carousel").owlCarousel({
   	  autoPlay: 5000,
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true
  });
});
//fixed header

$(document).ready(function(){
			// Фикмированная шапка при скролле
			$("#header").removeClass("default");
			$(window).scroll(function(){
				if ($(this).scrollTop() > 20) {
					$("#header").addClass("default").fadeIn('fast');
				} else {
					$("#header").removeClass("default").fadeIn('fast');
				};
			});
		});