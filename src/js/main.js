window.uz = {
  modules : [],
  init : function(){
    this.modules.forEach(function(item, i){
      if(item.hasOwnProperty('init')){
        item.init(item);
      }
    });
  },
  ready : function(){
    this.modules.forEach(function(item, i){
      if(item.hasOwnProperty('ready')){
        item.ready(item);
      }
    });
  },
  scroll : function(){
    var self = this;
      self.modules.forEach(function(item, i){
        if(item.hasOwnProperty('scroll')){
          item.scroll(item);
        }
      });
  },
  resize : function(){
    this.modules.forEach(function(item, i){
      if(item.hasOwnProperty('resize')){
        item.resize(item);
      }
    });
  }
}
window.uz.modules.push(require('./global/global'));
window.uz.modules.push(require('./global/cart'));
window.uz.modules.push(require('./pages/home'));
window.uz.modules.push(require('./pages/spring-home'));
window.uz.modules.push(require('./pages/spring-campaign'));
window.uz.modules.push(require('./pages/homepage-fall'));
window.uz.modules.push(require('./pages/super-saturday'));
window.uz.modules.push(require('./pages/orient-express'));
window.uz.modules.push(require('./collections/home-landing'));
window.uz.modules.push(require('./collections/accessories'));
window.uz.modules.push(require('./collections/beauty'));
window.uz.modules.push(require('./pages/shop/shop-by-look'));
window.uz.modules.push(require('./pages/our-story'));
window.uz.modules.push(require('./pages/fall17-runway'));
window.uz.modules.push(require('./pages/video-styles'));
window.uz.modules.push(require('./pages/silk-road-campaign'));
window.uz.modules.push(require('./pages/alchemist-campaign'));
window.uz.modules.push(require('./pages/stores'));
window.uz.modules.push(require('./pages/holiday-gift-guide'));
window.uz.modules.push(require('./pages/collection'));
window.uz.modules.push(require('./global/popup-gallery'));
window.uz.modules.push(require('./pages/furniture'));
window.uz.modules.push(require('./pages/stores-2018'));
window.uz.modules.push(require('./pages/santa-fe'));
window.uz.modules.push(require('./pages/homepage-fall-2018'));

window.uz.init(window.uz);
document.addEventListener('DOMContentLoaded', window.uz.ready.bind(window.uz));
document.addEventListener('scroll', window.uz.scroll.bind(window.uz));
window.addEventListener('resize', window.uz.resize.bind(window.uz));