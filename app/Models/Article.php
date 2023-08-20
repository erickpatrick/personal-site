<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Collection;
use Spatie\Feed\Feedable;
use Spatie\Feed\FeedItem;

class Article extends Model implements Feedable
{
    use HasFactory;

    protected $attributes = [
        'keywords' => ''
    ];

    protected $fillable = [
        'slug', 'title', 'description', 'keywords', 'content', 'status',
    ];

    protected $casts = [
        'tags' => 'array',
    ];

    public function getAllPublished(): Collection
    {
        return Article::whereStatus('published')->orderBy('id', 'desc')->get();
    }

    public function toFeedItem(): FeedItem
    {
        $link = url('artigos/' . $this->slug);

        return FeedItem::create()
            ->id($this->id)
            ->title($this->title)
            ->summary($this->description)
            ->updated($this->updated_at)
            ->link($link)
            ->authorName('Erick Patrick')
            ->authorEmail('itsme@erickpatrick.net');
    }
}
