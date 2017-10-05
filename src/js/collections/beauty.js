'use strict';

var $ = require('jquery');
var waypoints = require("waypoints/lib/jquery.waypoints.js");
var inview = require("waypoints/lib/shortcuts/inview.js");
var imagesLoaded = require('imagesloaded');

var beauty = {
  init: function(){
  },

  ready: function(){
    var self = this;
    if($('.beauty-categories').length){
      $('nav[role=navigation] li.shop').addClass('selected');
      imagesLoaded($('.beauty-categories')[0], function(){
        self.categoriesFadeIn();
      });
    }
  },
  
  resize:function(){
    
  },  
  scroll: function(){
    
  },
  categoriesFadeIn : function(){
    $('.beauty-categories .beauty-category').each(function(){
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
module.exports = beauty;