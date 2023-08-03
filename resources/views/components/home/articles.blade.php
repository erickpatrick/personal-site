@php
    use App\Models\Article;

    $latestArticles = Article::whereNot('status', 'draft')
        ->orderBy('id', 'desc')
        ->limit(3)
        ->get();
@endphp

<div>
    <div class="bg-white">
        <div class="mx-auto grid max-w-5xl grid-cols-1 gap-x-8 gap-y-12 sm:gap-y-16 lg:grid-cols-2">
            <x-latest-article :article="$latestArticles->first()" />

            <x-secondary-articles :articles="$latestArticles->skip(1)" />
        </div>
    </div>
</div>
