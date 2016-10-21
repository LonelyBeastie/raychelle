$(document).scroll(function() {
  $('.gm-nav a').smoothScroll();

  var y = $(this).scrollTop();
  if (y > 35) {
    $('.navbar').fadeIn();
  } else {
    $('.navbar').fadeOut();
  }
});
