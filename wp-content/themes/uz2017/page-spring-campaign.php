<?php
/*
	Template Name: Campaign Spring 2018
*/
	$templates = 'campaign-spring-2018.twig';
	$context = Timber::get_context();
	$context['post'] = new TimberPost();
	
	if (get_fields()){
		foreach (get_fields() as $name=>$value){
			$context['post']->$name = $value;
		}
	}

	Timber::render($templates, $context);
