<?php
/*
	Template Name: Eventbrite Events
*/
	$templates = 'eventbrite/listing.twig';
	$context = Timber::get_context();
	$context['post'] = new TimberPost();
	$ev_query = new Eventbrite_Query( apply_filters( 'eventbrite_query_args', array(
					// 'display_private' => false, // boolean
					// 'status' => 'live',         // string (only available for display_private true)
					// 'nopaging' => false,        // boolean
					// 'limit' => null,            // integer
					// 'organizer_id' => null,     // integer
					// 'p' => null,                // integer
					// 'post__not_in' => null,     // array of integers
					// 'venue_id' => null,         // integer
					// 'category_id' => null,      // integer
					// 'subcategory_id' => null,   // integer
					// 'format_id' => null,        // integer
				) ) );
	$context['events'] = $ev_query->get_posts();
	
	Timber::render($templates, $context);
