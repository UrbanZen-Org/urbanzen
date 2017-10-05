<?php
/*
	Template Name: Home
*/
	$templates = 'home.twig';
	$context = Timber::get_context();
	$context['post'] = new TimberPost();

	Timber::render($templates, $context);
