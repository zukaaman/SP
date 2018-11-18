$(document).ready(function(){

  $(document).mouseup(function (e){
    var block = $("#nav"),
        closeBtn = $(".nav-burger-close"),
        burgerBtn = $('.nav-burger');

    if (!block.is(e.target) && block.has(e.target).length === 0) {
      block.removeClass("active");
      closeBtn.removeClass("active");
      burgerBtn.removeClass("hidden");
    }

  });

  $(".nav-burger").click(function(){
    $('#nav').addClass("active");
    $('.nav-burger-close').addClass("active");
    $('.nav-burger').addClass("hidden");
  });

  $(".nav-burger-close").click(function(){
    $('#nav').removeClass("active");
    $('.nav-burger-close').removeClass("active");
    $('.nav-burger').removeClass("hidden");
  });

});
