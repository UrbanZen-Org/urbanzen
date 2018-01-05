'use strict';

var $ = require('jquery');

var tabletop = {
  init: function(){
  },

  ready: function(){
  	if ($('.collection-slideshow').length){
  		$('.collection-slideshow .collection-slides').slick({
  			prevArrow: '<div class="slick-arrow arrow-left"></div>',
	      nextArrow: '<div class="slick-arrow arrow-right"></div>',
			  infinite: true,
			  slidesToShow: 1,
			  slidesToScroll: 1
  		});
  	}
  },
  resize:function(){
    
  },  
  scroll: function(){
    
  }
};

module.exports = tabletop;


