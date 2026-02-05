---
title: "Algumas das vantagens do Laravel Folio em relação ao Next.js"
excerpt: "Nesse artigo, trago uma lista com algumas das vantagens que, na minha visão, fazem Laravel Folio muito melhor que Next.js"
date: "2023-09-12T00:00:00.000Z"
---

Algumas semanas atrás, [trouxe uma grande comparação entre Laravel Folio e Laravel Volt versus Next.js e React](http://personal-site.test/artigos/laravel-folio-e-laravel-volt-versus-nextjs-e-react). Hoje, trago algumas das vantagens que, na minha visão, fazem Laravel Folio melhor que Next.js.

Esse artigo servirá como uma expansão ao artigo anterior, servindo como uma explicação para alguns dos pontos que trouxe lá e talvez não tenham ficado claros o suficiente.

Vale lembrar que essa é minha opinião. Você pode discordar, mas acredito que os pontos listados aqui ajudarão a ter uma ideia melhor do que o Laravel Folio é capaz e o quanto ele facilita a criação de aplicações quando comparado à criação de aplicações usando Next.js.

### Customização do diretório de rotas

Embora o Next.js apresente os diretórios `pages` e `app` para as rotas de aplicações como opções, não há muito mais opções onde podemos colocar nossos arquivos de rotas.

Decerto, é possível criar um arquivo de rota bem leve e chamar um componente que esteja em outro diretório, mas não é o mesmo que customizar o diretório de rotas.

```js
// app/page.js
import HomePage from '@components/HomePage'
export default function Index() {
	return <HomePage>
		<p>Algum conteúdo</p>
	</HomePage>
}

// components/HomePage.jsx
export default function HomePage() {
	return <div>{children}</div>
}
```

Com Folio, é possível usar um diretório, digamos `views/pages/admin` para as rotas do painel administrativo da sua aplicação, e usar outro diretório, digamos `views/pages/client` para a parte que seus clientes acessarão.

Para isso, podemos ir ao arquivo `routes/web.php` e adicionar o código a seguir.

```php
// routes/web.php
use Laravel\Folio\Folio;

Folio::path(resource_path('views/pages/client'))->uri('/');
Folio::path(resource_path('views/pages/admin'))->uri('/admin')
```

Com o código acima, qualquer rota no estilo `http(s)://<base_url>/admin` utilizará o diretório `views/pages/admin` enquanto todas as outras rotas utilizarão o diretório `views/pages/client`.

Dessa forma, há uma boa separação entre as áreas e até permite que equipes diferentes possam trabalhar ao mesmo tempo, no mesmo repositório, correndo baixo risco de conflitos.

> **Nota**: É possível tentar replicar com Next.js a separação que o Folio permite usando [Rotas Agrupadas](https://nextjs.org/docs/app/building-your-application/routing/route-groups). Mas, como veremos abaixo, essa separação que o Folio traz é ainda mais robusta que a simples separação dos arquivos em diretórios distintos.

### Rotas nomeadas

Uma coisa que dá sempre muita dor de cabeça no Next.js é alteras os links da aplicação quando alteramos os caminhos das rotas. Por exemplo, quando mudamos o diretório da rota de `app/artigos/[slug]/page.js` para `app/artigo/[slug]/page.js`, temos de alterar todos os lugares em que usamos:

```js
<Link href=`/artigos/${slug}`">…</Link>
```

para

```js
<Link href=`/artigo/${slug}`">…</Link>
```

Se temos apenas um único arquivo em que esse link tipo de link é gerado, geralmente não há problema. Mas se temos mais de um (listagem de artigos, Feed RSS, Sitemap, compartilhamento de redes sociais, etc), o trabalho começa a aumentar.

Claro, com auxílio da ferramenta de busca das IDEs ou de conhecimentos e habilidades usando `sed` na linha de comando, é possível fazer tais alterações de forma rápida. Contudo, sempre há a chance de algum caso que não siga o padrão seja esquecido e acabe gerando links que levem a erros `404`.

Já ao utilizar o Laravel Folio, apenas é preciso utilizar a função `Laravel\Folio\name()` no início do arquivo, e dar um nome específico para aquela rota.

Independente de quantas mudanças de diretório você fizer daquele arquivo, se você utilizar a função `route()` com o mesmo nome dado à rota, você não precisará mexer em nenhum outro arquivo.

Por exemplo, na rota em que visualizamos o conteúdo completo de um artigo podemos ter algo como:

```blade
// views/pages/artigos/[Article:slug].blade.php
<?php

use function Laravel\Folio\name;
name('article.view');

// […] resto do arquivo da rota
```

Enquanto na rota em que lista todos os artigos de um site, apenas com o título, podemos ter algo como:

```blade
// views/pages/artigos.blade.php

<x-layout>
	@foreach ($articles as $article)
		<a href={{ route('article.view', ['slug' => $article->id]) }}>
		{{ $article->title }}
		</a>
	@endforeach
</x-layout>
```

### Comando para listar todas as rotas

Você, alguma vez, já teve problemas em lembrar o caminho de uma rota? Ou talvez já usou o nome antigo de uma rota por pura mania e depois tentou achar o nome novo e levou um tempinho?

Essas e outras situações são facilmente resolvidas com uma função capaz de listar todas as rotas de uma aplicação. O Next.js, infelizmente, não traz tal função nativamente.

O repositório do projeto até chegou a ter [uma discussão sobre a existência de algo assim](https://github.com/vercel/next.js/issues/3351), mas teve apenas uma sugestão em 2017 — para criar um arquivo que pegue todos os arquivos do diretório `pages` e os listasse.

```js
const pages = await glob("pages/**/*.js", { cwd: __dirname });
```

Não bastasse ser algo que temos de fazer por conta própria, essa sugestão não cobre o novo diretório `app`. Buscar apenas por arquivos `page.jsx` não resolve, porque o novo diretório `app` permite agrupamento de rotas, exclusão de rotas, rotas paralelas, rotas de API — que não podem coexistir com rotas normais…

No Laravel, como era de se esperar, temos uma função padrão, capaz de listar todas as rotas da aplicação pela linha de comando:

```sh
php artisan route:list
```

Obtendo um resultado parecido com o seguinte, uma para cada rota da aplicação (resultado colocado de forma diferente para ajustar ao design do site):

```markdown
Método: POST
Rota: admin/login
Nome: admin.login
Classe: AdminLogin@handle
```

Porém, a função acima não lista as rotas que lidam com os arquivos do Folio. Para obter essas rotas, precisamos usar o comando a seguir:

```sh
php artisan folio:list
```

Gerando um resultado parecido com o seguinte, utilizando as rotas de artigo mostradas anteriormente:

```markdown
Método: GET
Rota: /artigos
Nome: -
Classe: artigos.blade.php

Método: GET
Rota: /artigos/{article:slug}
Nome: articles.view
Classe: artigos/[Article:slug].blade.php
```

### Validação automática de parâmetros de rotas

Diversas vezes, precisamos validar parâmetros passados para as rotas através das URLs. No Next.js, podemos lidar com essa situação de duas formas…

- Adicionar a validação no arquivo `middleware.js`

Com essa validação no arquivo `middleware.js`, se não configurarmos apropriadamente em quais rotas o _middleware_ será ativado, ele executará contra todas as rotas, o que pode acabar gerando efeitos colaterais indesejados.

Essa validação também poderá ficar bem complexa, dependendo da profundidade da rota e de quantos parâmetros devemos validar para alcançar nosso objetivo.

- Adicionar a validação no arquivo específico da rota

Já ao colocar a validação no arquivo específico de rota traz código e trabalho extras para a rota; precisamos lembrar ativamente de adicionar as funções validadoras em cada rota nova… Enfim, não é nada "automático" como gostaríamos.

No Laravel, por outro lado, já temos funcionalidades padrão que permitem lidar de forma mais simples com essa situação. Numa aplicação padrão do Laravel, temos:

- [ligação implícita com resultados de banco de dados](https://laravel.com/docs/10.x/routing#route-model-binding)
- [ligação implícita com Enums](https://laravel.com/docs/10.x/routing#implicit-enum-binding)
- [restrição via expressões regulares](https://laravel.com/docs/10.x/routing#parameters-regular-expression-constraints)
- [restrições globais](https://laravel.com/docs/10.x/routing#parameters-global-constraints)

Por ser criado pelo Laravel, o Folio provê [ligação implícita com resultados de banco de dados](https://laravel.com/docs/10.x/routing#route-model-binding) por padrão. Embora não tenhamos as facilidades que uma aplicação Laravel padrão tem com os outros três tipos, podemos replicar a Ligação implícita com Enums e Restrição via Expressões Regulares por meio de ligações customizadas.

Primeiro, crie seu arquivo de rota, por exemplo, `[Test].blade.php`. Depois, crie a classe `Test.php`. Ela pode ficar locada em qualquer diretório, porém, se colocá-la em `App\Model`, Folio a encontrará automaticamente sem nenhuma mudança extra.

Se colocar a classe em outro diretório, terá de mudar o nome da sua rota usando o `namespace` da sua classe. Digamos que o namespace é `App\Routes\Bindings`. O novo nome da rota deve ser `[.App.Routes.Bindings.Test].blade.php`.

Para a classe servir de ligação implícita, devemos fazê-la implementar o contrato `Illuminate\Contracts\Routing\UrlRoutable`.

```php
<?php

// ou qualquer outro namespace/diretório como por exemplo App\Routes\Bindings
namespace App\Models;

use Illuminate\Contracts\Routing\UrlRoutable;

class Test implements UrlRoutable {
    private int $value;

    public function getRouteKey() { }
    public function getRouteKeyName() { }

    public function resolveRouteBinding($value, $field = null)
    {
        $result = null;
        if (is_numeric($value) && $value <= PHP_INT_MAX && $value >= 1) {
            $this->value = $value;
            $result = $this;
        }

        return $result;
    }

    public function resolveChildRouteBinding($childType, $value, $field) { }

    public function __toString(): string
    {
        return (string) $this->value;
    }
}
```

A classe acima, por exemplo, implementa uma ligação implícita que garante que o parâmetro deve ser número e seu valor deve ser maior ou igual a 1 e tamanho máximo de `PHP_INT_MAX`.

Esse código terá comportamento equivalente ao quando encontra (mostra a rota em sia) ou não encontra (página 404) um resultado de banco de dados via ligação implícita com modelo.

**Observação importante**: Para usar o valor da rota que vem na URL, a classe precisa salvar o valor que ela recebe em uma propriedade interna (no caso acima `private int $value`) e também implementar o método mágico `__toString()` retornando o valor convertido para `string` de forma que o Blade possa utilizá-lo no template da rota:

```blade
// No arquivo [Test].blade.php ou [.App.Routes.Bindings.Test].blade.php
<x-layout>
	{{ $test }}
</x-layout>
```

### Ligação automática entre parâmetros de rotas com resultados de banco de dados

Quando a rota pode ser ligada diretamente a algum resultado de banco de dados, no Next.js temos que replicar o mesmo processo que o mencionado no ponto anterior, só que precisamos conectar ao banco de dados por conta própria.

E para conectarmos a um banco de dados no Next.js o que temos de fazer? Depende.

Se você hospeda por conta própria o Next.js no seu próprio servidor, você pode instalar algum sistema de banco de dados, como o MySQL, PostgreSQL, ou usar o SQLite.

Agora, se você publica sua aplicação em serviços como Vercel ou Netlify, é preciso escolher um serviço de banco de dados para começar. Isso se dá por não termos acesso a um banco de dados no mesmo servidor da aplicação.

A própria Vercel fornece um serviço próprio, o _Storage_, que nos permite criar base de dados Postgre ou Redis. Apesar da comodidade, o preço é um pouco salgado se comparado a outras soluções, especialmente se considerarmos os níveis gratuitos dessas alternativas.

Após escolher o banco de dados, temos de escolher um ORM, ou biblioteca que permita conectar com banco de dados e que, de preferência, lide bem com ambientes _Edge_. Uma biblioteca muito utilizada é a Prisma, mas você pode usar TypeORM, Sequelize, ou a que você preferir, desde que se ajuste ao ambiente que você publicará seu projeto.

Por fim, você finalmente pode conectar e fazer consultas ao banco de dados em questão e verificar se o parâmetro passado bate com algum registro para aquele modelo ou tabela. Uma volta e tanto, não é?

Agora, vejamos como é com o Laravel Folio.

O Laravel já vem configurado para usar bancos de dados. Precisamos informá-lo qual utilizaremos e quais as credenciais. E o mais legal é que isso vale tanto para quando usamos Laravel em um ambiente de servidor quanto em um ambiente _serverless_.

Com o banco de dados conectado, podemos criar nossos modelos e informá-los qual o nome da chave primário e chaves estrangeiras. Se o banco de dados segue o padrão do Laravel, é ainda mais rápido.

Com o modelo pronto, precisamos mencioná-lo no nome de arquivo de rota, como no exemplo anterior. Digamos que queremos uma rota para ver os usuários de uma aplicação. Podemos criar o arquivo `users/[Users].blade.php` para esse fim.

Quando acessarmos a rota via `https://<base_url>/users/1` para conferir o usuário com `id = 1`, o Laravel Folio, sem que adicionamentos qualquer código, instanciará o modelo `App\Model\Users` e buscará um registro com aquele `id`. Se existir, mostrar o resultado da rota, caso contrário, lançará uma página 404.

Se quisermos buscar o usuário pelo campo `username` ao invés de seu `id`, podemos alterar o nome do arquivo de rota para `users/[Users:username].blade.php`. Quando algum usuário acessar `https://<base_url>/users/erickpatrick`, Laravel Folio instanciará o modelo `User` e adicionará a cláusula `where username = 'erickpatrick'` para buscar o usuário que tenha `username = 'erickpatrick'`.

E, lembrando, tudo isso automaticamente. Apenas tivemos de mudar o nome do arquivo para indicar nossa intenção, e o Laravel Folio realizou tudo para nós.

### Middleware por rota ou grupos de rota

_Middleware_ é um código executado antes de permitir que a requisição chegue ao código final da rota ou controlador em questão.

Normalmente, o _middleware_ é utilizado para de permitir ou bloquear acesso a determinadas rotas (painel administrativo, por exemplo), filtrar requisições e parâmetros, proteção contra XSS, CSRF, e outros.

Dito isso, esses _middleware_ e quaisquer outros que criemos para nossas aplicações podem não rodar em todas as rotas. Alguns, como _middleware_ para limitação de usagem (_rate limiting_) podem ser aplicados apenas em rotas de APIs.

No Next.js temos apenas um único lugar para criarmos e adicionarmos lógica de _middleware_, no arquivo chamado `middleware.js` localizado no diretório raiz da aplicação.

Se quisermos aplicar lógicas diferentes para rotas diferentes, temos de criar código que verifique a URL de cada requisição e permita executar os códigos específicos se as condições casarem para aquela rota.

Essa lógica extra aumenta a dificuldade e complexidade do `middleware.js` no Next.js. Mais uma vez, quando vemos como podemos aplicar _middleware_ no Laravel Folio, é fácil perceber como o Next.js continua bem atrás em relação à funcionalidade.

O Laravel Folio permite adicionarmos _middlewares_ ao configurar as rotas do Folio no arquivo `routes/web.php` ou diretamente em um arquivo específico de rota. Se tivermos um grupo grande de rotas que precisam utilizar alguns _middlewares_, é melhor a primeira opção. Se tivermos apenas algumas poucas rotas que precisam de _middlewares_ e essas rotas precisam de _middlewares_ diferentes, é melhor utilizar o segundo método.

```php
// routes/web.php
use Laravel\Folio\Folio;

Folio::path(resource_path('views/pages'))->middleware([
    'admin/*' => [
        'auth',
        'verified'
    ],
		'*' => [
			'utm'
		]
]);
```

Com o código acima, todas as rotas que fizerem parte do diretório `admin/*` terão aplicados os _middlewares_ `auth` e `verified`. Nesse mesmo código, todas as rotas também terão aplicado o _middleware_ `utm`.

```php
<?php
// resources/views/pages/pagina-protegida.blade.php
use function Laravel\Folio\{middleware};

middleware(['basic']);

?>

<div>
    Página protegida por senha do tipo <em>HTTP Basic</em>
</div>
```

Digamos que o arquivo de rota acima, `resources/views/pages/pagina-protegida.blade.php`, é a única rota que precisa de uma proteção via usuário e senha do tipo _HTTP Basic_. Chamando a função `Laravel\Folio\middleware()` e passando um `array` com um valor `basic`, essa rota estará protegida e apenas quem tenha as credenciais que poderá acessar seu conteúdo.

### Possibilidade de usar qualquer framework frontend

Esse talvez você não esperava, não é? De cara, já sabemos que com Next.js devemos usar React (ou Preact). Mas com o Laravel Folio, temos diversas possibilidades!

Laravel Folio não tem nenhum requisito para qual framework frontend você utilizará. Se você utiliza Livewire, ele utiliza Alpine.js por trás dos panos, mas se você não o utiliza, você pode instalar React, Vue, Svelte ou Solid. A escolha é sua!

Do mesmo jeito que podemos utilizar essas frameworks frontend com uma aplicação Laravel padrão, podemos utilizá-las com Folio. Algo que temos de ter em mente, porém, é que teremos um misto de MPA e SPA na aplicação.

Se ter esse misto de MPA e SPA não é problema para você, é possível tratar cada rota do Folio como uma mini-SPA e carregar apenas os scripts necessários para aquela rota.

Outro ponto a se considerar é que, se utilizar de mecanismos como [módulos dinâmicos](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/import) e [divisão de código](https://vitejs.dev/guide/features.html#css-code-splitting), é possível tornar o carregamento da parte MPA mais rápido ao reaproveitar de arquivos menores no cache do navegador do cliente.

Agora, se você utiliza Alpine.js em conjunto ao Livewire, pode-se utilizar `wire.navigate` nos links das páginas. Dessa forma, evitam-se navegações completas (estilo MPA) e apenas se carrega a diferença entre as duas páginas (estilo SPA).

É possível fazer algo semelhante com as outras frameworks citadas, mas é preciso implementar um protocolo equivalente ao que o Livewire faz. Cabe a você decidir se quer fazê-lo ou não.

---

Acredito que essa lista de vantagens fará você reavaliar se o Laravel Folio é uma boa pedida ou não para projetos, principalmente se a alternativa é utilizar o Next.js.
