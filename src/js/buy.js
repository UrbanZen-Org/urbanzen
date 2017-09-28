'use strict';

var $ = require('jquery');

var buypage = {
  init: function(){
  },

  ready: function(){
  	this.propertySlideshow();
  },
  
  resize:function(){
  },
  
  scroll: function(){
  },

  propertySlideshow: function() {
	   $('.top-slideshow').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      infinite: true,
      // fade: true,
      adaptiveHeight: true,
      asNavFor: '.top-slideshow-nav',
      accessibility: false,
    });
    $('.top-slideshow-nav').slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      asNavFor: '.top-slideshow',
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
module.exports = buypage;