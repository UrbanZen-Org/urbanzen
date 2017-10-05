'use strict';

var $ = require('jquery');
var imagesLoaded = require('imagesloaded');
var slick = require('slick-carousel');

var homepage = {
  init: function(){
  },

  ready: function(){
    var self = this;
    if ($(window).width() > 768){
      setTimeout(function(){
        self.slideshow();
      },1000);
    }else{
      this.slidesFadeIn();
      $('.page-home .full-slideshow .slide').each(function(){
        var $self = $(this);
        imagesLoaded($(this), function(){
          $self.addClass('loaded');
        });
      });
    }
    self.home_audio();
  },
  
  resize:function(){
    
  },  
  scroll: function(){
    
  },
  slideshow: function(){
    if ($('.page-home .full-slideshow').length){
      $('.page-home .full-slideshow .slide').each(function(){
        var $self = $(this);
        imagesLoaded($(this), function(){
          $self.addClass('loaded');
        });
      });

     
      // imagesLoaded($('.full-slideshow')[0], function(){
      //   $('.full-slideshow').addClass('visible');
      // });
      var options = {
        fade: true,
        appendDots: '.full-slideshow-nav',
        arrows : false,
        slide: '.slide',
        autoplay: 1,
        autoplaySpeed: 4000,
        speed: 0,
        pauseOnHover: false,
        pauseOnFocus: false
      };
      $('.full-slideshow .slides').slick(options);
       $('.full-slideshow .slides').on('beforeChange', function(event, slick, currentSlide, nextSlide){
    
      var slideClasses = slick.$slides[nextSlide].className;
      
        if(slideClasses.indexOf('video') !== -1){
          var video = $(slick.$slides[nextSlide]).find('video')[0];
          if ( video.readyState === 4 ) {
            $(slick.$slides[nextSlide]).addClass('loaded');
              video.play();
          }
        }
      
      });
      $('.full-slideshow .slides').on('init', function(event,slick){
        var slideClasses = slick.$slides[0].className;
          if(slideClasses.indexOf('video') !== -1){
            var video = $(slick.$slides[0]).find('video')[0];
            
              $(slick.$slides[0]).addClass('loaded');
              video.play();         
            
          }
      });
        $('.full-slideshow .slides').on('afterChange', function(event, slick, currentSlide, nextSlide){
          var lastSlide = (currentSlide != 0 ) ? parseInt(currentSlide-1) : parseInt(slick.$slides.length - 1);
          console.log(lastSlide);
          var currentSlideClasses = slick.$slides[lastSlide].className;
          if(currentSlideClasses.indexOf('video') !== -1){
            var video = $(slick.$slides[lastSlide ]).find('video')[0];
            video.pause();
            video.currentTime = 0;    
          }
      });
    } 
  },
  home_audio: function(){
    if($('.sound-controls audio').length){
      $('.sound-controls').find('.material-icons').click(function(){
        var audio = $('.sound-controls').find('audio')[0];
        if (audio.duration > 0 && !audio.paused) {
          audio.pause();
          $('.sound-controls').removeClass('unmuted');
        } else {
          audio.play();
          $('.sound-controls').addClass('unmuted');
        }
      })
    }
  },
  slidesFadeIn : function(){
    $('.slides .slide').each(function(){
      
      var slide = $(this);
      //console.log(slide);
      slide.addClass('visible');
      var waypoint = new Waypoint.Inview({
        element: slide[0],
      entered: function(direction) {
          slide.addClass('visible');

        }
      })

    });
  }
};
module.exports = homepage;