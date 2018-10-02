'use strict';

var $ = require('jquery');
var VimeoPlayer = require('@vimeo/player');
var Parallax = require('simple-parallax-jquery');

var supersaturday = {
  init: function(){
  },

  ready: function(){
    if ($('.video-item').length){
      this.video.init();
    }
    // var p = new Parallax('.parallax',{
    //   offsetYBounds: 50,
    //    intensity: 50,
    //    center: 1
    // }).init();
    // console.log('par');
  },
  
  resize:function(){
    
  },  
  scroll: function(){
    
  },
  video: { 
    vid : null,
    init: function(){
      var self = this;
      $('.video-item').each(function(){
        $(this).click(function(){
          var $this = $(this);
          var options = {
            id: $this.attr('data-video-id'),
            width: 1200,
            loop: false,
            byline: false,
            title: false,
            color: '926d40'
          }; 
          $this.data('options', options);
          
          var new_player = new VimeoPlayer('video', $this.data('options'));
          $this.data('vid', new_player);
          $this.data('vid').loadVideo($this.attr('data-video-id'));          
          $('.video-overlay').addClass('video-open');
          $('body').addClass('lock-scroll');
        });
      });
      $('.video-overlay').click(function(){
        // $('.video-overlay #video').pause();
        $('.video-overlay').removeClass('video-open');
        $('body').removeClass('lock-scroll');
      });
      $('.video-overlay #video iframe').click(function(e){
        e.stopPropagation();
      });
    },
  }
};
module.exports = supersaturday;