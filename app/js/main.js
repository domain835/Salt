$(function () {

  $('.top__slider').slick({
    arrows: false,
    dots: true,
    // autoplay: true,
    // responsive:
    //   {
    //     brakpoints: 1500,
    //     settings: {
    //       img: false
    //     }
    //   }
  });

  $('.menu__toggle').on('click', function() {
    $('.menu__list').toggleClass('menu__list--active');
  });

});