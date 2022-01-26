$(function(){
     
  $('.works__slider').slick({
    slidesToShow: 2,
    prevArrow: '<button type="button" class="slick-prev slider__prev"> <img src="images/prev-arrow.png" alt="" class="prev__arrow"></button>',
    nextArrow: '<button type="button" class="slick-next slider__next"> <img src="images/next-arrow.png" alt="" class="next__arrow"></button>',
    responsive: [
      {
        breakpoint: 1201,
        settings: {
          slidesToShow: 1,
          autoplay: true,
          autoplaySpeed: 2000,
          arrows:false,
        }
      }
    ]
  });


  $('.header__burger').on('click', function () {
    $('.header__menu').toggleClass('menu-active')
  })
});