---
title: "Tailwind CSS Playgrounds 1"
excerpt: "O que tenho criado ou recriado com Tailwind CSS no play.tailwind.css, parte 1"
date: "2025-09-30T00:00:00.000Z"
---

Para continuar dentro das capacidades do CSS e do Tailwind, de tempos em tempos eu tento criar alguns componentes, alguns layouts e templates, ou mesmo recriar algo que vi em algum site e achei legal.

Vale lembrar que no play.tailwindcss.com apenas temos acesso a CSS (através das classes do Tailwind). Não há acesso a JavaScript. Então qualquer tipo de condicional ou animação, ou coisa do tipo é em puro CSS.

Sem mais delongas, eis alguns links dos últimos Tailwind Playgrounds que criei.

## Relacionados ao meu trabalho

Apesar de ser gerente de equipe de desenvolvimento, ainda faço trabalho manuais (leia-se: programo). Como tenho muita informação da equipe do negócio e também tenho experiência com Design e Usabilidade, acabo criando esses playgrounds como se fossem MVFs (_Minimum Viable Features_) para partes de projetos que estou envolvido no momento.

Nos últimos meses, fizemos uma reformulação de algumas áreas e componentes do site para acompanhar o lançamento de um grande produto.

### Página de espera com contador

[Link para o playground](https://play.tailwindcss.com/PQ52TLTGRe)

Sabe quando você vai comprar ingressos de grandes eventos ou shows e muitas vezes você vê uma página dizendo "_você está na fila e tem 1209 pessoas na sua frente_"? O site do meu trabalho tem um serviço desses protegendo as páginas do nosso site.

O design padrão do serviço é [bem simples e genérico](https://queue-it.com/media/0jyb5idn/general-queue-page-low-res.jpg) e com cores que não combinam com as da empresa. Criei essa sugestão para combinar mais com a imagem que a empresa quer passar, principalmente nesses grandes lançamentos. Ela também:

- usa as cores da empresa
- fontes que combinam com as fontes do site final
- apresentar menor quantidade de informação para o usuário
- aponta a posição do usuário no processo

### Página de revisão de compra

[Link para o playground](https://play.tailwindcss.com/eanSA8Awlz)

Quando estamos quase finalizando uma compra numa loja online, é comum termos um passo no caminho do checkout onde a loja mostra um sumário dos itens da compra, do seu endereço, do seu método de pagamento, dos descontos e de algumas regras que temos de marcar como lido.

A versão atual já tem inúmeros ajustes – principalmente para versões mobile e tablet – e outros componentes, mas não está muito longe do que é apresentado nesse playground.

A principal diferença é que, essa revisão do que estava sendo comprado, qual método de pagamento escolhido, qual método de eentrega, descontos e valores finais a pagar, ficava numa barra lateral. Com a loja tendo usuários colocando 8-10 produtos num único carrinho, a barra lateral ficava muito extensa. O usuário tinha de rolar extensivamente para ver todas as informações. Também não era fácil identificar quais produtos estavam em pré-venda daqueles que estavam diponíveis para pronta-entrega.

Com os produtos nessas pequenas caixas e a clara separação entre produtos para pronta-entre e pré-venda, fica bem mais fácil para o usuário criar um entendimento sobre os produtos na compra. A parte do pagamento também está mais clara e fácil de achar, bem como os decontos aplicados. Recebemos elogios pela mudança nas redes sociais, apontando que ficou mais fácil e rápido o checkout.

### Cards de produtos

[Link para o playground](https://play.tailwindcss.com/FuvAV6VahC)

Muito comum em lojas virtuais, os cards de produtos são componentes usados para apresentar as mais variadas informações, desde a imagem, título, e preço, a outros pontos importantos, como tamanho e cores (para vestuário), etc.

O que está no site hoje também é uma versão levemente diferente, até para acomodar outros elementos que temos. Alguns dos simbólos e faixas apresentadas aqui estão levemente diferentes para combinar com o que é apresentado em sites de outras regiões da empresa.

Um desafio que tivemos foi lidar com a quantidade de informações que temos de apresentar para o usuário em tais cards. Aqui na Europa, devido a legislação local, somos obrigados a colocar várias informações sempre que um desses cards é apresentado.

Veja o caso do jogo _The Legenda of Zelda: Echoes of Wisdom + amiibo de Zelda_. Nele temos a classificação indicatória e na versão atual também apresentamos certos classificadores (violência, linguagem, sexo, etc), o que toma mais espaço ainda no card. No caso de camisetas, temos de colocar todos os tamanhos disponíveis, e em alguns casos teríamos mais de 10 (crianças: 92, 104, 116, 128, 140, 152; adultos: S, M, L, XL, XXL).

Para evitar essa situação e diminuir esse exceço de informação, temos uma lógica para verificar se tem tamanhos de criaça e adulto. Se tiver tamanhos só de um ou do outro, mostros todos. Se tiver dos dois, mostramos "criança, S, M, L, XL, XXL".

### Menu de navegação principal

[Link para o playground](https://play.tailwindcss.com/W1f9BNENuE)

Menus de navegação principal são um dos componentes mais importantes de qualquer site. Não seria diferente com o da empresa em que trabalho. O menu de navegação já era do estilo _mega menu_ mas tivemos de fazer alguns ajustes por conta do grande lançamento que mencionei.

Por conta desse novo produto, tivemos de ajustar a hierarquia em um dos menus para que ele possa tem _tabs_ dentro do _mega menu_ e assim poder mostrar os links daquela _tab_.

O destaque vai para a existência das _tabs_ e da possibilidade de troca de conteúdo das duas sem usar JavaScript. Apenas com CSS/Tailwind. Esse elemento em questão ainda existe no site em produção, o que ajudou a diminuir várias linhas de JavaScript customizado.

Além de usar a funcionalidade de agrupamento, `group/` (linha 04, por exemplo), do Tailwind, também utilizamos dois elementos `checkbox`, um para cada _tab_ escondida. Neles, utilizamos a funcionalidade de parceiros, `peer/` (linha 27, por exemplo), do Tailwind para toda vez que um `checkbox` fosse selecionado, o conteúdo "parceiro" que complementa aquele `checkbox` aparecesse.

Os títulos das _tabs_ são os elementos `label` delas e ao serem clicados, ativam os respectivos `checkbox` e seus parceiros. _Tabs_ dinâmicas, sem JavaScript!

### Visualização de métodos de pagamentos disponíveis

[Link para o playground](https://play.tailwindcss.com/Tp7wOczyzA)

Em uma tentativa de melhorar a visualização dos métodos de pagamento disponíveis, tomei a iniciativa de criar versões em formato de cartão de crédito. Sabendo que há outros métodos de pagamento que não são cartões de crédito, também criei uma versão em mini caixas.

O maior desafio é colocar a mínima quantidade de informação necessária para saber que aquele método de pagamento é do usuário e diferencia qual é o método atual selecionado e quais outros podem ser escolhidos. Pessoalmente, prefiro a versão de mini caixas (as que estão na parte de baixo do playground). Elas ocupam menos espaço, é fácil identificar qual ação deve ser tomada para marcar algum outro meio de pagamento como principal e não tem informação desnecessária (como títulos, caracteres representando valores "escondidos", etc).

Atualmente, ainda está em discussão se e quando esse componente vai para o ar. Temos outros projetos mais importantes que temos de terminar e, por enquanto, esse componente está bem no final da linha de prioridades.

## De sites pré-existentes

### Menu de Navegação do DotCMS

[Link para o playground](https://play.tailwindcss.com/WkzJ3TuFu4)

Como parte do meu trabalho, tenho que avaliar soluções que possam trazer alguma vantage para nosso ambiente, mesmo que já tenhamos uma solução que proveja tudo que precisamos no momento. Ao avaliar alternativas para _CMSes Headless_, visitei o site do DotCMS e achei o menu de navegação deles bem interessante.

Hoje em dia, o menu de navegação ainda usa um estilo parecido com o que implementei. Porém, sem a mudança de conteúdo ao passar o ponteiro do mouse sobre as opções de cada um dos itens. Acredito que mudaram porque antes a quantidade de itens em cada menu era menor e tinha uma categorização diferente. O menu também mantém diferentes níveis de sobreposição `hover` a depender do submenu e do elemento desse último que esteja selecionado.

Além disso, analisando o código JavaScript que eles usavam obter o mesmo resultado, era visível que tinha certa complexidade. Essa complexidade, invariavelmente, acabava tornando-se muito código JavaScript enviado para o navegador/dispositivo do usuário, e sabemos que isso prejudica a experiência geral.

Falando sobre a técnica em si, usei vários agrupamentos com nomeação customizada, um dentro do outro. Também utilizei `group-has-[]` para mostrar ou ocultar o conteúdo auxiliar, dependendo da subseção que o mouse está sobreposto.

Outra técnica aplicada foi a de usar uma regra direto na propriedade `style` utilizando variáveis do próprio Tailwind. Se você prestar atenção, há alguns `style` da seguinte forma `style="width: calc(100% - (var(--spacing) * 82))"`. Isso permite que ajustemos/calculemos a largura de um elemento utilizando a variável `--spacing` como parte do cálculo. Essa utilização permite que a subseção se ajuste de acordo com o valor de `--spacing` que é ajustado dependendo do tamanho atual do navegador.

### Card de imagem para site de hotelaria

[Link para o playground](https://play.tailwindcss.com/K37lwJ6yVN)

Eu costumo navegar bastante pelo [Dribbble](https://dribbble.com). Embora esteja repleto de publicações muito semelhantes entre si, ainda acho um lugar interessante para achar possíveis designs que posso tentar implementar. Esse playground (e o próximo) vieram dessas "incurções" que costumo fazer por lá.

O elemento, embora simples, permitiu eu adicionar alguns comportamentos que geralmente não estão disponíveis uma imagem estática. A imagem original era com as estrelas sempre visíveis. Eu já escolhi implementar o comportamento de apenas mostrá-las quando o usuário passa o mouse sobre o card da imagem.

Outro comportamento que adicionei foi a animação no ícone de "_like_" (o coração no canto direito superior). Quando você deixa o mouse parado sobre esse elemento em específico, o coração fica pulsando, como se fosse um coração realmente batendo. Algo simples, mas que para aqueles que percebem, é algo que chamará a atenção e colocará um pequeno sorriso no dia delas.

Aqui, também usei a funcionalidade de agrupamento, `group/` (linha 17), para obter o efeito de esconder e mostrar as estrelas. Também utilizei `translate` e `animation` através das classes `duration-150 ease-in`, para que a entrada e saída das estrelas fossem bem leve e um pouco mais lenta. Nada no nível de complexidade dos menus de navegação apresentados acima.

### Efeito de plano de fundo de card

[Link para o playground](https://play.tailwindcss.com/ggl2GcD15x)

Esse card em si não é complicado de se criar com CSS. Basta utilizar Grids e bordas de forma ajustada e conseguimos fazê-lo. O efeito do plano de fundo, de borda de card duplicada e menor, é muito interessante.

Antigamente, na época das tabelas, dos _floats_ e outras abordagens, eu teria recriado esse efeito com imagens. Há um tempo, já não precisamos mais utilizar desse possibilidade. Basta saber usar `position: absolute` e `z-index` de forma ajustada, que conseguimos o esse efeito.

A imagem que vi originalmente apenas mostrava o efeito à esquerda e direita. Eu aproveitei e criei o efeito também para de forma vertical. A versão móvel também esta bem ajustada (desde os 320px ou maior).

Como podemos ver, não é algo complicado de fazer, mas o efeito com as bordas mais largas, uma conectando na outra, criando esse efeito de profundidade, é super legal.
