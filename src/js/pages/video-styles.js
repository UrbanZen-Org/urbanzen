'use strict';

var $ = require('jquery');
var VimeoPlayer = require('@vimeo/player');

var video_styles = {
  init: function(){
	},
  ready: function(){
  	var self = this;

  	if($('.video-style-module').length){
  		$('.video-style-module').each(function(i,v){
  			self.video_style_module.initVid($(v));
  		});
  	}

  },
  resize:function(){
    
  },  
  scroll: function(){
    
  },
 	video_style_module: { 
    vid : null,
    module : null,
    initVid: function($module){
      var self = this;
      $module.data('module', $module);
      $module.data('module').find('[data-product-link]').click(function(){
        $module.data('vid').pause();  
      });
      
      $module.data('module').find('.shop-callout').click(function(){

        $module.data('module').find('.shop-this-video').toggleClass('open');
        $module.data('module').find('.shop-callout').toggleClass('shop-open');
      });

        var vid_options = {
          id: $module.attr('data-video-id'),
          width: 1200,
          byline: false,
          title: false,
          color: '926d40'
        }; 
        var player = new VimeoPlayer($module.find('.module-video')[0], vid_options);
        $module.data('vid', player);
        $module.data('vid').loadVideo($(module).attr('data-video-id'));

				$module.find('.style-item').each(function(i,v){
					var timestamp = $(this).data('timestamp');
	    		$module.data('vid').addCuePoint(timestamp, {
						customKey: $(this).data('styleNumber')
					});
				});
				$module.data('vid').on('cuepoint', function(data) {
					var styleNumber = data.data.customKey;
					var slideNum =$module.data('module').find('.style-item[data-style-number='+ styleNumber +']:not(.slick-cloned)').data('slick-index');
					$module.data('module').find('.style-items').slick('slickGoTo', slideNum);
          
				});
				$module.data('vid').on('ended', function(data) {
					$module.data('vid').pause();
				});
				$module.data('module').find('.style-items').slick({
					slidesToShow: 3,
					slidesToScroll: 1,
					arrows: true,
					vertical: true,
					infinite: true,
					prevArrow: '<div class="slick-arrow arrow-up"></div>',
	      	nextArrow: '<div class="slick-arrow arrow-down"></div>',
				});			
    },
    play: function(){

  	},
  	pause: function(){

  	},	
  	stop: function(){

  	},
  	volume: function(val){

  	},
  	actions: function($module){
  		var self = this;

  	}
  }
 };

module.exports = video_styles;
