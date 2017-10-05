'use strict';

var $ = require('jquery');
var imagesLoaded = require('imagesloaded');
var slick = require('slick-carousel');

var ourStory = {
  init: function(){
  },

  ready: function(){

    if ($('.page-our-story').length){
      var self = this;
      $('.page-our-story .full-slideshow .slide').each(function(){
        var $self = $(this);
        imagesLoaded($(this), function(){
          $self.addClass('loaded');
        });

      });
      this.resize();
    }
  },
  
  resize:function(){
    if ($('.page-our-story').length){
      // reslick only if it's not slick()
    if ($(window).width() < 768) {
      if ($('.our-story .full-slideshow .slides').hasClass('slick-initialized')) {
        $('.our-story .full-slideshow .slides').slick('unslick');
      }
      return
    }

    if (!$('.our-story .full-slideshow .slides').hasClass('slick-initialized')) {
      this.slideshow();
    }
  }
  
    
  },  
  scroll: function(){
    
  },
  slideshow: function(){
      $('.our-story .full-slideshow .slides').on('beforeChange', function(event, slick, currentSlide, nextSlide){
      
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
      $('.our-story .full-slideshow .slides').on('init', function(event,slick){
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
        fade: false,
        arrows : true,
        infinite: true,
        slide: '.slide',
        speed: 1000,
        autoplay: 4000
      };
      $('.our-story .full-slideshow .slides').slick(options);
    }
};
module.exports = ourStory;