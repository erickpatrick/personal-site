<div class="max-w-5xl">
    <form wire:submit="save" class="grid gap-8">
        @if (session('status'))
        <div class="p-4 bg-green-300/5" x-data="{ show: true }" x-show="show" x-init="setTimeout(() => show = false, 3000)">
            {{ session('status') }}
        </div>
        @endif

        <div class="max-w-full">
            <label for="name" class="block text-sm font-medium leading-6 text-gray-900">Nome</label>
            <div class="mt-2">
                <div class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-blue-600 sm:max-w-xl">
                    <input type="text" name="name" id="name" wire:model="form.name" class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" />
                </div>
            </div>
            <span class="py-2 inline-block text-red-800">@error('form.name'){{ $message }}@enderror</span>
        </div>
        <div class="max-w-full">
            <label for="email" class="block text-sm font-medium leading-6 text-gray-900">E-mail</label>
            <div class="mt-2">
                <div class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-blue-600 sm:max-w-xl">
                    <input type="text" name="email" id="email" wire:model="form.email" class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" />
                </div>
            </div>
            <span class="py-2 inline-block text-red-800">@error('form.email'){{ $message }}@enderror</span>
        </div>
        <div class="max-w-full">
            <label for="subject" class="block text-sm font-medium leading-6 text-gray-900">Assunto</label>
            <div class="mt-2">
                <div class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-blue-600 sm:max-w-xl">
                    <input type="text" name="subject" id="subject" wire:model="form.subject" class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" />
                </div>
            </div>
            <span class="py-2 inline-block text-red-800">@error('form.subject'){{ $message }}@enderror</span>
        </div>
        <div class="max-w-full">
            <label for="content" class="block text-sm font-medium leading-6 text-gray-900">Conteúdo</label>
            <div class="mt-2">
                <div class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-blue-600 sm:max-w-xl">
                    <textarea id="content" name="content" rows="3" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6" wire:model="form.content"></textarea>
                </div>
            </div>
            <span class="py-2 inline-block text-red-800">@error('form.content'){{ $message }}@enderror</span>
        </div>

        <div class="mt-6 flex items-center justify-end gap-x-6">
            <button type="button" class="text-sm font-semibold leading-6 text-gray-900">Cancel</button>
            <button type="submit" class="rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">
                Save

                <div wire:loading>
                    <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                </div>
            </button>
        </div>
    </form>

</div>
