(function($) {
  "use strict";
  
 // menu 
 $(".MenuBtn").click(function() {
  $(".nav__content").toggleClass("active")
})


  // owlCarousel
  $(".brand_logo").owlCarousel({
    loop: true,
    margin: 30,
    autoplay:true,
    autoplayTimeout:2000,
    smartSpeed: 1000,
    items: 1,
    navText: [
      '<i class="far fa-chevron-left"></i>',
      '<i class="far fa-chevron-right"></i>'
    ],
    nav: false,
    
    dots: false,
    responsive: {
      0: {
        items: 2
      },
      767: {
        items: 4
      },
      992: {
        items: 5
      }
    }
  });

  // owlCarousel
  $(".reviews_slider").owlCarousel({
    loop: true,
    margin: 30,
    items: 2,
    navText: [
      '<i class="far fa-chevron-left"></i>',
      '<i class="far fa-chevron-right"></i>'
    ],
    nav: true,
    dots: false,
    responsive: {
      0: {
        items: 1
      },
      767: {
        items: 2
      },
      992: {
        items: 2
      }
    }
  });

  AOS.init({
    mirror: true,
    duration: 1500,
    initClassName: 'aos-init',
    once: true,
  });


 
})(jQuery);
