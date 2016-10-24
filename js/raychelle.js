$(document).ready(function() {
  $('.gm-nav a').smoothScroll();
  if ($(window).width()<992){
    $('.navbar').fadeIn();
  }
});

$(window).resize(function() {
  var x = $(this).width();
  if (x < 992) {
    $('.navbar').fadeIn();
  } else {
    $('.navbar').fadeOut();
  }
});

$(document).scroll(function() {
  var y = $(this).scrollTop();
  if ($(window).width()>992){
    if (y > 35) {
      $('.navbar').fadeIn();
    } else {
      $('.navbar').fadeOut();
    }
  }
});
