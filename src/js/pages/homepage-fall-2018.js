'use strict';

var $ = require('jquery');
var imagesLoaded = require('imagesloaded');
var slick = require('slick-carousel');
var homepage = $('.page-home-fall-2018');

var home_2018 = {
  init: function(){
  },

  ready: function(){
    homepage.find('.top-slider').css({
      'max-height': $(window).innerHeight
    });
    homepage.find('.top-slider').slick({
        fade: true,
        appendDots: '.top-slider-nav',
        dots : true,
        arrows : false,
        autoplay: 1,
        autoplaySpeed: 4000,
        speed: 1000,
        pauseOnHover: false,
        pauseOnFocus: false,
        rows:0,
        slide: 'figure',
        prevArrow: '<div class="slick-arrow arrow-left"></div>',
        nextArrow: '<div class="slick-arrow arrow-right"></div>'
      });
      homepage.find('.category-slider').slick({
        appendDots: '.top-slider-nav',
        arrows : true,
        rows:0,
        slide: 'figure',
        slidesToShow: 2,
        slidesToScroll: 1,
        prevArrow: '<div class="slick-arrow arrow-left"></div>',
        nextArrow: '<div class="slick-arrow arrow-right"></div>'
      });
      homepage.find('.page-callouts').slick({
        fade: true,
        appendDots: '.pages-slider-nav',
        dots : true,
        arrows : false,
        autoplay: 1,
        autoplaySpeed: 4000,
        speed: 1000,
        pauseOnHover: false,
        pauseOnFocus: false,
        rows:0,
        slide: 'figure',
        prevArrow: '<div class="slick-arrow arrow-left"></div>',
        nextArrow: '<div class="slick-arrow arrow-right"></div>'
      });
  },
  
  resize:function(){
  },  
  scroll: function(){
    
  }
};
module.exports = home_2018;