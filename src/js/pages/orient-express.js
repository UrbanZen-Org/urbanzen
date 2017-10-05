'use strict';

var $ = require('jquery');
var imagesLoaded = require('imagesloaded');
var slick = require('slick-carousel');
var VimeoPlayer = require('@vimeo/player');

var express = {
  init: function(){
  },

  ready: function(){
  	if($('.orient-express-fall-17 .full-slideshow').length){
      $('.orient-express-fall-17 .full-slideshow .slide').each(function(){
        var $self = $(this);
        imagesLoaded($(this), function(){
          $self.addClass('loaded');
        });

      });
  	  }
  	if ($('.carousel').length){

      
	    $('.carousel').slick({
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

  	setTimeout(function(){
			$('.slides .slide:first-child .slide-info').addClass('loaded');
		},1000);
	
  },
  
  resize:function(){
    
  },  
  scroll: function(){
    
  },
  vimeo: {
    vid : null,
    init: function(){
      var self = this;
      $('.slide.vimeo').each(function(i,slide){      
      	var slide_id = $(this).find('.video-player').attr('id');
        var options = {
          id: $(this).attr('data-video-id'),
          loop: false,
          autoplay: true,
          byline: false,
          portrait: false,
          title: false,
          background: true
        }; 
        self.vid = new VimeoPlayer(slide_id, options);
        self.vid.loadVideo($(this).attr('data-video-id'));
       });
    },
  }
};
module.exports = express;