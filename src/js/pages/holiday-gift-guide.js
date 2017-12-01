'use strict';

var $ = require('jquery');


var gift = {
  init: function(){
  },
  ready: function(){
  	$('gift-section-products').masonry({
  		itemSelector: '.gift'
  	});
  },
  scroll: function(){

  },
  resize: function(){

  }
};
module.exports = gift;
