<?php

use Spatie\Sitemap\SitemapGenerator;

Route::feeds();

Route::get('generate-sitemap-site-pessoal', function() {
    SitemapGenerator::create('https://www.erickpatrick.net')
    ->getSitemap()
    ->writeToFile(public_path('sitemap.xml'));
});
