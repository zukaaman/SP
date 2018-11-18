$(document).ready(function(){
  $(".investors-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    // autoplay: true,
    autoplaySpeed: 6000,
    prevArrow: '<button class="investors-slider-left" type="button"><span class="">previous investor</span></button>',
    nextArrow: '<button class="investors-slider-right" type="button"><span class="">next investor</span></button>'
  });
});
