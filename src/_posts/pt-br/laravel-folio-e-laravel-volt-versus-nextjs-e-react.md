---
title: "Laravel Folio e Laravel Volt versus Next.js e React"
excerpt: "Uma comparação entre Laravel Folio e Laravel Volt contra Next.js e React. Trago os pontos que utilizei para decidir qual stack usar para o novo site."
date: "2023-08-12T00:00:00.000Z"
---

Como falei em [um artigo anterior](/artigos/ate-logo-nextjs-bem-vindos-laravel-folio-e-laravel-volt), mudei a tecnologia desse meu site pessoal. Decidi mudar de React e Next.js voltando para PHP com Laravel Folio e Laravel Volt. E nesse artigo trago algumas das comparações que fiz entre os dois conjuntos de tecnologia que me ajudaram a decidir qual dos conjuntos usar.

### O Básico

Para poder comparar os dois conjuntos da melhor forma possível, comecei com as características básicas de cada um. Nada fora do comum. Dois pontos que valem dar destaque são a Interatividade e o Backend Síncrono/Assíncrono.

Muitos acreditam que apenas JavaScript permite criar interatividade, mas também é possível alcançar certos tipos de interatividade apenas escrevendo PHP. Com o [Livewire](livewire.laravel.com), é possível ter validação de inputs, mensagens de erro, mostrar e esconder elementos, apenas escrevendo PHP utlizando o template Blade. Por trás dos panos, Livewire é uma pequena camada JavaScript que não precisamos tocar, mas que permite essa interatividade.

Já em relação ao Backend Síncrono/Assíncrono, muitos pensam que apenas o Node é assíncrono, o que não é verdade. Hoje em dia, há bibliotecas que permitem PHP Roda de forma assíncrona no servidor, de forma semelhante ao Node. Laravel tem um pacote próprio chamado Octane que dá "super poderes" para sua aplicação, usando as abilidades do [Open Swoole](https://openswoole.com/), [Swoole](https://github.com/swoole/swoole-src), e [Roadrunner](https://roadrunner.dev/).

Uma vantagem para o Next.js é que tanto o código no client quanto no servidor você só precisa de JavaScript. Isso permite que você foque em apenas uma linguagem e seu conhecimento sirva para os dois ambientes. Já no Laravel, em tese, você precisa tanto do PHP quanto do JavaScript. A não ser que você utilize Livewire/Volt.

| Característica              | Laravel com Folio/Volt    | React com Next.js |
| --------------------------- | ------------------------- | ----------------- |
| Linguagem Backend           | PHP                       | JavaScript, Node  |
| Linguagem Frontend          | PHP, JavaScript           | JavaScript        |
| Template/Layout             | Blade                     | JSX               |
| Interatividade              | Alpine.js, Livewire, Volt | React             |
| Framework backend           | Laravel                   | Next.js           |
| Backend Síncrono/Assíncrono | Ambos                     | Assíncrono        |

**Vencedor**: Ambos

### Ecossistema

Quando se investe tempo e dinheiro em um conjunto de soluções, é preciso saber o quanto o ecossistema vai ajudar ou atrapalhar seu trabalho. Nesse quesito, ambos os conjuntos possuem um ecossitema bem ativo, com grandes comunidades, bastante e diversos pacotes complementando funcionalidades, e muito mais.

Embora muito próximos, o Laravel sai com vantagem nesse quesito. Com um único gerenciador de pacotes, o Composer, é muito mais fácil para qualquer participante entender que terá de usá-lo para instalar dependências e certas funcionalidades. Já no Next.js, devido o JavaScript dar muitas escolhas acaba que cada equipe poderá ter padrões completamente distintos uma da outra.

Além disso, não há um "padrão" de escrita para o JavaScript, apenas ferramentas de análise estática de código ([ESLint](https://eslint.org/)), pré-definições criadas por grandes equipes (Meta/Facebook, React, Next, Vue, AirBnb, etc...) e formatadores de código ([Prettier](https://prettier.io/)) que se baseiam nessas definições.

Já no PHP, temos as [PSRs](https://www.php-fig.org/psr/) e [PERs](https://www.php-fig.org/per/), Recomendações de Padranização do PHP e Evolução das Recomendações do PHP, respectivamente. Embora sejam recomendações, ou seja, não é algo requerido na sintaxe da linguagem em si, basicamente todo pacote, biblioteca ou framework PHP as seguem. Isso ajuda na interoperabilidade entre os códigos e facilita na experiência do programador PHP que saberá o que esperar de um código bem formatado, por exemplo.

Outro ponto a se levanta em relação ao ecossistema é a quantidade de pacotes eserviços próprios que cada um deles possui, sejam pagos ou não. Quando entramos no site do Laravel e rolamos até a parte médio inferior do site, vemos uma lista com 20 pacotes ou serviços. Já quando vamos no site do Next.js, não vemos algo parecido. Conseguimos achar alguns pacotes na documentação, como o [`next/font`](https://nextjs.org/docs/app/api-reference/components/font), [`next/image`](https://nextjs.org/docs/app/api-reference/components/image), [`next/link`](https://nextjs.org/docs/app/api-reference/components/link), e [`next/script`](https://nextjs.org/docs/app/api-reference/components/script). São pacotes que ajudam a otimizar certas coisas no desenvolvimento mas não aceleram o desenvolvimento ou depuração de códigos, como os do Laravel.

Os pacotes do Laravel ajudam com a criação de dashboard, o [Nova](https://nova.laravel.com/); com pagamentos, o [Cashier](https://laravel.com/docs/10.x/billing); teste automatizado em navegadores, o [Dusk](https://laravel.com/docs/10.x/dusk); autenticação de usuários e criação de equipes, o [Jetstream](https://jetstream.laravel.com/); autenticação via redes socais, o [Socialite](https://laravel.com/docs/10.x/socialite); e muitos, muitos outros.

De certo, a Vercel, empresa criadora do Next.js, que possui serviços de hospedagem, outros serviços que podem ser integrados facilmente ao Next.js, como o [Analytics](https://vercel.com/analytics), [Storage](https://vercel.com/storage), [Monitoring](https://vercel.com/docs/concepts/observability/monitoring), [Deploy Previews](https://vercel.com/features/previews).

O Analytics é uma espécie de Google Analytics mas que também dá a pontuação do Web Page Speed de cada URL sua; O Storage provê uma API de acesso a base de dados Postgre, _Key-Value_, e a upload de imagens; O Monitoring lida com os logs de acesso ao "servidor" do seu siste ou sistema; o Deploy Previews oferece URLs aleatórias ou customizadas, para versões de teste ou desenvolvimento, e também dá possibilidade de comentar nelas para um feedback mais rápido.

Mas, quando comparamos o que o Laravel acelera o desenvolvimento de soluções comparado ao que o Next.js/Vercel fornece, o Laravel consegue ser utilizado em qualquer servidor que tem os recursos mínimos para executá-lo. Já o Next.js, para ter acesso aos serviços como o do Vercel, precisa que a empresa selecionada proveja soluções equivalentes, e ainda assim não terá a mesma API e experiência de desenvolvimento que Next.js com Vercel fornece.

| Característica              | Laravel com Folio/Volt | React com Next.js |
| --------------------------- | ---------------------- | ----------------- |
| Gerenciador de Pacotes      | Composer               | NPM, Yarn, PNPM   |
| Abundância de Pacotes       | Alta                   | Alta              |
| Qualidade de Pacotes        | Alta                   | Média/Alta        |
| Participação Comunidade     | Alta                   | Alta              |
| Ecossistema fragmentado     | Não                    | Sim               |
| Pacotes e serviços próprios | Inúmeros               | Alguns            |

**Vencedor**: Laravel com Folio/Volt

### Requisições e Respostas

Chegando na parte que mais interessa aos programadores e desenvolvedores, a parte que lida com a criação dos sites e sistemas.

Nesse ponto, as duas soluções são bem parecidas e são capazes de obter os mesmos resultados. A diferença é que com o Laravel, temos um padrão definido sobre onde colocar os arquivos, com pastas para controladores, modelos, visões, bibliotecas externas, arquivos do frontend, configuração e muito mais. Já com o Next.js você tem "liberdade" para escolher a estrutura que quiser, embora a comunidade costume usar certas pastas para alguns tipos de arquivos, como componentes, bibliotecas, páginas, etc.

O Next.js, porém, precisa usar muito mais pacotes para obter os mesmos resultados que o Laravel provê por padrão. Rotas via controladores é um exmeplo. Você pode criar um arquivo `routes.js` em um diretório para lidar com requisições `GET`, `POST`, `PUT`, `PATCH`, `DELETE`, `HEAD` e `OPTIONS`, mas como se fossem APIs, e além disso [não pode existir um arquivo](https://nextjs.org/docs/app/building-your-application/routing/route-handlers#route-resolution) `page.js` no mesmo diretório. Com Laravel, você pode criar um controlador e criar rotas que podem ser usadas como API ou que funcionam como páginas num único arquivo.

| Característica          | Laravel com Folio/Volt | React com Next.js |
| ----------------------- | ---------------------- | ----------------- |
| Rotas via arquivos      | Sim                    | Sim               |
| Rotas via controladores | Sim                    | Sim               |
| Middleware              | Sim                    | Sim               |
| Edge Middleware         | Sim                    | Sim               |
| Criação de API          | Sim                    | Sim               |
| Caching                 | Sim                    | Sim               |
| GraphQL Server          | Sim                    | Sim               |

**Vencedor**: Laravel com Folio/Volt

### Bancos de Dados

Quando lidamos com dados, há uma grande chance que teremos de usar um banco de dados em algum momento. Ambas são capazes de lidar com banco de dados, desde os bancos relacionais aos de documentos, de grafos, e por aí vai.

Como o Next.js vive em um ambiente _serverless_, você geralmente não conseguirá usar SQLite no próprio "servidor" para além de leitura, tendo de usar serviços externos, como o Postgre do Vercel Storage, Torso, Supabase, entre outros.

Já por outro lado, o Laravel é usado em um servidor padrão em que é possível aplicativos de bancos de dados sem precisar pagar por um serviço extra. Mesmo que você não queira instalar um MySQL, Postgre ou outro RDBS na sua máquina, por conta do suporte embutido ao SQLite no PHP, o Laravel é capaz de usar o SQLite tanto para leitura quanto escrita.

O Laravel também tem a vantagem de trazer um ORM, _Object-Relational Mapper_, o [Eloquent](https://laravel.com/docs/10.x/eloquent) já embutido. De certo, se você não gosta do Eloquent, você pode buscar alternativas (por exemplo, o [Doctrine ORM](https://symfony.com/doc/current/doctrine.html)) e integrar com o Laravel, mas é costume utilizar apenas o Eloquent.

Com o Next.js você precisará ir atrás de pacotes (por exemplo, o [Drizzle ORM](https://orm.drizzle.team) ou o [Prisma ORM](https://www.prisma.io)), testar cada um, escolher o que mais se encaixa ao seu estilo de desenvolvimento e integrar com o Next.js. Mais uma vez, com o Next.js costuma ser servido em um ambiente _serverless_, é preciso tomar cuidado com a quantidade de conexões que são feitas para seu banco de dados.

Os serviços externos costumam lidar com esse problem por você, mas se você mantiver um servidor de banco de dados próprio, terá de lidar com essa situação por conta própria também.

| Característica            | Laravel com Folio/Volt | React com Next.js |
| ------------------------- | ---------------------- | ----------------- |
| RDBS (SQLite, MySQL, etc) | Sim                    | Via serviços      |
| Redis                     | Sim                    | Via serviços      |
| ORM                       | Sim                    | Via pacotes       |
| Tipo de ORM               | Active Record          | Depende do pacote |

**Vencedor**: Laravel com Folio/Volt

### Sessão, Segurança, Criptografia

Não me entenda mal, lidar com sessões, segurança e criptografia é de grande importância. Você, de modo algum deve deixar essas questões completamente nãs mãos da solução escolhida. Deve ser uma tarefa conjunta da equipe desenvolvedora e da solução, de modo que a equipe utilize da melhor forma possível as ferramentas que a solução provê.

Isso dito, Laravel ganha com bastante vantagem, uma vez que provê muito mais soluções, enquanto para o Next.js você tem de ir atrás de pacotes que lidem com tudo por conta própria. É muito mais trabalho para a equipe de desenvolvimento.

| Característica                | Laravel com Folio/Volt | React com Next.js       |
| ----------------------------- | ---------------------- | ----------------------- |
| Cookies                       | Sim                    | Sim                     |
| Sessão                        | Sim                    | Pacotes                 |
| Validação de dados            | Sim                    | Via pacotes             |
| CSRF                          | Sim                    | Via pacotes             |
| Proteção contra XSS           | Via Blade e Validação  | Via React/JSX e pacotes |
| Proteção contra SQL injection | PDO e Eloquent         | Via pacotes             |
| Criptografia                  | Sim                    | Sim                     |
| Hashing                       | Sim                    | Sim                     |
| Limitador de acesso           | Sim                    | Via pacotes             |

**Vencedor**: Laravel com Folio/Volt

### Extras

A seção sobre ecossistema já cobriu grande parte dos pacotes extras, mas vale lembrar mais uma vez. Ambos possuem vários ótimos pacotes de terceiros que cobrem as funcionalidades citadas abaixo e muitas outras. Entretanto, ao avaliarmos os pacotes oficiais, mais uma vez o Laravel nada de braçada larga em comparação ao Next.js.

O Next.js basicamente não tem pacotes oficiais. Ele possui exemplos que integram serviços de terceiros, mas nada realmente que seja "embutido" ou com pacote oficial como o Laravel. A exceção, até agora, é o Vercel Storage, já explicado anteriormente.

Usando apenas pacotes oficiais, ao colocar desenvolvedores Laravel e Next.js lado-a-lado, e pedindo para criarem uma aplicação do zero, que suporte Autenticação (com multi-fator – _MFA_), autorização, painel de usuário, notificações, e envio de arquivos (um _cloud storage_ bem simplificado, por exemplo), a maioria dos desenvolvedores Laravel terminariam bem mais rápido que os desenvolvedores Next.js.

| Característica               | Laravel com Folio/Volt                                | React com Next.js                                   |
| ---------------------------- | ----------------------------------------------------- | --------------------------------------------------- |
| Autenticação                 | Laravel Breeze                                        | Pacotes de terceiros e/ou serviços                  |
| Autorização                  | Laravel Breeze/Jetstream                              | Pacotes de terceiros e/ou serviços                  |
| Painel de usuário            | Laravel Jetstream, Laravel Nova, Pacotes de Terceiros | Exemplo oficial, Pacotes de terceiros e/ou serviços |
| Plataforma                   | Laravel Jetstream, Laravel Nova, Pacotes de Terceiros | Exemplo oficial, Pacotes de terceiros e/ou serviços |
| Alternador de Funcão (flags) | Laravel Pennant                                       | Exemplo oficial, Pacotes de terceiros e/ou serviços |
| Notificações                 | Sim                                                   | Via pacotes e serviços                              |
| Envio de Arquivos            | Sim                                                   | Vercel Storage, Via pacotes e serviços              |

**Vencedor**: Laravel com Folio/Volt

### Colocando on-online

Aqui é onde o Next.js realmente brilha. Grandes serviços de hospedagem proveem seus serviços gratuitamente e cobrindo as functionalidades que o Next.js necessita (não necessariamente com a mesma API ou experiência). Como grandes exemplos, temos a [Vercel](http://vercel.com), a [Netlify](http://netlify.com), a [Cloudfare](http://cloudfare.com), e outras.

Uma vantagem do Next.js é que você pode criar um site 100% estático, isso é, apenas arquivos HTML, e utilizar APIs com chamadas `fetch` no frontend para áreas dinâmicas. É possível fazer o mesmo com Laravel, mas é preciso usar pacotes de terceiros (ou meter a mão na massa por conta própria), ajustar Nginx, e por aí vai.

Por ter sido criado para o mundo _serverless_, a escalabilidade de um site ou aplicação Next.js quando publicada em um dos serviços citados acima, e sem ter um _devops_ na sua equipe preocupado com isso, é muito maior que de uma aplicação Laravel. As de Next.js estarão em servidores "edge" por padrão dos serviços, enquanto as de Laravel você precisa ajustar sua infrastrutura para obter algo parecido. E mesmo quando ajusta, costuma sair bem mais caro.

Fora esses pontos, ambos tem a mesma possibilidade de publicação em serviços gratuitos (ou com planos gratuitos) ou pagos ([Digital Ocean](https://m.do.co/c/0a82a1d41634), [AWS](https://aws.amazon.com), [Hetzner](https://hetzner.com), [Google Cloud](https://cloud.google.com), [Azure](https://azure.microsoft.com/en-us), [Fly.io](https://fly.io), etc).

É possível, inclusive, publicar applicações [Laravel gratuitamente na Vercel](https://github.com/vercel-community/php), embora você necessariamente precise utilizar serviços de banco de dados, ao invés de ter no seu próprio servidor, ou utilizar apenas um banco de dados SQLite em mod leitura.

Mesmo sendo um pouco mais complexo de fazer manualmente caso não queira pagar por um serviço oficial do Laravel ([Vapor](https://vapor.laravel.com)) ou não queira publicar na Vercel, também é possível publicar o Laravel de forma _serverless_ na AWS utilizando [PHP Bref](https://bref.sh).

Caso queira ainda mais possibilidades, tanto Laravel quanto Next.js podem ser publicados usando Docker e Kubernetes. Recomendo essas modalidades para quando tiver uma equipe maior e com gente que tem mais conhecimentos em _devops_, caso contrário, recomendo utilizar os serviços oficiais do Laravel Forge/Envoyer/Vapor ou da Vercel.

| Característica    | Laravel com Folio/Volt | React com Next.js |
| ----------------- | ---------------------- | ----------------- |
| Site estático     | Via pacotes            | Sim               |
| Site dinâmico     | Sim                    | Sim               |
| CDN               | Gratuito e Pago        | Gratuito e Pago   |
| Servidores        | Gratuito e Pago        | Gratuito e Pago   |
| Servidores "edge" | Gratuito e Pago        | Gratuito e Pago   |
| Serverless        | Gratuito e Pago        | Gratuito e Pago   |
| Docker            | Sim                    | Sim               |
| Kubernetes        | Sim                    | Sim               |

**Vencedor**: React com Next.js

### Conclusão

Ao meu ver, ambos permitem criar aplicações equivalentes. Porém, o Laravel ganha disparado com sua robusta seleção de pacotes oficiais e funcionalidades extras, fora sua comunidade e pacotes de terceiros, que preenchem os espaços que a framework deixa.

Dessa forma, acredito que entenda o porque deu [ter selecionado Laravel com Folio/Volt para essa nova versão do meu site](/artigos/ate-logo-nextjs-bem-vindos-laravel-folio-e-laravel-volt). E, da mesma forma, você também pode. Fique ligado para mais artigos sobre essa solução e artigos relacionados a desenvolvimento.

**Vencedor**: Laravel com Folio/Volt com 6 de 7 pontos possíveis
