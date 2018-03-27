'use strict';

var $ = require('jquery');
var fullpage = require('fullpage.js');

var spring_home = {
  init: function(){
  },

  ready: function(){
    $('#fullpage').fullpage({
      scrollBar: true
    });
    $('.section .down-arrow').click(function(){
			$.fn.fullpage.moveSectionDown();
    });    
  },
  
  resize:function(){
    
  },  
  scroll: function(){
    
  }
};
module.exports = spring_home;