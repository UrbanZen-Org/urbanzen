'use strict';

var $ = require('jquery');
window.jQuery = window.$ = require("jquery");
var waypoints = require("waypoints/lib/jquery.waypoints.js");
var inview = require("waypoints/lib/shortcuts/inview.js");

var journal = {
  init: function(){

  },

  ready: function(){

  },

  resize:function(){
  },

  scroll: function(){
    if($('.posts').length){
      this.blog.checkArchiveScroll();
    }
  },
  blog: {
    init : function(){

    },
    checkArchiveScroll : function(){
      var self = this;
      var waypoint = new Waypoint({
        element: document.getElementById('posts-bottom'),
        handler: function(direction) {
          if(direction == 'down' && ($('.posts:not(.loading)').attr('data-posts-remaining') > 0))
          {

            self.loader.init();
            self.get_posts();
          }else{

          }
        },
        offset: '95%'
      });
    },
    get_posts: function(){
      var self = this;
      var offset = $('.posts').attr('data-post-offset');
      var num = 4;
      var url = '/wp-json/wp/v2/posts/?offset='+ offset +'&per_page='+ num;
      $('.posts').addClass('loading');
      var request = $.ajax({
                      url: url,
                      type: 'GET'
                    });
      request.done(function(response){
        $('.posts').attr('data-posts-remaining', Math.floor($('.posts').attr('data-posts-remaining') - 4));
        $('.posts').attr('data-post-offset', Math.floor(parseInt($('.posts').attr('data-post-offset')) + 4));
        self.addToBlogList(response);
      });
    },
    addToBlogList : function(posts){
      var self = this;
      var $posts = "";
      $.each(posts, function(i,post){
        $posts += self.markupPost(post);
      });
      self.loader.set('100');
      $('.posts').append($posts);
      $('.posts').removeClass('loading');
    },
    loader : {
      init : function(){
        $('.endless-loader').addClass('loading');
        $('.endless-loader span').css('width', '100%');
      },
      set : function(num){
        if($('.endless-loader').hasClass('loading')){
          $('.endless-loader span').attr('data-percent', num);
        }
      }
    },
    markupPost : function(post){
      self = this;
      var url = '/wp-json/wp/v2/media/?id='+ post.featured_media;
      var markup = "";
      var category = "";
      console.log(post);
       var request = $.ajax({
                      url: url,
                      type: 'GET',
                      async: false
                    });
      request.done(function(response){
        var image = response[0].source_url;
                var link =  post.link;
        var title = post.title.rendered;
        self.loader.set('50');
        if (post.categories.length){
          var cat_req = $.ajax({
                        url: '/wp-json/wp/v2/categories/?id=1',
                        type: 'GET',
                        async: false
                      });

          cat_req.done(function(response){
            if (response.length > 0){
              var cat = response[0].name;
              category = `<h6 class="category light-text-color">`+ cat +`</h6>`;
            }
        });
        }
         markup = `
          <section class="margined">
            <div class="container">
              <a href="`+link+`" class="transition-link thumb journal-thumb">
                <img src="`+ image +`" alt="{{ item.thumbnail | alt }}">
                <div class="float-grid">
                  <div class="col">
                    <div class="article-info">
                      `+ category +`
                      <h3 class="article-title">` + title + `</h3>
                    </div>
                  </div>
                  <div class="col right">
                    `+ post.excerpt.rendered +`
                  </div>
                </div>
              </a>
            </div>
          </section>`;

      });
        return markup;
    }
  }

};
module.exports = journal;
