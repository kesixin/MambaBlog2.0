<?php
/**
 * Created by PhpStorm.
 * User: shuai
 * Date: 2018/9/6
 * Time: 14:59
 */

namespace App\Policies;

use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class UserPolicy
{
    /**
     *  Determine whether the current user can update the user.
     *
     * @param User $currentUser
     * @param User $user
     * @return bool
     */
    public function update(User $currentUser, User $user)
    {
        return $currentUser->id === $user->id;
    }
}