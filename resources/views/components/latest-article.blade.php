<article class="mx-auto w-full max-w-2xl lg:mx-0 lg:max-w-lg">
    <x-content-time :date="$article->created_at" />
    <h2 id="featured-post" class="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        {{ $article->title }}
    </h2>
    <p class="mt-4 text-lg leading-8 text-gray-600 line-clamp-3">{{ $article->description }}</p>
    <div class="mt-4 flex flex-col justify-between gap-6 sm:mt-8 sm:gap-8 lg:mt-4 lg:flex-col">
        <div class="flex">
            <a href="/artigos/{{ $article->slug }}" class="text-sm font-semibold leading-6 text-blue-600 hover:underline hover:underline-offset-8 decoration-2"
                aria-describedby="featured-post">Continuar lendo <span aria-hidden="true">&rarr;</span></a>
        </div>
    </div>
</article>
