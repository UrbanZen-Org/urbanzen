<?php
/*
	Template Name: Home Fall 2018
*/
	$templates = 'home-fall-2018.twig';
	$context = Timber::get_context();
	$context['post'] = new TimberPost();

	if (get_fields()){
		foreach (get_fields() as $name=>$value){
			$context['post']->$name = $value;
		}
	}

	Timber::render($templates, $context);
