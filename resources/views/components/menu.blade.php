@php
    $alwaysActive = 'p-2 hover:underline hover:underline-offset-8 decoration-2 decoration-wavy decoration-blue-600';
    $conditionallyActive = 'font-bold underline underline-offset-8'
@endphp
@props(['active'])

<nav class="hidden sm:flex py-3 justify-between">
    <a @class([$alwaysActive, $conditionallyActive => $active == '/']) href="/" wire:navigate>Inicial</a>
    <a @class([$alwaysActive, $conditionallyActive => $active == '/artigos']) href="/artigos" wire:navigate>Artigos</a>
    <a @class([$alwaysActive, $conditionallyActive => $active == '/projetos']) href="/projetos" wire:navigate>Projetos</a>
    <a @class([$alwaysActive, $conditionallyActive => $active == '/contato']) href="/contato" wire:navigate>Contato</a>
</nav>

<a class="sm:hidden flex p-4 underline underline-offset-8" href="#footer-menu">Menu</a>
