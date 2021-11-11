$('.fade').slick({
  dots: true,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: 'linear',
  autoplay: true,
  autoplaySpeed: 2000,
});
$('.storyBox__slider-wrapper').slick({
  dots: false,
  arrows: false,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: 'linear',
  autoplay: true,
  autoplaySpeed: 2000,
});

$('.newsBox__slider').slick({
  dots: false,
  arrows: true,
  infinite: false,
  autoplay: true,
  slidesToShow: 4,
  autoplaySpeed: 2000,
  variableWidth: true,
  prevArrow:"<button type='button' class='slider-btn slider-btn--prev'><i class='icon-arrow-left slider-btn__icon'></i></button>",
  nextArrow:"<button type='button' class='slider-btn slider-btn--next'><i class='icon-arrow-right slider-btn__icon'></i></button>"
});

$(window).scroll(function() {    
  var scroll = $(window).scrollTop();
  if (scroll >= 1) {
      $(".headerBox").addClass("headerBox--fixed");
  } else {
      $(".headerBox").removeClass("headerBox--fixed");
  }
});