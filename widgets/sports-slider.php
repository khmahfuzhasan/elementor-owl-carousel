<?php
class Elementor_sports_slider_widget extends \Elementor\Widget_Base {

	public function get_name() {
		return 'sports_slider_widget';
	}

	public function get_title() {
		return esc_html__( 'Aviation Slider Sports', 'aviation-slider' );
	}

	public function get_icon() {
		return 'eicon-code';
	}

	public function get_categories() {
		return [ 'basic' ];
	}

	public function get_keywords() {
		return [ 'slider', 'carousel','Sports','aviation' ];
	}


	protected function register_controls() {
        
    }
	protected function render() {
        $args = array(  
            'post_type' => 'post',
            'post_status' => 'publish',
            'cat' => '14',
            'posts_per_page'=>-1, 
            'orderby' => 'title', 
            'order' => 'desc', 
        );

		$query = new WP_Query($args);
        // The Loop
        echo '<div class="aviation-slider owl-carousel aviation-sports">';
            while ( $query->have_posts() ) {
                $query->the_post();
                ?>
                    <div class="aviation-slide">
                        <div class="aviation-featured-image">
                            <a href="<?php the_permalink(); ?>">
                                <img id="aviation_hover_plus" src="<?php echo plugin_dir_url( __FILE__ );?>../assets/images/plus.png">
                                <?php the_post_thumbnail(); ?>
                            </a>
                        </div>
                        <div class="aviation-content">
                            <a href="<?php the_permalink(); ?>"><h2><?php echo wp_trim_words( get_the_title(), 8, '...' );?></h2></a>
                            <p><?php echo wp_trim_words( get_the_content(), 15, '' );?></p>
                            <a id="aviation_see_more" href="<?php the_permalink(); ?>">SCOPRI DI PIU’  <img src="<?php echo plugin_dir_url( __FILE__ );?>../assets/images/plus.png"></a>
                        </div>
                    </div>
                <?php
            }
        echo '</div>';
	}
}