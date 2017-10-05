'use strict';

var $ = require('jquery');

var orient = {
  init: function(){
  },

  ready: function(){
    this.modal.init();
  },
  
  resize:function(){
    
  },  
  scroll: function(){
    
  },
  modal: {
  	init: function (){
			$(document).on('click','.quick_shop_modal',function(event) {
				event.preventDefault();
				var stateId = $(this);
				$('body').addClass('modal-open');
				modal = $('body').prepend('<div class="modal custom quick_buy_popup"><div id="mdiv" class="close" style="z-index:999;"><div class="mdiv"><div class="md"></div></div></div><div class="one-half left"><div id="LoadingImage" class="text centered"><img src="{{ "loader.gif" | asset_url | split:"?" | first }}" style="display:block;" /></div><div class="image-area"></div></div><div class="one-half right"><div class="content-area"></div><p class="warning"></p></div></div><div class="modal_overlay close"></div>');
				$('.modal').removeClass('active');
				$('.modal_overlay').removeClass('active');
				$('.modal_overlay').addClass('active');
				$('.modal').addClass('active');
				var productName = $(this).attr('title');
				var link = '/products/'+ productName;
				link = link.toLowerCase().replace(/ /g,'-');
				var getUrl = link;		
				var _opened = $(this).parent().hasClass("active");
				if (_opened === false){   
					$.ajax({
						url: getUrl,
						type:'GET',
						async:false,
						success: function(data){ 
							success(data);
						}
					});
				}
				function success(data) {
					var colorSelected = '';
					$(".modal .one-half.left .image-area").html($(data).find('.product_slider'));
					$(".modal .one-half.right .content-area").html($(data).find('.product_name, .price_info, .form_container'));
					loadProduct(data);
					return data;
				}
				function loadProduct(data) {
					
					$('.product_name').wrap('<a href="'+ getUrl +'?variant='+ variantId +'"></a>');

					$('.product_slider img').wrap('<a href="'+ getUrl +'?variant='+ variantId +'"></a>');
					$('.action_button').prop('disabled',true);
					$('.action_button.no-choices').removeProp('disabled');
					{% include 'addToCart-ajax' %}
					$('.modal').find(".swatch-element.size").show();
					$('.modal').find(".size_chart,.color-title,.size[data-value='O/S']").hide();
					$(".size[data-value='O/S']").parent().children('.option-title').hide();
					
					checkButton(data);	
				}
		});	
			function checkButton(data){
				if($('button[type="submit"]').hasClass('no-choices')){
					$('button[type="submit"].no-choices').prop('disabled',false);	
					$('body').find('.empty').removeClass('disabled-container');
				}
				else{
				
				} 
			}


			$(document).on('click','.close', function(){
				$('.modal_overlay, .modal').remove();
				$('body').removeClass('modal-open');
			});

			$(document).on('click','.disabled-container', function(e){
				e.preventDefault();
				$(".warning").text("Please select a size");
			});  

			function scrollToAnchor(aid){
		    	var aTag = $("a[name='"+ aid +"']");
		    	$('html,body').animate({scrollTop: aTag.offset().top -0},'slow');
			}

			$(document).on('click','#link',function(e) {
			console.log('clicked');
			e.preventDefault();
			   scrollToAnchor('jump-to');
			});

			$(document).on('click', '.swatch-element', function() {
				console.log('in click');
				$('.modal .action_button').removeProp('disabled');
				$('label').removeClass('selected');
				inputValue = $(this).parent().children('input[name="id"]').val();
				$('input.id-input').attr('value', inputValue);
				$(this).addClass('selected');
				$('.warning').empty();
				$('.empty').removeClass('disabled-container');
			}); 
  	}
  }
};
module.exports = orient;