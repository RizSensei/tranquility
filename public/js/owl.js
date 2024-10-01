$(document).ready(function () {

    // discover-more
    $(".owl-carousel-package").owlCarousel({
      loop: true,
      margin: 0,
      nav: false,
      dots:false,
      responsiveClass: true,
      autoplay:true,
      autoplayTimeout:2000,
      autoplayHoverPause:true,
      responsive: {
        0: {
          items: 1,
        },
        320: {
          items: 1,
        },
        600: {
          items: 2,
        },
        1000: {
          items: 3,
        },
        // 1200: {
        //   items: 4,
        // },
        1500: {
          items: 4,
        },
      },
    });


    $(".owl-carousel-gallery").owlCarousel({
      loop: false,
      margin: 0,
      nav: true,
      dots:false,
      responsiveClass: true,
      autoplay:true,
      autoplayTimeout:2000,
      autoplayHoverPause:true,
      responsive: {
        0: {
          items: 1,
        },
        320: {
          items: 1,
        },
        600: {
          items: 2,
        },
        1000: {
          items: 3,
        },
        1200: {
          items: 4,
        },
        1500: {
          items: 5,
        },
      },
    });

    $(".owl-carousel-testimonial").owlCarousel({
      loop: false,
      margin: 0,
      nav: true,
      dots:false,
      responsiveClass: true,
      autoplay:true,
      autoplayTimeout:2000,
      autoplayHoverPause:true,
      responsive: {
        0: {
          items: 1,
        }
      },
    });
  });