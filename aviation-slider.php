<?php
/**
 * Plugin Name: Aviation Slider
 * Description: Simple hello world widgets for Elementor.
 * Version:     1.0.0
 * Author:      Elementor Developer
 * Author URI:  https://developers.elementor.com/
 * Text Domain: aviation-slider
 */

function register_aviation_slider_widget( $widgets_manager ) {

	require_once( __DIR__ . '/widgets/news-slider.php' );
	require_once( __DIR__ . '/widgets/sports-slider.php' );


	$widgets_manager->register( new \Elementor_news_slider_widget() );
	$widgets_manager->register( new \Elementor_sports_slider_widget() );


}

add_action( 'elementor/widgets/register', 'register_aviation_slider_widget' );

function aviation_widget_enqueue_scripts() {   
    wp_enqueue_style( 'aviation_owl_style', plugin_dir_url( __FILE__ ) . 'assets/css/owl.carousel.min.css'); 
    wp_enqueue_style( 'aviation_style', plugin_dir_url( __FILE__ ) . 'assets/css/aviation-style.css'); 
    wp_enqueue_script( 'aviation_owl', plugin_dir_url( __FILE__ ) . 'assets/js/owl.carousel.min.js',  array('jquery'), '1.0.0', false);
    wp_enqueue_script( 'aviation_slider', plugin_dir_url( __FILE__ ) . 'assets/js/aviation-slider.js',  array('jquery','aviation_owl'), '1.0.0', false);
}
add_action('wp_enqueue_scripts','aviation_widget_enqueue_scripts');
