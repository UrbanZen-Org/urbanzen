'use strict';

var $ = require('jquery');
window.jQuery = window.$ = require("jquery");
var animsition = require('animsition');
var slick = require('slick-carousel');
var lazyload = require('jquery-lazyload/jquery.lazyload.js');
var scrollMonitor = require("scrollMonitor");
var parallax = require('scrollmonitor-parallax');
var eases = require('eases');
var autosize = require('autosize');

var global = {
  init: function(){
  },

  ready: function(){
    this.pageTransitions();
    this.lazyloadImages();
    this.headerScroll();
    this.menuToggle();
    this.scrollDown();
    this.moveContactLabels();
    if($('.mobile-expander').length) {
      this.mobileExpanders();
    }
    if($('.fancy-entrance').length) {
      this.entranceTransition();
    }
  },
  
  resize:function(){
  },
  
  scroll: function(){
    this.headerScroll();
    if($('.top-area.parallax').length) {
      this.parallaxTop();
    }
  },

  moveContactLabels: function () {
    $('.contact-form .field').each(function () {
      var input = $(this).find('span input');
      var textarea = $(this).find('span textarea');
      var label = $(this).find('span + label');
      input.attr('required', 'true');
      textarea.attr('required', 'true');
      label.insertAfter(input);
      label.insertAfter(textarea);

      autosize(textarea);
    });
  },

  lazyloadImages: function () {
    console.log('lazy')
    $("img.lazy").lazyload({
      effect : "fadeIn",
      threshold : 200
    });
  },

  headerScroll: function () {
    if ($(window).scrollTop() > 3) {
      $('body').addClass('scrolled');
    } else {
      $('body').removeClass('scrolled');
    }
  },

  mobileExpanders: function () {
    var expander = $('.mobile-expander');
    $(expander).click(function() {
      event.preventDefault();
      $(expander).next($('.mobile-collapsed')).addClass('open');
    });
    $('.close-panel').click(function() {
      event.preventDefault();
      $('.mobile-collapsed.open').removeClass('open');
    });
  },

  parallaxTop: function () {
    var scroll = $(window).scrollTop()
    $('.top-area.parallax .cover-area').css({
      'transform' : 'translate3d(0, '+ scroll * .5 + 'px, 0)'
    });

    // var topArea = $('body');
    // var topAreaImage = $('.top-area.parallax .cover-area');
    // var parallaxRoot = parallax.create($(document.body));
    // parallaxRoot.add(topAreaImage, .5);
  },

  entranceTransition: function () {
    var enterElement = $('.fancy-entrance');
    $(enterElement).each(function() {
      var element = this;
      var elementWatcher = scrollMonitor.create( element, -150 );
      elementWatcher.enterViewport(function() {
        $(element).addClass('entered');
      });
    });
  },

  menuToggle : function () {
    $('.menu-link').click( function() {
      $('body').toggleClass('menu-open')
    });
  },

  scrollDown : function () {
    $('.top-area a.down-arrow').click(function() {
      var nextSection = $('.top-area').next($('section')).offset().top;
      var headerHeight = $('header').innerHeight()
      $("html, body").animate({ scrollTop: nextSection - headerHeight + 'px' });
    });
  },

  pageTransitions: function () {
    $(".animsition").animsition({
      inClass: 'fade-in',
      outClass: 'fade-out',
      inDuration: 750,
      outDuration: 400,
      linkElement: '.transition-link',
      // linkElement: 'a:not([target="_blank"]):not([href^="#"]):not([href^="deadlink"])',
      // e.g. linkElement: 'a:not([target="_blank"]):not([href^="#"])'
      loading: true,
      loadingParentElement: 'body', //animsition wrapper element
      loadingClass: 'page-loading',
      loadingInner: '', // e.g '<img src="loading.svg" />'
      timeout: true,
      timeoutCountdown: 0,
      onLoadEvent: true,
      browser: [ 'animation-duration', '-webkit-animation-duration'],
      // "browser" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
      // The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
      overlay : false,
      overlayClass : 'animsition-overlay-slide',
      overlayParentElement : 'body',
      transition: function(url){ window.location.href = url; }
    });
  }

};
module.exports = global;