'use strict';

var $ = require('jquery');
var lazysizes = require('lazysizes');
var unveilhooks = require('unveilhooks');
var Cookies = require('js-cookie');
var Parallax = require('scroll-parallax');
var Isotope = require('isotope-layout');
var imagesLoaded = require('imagesloaded');

var openOnScroll = function(){
  if ($(window).scrollTop() > 100){
    global.newsletterPopup.open();
  }
};

var global = {
  init: function(){
  },

  ready: function(){
    this.downArrow();
    this.lazyload();
    this.newsletterPopup.init();
    this.menu();
    this.accordian();
    this.mailchimpSignup.init();
    this.parallax();
    this.isoImages();
    this.centeredSlideshow();
  },
  parallax: function(){
    var p = new Parallax('.parallax').init();
  },
  resize:function(){
    
  },  
  scroll: function(){
    
  },
  accordian : function(){
    if ($('.accordian-section').length) {
      
      $('.accordian-title').click(function(e) {
          var accordianParent = $(this).parent();
          var accordianText = accordianParent.find('.accordian-content').first();
          
          if(accordianParent.hasClass('open')) {
            accordianParent.removeClass('open');
            accordianParent.find('.accordian-content').slideUp(300);
            accordianParent.find('.accordian-section').removeClass('open')
          }else{
            accordianParent.addClass('open');
            accordianText.slideDown(300);
          }
          e.preventDefault();
      });
    }
  },
  menu:  function(){

    var nav_link = $('nav.top-menu li a');
    if ($(window).width() < 1023){
      nav_link.click(function(e){
        var link = $(this);
        if ($(this).parent().find('ul').length){
          e.preventDefault();

          var parent_ul = $(this).parent().find('ul');

          if (parent_ul.hasClass('open')){
            parent_ul.removeClass('open').slideUp(300);
            parent_ul.find('ul').removeClass('open');
            $(this).parent().find('ul li').removeClass('current-menu-parent');
          }else{
            parent_ul.first().addClass('open').slideDown(300);
            parent_ul.parent().siblings().find('ul').removeClass('open').slideDown(300);
            parent_ul.parent().siblings().removeClass('current-menu-parent');
            $('.main-menu').animate({
              scrollTop: link.parent().position().top - 80
            }, 400);
          }
          $(this).parent().toggleClass('current-menu-parent');
          
        }
      });
    }
    $('.menu-link').click(function(e){
      $('body').toggleClass('lock-scroll');
      $('body').toggleClass('menu-open');
      $('body').removeClass('cart-open');
    });
  },
  centeredSlideshow : function(){
    if ($('.centered-slideshow').length){
      
      $('.centered-slideshow .slides').each(function(){
        var options = {
          arrows : true,
          speed: 300,          
          prevArrow: '<div class="slick-arrow arrow-left"></div>',
          nextArrow: '<div class="slick-arrow arrow-right"></div>',
        };
        
        $(this).slick(options);
      });
      
    }
  },
  isoImages: function(){
    if ($('.iso-images').length){
      $('.iso-images').addClass('hidden');
      $('.iso-images').each(function(){
        var self = this;
        imagesLoaded($(self), function(){
          var grid = $(self)[0];
          var iso = new Isotope( grid, {
            itemSelector: '.iso-image',
            percentPosition: true,
            masonry: {
              columnWidth: '.iso-image-sizer'
            }
          });
          $('.iso-images').toggleClass('hidden');
        });
      });
      
    }
  },
  downArrow: function(){
    if ($('[data-target]').length){
      $('[data-target]').click(function() {
        var target = $(this).data('target');
        console.log(target);
        if ($(window).width > 1023 ){
          var nextSection = $(target).offset().top - 50;  
        }else{
          var nextSection = $(target).offset().top;  
        }
        
        $("html, body").animate({ scrollTop: nextSection });
      });
    }
  },
  lazyload: function(){
    document.addEventListener('lazybeforeunveil', function(e){
      var bg = e.target.getAttribute('data-bg');
      if(bg){
        e.target.style.backgroundImage = 'url(' + bg + ')';
      }
    });
  },
  newsletterPopup: {
    init: function(){
      if($('.newsletter_popup').length && $('.shop-by-look').length){
        if (!Cookies.get('newsletter')){
          Cookies.set('newsletter', 1, { expires: 1 });
          console.log('newsed');
          this.scroll();
        }        
        this.actions();
      }   
 
    },
    scroll: function(){
      var self = this;
      document.addEventListener('scroll', openOnScroll);
    },
    actions: function(){
      var self = this;
      $('.newsletter_popup,.newsletter_popup .close').click(function(e){
        self.close();
      });
      $('.newsletter_popup .popup-body').click(function(e){
        e.stopPropagation();
      });
      $('.newsletter-callout').click(function(e){
        self.open();
      });
    },
    open: function(){
      var self = this;
      $('.newsletter_popup').addClass('open');
      $('body').addClass('lock-scroll');
      document.removeEventListener('scroll', openOnScroll);
    },
    close: function(){
      $('.newsletter_popup').removeClass('open');
      $('body').removeClass('lock-scroll');
    }
  },
  
   mailchimpSignup :{
    init : function() {
      var self = this;
      $('.newsletter-signup').submit(function(e){
        self.subscribe(e, self);
      });
    },
    form : $('.newsletter-signup'),

    subscribe : function(e, self){
      e.preventDefault();
      var form = self.form,
          td = $('.newsletter-signup').attr('data-td'),
          link = td + '/assets/includes/mc_subscribe.php',
          request = $.ajax({
                      url: link,
                      type: 'POST',
                      data : $('.newsletter-signup').serialize()
                    });
      request.done(self.handleResponse);
    },

    handleResponse : function(response){
      function outputMessage(msg){
        $('.newsletter-signup').find('input[type=text]').val('');
        $('.newsletter-signup').find('input[type=text]').blur();
        $('.newsletter-signup').find('input[type=text]').attr('placeholder',msg);
      };
      var form = this.form;
      var resp = JSON.parse(response);          
      if (resp.title == 'Member Exists') {
        outputMessage('Already suscribed, thanks!');        
      } else if (resp.title == 'Invalid Resource' || resp.title == 'Internal Server Error') {
        outputMessage('Invalid Email');
      } else if (resp.status == 'subscribed') {
        outputMessage('Thanks!');
      }else{
        outputMessage('Invalid Response');
      }
    }
  }, // End mailchimpSignup
};

module.exports = global;


