<?php
	$templates = 'collection.twig';
	$context = Timber::get_context();
	$context['post'] = new TimberPost();
	foreach ((array)get_field('shopify')['products'] as $i => $prod){
		$context['products'][$i] = $prod;
		print_r($prod);
	}

	if (get_fields()){
		foreach (get_fields() as $name=>$value){
			$context['post']->$name = $value;
		}
	}
	
	
	Timber::render($templates, $context);
