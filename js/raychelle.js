$(document).ready(function() {

  $('li a').smoothScroll({offset: -50}); // smooth scrolling offset for navbar

  $('.carousel').carousel({interval: false}); //makes slider not auto slide

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
      $('.big-nav').fadeOut();
      $('.navbar').fadeIn();
    } else {
      $('.big-nav').fadeIn();
      $('.navbar').fadeOut();
    }
  }
});
