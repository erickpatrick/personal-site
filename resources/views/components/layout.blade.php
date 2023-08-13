@props([
    'menu' => '/',
    'title' => null,
    'description' => 'Esse é o site pessoal de Erick Patrick, onde ele compartilha um pouco de sua experiência e habilidades através de artigos, entrevistas, vídeos e muito mais'
])

@php
$finalTitle = isset($title)
    ? "{$title} | Site pessoal de Erick Patrick"
    : "Site pessoal de Erick Patrick"
@endphp

<!DOCTYPE html>
<html lang="pt-BR" class="light">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- Required Meta Tags Always Come First -->
    <meta charset="utf-8">
    <meta name="robots" content="max-snippet:-1, max-image-preview:large, max-video-preview:-1">
    <link rel="canonical" href="{{ url()->full() }}">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="{{ $description }}">

    <meta name="twitter:site" content="@erickpatrick">
    <meta name="twitter:creator" content="@erickpatrick">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="{{ $title }}">
    <meta name="twitter:description" content="{{ $description }}">
    <meta name="twitter:image" content="../../assets/img/og-image.png">

    <meta property="og:url" content="{{ url()->full() }}">
    <meta property="og:locale" content="pt_BR">
    <meta property="og:type" content="website">
    <meta property="og:site_name" content="ErickPatrick">
    <meta property="og:title" content="{{ $title }}">
    <meta property="og:description" content="{{ $description }}">
    {{-- <meta property="og:image" content="../../assets/img/og-image.png"> --}}


    <title>{{ $finalTitle }}</title>
    @vite('resources/css/app.css')
    @livewireStyles
</head>

<body class="">
    <div class="container mx-auto p-4 py-8">
        <x-header menu="{{ $menu }}" />
    </div>

    {{ $slot }}

    <x-footer menu="{{ $menu }}" />
    @livewireScripts
</body>

</html>
