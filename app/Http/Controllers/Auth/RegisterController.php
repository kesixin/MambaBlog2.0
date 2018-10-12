<?php

namespace App\Http\Controllers\Auth;

use App\Http\Requests\RegisterRequest;
use App\Http\Resources\UserResource;
use App\Models\User;
use App\Notifications\UserRegisterVerficationCode;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class RegisterController extends Controller
{

    public function register(RegisterRequest $request)
    {
        $user = User::create([
            'name'=> $request->input('name'),
            'email'=> $request->input('email'),
            'password'=> bcrypt($request->input('password')),
            'avatar'=> $request->input('avatar') ? $request->input('avatar') : '/images/default_avatar.png',
            'qq_id'=> $request->input('qq_id') ? : '',
            'weibo_id'=> $request->input('weibo_id') ? :'',
        ]);

        //发送邮箱验证
        $user->notify(new UserRegisterVerficationCode($user));

        return new UserResource($user);
    }

    public function confirmed()
    {

    }

}
