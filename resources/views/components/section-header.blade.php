@aware(['title'])

<div class="max-w-5xl mx-auto mt-8 sm:mt-16 md:mt-32">
    <div class="text-center">
        <h2 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black">
          {{ $title }}
        </h2>

        <div class="max-w-xl xl:max-w-2xl mx-auto">
            <p class="mt-4 sm:text-lg md:text-xl lg:text-2xl text-gray-600">
                {{ $slot }}
            </p>
        </div>
    </div>
</div>
