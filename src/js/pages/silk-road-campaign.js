'use strict';

var $ = require('jquery');

var silkroad = {
  init: function(){
  },

  ready: function(){
		if ($('.page-silk-road-campaign .slides').length){
	    $('.slides').slick({
			  infinite: false,
			  slidesToShow: 4,
			  slidesToScroll: 4,
			  prevArrow: '<div class="slick-arrow arrow-left"></div>',
	      nextArrow: '<div class="slick-arrow arrow-right"></div>',
	      responsive: 
	      [
	        {
	          breakpoint: 768,
	          settings: {
	            slidesToShow: 2,
	            slidesToScroll: 2
	          }
	        }
	      ]
			});
	  }
	},
  resize:function(){
    
  },  
  scroll: function(){
    
  }
};
module.exports = silkroad;