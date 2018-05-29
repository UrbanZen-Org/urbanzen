	<?php
/**
 * The Template for displaying all single Eventbrite events.
 */
	$templates = 'eventbrite/single.twig';
	$context = Timber::get_context();
	
	$event = new Eventbrite_Query( array( 'p' => get_query_var( 'eventbrite_id' ) ) );
	$context['event'] = $event->get_posts()[0];
	Timber::render($templates, $context);
