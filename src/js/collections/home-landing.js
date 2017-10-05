'use strict';

var $ = require('jquery');
var waypoints = require("waypoints/lib/jquery.waypoints.js");
var inview = require("waypoints/lib/shortcuts/inview.js");
var imagesLoaded = require('imagesloaded');

var home = {
  init: function(){
  },

  ready: function(){
    var self = this;
    if($('.home-categories').length){
      $('nav[role=navigation] li.shop').addClass('selected');
      imagesLoaded($('.home-categories')[0], function(){
        self.categoriesFadeIn();
      });
    }
  },
  
  resize:function(){
    
  },  
  scroll: function(){
    
  },
  categoriesFadeIn : function(){
    $('.home-categories .home-category').each(function(){
      var slide = $(this);
      var waypoint = new Waypoint.Inview({
        element: slide[0],
        enter: function(direction) {
          slide.find('.title-overlay').addClass('visible');
        }
      })
    });
  }
};
module.exports = home;