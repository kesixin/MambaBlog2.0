<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Resources\UserResource;
use App\Models\User;
use App\Traits\ProxyHelpers;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\ValidationException;

class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */

    use AuthenticatesUsers,ProxyHelpers;

    public function login(Request $request)
    {
        $this->validateLogin($request);

        $user = User::where($this->username(),$request->input($this->username()))->first();

        //邮箱是否验证
        if(!$user->status){
            return $this->respond(['code'=>0]);
        }

        $token = $this->authenticate();

        return $this->respond(['data'=>['token'=>$token,'user'=>new UserResource($user)]]);
    }

    /**
     * 表单字段验证
     * @param Request $request
     */
    protected function validateLogin(Request $request)
    {
        $this->validate($request,[
            $this->username() => 'required|string|exists:users,'.$this->username(),
            'password'=>'required|string',
        ]);
    }


}
