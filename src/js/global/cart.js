'use strict';

var $ = require('jquery');
var Client = require('shopify-buy');
var jsrender = require('jsrender');
var GraphQLClient = require('graphql-request').GraphQLClient;
require('graphql-request').request;

window.cart = {
  init: function(){
    if (window.location.href.indexOf('dev') !== -1 || window.location.href.indexOf('stage') !== -1 || window.location.href.indexOf('-foundation') !== -1){
      var token = 'f987f1824dd7e73305a2243a31c0d4be';
      var domain = 'urban-zen-foundation.myshopify.com';
      var appId = '63414003';
    }else{
      var token = 'd1c52518cdfc4bd586603aa9303a8eee';
      var domain = 'shop.urbanzen.com';
      var appId = '64482447';
    }

    window.client = Client.buildClient({
      storefrontAccessToken: token,
      domain: domain
    });
    if (!localStorage.getItem('checkoutId')){
      window.client.checkout.create().then((checkout) => {
        localStorage.setItem('checkoutId', checkout.id); // Store the ID in localStorage
        console.log(checkout);
      });
    }
  },

  ready: function(){
    this.renderCartItems();
    this.updateQty();
    this.updateTotal();
  },
  actions: function(){
    var self = this;
    $('.cart-icon,.cart-num').click(function(){
      self.open();
    });
    $('.cart-item #itemQty').blur(function(){
      var lineItemId = $(this).closest('.cart-item').data('line-item-id');
      var qty = $(this).val();
      self.changeItemQty(lineItemId, qty);
    });
    $('.cart-item form').submit(function(){
      var lineItemId = $(this).closest('.cart-item').data('line-item-id');
      var qty = $(this).find('#itemQty').val();
      self.changeItemQty(lineItemId, qty);
    });
    $('.floating-cart .cart-sidebar').click(function(e){
      e.stopPropagation();
    })
    $('.floating-cart .close, .cart-close, .floating-cart').click(function(){
      self.close();
    });
  },
  addToCart: function(productId, variantId, productHandle, productColor, productSize){
    var self = this;
    if (window.location.href.indexOf('dev') !== -1 || window.location.href.indexOf('stage') !== -1 || window.location.href.indexOf('-foundation') !== -1){
      var token = 'f987f1824dd7e73305a2243a31c0d4be';
      var domain = 'urban-zen-foundation.myshopify.com';
      var appId = '63414003';
    }else{
      var token = 'd1c52518cdfc4bd586603aa9303a8eee';
      var domain = 'shop.urbanzen.com';
      var appId = '64482447';
    }
    const QlClient = new GraphQLClient('https://'+ domain+'/api/graphql', {
      headers: {
        'X-Shopify-Storefront-Access-Token': token
      },
    });
    QlClient.request(`
      {
        shop {
          productByHandle(handle: "`+productHandle+`") {
            id
            variantBySelectedOptions(selectedOptions: [{name: "Color", value: "`+ productColor +`"}, {name: "Size", value: "`+ productSize +`"}]){
              id
            }
          }
        }
      }
      `).then(function(response){
        console.log(response);
        var productQlId = response.shop.productByHandle.id;
        var variantQlId = response.shop.productByHandle.variantBySelectedOptions.id;
       window.client.product.fetch(productQlId).then((product) => {
        
        console.log(product);
        
        const checkoutId = localStorage.getItem('checkoutId');
        var lineItems = [{variantId: variantQlId, quantity: 1}];

        window.client.checkout.addLineItems(checkoutId, lineItems).then((checkout) => {
          console.log(checkout); // Checkout with two additional line items
          console.log(checkout.lineItems) // Line items on the checkout

          var cartItem = checkout.lineItems.filter(function (item) {
            return (item.variant.id === variantQlId);
          })[0];
          var $cartItem = self.renderCartItem(cartItem);
          setTimeout(function () {
            self.open();
          }, 0);
          self.updateQty();
          self.updateTotal();
          $('.floating-cart .checkout-button').attr('href', checkout.webUrl);
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
    
    console.log(lineItem);
    var cartItem = {};
    var variantTitle = lineItem.variant.title;
    cartItem.variantID = lineItem.variant.id;
    cartItem.image = lineItem.variant.image.src;
    cartItem.title = lineItem.title;
    cartItem.lineItemId = lineItem.id;
    cartItem.color = variantTitle.split(' / ')[0].replace(/[^\ ]+$/,'');
    cartItem.size = variantTitle.split(' / ')[1];
    cartItem.price = self.formatAsMoney(lineItem.variant.price * lineItem.quantity) ;
    cartItem.qty = lineItem.quantity;

    var cartItemMarkup = template.render(cartItem);

    $('.cart-items').append(cartItemMarkup);
    $('.cart-item').each(function(){
      if ($(this).find('.cart-item-color span').is(':empty')){
        $(this).find('.cart-item-color').remove();
      }
      if ($(this).find('.cart-item-size span').is(':empty')){
        $(this).find('.cart-item-size').remove();
      }
    })
    $('.cart-item[data-line-item-id="'+lineItem.id+'"] .cart-item-remove').on('click', function(){    
      var lineItemId = $(this).data('line-item-id');
      self.removeFromCart(lineItemId);
    });
    self.actions();
  },
  changeItemQty: function(lineItemId, qty){
    var self = this;
    const lineItemsToUpdate = [
      {}
    ];
    const checkoutId = localStorage.getItem('checkoutId');
    var lineItems = [{id :lineItemId, quantity : qty }];

    window.client.checkout.updateLineItems(checkoutId, lineItems).then((checkout) => {
      console.log(checkout); // Checkout with a line item quantity updated to 1
      console.log(checkout.lineItems) // Line items on the checkout
      self.updateQty();
      self.updateTotal();
    });
    
  },
  renderCartItems: function(){
    var self = this;
    const checkoutId = localStorage.getItem('checkoutId');
      window.client.checkout.fetch(checkoutId).then((checkout) => {
      if (checkout.lineItems){

        $.each(checkout.lineItems, function(i,item){

          self.renderCartItem(item);
          $('.floating-cart .checkout-button').attr('href', checkout.webUrl);
        });
      }

    });
  },
  removeFromCart: function(lineItemId){
    var self = this;
    const checkoutId = localStorage.getItem('checkoutId');
    var lineItemIds = [lineItemId];
    window.client.checkout.removeLineItems(checkoutId, lineItemIds).then((checkout) => {
      $('.cart-item[data-line-item-id="'+lineItemId+'"]').addClass('removing').slideUp(400).remove();          
      setTimeout(function(){
        self.updateQty();
        self.updateTotal();
        $('.floating-cart .checkout-button').attr('href', cart.webUrl);
      },400);      
    });
  },
  updateQty: function(){
    const checkoutId = localStorage.getItem('checkoutId');
    window.client.checkout.fetch(checkoutId).then((checkout) => {

      $('.cart-count').text(checkout.lineItems.length);
      if(!checkout.lineItemCount){
        $('.floating-cart').addClass('empty');
      }else{
        $('.floating-cart').removeClass('empty');
      }
    });
  },
  updateTotal: function(){
    var self = this;
    const checkoutId = localStorage.getItem('checkoutId');

    window.client.checkout.fetch(checkoutId).then((checkout) => {
      $('.cart-subtotal').text(self.formatAsMoney(cart.subtotal));
      $.each(checkout.lineItems, function(i,v){
        $('.cart-item[data-line-item-id="'+v.id+'"]').find('.cart-item-price').text('$'+(v.variant.price * v.quantity));
        $('.flaoting-cart .checkout-button').attr('href', cart.webUrl);
      });
    });
  }
};

module.exports = window.cart;


