'use strict';

var $ = require('jquery');

var runway = {
  init: function(){
  },

  ready: function(){
  	if ($('.signature-look-slides').length){
  		$('.signature-look-slides').slick({
  			prevArrow: '<div class="slick-arrow arrow-left"></div>',
	      nextArrow: '<div class="slick-arrow arrow-right"></div>',
			  infinite: true,
			  slidesToShow: 3,
			  slidesToScroll: 1,
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
  	if ($('.behind-the-scenes-slides').length){
  		$('.behind-the-scenes-slides').slick({
  			prevArrow: '<div class="slick-arrow arrow-left"></div>',
	      nextArrow: '<div class="slick-arrow arrow-right"></div>',
			  infinite: true,
			  slidesToShow: 3,
			  slidesToScroll: 1,
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

module.exports = runway;


