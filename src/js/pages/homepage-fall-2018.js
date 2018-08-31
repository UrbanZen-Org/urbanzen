'use strict';

var $ = require('jquery');
var imagesLoaded = require('imagesloaded');
var slick = require('slick-carousel');
var homepage = $('.page-home-fall-2018');

var home_2018 = {
  init: function(){
  },

  ready: function(){
    $('.event-mailchimp-form form').submit(function(){
      $('.event-mailchimp-form').removeClass('open');
      $('body').removeClass('lock-scroll');
    });
    $('.event-mailchimp-form form i').click(function(){
      $('.event-mailchimp-form').removeClass('open');
      $('body').removeClass('lock-scroll');
    });
    $('.inquire-button').click(function(){
      $('.event-mailchimp-form').addClass('open');
      $('body').addClass('lock-scroll');
    });
    homepage.find('.top-slider').css({
      'max-height': window.innerHeight
    });
    homepage.find('.top-slider').slick({
        fade: true,
        appendDots: '.top-slider-nav',  
        dots : true,
        arrows : true,
        autoplay: 1,
        autoplaySpeed: 2000,
        speed: 500,
        pauseOnHover: false,
        pauseOnFocus: false,
        rows:0,
        slide: 'figure',
        prevArrow: '<div class="slick-arrow arrow-left"></div>',
        nextArrow: '<div class="slick-arrow arrow-right"></div>'
      });
      homepage.find('.accessories-slider').slick({
        arrows : false,
        dots: false,
        rows:0,
        slide: 'figure',
        autoplay: 1,
        autoplaySpeed: 3000,
        speed: 1000,
        fade:true,
        prevArrow: '<div class="slick-arrow arrow-left"></div>',
        nextArrow: '<div class="slick-arrow arrow-right"></div>'
      });
      homepage.find('.callout-items').slick({
        fade: true,
        appendDots: '.pages-slider-nav',
        dots : true,
        arrows : false,
        autoplay: 1,
        autoplaySpeed: 3000,
        speed: 1000,
        pauseOnHover: false,
        pauseOnFocus: false,
        rows:0,
        slide: 'figure',
        prevArrow: '<div class="slick-arrow arrow-left"></div>',
        nextArrow: '<div class="slick-arrow arrow-right"></div>',
        mobileFirst: true,
         responsive: [
            {
                breakpoint: 769,
                settings: 'unslick'
            }
        ]
      });
  },
  
  resize:function(){
  },  
  scroll: function(){
    if($(document).scrollTop() > 300){
      $('nav').addClass('scrolled');
    }else{
      $('nav').removeClass('scrolled');
    }
    
  }
};
module.exports = home_2018;