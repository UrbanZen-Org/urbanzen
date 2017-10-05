'use strict';

var $ = require('jquery');

var cart = {
  init: function(){
  },

  ready: function(){
   this.observe();
  },
  
  resize:function(){
    
  },  
  scroll: function(){
    
  },
  observe : function() {
    const origOpen = XMLHttpRequest.prototype.open;
    XMLHttpRequest.prototype.open = function() {
      this.addEventListener('load', function(response) {
        //console.log(response);
        if (this.readyState !== 4) {
          return false;
        }
        if (this.status === 200) {
          if (
            (
              (this._url && this._url.indexOf("cart/add.js") !== -1) ||
              (this._url && this._url.indexOf("cart/update.js") !== -1) ||
              (this._url && this._url.indexOf("cart/clear.js") !== -1) ||
              (this._url && this._url.indexOf("cart.js") !== -1) ||
              (this._url && this._url.indexOf("cart/change.js") !== -1)
            ) && (
              this._method !== "GET"
            )
          ) {
            var $cart_count = $('[data-cart-count]');
            var curr_cart_count = parseInt($cart_count.text().replace(/["'()]/g,""));
            $cart_count.text('('+ (curr_cart_count + 1) +')');
            //$('body').addClass('drawer-right-open');
            if($('[data-quick-overlay].open').length){
              var filtered_modules = uz.modules.filter(function(v){
                return (v.quickShop);
              });
              var shop_module = filtered_modules[0];
              
              // var product_image = $('.quick-shop [data-quick-image]').src;
              // var product_link = $('.quick-shop [data-quick-title] a').attr('href');
              // var variant_id = $('.quick-shop data-variant-input:checked').val();
              // var $variant = $('.quick-shop data-variant-input:checked').parent();
              // var title = $('.quick-shop [data-quick-title] a').text();
              // var color = $variant.data('color');
              // var size = $('.quick-shop [data-variant-label][for="variant_'+ variant_id +'"]').text();
              // var price = $variant.data('price');

              // var markup = 
              // `<li class="cart_item">
              //   <div class="cart_image">
              //     <a href="`+ product_link+`">
              //       <img src="`+ product_image+`" alt="Cross Over Neck Blouse - Ivory Silkcharmeuse / S">
              //     </a>
              //   </div>
              //   <div class="cart-meta">
              //     <a href="`+ product_link +`">
              //       <div class="item_title">`+ title +`</div>
              //       <div class="item_title">`+ color+` / `+ size +`</div>
              //       <strong class="price">$`+ price +`</strong>
              //     </a>
              //     <p class="mm-counter">
              //       <input type="number" min="0" class="quantity" name="updates[]" id="updates_36775306177" value="1">
              //       <span class="remove">remove</span>
              //     </p>
              //   </div>
              // </li>`;
              //$('#cart ul').append(markup);
              shop_module.quickShop.close();
              window.location = '';
            }
          }
        }

      });
      origOpen.apply(this, arguments);
    };
  }
};

module.exports = cart;


