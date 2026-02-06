---
title: "Goodbye Next.js… Welcome Laravel Folio and Laravel Volt"
excerpt: "Some time ago, in the previous version of the site, I talked about how the site moved from a static generator in PHP to Next.js. Today, I talk about the reverse process and how I went back to using PHP/Laravel..."
date: "2023-08-12T00:00:00.000Z"
---

Some time ago, in the previous version of the site, I talked about how the site moved from a static generator in PHP to Next.js. Today, I talk about the reverse process and how I went back to using PHP/Laravel...

### A bit of history

About 70% of my career, I’ve programmed and led teams that programmed in PHP. I’ve worked with PHP since 2002, when I was 14 years old and created a fan site about the anime Dragon Ball. As for Laravel, I’ve worked with it since it was still on version 3, around 2012/2013.

I’ve also worked with other frameworks and systems built in PHP, from Symfony to Magento, Zend/Laminas, Smarty, CakePHP, CodeIgniter, and many others. I have extensive knowledge of the PHP world and followed its entire evolution since PHP 3/4, although I recently migrated to the JavaScript world because of work.

This same site has already been written in several formats: pure HTML, static generators in PHP (the last one being Jigsaw), and most recently in JavaScript/React/Next.js. I’ve always used this site as a laboratory for my learning, whether in PHP, JavaScript, CSS, HTML...

And to this day, it continues to be so. That’s why I’m changing, once again, the technology behind it.

### Goodbye, Next.js

Even though I really enjoy working with Next.js and the freedom it gives to build certain applications by stitching together a few APIs, the JavaScript ecosystem still leaves a lot to be desired when compared to other languages.

To give you an idea, I use Next.js both in personal projects and at the company where I work daily. These are small, medium, and large projects. They range from blogs to e-commerce.

Without going into too many details, the company project I work on is an e-commerce platform that integrates around 30 systems, delivers to almost the entire European continent, and is translated into 7 different languages. It receives millions of visits per day and also generates thousands of orders daily.

Even working on this project since 2021, having spoken directly with people connected to Next.js, and accumulating a huge amount of experience in the ecosystem, I still miss the ease that other languages provide.

Because of that, I decided that the new version of the site would change languages. At first, I decided on Elixir and the Phoenix framework. I learned the language relatively quickly and started working with the framework shortly after.

I created small systems with them, learning more and more, but I still felt like something was missing. Most likely, my lack of familiarity with the environment left me with a lingering doubt.

Then Laracon US 2023 happened, the official Laravel conference in the US, and I watched the presentation by Taylor Otwell, the creator of Laravel, about Laravel Folio and Laravel Volt. That presentation brought back many memories from my time with PHP...

### Hello Laravel Folio and Laravel Volt

For those who don’t know yet, Laravel Folio and Laravel Volt are two new packages in the Laravel ecosystem.

Laravel Folio is kind of a Next.js inside Laravel, providing file-based routing similar to what Next.js does, but with “batteries included,” since we can use the entire Laravel ecosystem (and derived packages) to complement it.

Laravel Volt, on the other hand, is a way to create Livewire components (a derived package, but now treated as [**_first-party/official_**](https://livewire.laravel.com)) in a functional way and in a single Blade file.

This allows people who want to stay in the PHP environment to create pages and/or systems in a way similar to JavaScript systems (whether that’s a good or bad thing is a topic for a possible future article).

We should also understand that the existence of both Folio and Volt allows people coming from the JavaScript ecosystem, used to _Vue/Nuxt Single File Components_, Next.js components/pages with their _getStaticProps_ and similar concepts, to create dynamic pages in a similar way in Laravel and try out the framework.

And that’s exactly what happened to me. What the Laravel team presented at Laracon US caught my attention and showed that I could have the great Laravel ecosystem with the speed and experience of Next.js. The best of both worlds, in my view (once again, a topic for a possible future article).

And so I decided to rewrite my personal site with these two technologies. In addition to them, I added Filament PHP to create admin panels, which allow me to write and manage my articles, contacts, and other items on this site, all in one place.

It’s worth remembering that all of this took a mere 4 total hours of work, without needing to stitch together countless APIs for what I needed. For example: authentication, authorization, CMS functionality, image/file uploads, sessions, email sending, analytics, database, and many other things...

With JavaScript, I would usually have to look for SaaS solutions like: Auth0, Contentful, Cloudinary, Redis Cloud, Resend, Fathom Analytics, Supabase/Turso, and many others. Having to deal with multiple API keys, rate limiting, data usage limits (ingress/egress data)...

Not to mention that, for many of these systems, to have a minimum level of confidence that my data will be safe, that I’ll have a decent/satisfactory level of support, or that I can use the environment for commercial purposes, I’d need to move to a paid plan, costing on average US$10/month for the most basic plan, for each one of them.

With the server I pay for at DigitalOcean, for US$5/month, I basically get all of this without having to integrate a single API. And if I need more “power” for my sites and systems, I can pay US$12/month and get more “power.” Even then, I’d still be below the amount I’d have to pay for all the services mentioned above.

### What the future holds

Who really knows what the future holds? If we did, we’d be playing the lottery all the time and never need to work again, right? All I know is that I’m happy with this Laravel ecosystem and with what I was able to achieve in just a few hours while updating this site.

Is it possible that I had FOMO and jumped from technology to technology whenever something new caught my attention? There’s a good chance! Could it be that I decided to choose a technology that many other developers use, make money with, and that provides plenty of stability? Absolutely!

The only thing I ask is that the future allows me to publish more and new projects.
