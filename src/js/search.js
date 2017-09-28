'use strict';

var $ = require('jquery');

var el = 'div[data-item=listing]';

var searchpage = {

	filters : {

		'property-types' : {
			taxonomy : 'property-types',
			type : 'array',
			compare : 'in',
			value : []
		},

		'features' : {
			taxonomy : 'features',
			type : 'array',
			compare : 'in',
			value : []
		},

		'min-price' : {
			taxonomy : 'price',
			type : 'number',
			compare : 'lt',
			value : null
		},

		'max-price' : {
			taxonomy : 'price',
			type : 'number',
			compare : 'gt',
			value : null
		},

		'min-bathrooms' : {
			taxonomy : 'bathrooms',
			type : 'number',
			compare : 'lt',
			value : null
		},

		'max-bathrooms' : {
			taxonomy : 'bathrooms',
			type : 'number',
			compare : 'gt',
			value : null
		},

		'min-bedrooms' : {
			taxonomy : 'bedrooms',
			type : 'number',
			compare : 'lt',
			value : null
		},

		'max-bedrooms' : {
			taxonomy : 'bedrooms',
			type : 'number',
			compare : 'gt',
			value : null
		},

		'min-building-area' : {
			type : 'number',
			compare : 'lt',
			value : null
		},

		'max-building-area' : {
			type : 'number',
			compare : 'gt',
			value : null
		},

		'min-lot-area' : {
			type : 'number',
			compare : 'lt',
			value : null
		},

		'max-lot-area' : {
			type : 'number',
			compare : 'gt',
			value : null
		}
	},

	bindEventListeners : function () {

		// Property Types
		var self = this;

		// Checkboxes
		$('input[type="checkbox"][data-filter]').on('change', function (event) {
			if(event.target.checked) {
				self.addFilter(event.target.value, event.target.name);
			} else {
				self.removeFilter(event.target.value, event.target.name);
			}
		});

		// Ranges
		$('input[type="range"][data-filter]').on('change', function (event) {
			self.addFilter(event.target.value, event.target.name);
			$('#'+event.target.name+'-label').text(event.target.value);
		});

	},

	addFilter : function (value, name) {
		var type = this.filters[name].type;

		if(type === 'array') {
	 		this.filters[name].value.push(value);
		}

		if(type === 'number') {
			this.filters[name].value = Number(value);
		}

		this.updateResults();
	},

	removeFilter : function (value, name) {
		var type = this.filters[name].type;

		if(type === 'array') {
			var index = this.filters[name].value.indexOf(value);
			if (index > -1) {
	  	  this.filters[name].value.splice(index, 1);
			}
		}

		if(type === 'number') {
			this.filters[name].value = null;
		}

		this.updateResults();
	},

	testElement : function ($el) {
		var filters = this.filters;
		var pass = true;

		Object.keys(this.filters).forEach( function (key) {
			var filter = filters[key];
			var itemValue = $el.data('term-'+filter.taxonomy);

			if( filter.type === 'array' && filter.value.length > 0 ) {
				if (filter.value.indexOf(itemValue) === -1) {
					pass = false;
				}
			}

			if( filter.type === 'number' && filter.value ) {

				if( itemValue && filter.taxonomy === 'price') {
					itemValue = itemValue.replace(/[^\d.]/g, '');
				}

				if ( filter.compare === 'lt' && Number(itemValue) < filter.value ) {
					pass = false;
				}
				if ( filter.compare === 'gt' && Number(itemValue) > filter.value ) {
					pass = false;
				}
			}
		});

		return pass;

	},

	filtersEmpty : function () {
		var filters = this.filters;
		var filtersEmpty = true;

		Object.keys(this.filters).forEach( function (key) {
			var filter = filters[key];

			if( filter.type === 'array' && filter.value.length > 0 ) {
				filtersEmpty = false;
			} else if( filter.value ) {
				filtersEmpty = false;
			}
		});

		return filtersEmpty;
	},

	updateResults : function () {
		var self = this;

		//If no filters, then show everything
		if(this.filtersEmpty()) {
			$(el).removeClass('filtered');
			return;
		}

		// Loop through each item, test the item,
		$(el).each( function() {
			if ( self.testElement($(this)) ) {
				$(this).removeClass('filtered');
			} else {
				$(this).addClass('filtered');
			}
		});

		this.showFirstTwelve();
		this.updateResultCount();
	},

	updateResultCount : function () {
		var visible = $('div[data-item=listing]:not(.filtered):visible').length;
		var total = $('div[data-item=listing]').length;
		$('.result-count').text('Showing ' + visible + ' of ' + total + ' results');
	},

	formatNumber : function (value, type) {
		if ( type === 'currency' ) {

		}

		if ( type === 'sqft' ) {

		}

		if ( type === 'acres' ) {

		}

		return value;
	},

	showFirstTwelve : function (selector) {
		$('div[data-item=listing]:not(.filtered)').hide().slice(0,12).show();
	},

	init : function (){
	},

	ready : function (){
		this.showFirstTwelve();
		this.bindEventListeners();
		this.updateResultCount();
	},

	resize: function (){

	},

	scroll : function (){

	}

};

module.exports = searchpage;