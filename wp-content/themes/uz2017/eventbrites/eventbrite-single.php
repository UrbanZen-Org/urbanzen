<?php
/**
 * The Template for displaying all single Eventbrite events.
 */
	$templates = 'eventbrite/single.twig';
	$context = Timber::get_context();
	$context['post'] = new TimberPost();
	$context['event'] = new Eventbrite_Query( array( 'p' => get_query_var( 'eventbrite_id' ) ) );
	
	Timber::render($templates, $context);
