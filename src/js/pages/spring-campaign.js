'use strict';

var $ = require('jquery');
var imagesLoaded = require('imagesloaded');
var slick = require('slick-carousel');

var spring_campaign = {
  init: function(){
  },

  ready: function(){
    this.slider();
  },
  
  resize:function(){
    
  },  
  scroll: function(){
    
  },
   slider: function(){
    if ($('.image-slider').length){
      var options = {
        arrows : true,
        speed: 300,
        variableWidth: true,
        prevArrow: '<div class="slick-arrow arrow-left"></div>',
        nextArrow: '<div class="slick-arrow arrow-right"></div>',
        responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            variableWidth: false
          }
        }
      };
      
      $('.image-slider').slick(options);
    } 
  },
};
module.exports = spring_campaign;