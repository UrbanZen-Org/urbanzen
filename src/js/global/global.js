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
  },
  
  resize:function(){
    
  },  
  scroll: function(){
    
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
          Cookies.set('newsletter', 1, { expires: 1 });
          this.actions();
          this.open();
        }        
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


