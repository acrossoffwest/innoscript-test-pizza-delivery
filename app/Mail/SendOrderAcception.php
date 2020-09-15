<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class SendOrderAcception extends Mailable
{
    use Queueable, SerializesModels;

    public string $orderLink;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct(string $orderLink)
    {
        $this->orderLink = $orderLink;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->from('noreply@m.aow.space')
            ->view('emails.order_acception')
            ->with('orderLink', $this->orderLink);
    }
}
