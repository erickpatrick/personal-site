---
title: "Até logo Next.js... Bem vindos Laravel Folio e Laravel Volt"
excerpt: "Um tempo atrás, na versão anterior do site, falei como o site saiu de um gerador estático em PHP, para Next.js. Hoje, falo do processo inverso e como voltei a usar PHP/Laravel..."
date: "2023-08-12T00:00:00.000Z"
---

Um tempo atrás, na versão anterior do site, falei como o site saiu de um gerador estático em PHP, para Next.js. Hoje, falo do processo inverso e como voltei a usar PHP/Laravel...

### Um pouco de história

Em 70% da minha carreira, programei e liderei equipes que programavam em PHP. Trabalho com PHP desde 2002, quando tinha 14 anos e criei um site de fã sobre o anime Dragon Ball. Já com Laravel, trabalho desde quando ainda estava na versão 3, lá pelos anos 2012/2013.

Também trabalhei com outros frameworks e sistemas feitos em PHP, desde Symfony, passando pelo Magento, Zend/Laminas, Smarty, CakePHP, CodeIgniter, e muitos outros. Tenho extenso conhecimento do mundo do PHP, e segui toda sua evolução desde o PHP3/4, embora tenha recentemente migrado para o mundo JavaScript por conta do trabalho.

Esse mesmo site já foi escrito em vários formatos: HTML puro, geradores estáticos em PHP (o último tendo sido o Jigsaw), e o último em JavaScript/React/Next.js. Sempre usei esse site como um laboratório para meus aprendizados, fosse em PHP, JavaScript, CSS, HTML...

E até hoje ele continua sendo, por isso estou mudando, mais uma vez, a tecnologia por trás dele.

### Até logo, Next.js

Mesmo gostando muito de trabalhar com Next.js e da liberdade que dá para construir algumas aplicações juntando algumas poucas APIs, o ecossistema JavaScript ainda deixa muito a desejar quando comparado ao de outras linguagens.

Para se ter uma ideia, uso Next.js tanto em projetos pessoais quanto na empresa em que trabalho diariamente. São projetos, pequenos, médios e grandes. Vão de blogs a e-Commerce.

Sem entrar em muitos detalhes, o projeto da empresa que trabalho é um e-Commerce que integra cerca de 30 sistemas, entrega para quase todo continente europeu, e é traduzido para 7 idiomas diferentes. Ele recebe milhões de visitas ao dia, e também gera milhares de pedidos ao dia.

Mesmo trabalhando nesse projeto desde 2021, tendo conversado diretamente com pessoas ligada ao Next.js, e acumulando enorme experiência no ecossistema, ainda sinto falta da facilidade que outras linguagens proporcionam.

Por isso, decidi que a nova versão do site mudaria de linguagem. Primeiramente, tinha decidido por Elixir e a framework Phoenix. Aprendi a linguagem relatimente rápido e comecei a trabalhar com a framework logo depois.

Criei pequenos sistemas com eles, aprendendo mais e mais sobre, mas ainda sentia falta de algo. Muito provavelmente minha falta de familiaridade com o ambiente deixava uma pulga atrás da minha orelha.

Foi então que aconteceu a Laracon US 2023, a conferência oficial de Laravel nos EUA, e vi a apresentação de Taylor Otwell, criador do Laravel, sobre Laravel Folio e Laravel Volt. Essa parensentação trouxe várias lembranças da minha época com PHP...

### Olá Laravel Folio e Laravel Volt

Para quem ainda não sabe, Laravel Folio e Laravel Volt são dois novos pacotes do ambiente do Laravel.

O Laravel Folio é uma espécie de Next.js dentro do Laravel, provendo rotas baseadas em arquivos, semelhante ao que o Next.js faz, mas com "baterias incluídas", já que podemos utilizar todo o ecossistema Laravel (e pacotes derivados) para complementá-lo.

Já o Laravel Volt, por sua vez, é um jeito de criar componentes Livewire (um pacote derivado, mas tratado com [**_first party/oficial_** agora](https://livewire.laravel.com)) de forma funcional e em um único arquivo Blade.

Isso permite pessoas que querem ficar no ambiente PHP a criar páginas e/ou sistemas de forma semelhante ao do sistema JavaScript (se isso é uma coisa boa ou ruim, é tópico para um possível artigo no futuro).

Também devemos entender que a existência de ambos, Folio e Volt, permite que pessoas vindo do ecossitema JavaScript, acostumadas com _Vue/Nuxt Single File Components_, Next.js componentes/páginas com seus _getStaticProps_ e similares, a criarem páginas dinâmicas de forma semelhante no Laravel e a experimentarem a framework.

E foi exatamente isso que aconteceu comigo. O que a equipe do Laravel apresentou na Laracon US chamou minha atenção e mostrou que poderia ter o ótimo ecossistema do Laravel com a velocidade e experiência do Next.js. O melhor dos dois mundos, ao meu ver (mais uma vez, é tópico para um possível artigo no futuro).

E assim resolvi reescrever meu site pessoal com essas duas tecnologias. Além delas, adicionei o Filament PHP para criação de paineis de controle, que me permitem escrever e lidar com meus artigos, contatos e outros items desse site, em um único lugar.

Vale lembrar que tudo isso, em meras 4 horas totais de trabalho, sem precisar juntar inúmeras APIs para o que precisava. Por exemplo: Autenticação, autorização, funcionalidade CMS, upload de imagens/arquivos, sessões, envio de emails, analytics, banco de dados, e muitas outras coisas...

Com JavaScript, geralmente, teria de ir atrás de SaaS como: Auth0, Contentful, Cloudinary, Redis Cloud, Resend, Fathom Analytics, Supabase/Torso, e vários outras. Ter de lidar com diversas chaves de API (_API Keys_), limitação de chamadas (_rate limiting_), limitação de dados usado (_ingress/egress data_)...

Sem contar que, para muitos desses sistemas, para ter um mínimo de segurança que meus dados estarão salvos, que terei um nível de suporte ok/satisfatório, ou que posso usar o ambiente para fins comerciais, terei de ir para um plano pago, custando em média US$10/mês para o plano mais simples, em cada um deles.

Com o servidor que pago na Digital Ocean, por US$5/mês, consigo basicamente tudo isso e sem ter de integrar uma API sequer. E se eu precisar de mais "potência" para meus sites e sistemas, posso pagar US$12/mês e obter mais "potência". Ainda assim estaria abaixo do valor que teria de pagar por todos os serviços citados acima.

### O que o futuro reserva

Quem que realmente sabe o que o futuro reserva? Se soubessemos, apostaríamos na loteria o tempo todo e não precisaríamos trabalhar nunca mais, não é? Só sei que estou feliz com esse ecossistema do Laravel e com o que consegui em poucas horas ao atualizar esse site.

É possível que eu tivesse FOMO e tenha pulado de tecnologia em tecnologia que apareceu e chamou minha atenção? Há uma grande chance! Pode ser que eu tenha decidido escolher uma tecnologia que diversos outros desenvolvedores usam, ganham dinheiro com, e provê bastante estabilidade? Com certeza!

A única coisa que peço é que o futuro me permita publicar mais e novos projetos.
