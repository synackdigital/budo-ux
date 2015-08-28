$(document).ready(function() {

  /* Enable jQuery.horunge on articles */
  if($.fn.horunge) {
    if(aboveBreakpoint()) {
      $('h1, h2, h3, h4, h5, h6, p', '.article').horunge();
    }
  }

  /* Enable nav toggle */
  $('.nav__open-button').on('click', function(e){
    $('.nav').addClass('nav--expanded');
    $('body').addClass('no-scroll');
  });
  $('.nav__close-button').on('click', function(e){
    $('.nav').removeClass('nav--expanded');
    $('body').removeClass('no-scroll');
  });

});

$(window).load(function() {

  /* Enable jQuery.equalHeights on hidari/migi when absolutely positioned */
  if($.fn.equalHeights) {
    if(aboveBreakpoint()) {
      setTimeout(function() {
        $('body, .hidari, .migi').equalHeights();
      }, 200);
    }
  }
});

var aboveBreakpoint = function() {
  return $('.hidari, .migi').css('position') === 'absolute';
};
