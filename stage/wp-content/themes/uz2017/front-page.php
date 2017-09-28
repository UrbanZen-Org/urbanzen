<?php
/*
	Template Name: Home
*/
	$templates = 'index.twig';
	$context = Timber::get_context();
	$context['post'] = new TimberPost();
	$context['services'] = new TimberTerm();
	$query = array(
		'post_type' => 'projects',
		'posts_per_page' => -1
	);
	$context['projects'] = Timber::get_posts($query);

	Timber::render($templates, $context);
