<?php

/*
*	Shopify Field Class
* ==================================== */
class acf_field_shopify_field extends acf_field {

	/*
	*  __construct
	*
	*  This function will setup the field type data
	*
	*  @type	function
	*  @date	5/03/2014
	*  @since	5.0.0
	*
	*  @param	n/a
	*  @return	n/a
	*/

	function __construct() {

		/*
		*  name (string) Single word, no spaces. Underscores allowed
		*/

		$this->name = 'Shopify Field';


		/*
		*  label (string) Multiple words, can include spaces, visible when selecting a field type
		*/

		$this->label = __('Shopify Field', 'acf-shopify_field');


		/*
		*  category (string) basic | content | choice | relational | jquery | layout | CUSTOM GROUP NAME
		*/

		$this->category = 'E-Commerce';


		/*
		*  defaults (array) Array of default settings which are merged into the field object. These are used later in settings
		*/

		$this->defaults = array(
			'shop_url' => '',
			'api_key' => '',
			'api_password' => ''
		);


		/*
		*  l10n (array) Array of strings that are used in JavaScript. This allows JS strings to be translated in PHP and loaded via:
		*  var message = acf._e('FIELD_NAME', 'error');
		*/

		$this->l10n = array(
			'error'	=> __('Error! Please enter a higher value', 'acf-shopify_field'),
		);


		// do not delete!
    	parent::__construct();

	}


	/*
	*  render_field_settings()
	*
	*  Create extra settings for your field. These are visible when editing a field
	*
	*  @type	action
	*  @since	3.6
	*  @date	23/01/13
	*
	*  @param	$field (array) the $field being edited
	*  @return	n/a
	*/

	function render_field_settings( $field ) {

		/*
		*  acf_render_field_setting
		*
		*  This function will create a setting for your field. Simply pass the $field parameter and an array of field settings.
		*  The array of settings does not require a `value` or `prefix`; These settings are found from the $field array.
		*
		*  More than one setting can be added by copy/paste the above code.
		*  Please note that you must also have a matching $defaults value for the field name (font_size)
		*/

		acf_render_field_setting( $field, array(
			'label'			=> __('Shop URL','acf-shopify_field'),
			'instructions'	=> __('Enter Your Shopify Shop URL (your-shop.myshopify.com)','acf-shopify_field'),
			'type'			=> 'text',
			'name'			=> 'shop_url'
		));

		acf_render_field_setting( $field, array(
			'label'			=> __('API Key','acf-shopify_field'),
			'instructions'	=> __('Enter Your Shopify API Key','acf-shopify_field'),
			'type'			=> 'text',
			'name'			=> 'api_key'
		));

		acf_render_field_setting( $field, array(
			'label'			=> __('API Password','acf-shopify_field'),
			'instructions'	=> __('Enter Your Shopify API Password','acf-shopify_field'),
			'type'			=> 'text',
			'name'			=> 'api_password'
		));

	}


	/*
	*  render_field()
	*
	*  Create the HTML interface for your field
	*
	*  @param	$field (array) the $field being rendered
	*
	*  @type	action
	*  @since	3.6
	*  @date	23/01/13
	*
	*  @param	$field (array) the $field being edited
	*  @return	n/a
	*/


	function render_field( $field ) {

		$atts = array(
			'id'			=> $field['id'],
			'name'			=> $field['name'],
		);

		$handler 	= new shopify_api_handler($field);
		$smart_collections 	= $handler->grab_all_smart_collections();

		if( isset( $products['error_type'] ) ) {

			echo '<span class="error">'.$products['message']['errors'].'</span>';

		}

		else {

			echo '<select name="' . $atts['name'] . '[id]">';

				echo '<option value="0">No Collection Selected</option>';

				foreach($smart_collections as $smart_collection) {

					$selected = '';

					if( $smart_collection['id'] == $field['value']['id'] ) {
						$selected = 'selected';
					}

					echo '<option value="'.$smart_collection['id'].'" '.$selected.'>'.$smart_collection['title'].'</option>';

				}

			echo '</select>';

		}

		if(isset($field['value'])) {
			echo '<input type="hidden" name="' . $atts['name'] . '[order]" value="' .$field['value']['order']. '" id="order_input">';
				echo '<h4>Current products in this collection</h4>';
				echo '<script type="text/javascript" src="'. plugin_dir_url(__FILE__).'/Sortable.min.js"></script>';
				
				echo '<script type="text/javascript">window.onload= function(){var el = document.getElementById("collection-products");
var sortable = new Sortable(el,{
	onUpdate: function (evt) {
		document.getElementById("order_input").value = sortable.toArray().join(",");
	}	
});
};
</script>';

echo '<div class="current-collection-products" id="collection-products">';
				$products = $field['value']['products'];

	      foreach($products as $index=>$product) { ?>

	        <div class="product" style="width:100%;" data-id="<?php echo $product['id']; ?>">
	          <a target="_blank" href="http://urbanzen.myshopify.com/products/<?php echo $product['handle']; ?>" style="padding:5px 5px 0;text-decoration: none;">
	            <img src="<?php echo $product['images'][0]['src']; ?>" alt="" style="display:inline-block;width:15%;"/>
	            <h4 style="width:74%;display:inline-block;vertical-align: bottom;padding:0;margin: 0;"><?php echo $product['title']; ?></h4>
	          </a>
	        </div>

	      <?php }

		}

	}



	/*
	*  update_value()
	*
	*  This filter is applied to the $value before it is saved in the db
	*
	*  @type	filter
	*  @since	3.6
	*  @date	23/01/13
	*
	*  @param	$value (mixed) the value found in the database
	*  @param	$post_id (mixed) the $post_id from which the value was loaded
	*  @param	$field (array) the field array holding all the field options
	*  @return	$value
	*/



	function update_value( $value, $post_id, $field ) {
		if(!$value) {
			return;
		}
			$id = $value['id'];
			$collection = ["id" => $id, "products" => []];
			$handler 	= new shopify_api_handler($field);

			if ($value['order']){
				$curr_prods = explode(",", $value['order']);
				foreach($curr_prods as $product) {
					$product 	= $handler->grab_single_product($product);
					if(!is_null($product['published_at'])) {
						$collection['products'][] = $product;
					}
				}
			}else{
				

				$collect = $handler->grab_collect($id);

				foreach($collect as $collect_product) {
					$product 	= $handler->grab_single_product($collect_product['id']);
					if(!is_null($product['published_at'])) {
						$collection['products'][] = $product;
					}
				}
			}
		return $collection;

	}


}

// create field
new acf_field_shopify_field();

/*
*	Shopify API Handler Class
* ==================================== */
require_once __DIR__.'/api/http.php';
require_once __DIR__.'/api/shopify.php';
use phpish\shopify;

class shopify_api_handler {


	function __construct($field) {

		$this->field = $field;

		if( !defined ( 'SHOPIFY_SHOP' ) ) {
			define('SHOPIFY_SHOP', $field['shop_url']);
		}

		if( !defined ( 'SHOPIFY_APP_API_KEY' ) ) {
			define('SHOPIFY_APP_API_KEY', $field['api_key']);
		}

		if( !defined ( 'SHOPIFY_APP_PASSWORD' ) ) {
			define('SHOPIFY_APP_PASSWORD', $field['api_password']);
		}

		$this->shopify = $shopify = shopify\client(SHOPIFY_SHOP, SHOPIFY_APP_API_KEY, SHOPIFY_APP_PASSWORD, true);

		$this->curl_error_message = '[CURL] There was an error. Please ensure your shopify domain is entered correctly (my-shop.myshopify.com) and that your server has CURL enabled.';

	}

	function grab_all_smart_collections() {
		return $this->api_call('GET /admin/smart_collections.json');
	}

	function grab_all_products() {
		 $this->api_call('GET /admin/products.json', array(
			'published_status'	=> 'published',
			'fields'		 	=> 'id,title,image,body_html,variants'
		));
	}

	function grab_collect($id) {
		if($id == 0) return;
		return $this->api_call('GET /admin/products.json?collection_id='.$id.'.json');
	}


	function grab_single_product($id) {
		if($id == 0) return;
		return $this->api_call('GET /admin/products/'.$id.'.json?fields=id,handle,images,title,variants,published_at');
	}

	function api_call($request) {

			$shopify = $this->shopify;

			try {
				$response = $shopify($request);
				return $response;
			}

			catch (shopify\ApiException $e) {
				# HTTP status code was >= 400 or response contained the key 'errors'
				$errors = [];
				$errors['error_type']	= 'API';
				$errors['message'] 		= $e->getResponse();
				return $errors;
			}

			catch (shopify\CurlException $e) {
				# cURL error
				$errors = [];
				$errors['error_type']			= 'CURL';
				$errors['message']['errors'] 	= $this->curl_error_message;
				return $errors;
			}

	}

}
