'use strict';

var $ = require('jquery');
var waypoints = require("waypoints/lib/jquery.waypoints.js");
var inview = require("waypoints/lib/shortcuts/inview.js");
var imagesLoaded = require('imagesloaded');

var gift = {
  init: function(){

  },
  ready: function(){
  	this.giftsFadeIn();
  },
  scroll: function(){


  },
  resize: function(){

  },
  giftsFadeIn : function(){
    $('.gift').each(function(){
      
      var gift = $(this);
      //console.log(gift);

      var waypoint = new Waypoint.Inview({
        element: gift[0],
      entered: function(direction) {
          gift.addClass('visible');
        }
      })

    });
  }
};
module.exports = gift;
