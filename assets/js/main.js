(function ($) {

  "use strict";

  //change active class 

  $(".smoothScroll").click(function (e) {

    e.preventDefault();

    let href = $(this).attr("href");

    console.log(href)

    if ($(this).closest(".nav-links").length > 0) {
      $(".nav-links a").removeClass("active");
      $(this).addClass("active")
    }

    $('html, body').animate({
      scrollTop: (href === "#") ? 0 : $(href).offset().top,
    }, 1000);

  })

  // toggle opened  class 
  $(".menu-toggler").click(function () {

    $(".nav-bar").toggleClass("opened");
    $(".nav-links").slideToggle(500);

  })

  // typed text
  let typed = new Typed('.typed', {
    strings: ["Front End Developer.", "Web Integrator."],
    typeSpeed: 50,
    backSpeed: 30,
    backDelay: 3000,
    loop: true
  });

  //target tooltip
  $('[data-toggle]').tooltip();

  //intilaize magnifique popup 

  $('#portfolio-container').magnificPopup({
    delegate: 'a', // child items selector, by clicking on it popup will open
    type: 'image',
    gallery:{
      enabled:true
    },
    
  });

})(jQuery);