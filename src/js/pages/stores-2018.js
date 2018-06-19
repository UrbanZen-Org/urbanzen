'use strict';

var $ = require('jquery');
var imagesLoaded = require('imagesloaded');
var slick = require('slick-carousel');

var stores_2018 = {
  init: function(){
  },

  ready: function(){
  	if ($('.store-slideshow').length){
	    $('.store-slideshow .store-images').slick({
			  slidesToShow: 1,
			  slidesToScroll: 1,
			  prevArrow: '<div class="slick-arrow arrow-left"></div>',
	      nextArrow: '<div class="slick-arrow arrow-right"></div>',
        focusOnSelect: false,
        accessibility: false   
			});
    }
  },
  
  resize:function(){
    
  },  
  scroll: function(){
    
  }
};
module.exports = stores_2018;