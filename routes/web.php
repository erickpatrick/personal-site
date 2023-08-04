<?php

use App\Http\Requests\PublicContactForm;
use App\Models\Article;
use App\Models\Project;
use Illuminate\Support\Facades\Route;

Route::get('/seed-articles', function () {

    Article::create([
        'slug' => 'adeus-nextjs-ola-laravel-folio-e-laravel-volt',
        'title' => 'Adeus Next.js... Olá, Laravel Folio e Laravel Volt',
        'description' => 'Um tempo atrás, escrevi como mudei a tecnologia por trás desse site de um gerador estático em PHP, para Next.js. Dessa vez, falarei do processo inverso, e como voltei a programar em PHP e Laravel...',
        'keywords' => 'programação,laravel,next.js,folio,volt,javascript,php,typescript',
        'content' => 'Um tempo atrás, escrevi como mudei a tecnologia por trás desse site de um gerador estático em PHP, para Next.js. Dessa vez, falarei do processo inverso, e como voltei a programar em PHP e Laravel...',
        'status' => 'published'
    ]);


    Article::create([
        'slug' => 'por-que-decidi-traduzir-meu-site-de-volta-para-o-portugues',
        'title' => 'Por que decidi traduzir meu site de volta para o português?',
        'description' => 'Na versão anterior, meu site era inteiramente em inglês. Nessa nova versão, decidi traduzí-lo interamente para o português. Nesse artigo, trago as principais motivos deu ter tomado essa decisão.',
        'keywords' => 'tradução,português,inglês,programação,brasil',
        'content' => 'Na versão anterior, meu site era inteiramente em inglês. Nessa nova versão, decidi traduzí-lo interamente para o português. Nesse artigo, trago as principais motivos deu ter tomado essa decisão.',
        'status' => 'published'
    ]);

    Article::create([
        'slug' => 'laravel-folio-e-laravel-volt-versus-nextjs',
        'title' => 'Laravel Folio e Laravel Volt versus Next.js',
        'description' => 'Uma comparação entre Laravel Folio e Laravel Volt versus Next.js. Comparo as funcionalidades base que cada conjunto possui, experiência de uso, performance, publicação, e outros pontos que achei pertinentes.',
        'keywords' => 'programação,laravel,next.js,folio,volt,javascript,php,typescript',
        'content' => 'Como expliquei no artigo anterior, mudei a tecnologia por trás desse site de Next.js para Laravel Folio e Laravel Volt. E hoje, trago alguns dados comparativos que me ajudaram nessa escolha. Abaixo, temos o índice dos pontos que tratarei nesse artigo:',
        'status' => 'published'
    ]);

    return true;
});

Route::get('/seed-projects', function () {

    Project::create([
        'slug' => 'rpg-do-mestre',
        'title' => 'RPG do Mestre',
        'description' => 'Meu blog sobre Roleplaying Game (RPG). Desde 2009, publico textos relacionados a RPG de mesa lá.',
        'keywords' => 'rpg, ttrpg, rpg do mestre, solo rpg, roleplaying, games',
        'icon' => '<svg fill="none" stroke-width="1.5" stroke="currentColor" class="absolute left-1 top-1 h6 w-6" viewBox="0 0 24 24"><path d="M 20.469999 6.619999 L 12.57 2.18 C 12.41 2.059999 12.21 2 12 2 C 11.79 2 11.59 2.059999 11.43 2.18 L 3.53 6.619999 C 3.21 6.790001 3 7.119999 3 7.5 L 3 16.5 C 3 16.879999 3.21 17.209999 3.53 17.379999 L 11.43 21.82 C 11.59 21.940001 11.79 22 12 22 C 12.21 22 12.41 21.940001 12.57 21.82 L 20.469999 17.379999 C 20.790001 17.209999 21 16.879999 21 16.5 L 21 7.5 C 21 7.119999 20.790001 6.790001 20.469999 6.619999 M 17.5 10.84" /></svg>',
        'url' => 'https://www.rpgdomestre.com/',
        'status' => 'published'
    ]);

    Project::create([
        'slug' => 'contrata-o-dev-certo',
        'title' => 'Contrata o Dev Certo',
        'description' => 'Sistema para recrutadores e trabalhadores da área de desenvolvimento de aplicativos. Contém banco de questões, avaliações, consultoria, e mais.',
        'keywords' => 'desenvolvimento, programação, recrutamento, tecnologia, aplicativo, sistemas, banco de questões, testes, consultoria',
        'icon' => '<svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="absolute left-1 top-1 w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" /></svg>',
        'url' => 'https://www.contrataodevcerto.com/',
        'status' => 'published'
    ]);

    Project::create([
        'slug' => 'rpg-na-semana',
        'title' => 'RPG na Semana',
        'description' => 'Antiga Weekly do RPG do Mestre, virou um site próprio onde publico os links mais relevantes (na minha opinião) do mundo do RPG',
        'keywords' => 'rpg, links, ttrpg, roleplaying, games',
        'icon' => '<svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="absolute left-1 top-1 w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 3.75V16.5L12 14.25 7.5 16.5V3.75m9 0H18A2.25 2.25 0 0120.25 6v12A2.25 2.25 0 0118 20.25H6A2.25 2.25 0 013.75 18V6A2.25 2.25 0 016 3.75h1.5m9 0h-9" /></svg>',
        'url' => 'https://www.rpgnasemana.com/',
        'status' => 'published'
    ]);

    Project::create([
        'slug' => 'tarefas-do-dia',
        'title' => 'Tarefas do Dia',
        'description' => 'Toda casa tem inúmeras tarefas a serem feitas todos os dias, por todo mundo. Tarefas do Dia ajuda a dividir as atividades entre os moradores.',
        'keywords' => 'tarefas de casa, limpeza, atividades do lar, manutenção da casa',
        'icon' => '<svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="absolute left-1 top-1 w-6 h-6"> <path stroke-linecap="round" stroke-linejoin="round" d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75" /></svg>',
        'url' => 'https://www.tarefasdodia.com/',
        'status' => 'published'
    ]);

    Project::create([
        'slug' => 'no-mnmo',
        'title' => 'No Mnmo',
        'description' => 'Crie consciência dos seus hábitos de consumo e das coisas que você tem e não usa. Registre seus items e receba notificações periódicas de utilizá-las ou, quem sabe, passá-las pra frente.',
        'keywords' => 'minimalismo, vida simples, consumismo, hábitos de consumo, marie kondo, acumuladores, estilo de vida',
        'icon' => '<svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="absolute left-1 top-1 w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" /></svg>',
        'url' => 'https://www.nomnmo.com/',
        'status' => 'published'
    ]);

    Project::create([
        'slug' => 'itinerario-de-viagem',
        'title' => 'Itinerário de Viagem',
        'description' => 'Junto com minha esposa, mantemos itinerários das nossas viagens. Na grande maioria, os itinerários são ótimos para famílias e viagens curtas, de até cinco dias',
        'keywords' => 'viagens, itinerários, viagem em família, entretenimento, lazer',
        'icon' => '<svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="absolute left-1 top-1 w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" /></svg>',
        'url' => 'https://www.itineratio-de-viagem.com/',
        'status' => 'published'
    ]);

    return true;
});

Route::post("/contato", function (PublicContactForm $request) {
    ddd($request);
});
