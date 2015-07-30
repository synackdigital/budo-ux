$(function() {
  budoUx.init();
});

var budoUx = {

  init: function() {

    /* Store references to DOM elements */
    budoUx.$gridHidari = $('.grid__hidari');
    budoUx.$gridMigi = $('.grid__migi');


    /* Enable $.Horunge */
    $('h1, h2, h3, h4, h5, h6, p', '.article').horunge();

    /* Enable .nav__toggle */
    $('.nav__toggle').on('click', function(e){
      $('.nav').toggleClass('nav--expanded');
      $('body').toggleClass('--no-scroll');
    });

    /* Set up window listener */
    $(window).on('resize', budoUx.resize());
  },

  resize: function() {

  }
};
