<?php

/*
Plugin Name: Advanced Custom Fields: Shopify Field
Plugin URI: PLUGIN_URL
Description: Display products from your Shopify store in WordPress.
Version: 1.0.0
Author: Phil Mongeon
Author URI: http://philmongeon.com
License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html
*/

function include_field_types_shopify_field( $version ) {

	include_once('acf-shopify-field-v5.php');

}

add_action('acf/include_field_types', 'include_field_types_shopify_field');

function my_acf_admin_head() {

	?>
	<style type="text/css">

		.current-collection-products * {
			box-sizing:border-box;
		}

		.current-collection-products {
			text-transform:uppercase;
			margin:0 -0.25rem;
			clear:both;
			box-sizing:border-box;
		}

		.current-collection-products .product {
			text-transform: none;
			display: block;
			float:left;
			width:25%;
			padding:0.5rem;
		}

		.current-collection-products .product:nth-child(4n+1) {
			clear:both;
		}

		.current-collection-products .product a {
			outline:1px solid #eee;
			background:#f7f7f7;
			display:block;
			padding:1rem;
		}

		.current-collection-products .product img {
			width:100%;
			display:block;
		}

	</style>

	<script type="text/javascript">
	(function($){

		/* ... */

	})(jQuery);
	</script>
	<?php
}

add_action('acf/input/admin_head', 'my_acf_admin_head');

?>
