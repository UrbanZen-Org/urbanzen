'use strict';

var $ = require('jquery');
var imagesLoaded = require('imagesloaded');
var slick = require('slick-carousel');

var spring_home = {
  init: function(){
  },

  ready: function(){
    var slider = $('[data-slide-count]').filter(function() {
      return $(this).attr('data-slide-count') > 1;
    });
    if (slider.length){
      var self = this;
      $(slider).each(function(){
        var $self = $(this);
        imagesLoaded($(this), function(){
          self.slideshow($self);
        });

      });
    }
  },
  
  resize:function(){
    
  },  
  scroll: function(){
    
  },
  slideshow: function(slider){
      $(slider).on('beforeChange', function(event, slick, currentSlide, nextSlide){
      
      var currentSlideClasses = slick.$slides[currentSlide].className;
      if(currentSlideClasses.indexOf('video') !== -1){
        var video = $(slick.$slides[currentSlide]).find('video')[0];
        // video.pause();
      }
      var slideClasses = slick.$slides[nextSlide].className;
      
        if(slideClasses.indexOf('video') !== -1){
          var video = $(slick.$slides[nextSlide]).find('video')[0];
          if ( video.readyState === 4 ) {
            $(slick.$slides[nextSlide]).addClass('loaded');
            video.play();
            video.currentTime = 0;
          }
        }
      
      });
      $(slider).on('init', function(event,slick){
        var slideClasses = slick.$slides[0].className;
          if(slideClasses.indexOf('video') !== -1){
            var video = $(slick.$slides[0]).find('video')[0];
            
              $(slick.$slides[0]).addClass('loaded');
              video.play();         
            
          }
      });

      var options = {
        prevArrow: '<div class="slick-arrow arrow-left"></div>',
        nextArrow: '<div class="slick-arrow arrow-right"></div>',
        fade: true,
        arrows : false,
        dots: true,
        infinite: true,
        autoplay: 4000,
        slide: '.slide',
        speed: 1000
      };
      $(slider).slick(options);
    }
};
module.exports = spring_home;