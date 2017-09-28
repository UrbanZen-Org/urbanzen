'use strict';

var $ = require('jquery');
window.jQuery = window.$ = require("jquery");

var projects = {
  init: function(){
    
  },

  ready: function(){
    this.arrangeThumbs()
  },
  
  resize:function(){
  },
  
  scroll: function(){
  },

  arrangeThumbs: function () {
    $('.project-grid .col-8').prev('.col-4').addClass('heightened')
  }

};
module.exports = projects;
