<x-layout menu="/artigos" title="{{ $article->title }}" description="{{ $article->description }}">
    <div class="p-4">
        <div class="max-w-5xl mx-auto mt-8 sm:mt-16 md:mt-32">
            <div class="text-center">
                <x-content-time :date="$article->created_at" />

                <h2 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black">
                    {{ $article->title }}
                </h2>
                <small class="text-xl">{{ $article->categories }}</small>
            </div>
            <div class="py-16 lg:py-24">
                <x-buk-markdown class="prose-lg md:prose-xl lg:prose-2xl">
                    {{ $article->content }}
                </x-buk-markdown>
            </div>
        </div>
    </div>
</x-layout>
