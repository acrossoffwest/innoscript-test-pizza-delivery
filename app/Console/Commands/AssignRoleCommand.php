<?php

namespace App\Console\Commands;

use App\Models\User;
use Illuminate\Console\Command;

class AssignRoleCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'assign:role {email} {--role=admin : New role for user}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Assign role to user';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $role = $this->option('role');
        $email = $this->argument('email');

        if (!isset(config('roles')[$role])) {
            $this->error('The role "'.$role.'" is undefined');
            return 1;
        }
        $userQuery = User::query()->where('email', $email);
        if (!$userQuery->exists()) {
            $this->error('The user with email: "'.$email.'" not found');
            return 1;
        }

        $userQuery->update([
            'role' => $role
        ]);

        return 0;
    }
}
