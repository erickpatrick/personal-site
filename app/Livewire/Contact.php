<?php

namespace App\Livewire;

use App\Models\Contact as ContactModel;
use Filament\Forms;
use Filament\Forms\Concerns\InteractsWithForms;
use Filament\Forms\Contracts\HasForms;
use Filament\Forms\Form;
use Filament\Notifications\Notification;
use Livewire\Component;
use Illuminate\Contracts\View\View;

class Contact extends Component implements HasForms
{
    use InteractsWithForms;

    public ?array $data = [];

    public function mount(): void
    {
        $this->form->fill();
    }

    public function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\TextInput::make('name')->label('Nome')
                    ->rules(['required', 'min:2', 'max:50']),
                Forms\Components\TextInput::make('email')->label('E-mail')
                    ->rules(['required','email:filter']),
                Forms\Components\TextInput::make('subject')->label('Assunto')
                    ->rules(['required', 'min:5', 'max:100']),
                Forms\Components\TextArea::make('content')->label('Conteúdo')
                ->rules(['required', 'min:5', 'max:2000']),
                Forms\Components\TextInput::make('empresa')->hiddenLabel('Empresa')
                    ->extraAttributes(['class' => 'hidden'])->rules(['missing'])->placeholder("Não preencha/Do not fill"),
            ])
            ->statePath('data')
            ->model(ContactModel::class);
    }

    public function create(): void
    {
        $data = $this->form->getState();

        $record = ContactModel::create($data);

        $this->form->model($record)->saveRelationships();

        session()->flash('status', 'Obrigado por entrar em contato.');

        $this->form->fill();
    }

    public function render(): View
    {
        return view('livewire.contact');
    }
}
