@props(['title' => ''])

<a href="/" class="group" wire:navigate>
    <div class="flex justify-center">
        <div class="flex flex-col text-4xl font-black uppercase origin-center -rotate-6 border-4 border-gray-200 group-hover:border-white transition duration-100 ease-out">
            <h1 class="p-2 bg-transparent text-gray-800 rotate-6 group-hover:bg-gray-800 group-hover:text-white transition duration-200 ease-out delay-100">{{ $title }}</h1>
        </div>
    </div>
</a>
