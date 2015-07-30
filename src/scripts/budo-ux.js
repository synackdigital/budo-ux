$(function() {

  /* Enable $.Horunge */
  $('h1, h2, h3, h4, h5, h6, p', '.article').horunge();

  /* Enable .nav__toggle */
  $('.nav__toggle').on('click', function(e){
    $('.nav').toggleClass('nav--expanded');
    $('body').toggleClass('--no-scroll');
  });
});
