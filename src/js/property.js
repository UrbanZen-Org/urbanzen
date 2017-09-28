'use strict';

var $ = require('jquery');

var property = {
	init: function(){
	},

	ready: function(){
		this.singlePropertySlideshow();
	},

	resize:function(){
	},

	scroll: function(){
	},

	singlePropertySlideshow: function() {
		console.log( $('.property-slideshow') );

		 $('.property-slideshow').slick({
		 	slide : 'img',
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  arrows: false,
		  infinite: true,
		  // fade: true,
		  asNavFor: '.property-slideshow-nav',
		  accessibility: false,
		});
		$('.property-slideshow-nav').slick({
			slide : 'img',
		  slidesToShow: 5,
		  slidesToScroll: 1,
		  asNavFor: '.property-slideshow',
		  dots: false,
		  arrows: true,
		  centerMode: false,
		  focusOnSelect: true,
		  infinite: true,
		  accessibility: false,
		  responsive: [
		    {
		      breakpoint: 1024,
		      settings: {
		        slidesToShow: 4,
		        slidesToScroll: 3,
		      }
		    },
		    {
		      breakpoint: 600,
		      settings: {
		        slidesToShow: 3,
		        slidesToScroll: 2
		      }
		    }
		  ]
		});


	}

};
module.exports = property;