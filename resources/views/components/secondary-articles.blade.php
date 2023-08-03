<div class="mx-auto w-full max-w-2xl border-t border-gray-900/10 pt-12 sm:pt-16 lg:mx-0 lg:max-w-none lg:border-t-0 lg:pt-0">
    <div class="-my-12 divide-y divide-gray-900/10">
        @foreach ($articles as $article)
        <article class="py-6 relative flex flex-wrap gap-x-3">
            <x-content-time :date="$article->created_at" />
            <section class="w-full flex-none text-lg font-semibold tracking-tight text-gray-900">
                <a href="/artigos/{{ $article->slug }}" class="hover:underline hover:underline-offset-8 decoration-2 decoration-wavy decoration-blue-600">
                    {{ $article->title }}
                </a>
            </section>
            <section class="mt-2 w-full flex-none text-base leading-7 text-gray-600 line-clamp-2">
                {{ $article->description }}
            </section>
        </article>
        @endforeach
    </div>
</div>
