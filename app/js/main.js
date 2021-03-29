$(function () {

  $('.top__slider').slick({
    arrows: false,
    dots: true,
    // autoplay: true
  });

  $('.menu__toggle').on('click', function() {
    $('.menu__list').toggleClass('menu__list--active');
  });

});