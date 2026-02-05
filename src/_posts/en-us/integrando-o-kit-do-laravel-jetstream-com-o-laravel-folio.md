---
title: "Integrando o kit do Laravel Jetstream com o Laravel Folio"
excerpt: "Aprenda a usar a navegação por rotas do Laravel Folio junto do kit de aplicação Laravel Jetstream, e tenha o melhor dos dois mundos."
date: "2023-09-25T00:00:00.000Z"
---

Já trouxe [um comparativo entre o Laravel Folio e o Next.js](https://www.erickpatrick.net/artigos/laravel-folio-e-laravel-volt-versus-nextjs-e-react) e também já falei de [algumas das principais vantagens do Laravel Folio sobre o Next.js](https://www.erickpatrick.net/artigos/algumas-das-vantagens-do-laravel-folio-em-relacao-ao-nextjs).

Hoje, trago algo um pouco mais prático. Essa dica apliquei recentemente em um projeto que estou trabalhando. Hoje mostro como integrar o kit do Laravel Jetstream com o Laravel Folio.

### Laravel Jetstream

É bem provável que você já conheça o [Laravel Jetstream](https://jetstream.laravel.com/introduction.html) já que está lendo esse artigo, mas caso não conheça, deixa eu resumir: O Jetstream é um pacote oficial do Laravel que é um kit que agiliza a criação de aplicações, trazendo funcionalidades como:

- Login
- Registro de usuários
- Confirmação/verificação de e-mail
- Autenticação em 2 fatores
- Gerenciamento de sessões
- Sistema de APIs via [Laravel Sanctum](https://laravel.com/docs/10.x/sanctum)
- Gerenciamento de equipes

Esse kit ajuda muito na hora de criar aplicações onde o painel administrativo é compartilhado entre os usuários finais e os administradores do serviço. Quando não há necessidade desse compartilhamento, é possível separar o painel administrativo usando ferramentas como o [Laravel Nova](https://nova.laravel.com/) ou o [Filament PHP](https://filamentphp.com/).

### Pré-requisitos

Antes de mais nada, embora possa parecer óbvio, como estamos lidando com uma aplicação PHP, precisamos ter PHP instalado na nossa máquina. Nada mais é necessário se utilizarmos SQLite como a base de dados. Caso contrário, garanta que você tem todos os outros requisitos do Laravel instalados.

### Instalando o Laravel

Nesse artigo, lidaremos com uma aplicação recém criada. Se você já possui uma aplicação usando Jetstream e apenas quer ver como integrar o Laravel Folio, recomendo pular direto para [_Instalando o Laravel Folio_](#instalando-o-laravel-folio) logo abaixo.

Para criar uma nova aplicação Laravel, rode o comando a seguir no seu terminal, substituindo `nome-do-seu-projeto` pelo verdadeiro nome do seu projeto e do diretório onde o código ficará:

```sh
composer create-project laravel/laravel nome-do-seu-projeto
```

### Instalando o Laravel Jetstream

Uma vez terminada a criação do seu novo projeto com Laravel, devemos adicionar a dependência do Laravel Jetstream ao projeto. Fazemos isso rodando o código abaixo no terminal:

```sh
composer require laravel/jetstream
```

O código acima adicionará `laravel/jetstream` como uma dependência no seu `composer.json` e começará a baixar os arquivos do kit. Uma vez terminado, é hora de rodar o comando a seguir:

```sh
php artisan jetstream:install livewire --teams
```

O comando acima instalará as rotas, os controladores, os modelos, e tudo mais necessário para que as funcionalidades do Jetstream estejam presentes na nossa aplicação. Além disso, escolhemos a versão que utiliza Livewire (temos também a versão que utiliza apenas Blade e a que usa Inertia.js).

Também escolhemos instalar a versão que adicionar a funcionalidade de gerenciamento de equipes, para realmente testarmos o máximo de rotas possível do Jetstream.

### Rodando as migrações

Com o Jetstream instalado, é hora de rodarmos nossas migrações para criarmos as tabelas no nosso banco de dados. Nesse exemplo, estou usando SQLite, reduzindo a dependência em outros serviços. Por isso, devo informar ao Laravel que ele deve utilizá-lo também.

Fazemos isso mantendo apenas a configuração `DB_CONNECTION` no nosso arquivo `.env`. Ela deve ser configurada da seguinte forma:

```env
DB_CONNECTION=sqlite
```

> Se utilizar outro banco de dados, garanta que todas as configurações necessárias para o sistema escolhido estão presentes no seu arquivo `.env`

Com isso, estamos preparados para rodar o comando a seguir:

```sh
php artisan migrate
```

O comando a seguir verificará se sua base de dados SQLite existe e se não existir, perguntará se você deseja criar uma. Faça sua escolha de acordo com sua aplicação. Logo após, o comando criará as tabelas necessárias para verificar quais migrações rodar, além das tabelas para:

usuários
recuperação de senhas
sessões
equipes
convites para equipes

### Instalando o Laravel Folio

Aqui começa a parte “importante” do artigo e que, provavelmente, a que você deve ter mais interesse. Para ter um sistema de rotas semelhante ao Next.js, o Laravel fornece o pacote oficial, Laravel Folio.

Para instalá-lo, devemos rodar o comando a seguir na linha de comanda:

```sh
composer require laravel/folio
```

Assim como com o Jetstream, o comando acima adicionar `laravel/folio` nas dependências do projeto e começará a baixar os arquivos da dependência. Após baixado, temos de rodar o comando a seguir:

```sh
php artisan folio:install
```

O comando acima garantirá que o _ServiceProvider_ do Laravel Folio seja executado pela aplicação. O _ServiceProvider_ carregará o código necessário para lidar com as rotas baseadas em arquivos e várias funções auxiliares que facilitarão na programação do seu projeto.

### Ajustando as rotas do Laravel Folio

Agora que temos o Laravel Folio instalado, podemos configurar seu sistema de rotas. Para nosso caso, não mudaremos o diretório padrão e continuaremos usando `resources/views/pages`.

Porém, como queremos que nossa aplicação utilize as funcionalidades do Jetstream como proteção de rotas via _middleware_ para usuários registrados, devemos ajustar quais sub-rotas da aplicação devem ser protegidas.

Conseguimos atingir esse objetivo utilizando a _facade_ do Folio para configurá-lo no nosso arquivo de rotas:

```php
// routes/web.php
use Laravel\Folio\Folio;

// outras rotas

Folio::path(resource_path('views/pages'))
    ->uri('/')
    ->middleware([
        'dashboard/*' => [
            'auth:sanctum',
            config('jetstream.auth_session'),
            'verified',
        ]
    ]);
```

O código acima, como dito, mantém o diretório `views/pages` padrão, configura a rota raiz como a rota inicial para essa configuração do Folio (sim, podemos ter mais de uma configuração se precisarmos), e configura 3 _middlewares_ para rodarem sempre que a rota `/dashboard/` for acionada.

Se você prestar atenção, essa é a mesma configuração que o Jetstream adiciona ao nosso arquivo de rotas assim que é instalado. Contudo, ele utiliza a forma tradicional de criação de rotas ao invés do método do Laravel Folio.

```php
// routes/web.php

// remova o código abaixo
Route::middleware([
    'auth:sanctum',
    config('jetstream.auth_session'),
    'verified',
])->group(function () {
    Route::get('/dashboard', function () {
        return view('dashboard');
    })->name('dashboard');
});
```

Como queremos utilizar o método do Laravel Folio, é seguro remover essa configuração de rota do nosso arquivo de rotas.

Também precisamos ajustar os arquivos da rota `/dashboard` que o Jetstream cria de forma que siga o formato do Laravel Folio. Assim, devemos mudar o arquivo `resources/views/dashboard.blade.php` para `resources/views/pages/dashboard/index.blade.php`.

Depois disso, ainda precisamos adicionar o código a seguir no topo do arquivo `resources/views/pages/dashboard/index.blade.php`:

```php
// resources/views/pages/dashboard/index.blade.php

<?php
use function Laravel\Folio\name;

name('dashboard');
?>
```

Isso permitirá que os links criados utilizando rotas nomeadas continuem a funcionar apropriadamente (temos alguns na rota inicial da aplicação: a página de _welcome_). E lidaremos com ela agora!

### A rota inicial da aplicação

Se você já trabalha com Laravel ou é curioso, deve estar se perguntando: “E aquela rota _welcome_ que mostra a página inicial de uma aplicação recém criada do Laravel?”. Pois bem, é hora de migrá-la também para o formato do Laravel Folio.

Precisamos mover alguns arquivos e ajustá-los para seguirem o padrão do Laravel Folio. O arquivo `resources/views/welcome.blade.php` deve ser mudado de lugar e renomeado para `resources/views/pages/index.blade.php`.

Isso feito, podemos remover a rota `welcome` (veja abaixo) do nosso arquivo de rotas:

```php
// routes/web.php

// remova o código abaixo
Route::get('/', function () {
    return view('welcome');
});
```

### Hora de codificar sua aplicação

Com essas mudanças feitas, agora você pode codificar sua aplicação utilizando as rotas do Laravel Folio e utilizar as funcionalidades do Laravel Jetstream. As rotas de que estiverem no diretório `dashboard` estarão protegidas e os usuários terão de fazer login para acessá-las.

Caso queira proteger outras rotas também, basta duplicar o código que ajusta as rotas Laravel do Folio para o novo diretório que você quer proteger, via middleware, aquele novo diretório/rota:

```php
// routes/web.php
use Laravel\Folio\Folio;

// outras rotas

Folio::path(resource_path('views/pages'))
    ->uri('/')
    ->middleware([
        'dashboard/*' => [
            'auth:sanctum',
            config('jetstream.auth_session'),
            'verified',
        ],
        'novo-diretorio-a-proteger/*' => [
            'auth:sanctum',
            config('jetstream.auth_session'),
            'verified',
        ],
        'admin/*' => [
            'auth:sanctum',
            config('jetstream.auth_session'),
            'verified',
            'admin' // middleware para verificar nível admin
        ],
    ]);
```

Acima, mostro até como adicionar um possível novo verificador _middleware_ (chamado `admin`) para rotas que comecem com `/admin` e que só permitirão usuários com nível `admin` acessar aquelas rotas.

O mais legal é que mesmo que tentem abrir essas rotas sem estar logados, Laravel Jetstream pedirá que façam login para permitir o acesso.

### As rotas do Laravel Jetstream

O Laravel Jetstream tem rotas próprias, como a `/user/profile`, a `/teams/*`, e algumas outras para upload de imagens, convite de usuários, recuperação de senha, etc. Todas elas, quando necessário, também estarão protegidas, da mesma forma que nossas rotas do painel.

---

Espero que esse artigo tenha ajudado você a integrar o Laravel Jetstream ao Laravel Folio. Que essa combinação permita você a criar suas aplicações de forma mais dinâmica e fácil, e que seus projetos entrem no ar o mais rápido possível.

Até a próxima.
