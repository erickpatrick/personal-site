<?php

namespace App\Livewire;

use App\Livewire\Forms\SendContact;
use Livewire\Component;

class Contact extends Component
{
    public SendContact $form;

    public function save()
    {
        $this->form->store();
        session()->flash('status', 'Obrigado por entrar em contato.');
    }

    public function render()
    {
        return view('livewire.contact');
    }
}
