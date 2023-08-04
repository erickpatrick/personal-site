<?php

namespace App\Livewire\Forms;

use App\Models\Contact;
use Livewire\Attributes\Rule;
use Livewire\Form;

class SendContact extends Form
{
    #[Rule('required|min:5')]
    public $name;

    #[Rule('required|email')]
    public $email;

    #[Rule('required|min:5|max:150')]
    public $subject;

    #[Rule('required|min:5|max:2000')]
    public $content;

    public function store()
    {
        $this->validate();

        Contact::create($this->all());

        $this->reset();
    }
}
