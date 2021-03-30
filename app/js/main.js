$(function () {

  $('.top__slider').slick({
    arrows: false,
    dots: true,
    autoplay: true
  });

  $('.menu__toggle').on('click', function() {
    $('.menu__list').toggleClass('menu__list--active');
  });

  $('[data-fancybox]').fancybox({
    youtube : {
        controls : 0,
        showinfo : 0
    }
  });

});

function scrollTo(element) {
  window.scroll({
    left: 0,
    top: element.offsetTop,
    behavior: 'smooth'
  })
}

const button = document.querySelector('.top__more-btn');
const weDo = document.querySelector('.we-do');

button.addEventListener('click', () => {
  scrollTo(weDo);
});

