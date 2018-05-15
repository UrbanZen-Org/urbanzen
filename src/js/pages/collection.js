'use strict';

var $ = require('jquery');
var slick = require('slick-carousel');
var imagesLoaded = require('imagesloaded');

var tabletop = {
  init: function(){
  },

  ready: function(){
  	if ($('.collection-slideshow').length){
      imagesLoaded($('.collection-slideshow'), function(){
    		$('.collection-slideshow .collection-slides').slick({
    			prevArrow: '<div class="slick-arrow arrow-left"></div>',
  	      nextArrow: '<div class="slick-arrow arrow-right"></div>',
  			  infinite: true,
  			  slidesToShow: 1,
  			  slidesToScroll: 1
    		});
        $('.collection-slideshow').addClass('visible');
      });
  	}
    if ($('.collection-mobile-slideshow').length){
      imagesLoaded($('.collection-mobile-slideshow'), function(){
        $('.collection-mobile-slideshow .collection-mobile-slides').slick({
          prevArrow: '<div class="slick-arrow arrow-left"></div>',
          nextArrow: '<div class="slick-arrow arrow-right"></div>',
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1
        });
        $('.collection-mobile-slideshow').addClass('visible');
      });
    }
  },
  resize:function(){
    
  },  
  scroll: function(){
    
  }
};

module.exports = tabletop;


