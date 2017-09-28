'use strict';

var $ = require('jquery');

var aboutpage = {
  init: function(){
  },

  ready: function(){
  	this.quotesSlideshow();
    this.teamMemberTakeover();
  },
  
  resize:function(){
  },
  
  scroll: function(){
  },

  quotesSlideshow: function() {
	  $('.quotes-slideshow').slick({
	    adaptiveHeight: true,
      autoplay: true,
      autoplaySpeed: 2000,
      dots: true,
      easing: 'ease-in-out',
      speed: 1000,
      accessibility: false,
	  });
  },

  teamMemberTakeover: function() {
    $('.team-member-takeover .team-member-slides').slick({
      prevArrow: '.nav .next',
      nextArrow: '.nav .prev',
      fade: true
    });

    $('a.team-card').click(function(event){
      event.preventDefault();
      $('.team-member-takeover .team-member-slides').slick('slickGoTo', $(event.currentTarget).closest('.col').index());
      $('.team-member-takeover').addClass('open');

    });
    
    $('.close-team-member,.team-member-takeover').click(function(){
      $('.team-member-takeover').removeClass('open');
    });
    $('.team-member-takeover .card').click(function(e){
      e.stopPropagation();
    });
  }

};
module.exports = aboutpage;