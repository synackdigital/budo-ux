$(function(){budoUx.init()});var budoUx={init:function(){budoUx.$gridHidari=$(".grid__hidari"),budoUx.$gridMigi=$(".grid__migi"),$("h1, h2, h3, h4, h5, h6, p",".article").horunge(),$(".nav__toggle").on("click",function(i){$(".nav").toggleClass("nav--expanded"),$("body").toggleClass("--no-scroll")}),$(window).on("resize",budoUx.resize())},resize:function(){var i=budoUx.$gridHidari.outerHeight(),d=budoUx.$gridMigi.outerHeight();i>d?(budoUx.$gridHidari.css("height","auto"),budoUx.$gridMigi.css("height",i)):(budoUx.$gridHidari.css("height",d),budoUx.$gridMigi.css("height","auto"))}};