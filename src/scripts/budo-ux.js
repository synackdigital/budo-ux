$(function() {
  budo.init();
});

var budo = {

  init: function() {

    /* Store references to DOM elements */
    this.$hidari = $('.hidari');
    this.$migi = $('.migi');


    /* Enable $.Horunge */
    $('h1, h2, h3, h4, h5, h6, p', '.article').horunge();

    /* Enable .nav__toggle */
    $('.nav__toggle').on('click', function(e){
      $('.nav').toggleClass('nav--expanded');
      $('body').toggleClass('--no-scroll');
    });

    /* Set up window listener */
    $(window).on('resize', this.resize());
  },

  resize: function() {
    var hidariHeight = this.$hidari.outerHeight();
    var migiHeight = this.$migi.outerHeight();

    if ( hidariHeight < migiHeight ) {
      this.$hidari.css('height', migiHeight);
    }
    else {
      this.$migi.css('height', hidariHeight);
    }
  }
};
