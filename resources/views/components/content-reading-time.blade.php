@props(['length' => 0])
@php
    $seconds = floor($length % 185 / (185 / 60));
    $minutes = $seconds === 60 ? floor($length / 185) + 1 : floor($length / 185);
@endphp

<span class="block text-sm leading-6 text-gray-600">{{ $minutes }}min @if($seconds > 0)e {{ $seconds }}s @endif de leitura</span>
