<?php

use Illuminate\Support\Facades\Route;
use Spatie\Sitemap\SitemapGenerator;

Route::feeds();

Route::get('generate-sitemap-site-pessoal', function() {
    SitemapGenerator::create('https://www.erickpatrick.net')
    ->getSitemap()
    ->writeToFile(public_path('sitemap.xml'));
});

Route::get('projects', fn () => redirect()->route('projects.list'));
Route::get('pages/contact', fn () => redirect()->route('contact.form'));
Route::get('contact', fn () => redirect()->route('contact.form'));
Route::get('blog/{slug}', fn () => redirect()->route('articles.list'));
Route::get('blog', fn () => redirect()->route('articles.list'));
