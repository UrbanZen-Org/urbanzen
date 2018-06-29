'use strict';

var $ = require('jquery');

var spring_campaign = {
  init: function(){
  },

  ready: function(){
    $('.santa-fe-outfits .caption').click(function(){
      var overlay = $('.designer-overlay');
      var popup_info = $(this).find('.caption-popup').clone();

      overlay.find('.caption-content').empty().append(popup_info);
      overlay.addClass('open');
    });
    $('.designer-overlay .caption-popup').click(function(e){
      e.preventDefault();
      e.stopPropagation();
    });
    $('.designer-overlay, .designer-overlay .close-overlay, .designer-overlay .cta-button').click(function(e){
      $('.designer-overlay').removeClass('open');
    });
  },
  
  resize:function(){
    
  },  
  scroll: function(){
    
  },

};
module.exports = spring_campaign;