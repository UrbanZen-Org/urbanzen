'use strict';

var $ = require('jquery');
var waypoints = require("waypoints/lib/jquery.waypoints.js");
var inview = require("waypoints/lib/shortcuts/inview.js");
var fullpage = require('fullpage.js');

var home = {
  init: function(){
  },

  ready: function(){
    if($('.mobile-slides').length){
      this.slidesFadeIn();
    }
    $('.mobile-slides.homepage-slides').fullpage({
      scrollBar: true
    });
  },
  
  resize:function(){
    
  },  
  scroll: function(){
    
  },
  slidesFadeIn : function(){
    $('.mobile-slides.homepage-slides .mobile-slide').each(function(){
      var slide = $(this);
      var waypoint = new Waypoint({
        element: slide[0],
        handler: function(direction) {
          slide.find('.fp-tableCell').addClass('visible');
        },
        offset: '10%'
      })
    });
  }
};
module.exports = home;