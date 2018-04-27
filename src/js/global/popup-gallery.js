'use strict';

var $ = require('jquery');

var popupgallery = {
  init: function(){

  },

  ready: function(){
    var self = this;
    $('[data-popup-gallery=true]').each(function(i,v){
      var $imgs = $(v).find('img').clone();
      $('body').append(`<div class="popup-gallery" id="`+ $(this).attr('data-gallery-id') +`"><div class="slides"><div class="close"></div></div>`);
      $imgs.each(function(i,v){
        //console.log(v);
        $('.popup-gallery .slides').append('<div class="slide"><div class="slide-inner">'+ v.outerHTML +'<div class="caption">'+ v.title +'</div></div></div>');
              
      });
      self.createGallery($('#' + $(this).attr('data-gallery-id') + ' .slides'));

    });
    $('[data-popup-gallery=true] img').click(function(){
      var idx = $('[data-popup-gallery=true] img').index($(this));
      var gallery_id = $(this).closest('[data-popup-gallery=true]').attr('data-gallery-id');
      console.log(gallery_id);
      var gallery = $('#'+gallery_id);
      gallery.find('.slides').slick('slickGoTo', idx);
      gallery.addClass('visible');
      $('body').addClass('lock-scroll');
    });
    
    $('.popup-gallery .slides').click(function(e){
      e.stopPropagation();
      e.preventDefault();
    });
    $('.popup-gallery, .popup-gallery .slides .close').click(function(e){
      $('.popup-gallery').removeClass('visible');
      $('body').removeClass('lock-scroll');
    });
    
  },
  
  resize:function(){
    
  },  
  scroll: function(){
    
  },
  createGallery: function(slider){
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
      arrows : true,
      infinite: true,
      slide: '.slide',
      speed: 1000
    };
    $(slider).slick(options);
  }
};

module.exports = popupgallery;


