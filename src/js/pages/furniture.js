'use strict';

var $ = require('jquery');

var furniture = {
  init: function(){
  },

  ready: function(){
  	$('.email-popup-trigger').click(function(){
  		$('.email-overlay').addClass('open');
  	});
  	$('.email-popup .close, .email-overlay').click(function(){
  		$('.email-overlay').removeClass('open');
  	});
  	$('.email-popup').click(function(e){
  		e.stopPropagation();
  	});
  },
  
  resize:function(){
    
  },  
  scroll: function(){
    
  }
};

module.exports = furniture;


