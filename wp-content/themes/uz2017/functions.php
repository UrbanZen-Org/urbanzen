<?php
// Timber
if (!class_exists('Timber'))
{
  add_action( 'admin_notices', function()
  {
    echo '<div class="error"><p>Timber not activated. Make sure you activate the plugin in <a href="' . admin_url('plugins.php#timber') . '">' . admin_url('plugins.php') . '</a></p></div>';
  });
  return;
}


class StudioLab extends TimberSite 
{

  function __construct()
  {
    add_theme_support('post-thumbnails');
    add_theme_support('eventbrite');
    add_theme_support('thumbnail');
    add_filter('timber_context', array($this, 'add_to_context'));
    add_filter('get_twig', array($this, 'add_to_twig'));
    parent::__construct();
  }

  function add_to_context($context)
  {
    $context['main_menu'] = new TimberMenu('main-menu');
    $context['footer_menu'] = new TimberMenu('footer-menu');

    $context['site'] = $this;
    $context['td'] = get_template_directory_uri();
    $context['options'] = get_fields('options');
    $context['request'] = $_REQUEST;
  
    return $context;
  }

  function add_to_twig($twig)
  {
    $get_field = new Twig_SimpleFunction('get_field', 
      function ($field_name, $page_name = false) 
      {
        if ($page_name != 'options')
        {
          $page = get_page_by_path( $page_name );
          $result = get_field($field_name, $page->ID);
        }elseif ($page_name == 'options')
        {
          $result = get_field($field_name, $page_name);
        }else
        {
          $result = get_field($field_name);
        }
        return $result;
      }
    );

    $twig->addFunction($get_field);
    
    $get_fields = new Twig_SimpleFunction('get_fields', 
      function ($page_name_id) 
      {
        $page = get_page_by_path( $page_name_id );
        return get_fields($page);
      }
    );
    $twig->addFunction($get_fields);

    $alt = new Twig_SimpleFilter('alt', 
      function ($image_id)
      {
        $alt_text = get_post_meta($image_id, '_wp_attachment_image_alt', true);
        if (!$alt_text){
          $alt_text = get_the_title($image_id);
        }
        
        return $alt_text;
      }
    );
    $twig->addFilter($alt);

    $format_date = new Twig_SimpleFilter('format_date', 
      function ($date,$string) 
      {
        return date($string, strtotime($date));
      }
    );
    $twig->addFilter($format_date);
    $event_ticket_widget = new Twig_SimpleFunction('eventbrite_ticket_form_widget', function($id){
      echo $id;
        echo eventbrite_ticket_form_widget($id);
      });
    $twig->addFunction($event_ticket_widget);

    $format_price = new Twig_SimpleFunction('format_price', 
      function ($price) 
      {
        return number_format($price,2);
      }
    );
    $twig->addFunction($format_price);
    
    $check_inventory = new Twig_SimpleFunction('check_inventory', 
      function ($product) 
      {
        $qty = 0;
        $in_stock = false;
        foreach ($product['variants'] as $variant) {
          $qty += (int)$variant['inventory_quantity'];
        }
          if ($qty >= 1){
            $in_stock = true;
          }
        return $in_stock;
      }
    );
    $twig->addFunction($check_inventory);

    $twig->addExtension(new Twig_Extension_Debug());

    function markup_item($item) 
    {

      // print_r($item);
      $markup = '<li class="'. implode(" ", $item->classes ) . '">
        <a href="'. $item->link . '" class="transition-link" title="'. $item->title .'">'. $item->title .'
        </a>';
        if ($item->children){
          if (strpos($item->class, 'current-menu-parent') !== false || strpos($item->class, 'current-menu-item') !== false) {
            
            $class = 'open';
          }
          $markup .= '<ul class="' . $class. '">';
          foreach ($item->children as $i => $item){
            $markup .= markup_item($item);
          }
          $markup .= '</ul>';
        }
      $markup .= '</li>';
      return $markup;
    };
    $markup_menu_item = new Twig_SimpleFunction('markup_menu_item', function($item){
     return markup_item($item);
    });
    $twig->addFunction($markup_menu_item);
    
    return $twig;
    
  }

}
  
new StudioLab();

function register_menus() 
{
  register_nav_menus(
    array(
      'main-menu' => __( 'Main Menu' ),
      'footer-menu' => __('Footer Menu')
    )
  );
}
add_action( 'init', 'register_menus' );

// Create Post Types

function create_collections() {
  $labels = array(
    'name'               => __( 'Collections'),
    'singular_name'      => __( 'Collection'),
    'menu_name'          => __( 'Collections'),
    'name_admin_bar'     => __( 'Collections'),
    'add_new'            => __( 'Add New'),
    'add_new_item'       => __( 'Add New Collection'),
    'new_item'           => __( 'New Collection'),
    'edit_item'          => __( 'Edit Collection'),
    'view_item'          => __( 'View Collection'),
    'all_items'          => __( 'All Collections'),
    'search_items'       => __( 'Search Collections'),
    'parent_item_colon'  => __( 'Parent Collection:'),
    'not_found'          => __( 'No Collections found.'),
    'not_found_in_trash' => __( 'No Collections found in Trash.')
  );

  $args = array(
    'labels'             => $labels,
    'public'             => true,
    'publicly_queryable' => true,
    'show_ui'            => true,
    'query_var'          => true,
    'menu_icon'          => 'dashicons-format-gallery',
    'menu_position'      => 24,
    'rewrite'            => array( 'slug' => 'collections'),
    'capability_type'    => 'post',
    'has_archive'        => false,
    'hierarchical'       => true,
    'supports'           => array('title','thumbnail', 'editor')
  );
  register_post_type( 'collections', $args );
}
add_action( 'init', 'create_collections' );

//Remove needless Wordpress stuff
function remove_admin_bar_links() 
{
  global $wp_admin_bar;
  $wp_admin_bar->remove_menu('wp-logo');          // Remove the WordPress logo
  $wp_admin_bar->remove_menu('about');            // Remove the about WordPress link
  $wp_admin_bar->remove_menu('wporg');            // Remove the WordPress.org link
  $wp_admin_bar->remove_menu('documentation');    // Remove the WordPress documentation link
  $wp_admin_bar->remove_menu('support-forums');   // Remove the support forums link
  $wp_admin_bar->remove_menu('feedback');         // Remove the feedback link
  $wp_admin_bar->remove_menu('updates');          // Remove the updates link
  $wp_admin_bar->remove_menu('comments');         // Remove the comments link
  $wp_admin_bar->remove_menu('new-content');      // Remove the content link
  $wp_admin_bar->remove_menu('w3tc');             // If you use w3 total cache remove the performance link
}
add_action( 'wp_before_admin_bar_render', 'remove_admin_bar_links' );
add_filter('show_admin_bar', '__return_false'); // Remove admin bar

// Add Options Page
if (function_exists('acf_add_options_page')) 
{
  acf_add_options_page('Options');
}

function change_menus()
{
  remove_menu_page( 'index.php' );                  //Dashboard
  remove_menu_page( 'edit.php' );                   //Posts
  // remove_menu_page( 'upload.php' );              //Media
  // remove_menu_page( 'edit.php?post_type=page' ); //Pages
  remove_menu_page( 'edit-comments.php' );          //Comments
  remove_menu_page( 'themes.php' );                 //Appearance
  // remove_menu_page( 'plugins.php' );             //Plugins
  // remove_menu_page( 'users.php' );               //Users
  // remove_menu_page( 'tools.php' );                  //Tools
  // remove_menu_page( 'options-general.php' );     //Settings

  add_menu_page( 'Site Menus', 'Site Menus', 'edit_pages', 'nav-menus.php', '', 'dashicons-list-view', 25 );
}
add_filter( 'intermediate_image_sizes', '__return_empty_array', 999 );
add_action( 'admin_menu', 'change_menus' );

function _remove_script_version( $src ){ 
$parts = explode( '?', $src );  
return $parts[0]; 
} 
add_filter( 'script_loader_src', '_remove_script_version', 15, 1 ); 
add_filter( 'style_loader_src', '_remove_script_version', 15, 1 );