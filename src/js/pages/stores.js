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
      $('.stores-list .store-item').on('click',function(e){

      });
      $('.stores-list .store-item .accordian-section').on('click',function(e){
        if ($(this).hasClass('open')){
          $('.stores-slideshow .slides').slick('slickGoTo', $(this).parent().index());
          history.pushState(null, null, '#'+$(this).parent().attr('id'));
        }
      });
      $('.retail-partners').on('click',function(e){
        $('.stores-slideshow .slides').slick('slickGoTo', 3);
      });
  	}
    if(window.location.hash) {
      $('.store-item' + window.location.hash + ' .accordian-title').trigger('click');
      
    }
  },
  
  resize:function(){
    
  },  
  scroll: function(){
    
  }
};
module.exports = express;