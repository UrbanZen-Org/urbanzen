'use strict';

var $ = require('jquery');
var lazysizes = require('lazysizes');
var unveilhooks = require('unveilhooks');
var Cookies = require('js-cookie');


var global = {
  init: function(){
  },

  ready: function(){
    this.downArrow();
    this.lazyload();
    this.newsletterPopup.init();
    this.menu();
    this.accordian();
  },
  
  resize:function(){
    
  },  
  scroll: function(){
    
  },
  accordian : function(){
    console.log('hi');
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
    
    nav_link.click(function(e){
      if ($(this).parent().find('ul').length){
        e.preventDefault();
        $(this).parent().find('ul').toggleClass('open');
        $(this).parent().toggleClass('current-menu-parent');
        console.log($(this).parent().find('ul'));
      }
    });
    $('.menu-link').click(function(e){
      $('body').toggleClass('lock-scroll');
      $('body').toggleClass('menu-open');
    });
  },


  downArrow: function(){
    if ($('.down-arrow').length){
      $('.down-arrow').click(function() {
        var target = $(this).data('target');
        var nextSection = $(target).offset().top;
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
      if($('.newsletter_popup').length){
        if (!Cookies.get('newsletter')){
          Cookies.set('newsletter', 7, { expires: 7 });
          this.open();
        }        
        this.actions();
      }    
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
      $('.newsletter_popup').addClass('open');
      $('body').addClass('lock-scroll');
    },
    close: function(){
      $('.newsletter_popup').removeClass('open');
      $('body').removeClass('lock-scroll');
    }
  }
};

module.exports = global;


