'use strict';

var $ = require('jquery');

var homepage = {
  init: function(){
  },

  ready: function(){

  	//Hacky but I can't get to the settings for the search widget because the theme doesn't support widgets :/
  	$('select#locations > option:first-child').text('Select a Neighborhood');

  	$('select#locations').on('change', (event) => {
  		if(event.target.value) {
				$('select#locations').addClass('with-value');
  		} else {
				$('select#locations').removeClass('with-value');
  		}
  	})
  },

  resize:function(){
  },

  scroll: function(){
  }

};
module.exports = homepage;