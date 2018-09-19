<?php

namespace App\Http\Controllers\Admin;

use App\Http\Resources\UserResource;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\User;

class UserController extends Controller
{
    /**
     * @return \Illuminate\Http\Resources\Json\AnonymousResourceCollection
     */
    public function index()
    {
        return UserResource::collection(User::latest()->paginate(10));
    }

    /**
     * @param User $user
     * @return UserResource
     */
    public function edit(User $user){
        return new UserResource($user);
    }
}
