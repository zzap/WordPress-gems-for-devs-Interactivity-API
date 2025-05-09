<?php
/**
 * PHP file to use when rendering the block type on the server to show on the front end.
 *
 * The following variables are exposed to the file:
 *     $attributes (array): The block attributes.
 *     $content (string): The block default content.
 *     $block (WP_Block): The block instance.
 *
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */

// Adds the global state.
wp_interactivity_state(
	'wpgems',
	array(
		'isDark'    => false,
		'countToggles' => (int) 1
	)
);
?>

<div
	<?php echo get_block_wrapper_attributes(); ?>
	data-wp-interactive="wpgems"
	data-wp-class--dark-theme="state.isDark"
>
	<p>The other block toggled <span data-wp-text="state.countToggles"></span> times</p>
</div>
