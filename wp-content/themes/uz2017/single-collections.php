<?php
	$templates = 'collection.twig';
	$context = Timber::get_context();
	$context['post'] = new TimberPost();
	$context['products'] = get_field('shopify')['products'];
	

	if (get_fields()){
		foreach (get_fields() as $name=>$value){
			$context['post']->$name = $value;
		}
	}
	
	Timber::render($templates, $context);
