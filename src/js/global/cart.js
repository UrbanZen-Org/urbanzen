'use strict';

var $ = require('jquery');
var ShopifyBuy = require('shopify-buy');
var jsrender = require('jsrender');

window.cart = {
  init: function(){
  },

  ready: function(){
    window.shopClient = ShopifyBuy.buildClient({
      accessToken: 'f987f1824dd7e73305a2243a31c0d4be',
      domain: 'urban-zen-foundation.myshopify.com',
      appId: '63414003'
    });
    this.actions();
    this.updateQty();
    this.renderCartItems();
  },
  actions: function(){
    var self = this;
    $('.cart-info').click(function(){
      self.open();
    });

    $('.cart .close').click(function(){
      self.close();
    });
  },
  addToCart: function(productId, variantId){
    var self = this;
    window.shopClient.fetchProduct(productId)
    .then(function (product) {
      var variant;
      $.each(product.variants,function(i,v){
        if (v.id == variantId){
          return variant = v;
        }
      });
      window.shopClient.fetchRecentCart().then(function (cart) {
        cart.createLineItemsFromVariants({variant: variant, quantity: 1}).then(function (cart) {
          console.log(cart);
          var cartItem = cart.lineItems.filter(function (item) {
            return (item.variant_id === variant.id);
          })[0];
          var $cartItem = self.renderCartItem(cartItem);
          setTimeout(function () {
            self.open();
          }, 0);
          self.updateQty();
        });
        });
      });
  },
  open: function(){
    $('body').addClass('cart-open');
  },
  close: function(){    
    $('body').removeClass('cart-open');
  },
  resize:function(){

  },  
  scroll: function(){
    
  },
  renderCartItem: function(lineItem){
    jsrender.views.settings.delimiters("<%", "%>");
    var template = jsrender.templates("#CartItemTemplate");
    function formatAsMoney(amount, currency, thousandSeparator, decimalSeparator, localeDecimalSeparator) {
      currency = currency || '$';
      thousandSeparator = thousandSeparator || ',';
      decimalSeparator = decimalSeparator || '.';
      localeDecimalSeparator = localeDecimalSeparator || '.';
      var regex = new RegExp('(\\d)(?=(\\d{3})+\\.)', 'g');

      return currency + parseFloat(amount, 10).toFixed(2)
        .replace(localeDecimalSeparator, decimalSeparator)
        .replace(regex, '$1' + thousandSeparator)
        .toString();
    }

    var cartItem = {};
    cartItem.variantID = lineItem.variant_id;
    cartItem.image = lineItem.image.src;
    cartItem.title = lineItem.title;
    cartItem.variantTitle = lineItem.variant_title;
    cartItem.price = formatAsMoney(lineItem.line_price);
    cartItem.qty = lineItem.quantity;

    var cartItemMarkup = template.render(cartItem);
    $('.cart-items').append(cartItemMarkup);
  },
  renderCartItems: function(){
    var self = this;
    window.shopClient.fetchRecentCart().then(function (cart) {
      if (cart.lineItems){
        $.each(cart.lineItems, function(i,item){
          self.renderCartItem(item);
        });
        $('.cart').removeClass('empty');
      }else{
        $('.cart').addClass('empty');
      }
    });
  },
  updateQty: function(){
    window.shopClient.fetchRecentCart().then(function (cart) {
      $('.cart-count').text(cart.lineItemCount);
    });
  }
};

module.exports = window.cart;


