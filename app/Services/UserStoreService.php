<?php


namespace App\Services;


use App\Mail\SendRegistrationInformation;
use App\Models\User;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use Symfony\Component\HttpKernel\Exception\UnprocessableEntityHttpException;

class UserStoreService
{
    /**
     * @param array|string $email
     * @param string $name
     * @param string $phone
     * @param string $address
     * @return User
     */
    public function safeStore($email, string $name = null, string $phone = null, string $address = null): User
    {
        $data = $this->validateStoreAttributes(is_array($email) ? $email : compact('email', 'name', 'address', 'phone'));
        /** @var User $user */
        $user = $this->getUserBy($data['email']);
        if ($user) {
            $user->fill($data)->save();
            return $user;
        }

        return $this->storeUserModel($data);
    }

    private function validateStoreAttributes(array $data)
    {
        $requiredFields = ['email', 'name', 'address', 'phone'];
        foreach ($requiredFields as $field) {
            if (!empty($data[$field])) {
                continue;
            }
            throw new UnprocessableEntityHttpException('Missed required User model attribute: "'.$field.'"');
        }
        return $data;
    }

    public function existsUser($email, string $column = 'email'): bool
    {
        return $this->getUserByQuery($email, $column)->exists();
    }

    /**
     * @param $value
     * @param string $column
     * @return Builder
     */
    private function getUserByQuery($value, string $column = 'email'): Builder
    {
        return User::query()->where($column, $value);
    }

    /**
     * @param $value
     * @param string $column
     * @return User|null
     */
    private function getUserBy($value, string $column = 'email')
    {
        /** @var User $user */
        $user = $this->getUserByQuery($value, $column)->first();
        return $user;
    }

    private function storeUserModel(array $attributes): User
    {
        /** @var User $user */
        $newPassword = str_random(6);

        $user = User::query()->create(array_merge($attributes, [
            'password' => Hash::make($newPassword)
        ]));

        Mail::to($user)->send(new SendRegistrationInformation($attributes['email'], $newPassword));

        return $user;
    }
}
