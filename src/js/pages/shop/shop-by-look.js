'use strict';

var $ = require('jquery');
var imagesLoaded = require('imagesloaded');
var GraphQLClient = require('graphql-request').GraphQLClient;
require('graphql-request').request;

var shopbylook = {
  init: function(){
  },

  ready: function(){
	if ($('.shop-by-look, .video-styles').length){
		$('.look').each(function(){
			var look = $(this);
			imagesLoaded(look, function(){
	      look.addClass('loaded');
	    });
    });
    console.log('hi');
    $('body').append('<div class="quick-overlay" data-quick-overlay=""></div>');
		var rows = 	`[{
		"looks": [{
				"image": "https://s3.us-east-2.amazonaws.com/fall-2017/Shop+By+Look+-+Orient+Express/Look+01.jpg",
				"products": [{
						"title": "Edwardian Jacket",
						"handle": "edwardian-jacket",
						"Color": "Black Sculpturalottoman",
						"Size": "XS"
					},
					{
						"title": "Cross Over Neck Blouse",
						"handle": "cross-over-neck-blouse",
						"Color": "Ivory Silkcharmeuse",
						"Size": "XS"
					},
					{
						"title": "Jodhpur 1",
						"handle": "jodhpur-1",
						"Color": "Black Waxedsuede",
						"Size": "XS"
					}
				],
				"layout": "two_up"
			},
			{
				"image": "https://s3.us-east-2.amazonaws.com/fall-2017/Shop+By+Look+-+Orient+Express/Look+02.jpg",
				"products": [{
						"title": "Edwardian Jacket",
						"handle": "edwardian-jacket",
						"Color": "Black Sculpturalottoman",
						"Size": "XS"
					},
					{
						"title": "Cross Over Neck Blouse",
						"handle": "cross-over-neck-blouse",
						"Color": "Ivory Silkcharmeuse",
						"Size": "XS"
					},
					{
						"title": "Jodhpur 1",
						"handle": "jodhpur-1",
						"Color": "Black Waxedsuede",
						"Size": "XS"
					}
				],
				"hide_mobile": "true"
			},
			{
				"image": "https://s3.us-east-2.amazonaws.com/fall-2017/Shop+By+Look+-+Orient+Express/Look+03.jpg",
				"products": [{
						"title": "Edwardian Jacket",
						"handle": "edwardian-jacket",
						"Color": "Black Sculpturalottoman",
						"Size": "XS"
					},
					{
						"title": "Cross Over Neck Blouse",
						"handle": "cross-over-neck-blouse",
						"Color": "Ivory Silkcharmeuse",
						"Size": "XS"
					},
					{
						"title": "Jodhpur 1",
						"handle": "jodhpur-1",
						"Color": "Black Waxedsuede",
						"Size": "XS"
					}
				]
			}
		]
	},
	{
		"looks": [{
				"image": "https://s3.us-east-2.amazonaws.com/fall-2017/Shop+By+Look+-+Orient+Express/Look+04.jpg",
				"products": [{
						"title": "Kimono 1",
						"handle": "kinono-1",
						"Color": "Black Sculpturalottoman",
						"Size": "P/S"
					},
					{
						"title": "Cross Over Neck Blouse",
						"handle": "cross-over-neck-blouse",
						"Color": "Ivory Silkcharmeuse",
						"Size": "XS"
					},
					{
						"title": "Jodhpur 1",
						"handle": "jodhpur-1",
						"Color": "Black Waxedsuede",
						"Size": "XS"
					}
				],
				"layout": "two_up"
			},
			{
				"image": "https://s3.us-east-2.amazonaws.com/fall-2017/Shop+By+Look+-+Orient+Express/Look+05.jpg",
				"products": [{
						"title": "Kimono 2",
						"handle": "kimono-2",
						"Color": "Black Carpetshearling",
						"Size": "P/S"
					},
					{
						"title": "Cross Over Neck Blouse",
						"handle": "cross-over-neck-blouse",
						"Color": "Ivory Silkcharmeuse",
						"Size": "XS"
					}
				],
				"layout": "two_up"
			}
		]
	},
	{
		"looks": [{
				"image": "https://s3.us-east-2.amazonaws.com/fall-2017/Shop+By+Look+-+Orient+Express/Look+06.jpg",
				"products": [{
						"title": "Cold Shoulder High Neck Blouse",
						"handle": "cold-shoulder-high-neck-blouse",
						"Color": "Black Silkcharmeuse",
						"Size": "XS"
					},
					{
						"title": "Slashed Bootleg Pant",
						"handle": "slashed-bootleg-pant",
						"Color": "Black Stretchwaxsuede",
						"Size": "XS"
					},
					{
						"title": "Belt Bag",
						"handle": "belt-bag-bg402",
						"Color": "Black Collagedshearling",
						"Size": "O/S"
					}
				],
				"hide_mobile": "true",
				"layout": "two_up"
			},
			{
				"image": "https://s3.us-east-2.amazonaws.com/fall-2017/Shop+By+Look+-+Orient+Express/Look+07.jpg",
				"products": [{
						"title": "2 Piece Convertible Barrel Coat",
						"handle": "two-piece-convertible-barrel-coat",
						"Color": "Black Wildpileshearling",
						"Size": "XS"
					},
					{
						"title": "Cold Shoulder High Neck Blouse",
						"handle": "cold-shoulder-high-neck-blouse",
						"Color": "Black Silkcharmeuse",
						"Size": "XS"
					},
					{
						"title": "Draped Jodhpur",
						"handle": "draped-jodhpur",
						"Color": "Black Signaturejersey",
						"Size": "XS"
					}
				]
			},
			{
				"image": "https://s3.us-east-2.amazonaws.com/fall-2017/Shop+By+Look+-+Orient+Express/Look+08.jpg",
				"products": [{
						"title": "2 Piece Convertible Barrel Coat",
						"handle": "two-piece-convertible-barrel-coat",
						"Color": "Black Wildpileshearling",
						"Size": "XS"
					},
					{
						"title": "Cold Shoulder High Neck Blouse",
						"handle": "cold-shoulder-high-neck-blouse",
						"Color": "Black Silkcharmeuse",
						"Size": "XS"
					},
					{
						"title": "Draped Jodhpur",
						"handle": "draped-jodhpur",
						"Color": "Black Signaturejersey",
						"Size": "XS"
					}
				]
			}
		]
	},
	{
		"looks": [{
				"image": "https://s3.us-east-2.amazonaws.com/fall-2017/Shop+By+Look+-+Orient+Express/Look+09.jpg",
				"products": [{
						"title": "Convertible Cross Over Jacket",
						"handle": "convertible-cross-over-jacket",
						"Color": "Black Oiledlambskin",
						"Size": "XS"
					},
					{
						"title": "Jodhpur 1",
						"handle": "jodhpur-1",
						"Color": "Black Waxedsuede",
						"Size": "XS"
					}
				]
			},
			{
				"image": "https://s3.us-east-2.amazonaws.com/fall-2017/Shop+By+Look+-+Orient+Express/Look+10.jpg",
				"products": [{
						"title": "Bomber Jacket",
						"handle": "bomber-jacket",
						"Color": "Black Wildcurlylamb",
						"Size": "XS"
					},
					{
						"title": "Cold Shoulder High Neck Blouse",
						"handle": "cold-shoulder-high-neck-blouse",
						"Color": "Black Silkcharmeuse",
						"Size": "XS"
					},
					{
						"title": "Draped Jodhpur",
						"handle": "draped-jodhpur",
						"Color": "Black Signaturejersey",
						"Size": "XS"
					},
					{
						"title": "Belt Bag",
						"handle": "belt-bag-bg402",
						"Color": "Black Collagedshearling",
						"Size": "O/S"
					}
				]
			},
			{
				"image": "https://s3.us-east-2.amazonaws.com/fall-2017/Shop+By+Look+-+Orient+Express/Look+11.jpg",
				"products": [{
						"title": "Cross Over Neck Blouse",
						"handle": "cross-over-neck-blouse",
						"Color": "Ivory Silkcharmeuse",
						"Size": "XS"
					},
					{
						"title": "Jodhpur 1",
						"handle": "jodhpur-1",
						"Color": "Black Waxedsuede",
						"Size": "XS"
					},
					{
						"title": "Scarf Poncho",
						"handle": "scarf-poncho",
						"Color": "Black Featherembroidery",
						"Size": "O/S"
					},
					{
						"title": "Belt Bag",
						"handle": "belt-bag-bg402",
						"Color": "Black Collagedshearling",
						"Size": "O/S"
					}
				],
				"layout": "two_up"
			}
		]
	},
	{
		"looks": [{
				"image": "https://s3.us-east-2.amazonaws.com/fall-2017/Shop+By+Look+-+Orient+Express/Look+12.jpg",
				"products": [{
						"title": "Hooded Long Vest",
						"handle": "hooded-long-vest",
						"Color": "Cognac Wildcurlylamb",
						"Size": "P/S"
					},
					{
						"title": "Cold Shoulder High Neck Blouse",
						"handle": "cold-shoulder-high-neck-blouse",
						"Color": "Black Silkcharmeuse",
						"Size": "XS"
					},
					{
						"title": "Draped Jodhpur",
						"handle": "draped-jodhpur",
						"Color": "Black Signaturejersey",
						"Size": "XS"
					},
					{
						"title": "Belt Bag",
						"handle": "belt-bag-bg402",
						"Color": "Black Collagedshearling",
						"Size": "O/S"
					}
				]
			},
			{
				"image": "https://s3.us-east-2.amazonaws.com/fall-2017/Shop+By+Look+-+Orient+Express/Look+13.jpg",
				"products": [{
						"title": "Hooded Long Vest",
						"handle": "hooded-long-vest",
						"Color": "Cognac Wildcurlylamb",
						"Size": "P/S"
					},
					{
						"title": "Cold Shoulder High Neck Blouse",
						"handle": "cold-shoulder-high-neck-blouse",
						"Color": "Black Silkcharmeuse",
						"Size": "XS"
					}
				],
				"hide_mobile": "true"
			},
			{
				"image": "https://s3.us-east-2.amazonaws.com/fall-2017/Shop+By+Look+-+Orient+Express/Look+14.jpg",
				"products": [{
						"title": "Long Hooded Vest",
						"handle": "long-hooded-vest",
						"Color": "Black Multi Carpetshearling",
						"Size": "P/S"
					},
					{
						"title": "Embroidered Kaftan Tunic",
						"handle": "embroidered-kaftan-tunic",
						"Color": "Black/Cognac Tibetantiger",
						"Size": "P/S"
					}
				],
				"layout": "two_up"
			}
		]
	},
	{
		"looks": [{
				"image": "https://s3.us-east-2.amazonaws.com/fall-2017/Shop+By+Look+-+Orient+Express/Look+15.jpg",
				"products": [{
						"title": "Reefer Coat",
						"handle": "reefer-coat",
						"Color": "Black Doublefacecashmere",
						"Size": "XS"
					},
					{
						"title": "Cross Over Neck Blouse",
						"handle": "cross-over-neck-blouse",
						"Color": "Black Silkcharmeuse",
						"Size": "XS"
					},
					{
						"title": "Cropped Trouser",
						"handle": "cropped-trouser",
						"Color": "Black Stretchwool",
						"Size": "0"
					}
				]
			},
			{
				"image": "https://s3.us-east-2.amazonaws.com/fall-2017/Shop+By+Look+-+Orient+Express/Look+16.jpg",
				"products": [{
						"title": "Frayed Long Cami",
						"handle": "frayed-long-cami",
						"Color": "Black Finecashmere",
						"Size": "P/S"
					},
					{
						"title": "Asymmetric Poncho",
						"handle": "asymmetric-poncho",
						"Color": "Black Finecashmere",
						"Size": "O/S"
					}
				],
				"layout": "two_up"
			},
			{
				"image": "https://s3.us-east-2.amazonaws.com/fall-2017/Shop+By+Look+-+Orient+Express/Look+17.jpg",
				"products": [{
						"title": "Long Sleeve Turtleneck",
						"handle": "long-sleeve-turtleneck",
						"Color": "Black Finecashmere",
						"Size": "P/S"
					},
					{
						"title": "Cropped Trouser",
						"handle": "cropped-trouser",
						"Color": "Black Stretchwool",
						"Size": "0"
					}
				]
			}
		]
	},
	{
		"looks": [{
				"image": "https://s3.us-east-2.amazonaws.com/fall-2017/Shop+By+Look+-+Orient+Express/Look+18.jpg",
				"products": [{
						"title": "Convertible Draped Dress",
						"handle": "convertible-draped-dress",
						"Color": "Garnet Urbanstretch",
						"Size": "XS"
					},
					{
						"title": "Pendent",
						"handle": "pendent",
						"Color": "Black Amulettes ",
						"Size": "O/S"
					}
				],
				"hide_mobile": "true"
			},
			{
				"image": "https://s3.us-east-2.amazonaws.com/fall-2017/Shop+By+Look+-+Orient+Express/Look+19.jpg",
				"products": [{
						"title": "Convertible Draped Dress",
						"handle": "convertible-draped-dress",
						"Color": "Garnet Urbanstretch",
						"Size": "XS"
					},
					{
						"title": "Pendent",
						"handle": "pendent",
						"Color": "Black Amulettes ",
						"Size": "O/S"
					}
				],
				"hide_mobile": "true"
			},
			{
				"image": "https://s3.us-east-2.amazonaws.com/fall-2017/Shop+By+Look+-+Orient+Express/Look+20.jpg",
				"products": [{
						"title": "Convertible Draped Dress",
						"handle": "convertible-draped-dress",
						"Color": "Garnet Urbanstretch",
						"Size": "XS"
					},
					{
						"title": "Pendent",
						"handle": "pendent",
						"Color": "Black Amulettes ",
						"Size": "O/S"
					}
				],
				"layout": "two_up"
			}
		]
	},
	{
		"looks": [{
				"image": "https://s3.us-east-2.amazonaws.com/fall-2017/Shop+By+Look+-+Orient+Express/Look+21.jpg",
				"products": [{
						"title": "Devore Cold Shoulder Drape Dress",
						"handle": "devore-cold-shoulder-drape-dress",
						"Color": "Garnet Satindevore",
						"Size": "XS"
					},
					{
						"title": "Relaxed Scarf Jacket",
						"handle": "relaxed-scarf-jacket",
						"Color": "Garnet Waxedsuede",
						"Size": "XS"
					},
					{
						"title": "Belt Bag",
						"handle": "belt-bag-bg402",
						"Color": "Black Collagedshearling",
						"Size": "O/S"
					}
				],
				"layout": "two_up"
			},
			{
				"image": "https://s3.us-east-2.amazonaws.com/fall-2017/Shop+By+Look+-+Orient+Express/Look+22.jpg",
				"products": [{
					"title": "Relaxed Scarf Jacket",
					"handle": "relaxed-scarf-jacket",
					"Color": "Garnet Waxedsuede",
					"Size": "XS"
				}]
			},
			{
				"image": "https://s3.us-east-2.amazonaws.com/fall-2017/Shop+By+Look+-+Orient+Express/Look+23.jpg",
				"products": [{
						"title": "Cocoon Robe Coat",
						"handle": "cocoon-robe-coat",
						"Color": "Garnet Waxedsuede",
						"Size": "XS"
					},
					{
						"title": "Scarf",
						"handle": "scarf",
						"Color": "Garnet Waxedsuede",
						"Size": "O/S"
					}
				]
			}
		]
	},
	{
		"looks": [{
				"image": "https://s3.us-east-2.amazonaws.com/fall-2017/Shop+By+Look+-+Orient+Express/Look+24.jpg",
				"products": [{
					"title": "Relaxed Scarf Coat",
					"handle": "relaxed-scarf-coat",
					"Color": "Cognac Waxedsuede",
					"Size": "XS"
				}]
			},
			{
				"image": "https://s3.us-east-2.amazonaws.com/fall-2017/Shop+By+Look+-+Orient+Express/Look+25.jpg",
				"products": [{
						"title": "Hooded Long Vest",
						"handle": "hooded-long-vest",
						"Color": "Cognac Wildcurlylamb",
						"Size": "P/S"
					},
					{
						"title": "Robe Coat",
						"handle": "robe-coat-2",
						"Color": "Cognac Erodedtapestry",
						"Size": "XS"
					}
				],
				"layout": "two_up"
			},
			{
				"image": "https://s3.us-east-2.amazonaws.com/fall-2017/Shop+By+Look+-+Orient+Express/Look+26.jpg",
				"products": [{
						"title": "Robe Coat",
						"handle": "robe-coat-2",
						"Color": "Cognac Erodedtapestry",
						"Size": "XS"
					},
					{
						"title": "Convertible Cold Shoulder Dress",
						"handle": "convertible-cold-shoulder-dress",
						"Color": "Cognac Urbanstretch",
						"Size": "XS"
					},
					{
						"title": "Reversible Cape",
						"handle": "reversible-cape",
						"Color": "Cognac Wildcurlylamb",
						"Size": "O/S"
					}
				],
				"hide_mobile": "true"
			}
		]
	},
	{
		"looks": [{
				"image": "https://s3.us-east-2.amazonaws.com/fall-2017/Shop+By+Look+-+Orient+Express/Look+27.jpg",
				"products": [{
					"title": "Long Sleeve Cross Draped Dress",
					"handle": "long-sleeve-cross-draped-dress",
					"Color": "Cognac Signaturejersey",
					"Size": "XS"
				}],
				"layout": "two_up"
			},
			{
				"image": "https://s3.us-east-2.amazonaws.com/fall-2017/Shop+By+Look+-+Orient+Express/Look+28.jpg",
				"products": [{
					"title": "Convertible Cold Shoulder Dress",
					"handle": "convertible-cold-shoulder-dress",
					"Color": "Cognac Urbanstretch",
					"Size": "XS"
				}],
				"layout": "two_up"
			}
		]
	},
	{
		"looks": [{
				"image": "https://s3.us-east-2.amazonaws.com/fall-2017/Shop+By+Look+-+Orient+Express/Look+29.jpg",
				"products": [{
						"title": "Cold Shoulder Cross Over Top",
						"handle": "cold-shoulder-cross-over-top",
						"Color": "Black Signaturejersey",
						"Size": "XS"
					},
					{
						"title": "Draped Jodhpur",
						"handle": "draped-jodhpur",
						"Color": "Black Signaturejersey",
						"Size": "XS"
					}
				]
			},
			{
				"image": "https://s3.us-east-2.amazonaws.com/fall-2017/Shop+By+Look+-+Orient+Express/Look+30.jpg",
				"products": [{
					"title": "Wrap And Tie Jumpsuit",
					"Color": "Black Signaturejersey",
					"Size": "XS"
				}]
			},
			{
				"image": "https://s3.us-east-2.amazonaws.com/fall-2017/Shop+By+Look+-+Orient+Express/Look+31.jpg",
				"products": [{
						"title": "Cocoon Jumpsuit",
						"handle": "cocoon-jumpsuit",
						"Color": "Black Urbanstretch",
						"Size": "XS"
					},
					{
						"title": "Collar",
						"handle": "collar",
						"Color": "Black Bondedsuede",
						"Size": "O/S"
					}
				],
				"layout": "two_up"
			}
		]
	},
	{
		"looks": [{
				"image": "https://s3.us-east-2.amazonaws.com/fall-2017/Shop+By+Look+-+Orient+Express/Look+32.jpg",
				"products": [{
					"title": "Collaged Cocoon Dress",
					"handle": "collaged-cocoon-dress",
					"Color": "Black/Cognac Velvetdevore",
					"Size": "XS"
				}],
				"layout": "two_up"
			},
			{
				"image": "https://s3.us-east-2.amazonaws.com/fall-2017/Shop+By+Look+-+Orient+Express/Look+33.jpg",
				"products": [{
					"title": "Shawl Cocoon Dress",
					"handle": "shawl-cocoon-dress",
					"Color": "Black Chiffon",
					"Size": "XS"
				}],
				"layout": "two_up"
			}
		]
	},
	{
		"looks": [{
				"image": "https://s3.us-east-2.amazonaws.com/fall-2017/Shop+By+Look+-+Orient+Express/Look+34.jpg",
				"products": [{
						"title": "Embroidered Kaftan Tunic",
						"handle": "embroidered-kaftan-tunic",
						"Color": "Black/Cognac Tibetantiger",
						"Size": "P/S"
					},
					{
						"title": "Draped Jodhpur",
						"handle": "draped-jodhpur",
						"Color": "Black Signaturejersey",
						"Size": "XS"
					}
				],
				"layout": "two_up"
			},
			{
				"image": "https://s3.us-east-2.amazonaws.com/fall-2017/Shop+By+Look+-+Orient+Express/Look+35.jpg",
				"products": [{
						"title": "Embroidered Scarf Tunic",
						"handle": "embroidered-scarf-tunic",
						"Color": "Black Multi Magiccarpet",
						"Size": "P/S"
					},
					{
						"title": "Jodhpur 1",
						"handle": "jodhpur-1",
						"Color": "Black Waxedsuede",
						"Size": "XS"
					}
				]
			},
			{
				"image": "https://s3.us-east-2.amazonaws.com/fall-2017/Shop+By+Look+-+Orient+Express/Look+36.jpg",
				"products": [{
					"title": "Scarf Wrap Evening Dress",
					"handle": "scarf-wrap-evening-dress",
					"Color": "Black Mattesatin",
					"Size": "XS"
				}]
			}
		]
	},
	{
		"looks": [{
				"image": "https://s3.us-east-2.amazonaws.com/fall-2017/Shop+By+Look+-+Orient+Express/Look+37.jpg",
				"products": [{
					"title": "Draped Cocoon Dress",
					"handle": "draped-cocoon-dress",
					"Color": "Black Urbanstretch",
					"Size": "XS"
				}],
				"hide_mobile": "true"
			},
			{
				"image": "https://s3.us-east-2.amazonaws.com/fall-2017/Shop+By+Look+-+Orient+Express/Look+38.jpg",
				"products": [{
					"title": "Draped Cocoon Dress",
					"handle": "draped-cocoon-dress",
					"Color": "Black Urbanstretch",
					"Size": "XS"
				}]
			},
			{
				"image": "https://s3.us-east-2.amazonaws.com/fall-2017/Shop+By+Look+-+Orient+Express/Look+39.jpg",
				"products": [{
					"title": "Draped Cocoon Dress",
					"handle": "draped-cocoon-dress",
					"Color": "Black Urbanstretch",
					"Size": "XS"
				}],
				"hide_mobile": "true",
				"layout": "two_up"
			}
		]
	}


]`;		
			// var rows_data = JSON.parse(rows);
   //  	$.each(rows_data, function(i,row){
   //  		var new_row = $('.sample-row').clone().removeClass('sample-row');

	  //   	$.each(row.looks, function(i,look){
	  //   		var  new_look = $('.sample-look').clone().removeClass('sample-look');
	  //   		new_look.find('img').attr('src', look.image);
	  //   		if (look.layout == "two_up"){
	  //   			new_look.addClass("two_up");
	  //   		}
	  //   		if (look.hide_mobile == "true"){
	  //   			new_look.addClass("hide-mobile");
	  //   		}
		 //    	$.each(look.products, function(i,product){
		 //    		var new_product = $('<a/>')
		 //    		new_product.text(product.title);
		 //    		new_product.attr('data-handle', product.handle);
		 //    		new_product.attr('data-Color', product.Color);
		 //    		new_product.attr('data-Size', product.Size);
		 //    		new_look.find('.look-product-links').append(new_product);
		 //    	});	
		 //    	new_row.append(new_look);
	  //   	});	
	  //   	$('.shop-by-looks').append(new_row);
   //  	});

		  // console.log(all_data);

	  	$('.look .look-product-links a, [data-product-link]').click(function(e){
	  		e.preventDefault();
	  		var product_data = $(this).data();
				if (window.location.href.indexOf('dev') !== -1){
					var client_url = 'urban-zen-foundation.myshopify.com';
					var access_token = 'f987f1824dd7e73305a2243a31c0d4be';
				 }else{
					var client_url = 'urbanzen.com';
					var access_token = 'd1c52518cdfc4bd586603aa9303a8eee';
				 }
				var client = new GraphQLClient('https://'+ client_url+'/api/graphql', {
				  headers: {
				    'X-Shopify-Storefront-Access-Token': access_token
				  },
				})

	  		var query = `
	  		{
				  shop {
				    productByHandle(handle: "`+ product_data.handle+`") {
				      title
				      handle
				      options {
				        name
				        values
				      }
				      variants(first: 99) {
				        edges {
				          node {
				          	id
				            title
				            price
				            availableForSale
				            image {
				              src
				              altText
				            }
				          }
				        }
				      }
				      variantBySelectedOptions(selectedOptions: [{name: "Color", value: "`+ product_data.color +`"}, {name: "Size", value: "`+ product_data.size +`"}]) {
				      	id
				        title
				        price
				        availableForSale
		            image {
		              src
		              altText
		            }
				      }
				    }
				  }
				}`;
				
	  		client.request(query).then(function(response){
	  			shopbylook.quickShop.build(response.shop.productByHandle, product_data);
	  		});

	  		// var product_request = $.ajax({
     //      url: "/admin/products/" + product_data.quickProductId +'.json',
     //      type: 'GET'
     //    });
     //    product_request.done(function(response){
     //    	console.log(response);
     //    	shopbylook.quickShop.build(response.product, product_data);
		   //  });
			});

   
 		}
  },
  quickShop : {
  	module : '',
  	build: function(product, product_data){
  		var self = this;
  		var current_variant;
  		 console.log(product);
  		
  		var new_quick_shop = $($('.sample-quick-shop')[0]).clone().removeClass('sample-quick-shop');
  		this.module = new_quick_shop;
    
    	if (product.variantBySelectedOptions.image != null){
    		this.module.find('[data-quick-image]').attr('src', product.variantBySelectedOptions.image.src);
    	}
    	this.module.find('[data-quick-title] a').text(product.title);
    	this.module.find('[data-quick-title] a').attr("href","/products/"+ product.handle);

			var filtered_options = product.options.filter(function(v){
    		return v.name == 'Color';
	  	});
			var colors =  filtered_options[0].values;
			$.each(colors, function(i,color){
				var imgName = color.replace(/[\/ ]/g,"-").toLowerCase();
				console.log(imgName)
				var colorTitle = color.split(" ")[0];
				var product_color = '<img data-color="'+ color +'" data-label="'+ colorTitle+'" src="https://s3.amazonaws.com/site-global/swatches/'+ imgName +'.png"/>';
				self.module.find('[data-colors]').append(product_color);
			});
    	$.each(product.variants.edges, function(i,variant_node){
    		var variant = variant_node.node;
    		var variant_id = atob(variant.id).replace('gid://shopify/ProductVariant/','');

    		if (variant.availableForSale){
    			var product_variant = $('<div class="product-variant" data-variant=""><input data-variant-input="" type="radio" name="id" value="" id=""><label data-variant-label="" for=""></label></div>');
					product_variant.find('[data-variant-label]').text(variant.title.split(' / ')[1]);
					product_variant.attr('data-color', variant.title.split(' / ')[0]);
					product_variant.attr('data-price', variant.price);
					product_variant.find('[data-variant-input]').val(variant_id );
					product_variant.find('[data-variant-input]').attr('id', 'variant_' + variant_id);
					product_variant.find('[data-variant-label]').attr('for', 'variant_' + variant_id);
					product_variant.data('variant', variant);
					if (product.variantBySelectedOptions.id == variant.id)
					{
						product_variant.addClass('selected');
						current_variant = product_variant;
						// self.module.find('[data-quick-title] a').attr("href", this.module.find('[data-quick-title] a').attr("href") + "?variant="+ variant_id);
					}
					self.module.find('[data-product-variants]').append(product_variant);
				}else if (product.variantBySelectedOptions.id == variant.id){
					var product_variant = $('<div class="product-variant" data-variant=""><input data-variant-input="" type="radio" name="id" value="" id=""><label data-variant-label="" for=""></label></div>');
					product_variant.find('[data-variant-label]').text(variant.title.split(' / ')[1]);
					product_variant.attr('data-color', variant.title.split(' / ')[0]);
					product_variant.attr('data-price', variant.price);
					product_variant.find('[data-variant-input]').val(variant_id );
					product_variant.find('[data-variant-input]').attr('id', 'variant_' + variant_id);
					product_variant.find('[data-variant-label]').attr('for', 'variant_' + variant_id);
					product_variant.data('variant', variant);
					current_variant = product_variant;
				}
				
    	});
    	self.swapVariant(current_variant);

    	self.module.remove('.sample-product-variant');
    	self.open();
    	self.actions(product);
  	},
  	actions : function(product){
  		var self = this;
  		$('[data-close],.quick-overlay').click(function(){
  			self.close();
  		});
  		$('.quick-shop').click(function(e){
  			e.stopPropagation();
  		});
  		// $('.quick-shop form').submit(function(e){
  		// 	e.preventDefault();
  		// 	self.addToCart($('.quick-shop form input:selected[name=id]'))
  		// });
  		$('.quick-colors img').click(function(e){
    		self.swapColor($(this));
  		});
  		$('.product-variant').click(function(e){
    		self.swapVariant($(this));
  		});
  		$('.quick-shop form').submit(function(e){
  			e.preventDefault();
  			// var cart_request = $.ajax({
  			// 	type: 'post',
  			// 	url: 'https://urban-zen-foundation.myshopify.com/cart/add.js',
  			// 	data : $(this).serialize(),
  			// 	success: function(response){
  			// 		self.close();
  			// 		console.log('hey');
  			// 	}

  			var id = $(this).find('input[name=id]:checked').val();
  			window.location = "http://urban-zen-foundation.myshopify.com/cart/" + id + ":1";
  		});

  	},
  	swapVariant : function(variant){
  		var data = variant.data();
  		var variant_data = variant.data('variant');
  		this.module.find('[data-quick-price]').text('$' + data.price);
  		this.swapColor(this.module.find('[data-colors] img[data-color="'+ data.color +'"]'));
  		if(variant_data.image){
  			this.module.find('.product-image').attr('src', variant_data.image.src);
  		}
  		variant.find('input')[0].checked = true;

  	},
  	swapColor : function(color){
  		var data = color.data();
  		var first_variant = this.module.find('[data-variant][data-color="'+ data.color + '"]').first();
  		var variant_data = first_variant.data('variant');
  		$.each(this.module.find('[data-variant]'), function(i,v){
	  		if ($(this).attr('data-color') == data.color){
	  			$(this).removeClass('hidden');
				}else{
					$(this).addClass('hidden');
				}
			})
			if(variant_data.image){
				this.module.find('.product-image').attr('src', variant_data.image.src);
			}
  		this.module.find('[data-variant][data-color="'+ data.color + '"]').removeClass('hidden');  		
  		this.module.find('[data-color-label]').text(data.label);
  		color.addClass('selected').siblings().removeClass('selected');
  	},
  	open: function(){
  		$('[data-quick-overlay]').append(this.module);
  		$('[data-quick-overlay]').addClass('open');
  		imagesLoaded($('.quick-shop img'), function(){
  			$('.quick-shop').addClass('loaded');
  		});
  		
  	},
  	close: function(){
  		$('[data-quick-overlay]').removeClass('open');
  		$('[data-quick-overlay]').empty();
  	},
  	addToCart: function(id){
  		var self = this;
  		query = `
  		mutation {
			  checkoutCreate(input: {
			    lineItems: [{ variantId: "`+ id +`", quantity: 1 }]
			  }) {
			    checkout {
			       id
			       webUrl
			       lineItems(first: 99) {
			         edges {
			           node {
			             title
			             quantity
			           }
			         }
			       }
			    }
			  }
			}`;
			client.request(query).then(function(response){
	  		self.module.find('button').text('Added!').attr('disabled', 'disabled');
	  	});
	
  	}
  },
  resize:function(){
    
  },  
  scroll: function(){
    
  }
};
module.exports = shopbylook;
