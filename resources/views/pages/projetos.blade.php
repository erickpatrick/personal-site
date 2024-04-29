<?php

use function Laravel\Folio\name;

name('projects.list');

?>


@php
    use App\Models\Project;

    $projects = Project::whereNot('status', 'draft')
        ->orderBy('id')
        ->limit(10)
        ->get();
@endphp

<x-layout menu="/projetos" title="Projetos"
    description="Listagem com alguns projetos paralelos em que tenho trabalhado: RPG de Mesa, Vídeo Games, YouTube, e muito mais...">

    <x-container>
        <x-section-header>
            Alguns projetos paralelos em que tenho trabalhado: RPG de Mesa, Vídeo Games, YouTube, e muito mais...
        </x-section-header>


        <div class="py-16 md:py-24">
            <dl
                class="mx-auto grid grid-cols-1 gap-x-6 gap-y-10 text-xl leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
                @foreach ($projects as $project)
                    <div class="relative pl-9">
                        <dt class="inline font-semibold text-gray-900">
                            {!! $project->icon !!}
                            {{ $project->title }}.
                        </dt>
                        <!-- space -->
                        <dd class="inline text-gray-600">
                            {{ $project->description }}
                            <p><a href="{{ $project->url }}"
                                class="text-sm font-semibold leading-6 text-blue-600 hover:underline hover:underline-offset-8 decoration-2"
                                aria-describedby="featured-post" target="_blank">Visitar <span
                                    aria-hidden="true">→</span></a></p>
                        </dd>
                    </div>
                @endforeach
            </dl>
        </div>
    </x-container>
</x-layout>
