<?php
/*
	Template Name: Orient Express Runway
*/
	$templates = 'orient-express-runway.twig';
	$context = Timber::get_context();
	$context['post'] = new TimberPost();
	
	if (get_fields()){
		foreach (get_fields() as $name=>$value){
			$context['post']->$name = $value;
		}
	}

	Timber::render($templates, $context);
