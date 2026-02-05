---
title: "Lá e de volta novamente. Olá de novo Next.js e Vercel"
excerpt: "Laravel é ótimo, mas é preciso saber quando não usá-lo. Esse meu site é uma dessas vezes"
date: "2025-09-22T00:00:00.000Z"
---

Você deve lembrar dos vários artigos sobre Laravel versus Next.js que eu escrevi aqui. Não são muitos artigos, então não é difícil saber quando escrevi sobre. Minhas razões estão todas lá. E só para constar, continuo acreditando nelas.

Porém, nesse final de semana passado, decidi migrar de volta para o Next.js e pra Vercel. O painel administrativo, embora funcionasse ao meu gosto, estava bem subutilizado. As ideias que tive de juntar vários projetos nesse site não coloquei em prática. Estava pagando um servidor e o Laravel Forge, basicamente, para um site estático.

Para economizar alguns Euros – sim, moro na Europa – e podê-los utilizá-los em outros projetos, decidi portar esse site de volta para a _stack_ anterior, que era Next.js e Vercel. A _stack_ completa agora é:

- Vercel para publicação e CI/CD
- React com Next.js, usando os diretórios `src` e `app`
- TypeScript e ESLint
- Tailwind com o plugin Typography
- Markdown, usandos os plugins do GitHub Markdown e HTML do Remark

Ao todo, levei um pouco mais 8h divididos no final de semana para terminar a migração. Você pode ver todos os _commits_ na [_Pull Request_ que criei](https://github.com/erickpatrick/personal-site/pull/3).

Essa migração, não apenas permitiu eu economizar algum dinheiro (cerca 300 Euros por ano), mas também permitiu que eu fizesse leves mudanças que, há tempos, queria fazer:

- Atualizar o Tailwind da v3 para a v4, bem como os plugins utilizados
- Remover o CSS da `@layer` e utilizar o seletor descendente que o Tailwind fornece (`[&_]`)
- Remover "minhas características" da página inicial e colocá-las numa página "sobre mim"
- Mudar a order dos elementos da página inicial para mostrar primeiro os projetos atuais que estou trabalhando ao invés dos artigos
- Sincronizar os projetos listados na página inicial com os projetos listados na página Projetos
- Simplificar a função do componente que mostrar o "tempo de leitura" dos artigos
- Garantir que as datas estão mostrando informações em português do Brasil (ps: Sem Anistia!)
- Garantir que os arquivos dos artigos usam Markdown puro (nada de MDX) e estão em seu próprio diretório (src/\_posts)
- Garantir que os componentes `Header` e `Footer` mostrar apropriadamente e de forma sincronizada a seção que o usuários está visitando
- Compartilhar o menu de navegacão entre os componentes `Header` e `Footer` (isso ajudar com a sincronização da visualição da seção descrita acima)
- Apenas um component usa `"use client"`, o componente `Navigation` usado pelo `Header` e `Footer`, para poder usar `usePathname`, uma `hook` do Next.js
- Adicionar tipos corretos para parâmetros e retornos de funções
- Sem erros de _build_ ou do ESLint

No geral, estou contente em economizar um dinheirinho, em ter migrado de forma rápida o site, e ainda ter aprimorado algumas partes que estavam precisando. A experiência do dia-a-dia no trabalho com Next.js e Vercel, bem como a experiência com Laravel em projetos paralelos meus e de alguns _freelas_ que fiz, definitivamente ajudou.

Agora, só criar o hábito de escrever mais :)
