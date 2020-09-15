<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class SendRegistrationInformation extends Mailable
{
    use Queueable, SerializesModels;

    public string $email;
    public string $password;
    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct(string $email, string $password)
    {
        $this->email = $email;
        $this->password = $password;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->subject('You registration information')->from('noreply@m.aow.space')
            ->view('emails.reg_info')
            ->with('email', $this->email)
            ->with('password', $this->password);
    }
}
