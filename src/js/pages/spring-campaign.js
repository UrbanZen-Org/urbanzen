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
    imagesLoaded($('.image-slider'), function(){
    if ($('.image-slider').length){
      var options = {
        arrows : true,
        speed: 300,
        variableWidth: true,
        prevArrow: '<div class="slick-arrow arrow-left"></div>',
        nextArrow: '<div class="slick-arrow arrow-right"></div>',
        slide: 'img',
        responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            variableWidth: false
          }
        }]
      };
      $('.image-slider').on('init', function(event, slick, currentSlide, nextSlide){
        $(slick.$slider).find('.image-slider-caption').addClass('fade-in');
         $('.image-slider').addClass('fade-in');
      });
      $('.image-slider').slick(options);
      
      $('.image-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
        $(slick.$slider).find('.image-slider-caption').removeClass('fade-in');
        $(slick.$slider).find('.image-slider-caption p').text($(slick.$slides[nextSlide]).attr('data-caption'));
      });
      $('.image-slider').on('afterChange', function(event, slick, currentSlide, nextSlide){
        $(slick.$slider).find('.image-slider-caption').addClass('fade-in');
        $(slick.$slider).find('.image-slider-caption p').text($(slick.$slides[nextSlide]).attr('data-caption'));
      });
      

      }
    });
  },
};
module.exports = spring_campaign;