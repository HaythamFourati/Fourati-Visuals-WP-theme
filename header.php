<!DOCTYPE html>
<html <?php language_attributes(); ?>>

<head>
  <meta charset="<?php bloginfo('charset'); ?>">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
  <header class="header-custom">
    <div class="header-custom_nav container mx-auto flex items-center justify-between py-4 px-6">
      <!-- Logo -->
      <a href="<?php echo home_url(); ?>" class="text-2xl text-black">
        <?php bloginfo('name'); ?>
      </a>

      <!-- Navigation Links -->
      <nav class="flex">

        <?php
        wp_nav_menu(array(
          'theme_location' => 'primary',
          'container' => false,
          'items_wrap' => '%3$s',
          'link_before' => '<span class="text-gray-700 hover:text-blue-600">',
          'link_after' => '</span>',
        ));
        ?>

      </nav>

      <!-- CTA Button -->
      <a href="#" class="hidden md:block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">Get Started</a>

      <!-- Mobile Menu Button -->
      <button id="mobile-menu-button" class="md:hidden text-gray-700">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16m-7 6h7"></path>
        </svg>
      </button>
    </div>
  </header>