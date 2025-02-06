<?php

function load_assets() {
    // Enqueue the built styles and scripts.
    wp_enqueue_style('ourmaincss', get_theme_file_uri('/build/index.css'));
    // Enqueue GSAP from the official CDN.
    wp_enqueue_script('gsap', 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js', array(), null, true);
    wp_enqueue_script('ourmainjs', get_theme_file_uri('/build/index.js'), array('wp-element'), '1.0', true);
}

add_action('wp_enqueue_scripts', 'load_assets');

function add_support() {
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('menus');
}

add_action('after_setup_theme', 'add_support');
