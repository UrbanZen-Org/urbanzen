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
    this.renderCartItems();
    this.updateQty();
    this.updateTotal();
  },
  actions: function(){
    var self = this;
    $('.cart-icon,.cart-num').click(function(){
      self.open();
    });
    $('.cart .cart-sidebar').click(function(e){
      e.stopPropagation();
    })
    $('.cart .close, .cart-close, .cart').click(function(){
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
          self.updateTotal();
        });
        });
      });
  },
  open: function(){
    $('body').removeClass('menu-open');
    $('body').addClass('cart-open');
  },
  close: function(){    
    $('body').removeClass('cart-open');
  },
  resize:function(){

  },  
  scroll: function(){
    
  },
  formatAsMoney: function(amount, currency, thousandSeparator, decimalSeparator, localeDecimalSeparator) {
      currency = currency || '$';
      thousandSeparator = thousandSeparator || ',';
      decimalSeparator = decimalSeparator || '.';
      localeDecimalSeparator = localeDecimalSeparator || '.';
      var regex = new RegExp('(\\d)(?=(\\d{3})+\\.)', 'g');

      return currency + parseFloat(amount, 10).toFixed(2)
        .replace(localeDecimalSeparator, decimalSeparator)
        .replace(regex, '$1' + thousandSeparator)
        .toString();
  },
  renderCartItem: function(lineItem){
    var self = this;

    jsrender.views.settings.delimiters("<%", "%>");
    var template = jsrender.templates("#CartItemTemplate");
    

    var cartItem = {};
    var variantTitle = lineItem.variant_title;
    cartItem.variantID = lineItem.variant_id;
    cartItem.image = lineItem.image.src;
    cartItem.title = lineItem.title;
    cartItem.lineItemId = lineItem.id;
    cartItem.color = variantTitle.split(' / ')[0].replace(/[^\ ]+$/,'');
    cartItem.size = variantTitle.split(' / ')[1];
    cartItem.price = self.formatAsMoney(lineItem.line_price);
    cartItem.qty = lineItem.quantity;

    var cartItemMarkup = template.render(cartItem);

    $('.cart-items').append(cartItemMarkup);

    $('.cart-item[data-line-item-id="'+lineItem.id+'"] .cart-item-remove').on('click', function(){    
      var lineItemId = $(this).data('line-item-id');
      self.removeFromCart(lineItemId);
    });
  },
  renderCartItems: function(){
    var self = this;
    window.shopClient.fetchRecentCart().then(function (cart) {
      if (cart.lineItems){
        $.each(cart.lineItems, function(i,item){
          self.renderCartItem(item);
          $('.cart .checkout-button').attr('href', cart.checkoutUrl);
        });
      }

    });
  },
  removeFromCart: function(lineItemId){
    var self = this;
    window.shopClient.fetchRecentCart().then(function (cart) {
        cart.removeLineItem(lineItemId).then(cart => {
        $('.cart-item[data-line-item-id="'+lineItemId+'"]').addClass('removing').slideUp(400);          
        setTimeout(function(){
          self.updateQty();
          self.updateTotal();  
          $('.cart .checkout-button').attr('href', cart.checkoutUrl);
        },400)
        
      });
    });
  },
  updateQty: function(){
    window.shopClient.fetchRecentCart().then(function (cart) {
      $('.cart-count').text(cart.lineItemCount);
      if(!cart.lineItemCount){
        $('.cart').addClass('empty');
      }else{
        $('.cart').removeClass('empty');
      }
    });
  },
  updateTotal: function(){
    var self = this;
    window.shopClient.fetchRecentCart().then(function (cart) {
      $('.cart-subtotal').text(self.formatAsMoney(cart.subtotal));
    });
  }
};

module.exports = window.cart;


