'use strict';

var $ = require('jquery');
var imagesLoaded = require('imagesloaded');
var slick = require('slick-carousel');
var VimeoPlayer = require('@vimeo/player');

var express = {
  init: function(){
  },

  ready: function(){
  	if ($('.stores-slideshow').length){
	    $('.stores-slideshow .slides').slick({
			  slidesToShow: 1,
			  slidesToScroll: 1,
			  prevArrow: '<div class="slick-arrow arrow-left"></div>',
	      nextArrow: '<div class="slick-arrow arrow-right"></div>',
        focusOnSelect: false,
        accessibility: false   
			});
      $('.stores-list .store-item .accordian-section').on('click',function(e){
        console.log($(this));
        if ($(this).hasClass('open')){
          $('.stores-slideshow .slides').slick('slickGoTo', $(this).parent().index());
        }
      });
      $('.retail-partners').on('click',function(e){
        $('.stores-slideshow .slides').slick('slickGoTo', 3);
      });
  	}	
  },
  
  resize:function(){
    
  },  
  scroll: function(){
    
  }
};
module.exports = express;