---
title: "There and back again. Hello once again Next.js and Vercel"
excerpt: "Laravel is great, but we also need to know when not to use it. This own website is one of those times"
date: "2025-09-22T00:00:00.000Z"
---

You might remember the various articles about Laravel versus Next.js I wrote here. They're not many, so it's not that hard to figure it out when I wrote them. All my reasons are written there. And yes, I still believe in all of them.

However, this last weekend, I decided to migrate back to Next.js and Vercel. The admin panel I've created, though working to my liking, was underused. The idea of merging various projects into this one I did not manage to put it into practice. I was paying for a server and for Laravel Forge, basicaly, for a static page.

To save some Euros – yes, I live in Europe – and to put this extra money into other projects, I've decided to port the site back to the previous stack, in Next.js and Vercel. The current whole stack is:

- Vercel for hosting, CI and CD
- React with Next.js, using `src/app`
- TypeScript and ESLint
- Tailwind with Typography plugin
- Markdown, with GitHub Markdown and HTML from Remark

It took me around 8h across Saturday and Sunday to finish the migration. You can see the _commits_ in [this _Pull Request_](https://github.com/erickpatrick/personal-site/pull/3).

Thsi migration, not only allowed me to save money (around 300 Euros/year), but also allowed me to introduce some changes I wanted since a long time:

- Update Tailwind from v3 to v4, and its respective plugins
- Remove the `@layer` directive and use the descendant selector from Tailwind (`[&_]`)
- Move the section "about me" from the home page into its own page
- Reorder home page elements to first show projects and latest articles after
- Sync projects on the homepage with the ones from projects page
- Simplify the "reading time" component logic
- Ensure date is properly localized
- Use pure Markdown (no MDX) and into their own folder (`src/_posts`)
- Ensure the navigation component displays the section in which the visitor is viewing
- Ensure reusability of navigation component between `Header` and `Footer`
- Reduce to a minimum the usage of `'use client'`, SSR FTW
- Add proper types to function signatures
- No build or ESLint errors

Overall, I'm happy to save some money, in the quick migration of the site, and improving some parts of the site that were in need. The experience obtained using Next.js and Vercel daily at work, as well as the Laravel experience from some side projects, really helped..

Now, I only need to grow the habit of writing again :)
