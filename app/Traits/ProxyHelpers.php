<?php

namespace App\Traits;


use GuzzleHttp\Client;
use GuzzleHttp\Promise\RejectionException;
use Illuminate\Validation\ValidationException;

trait ProxyHelpers
{

    public function authenticate()
    {
        $client = new Client();

        try{
            $url = request()->root().'/api/oauth/token';

            $params = array_merge(config('passport.proxy'), [
                'username' => request('email'),
                'password' => request('password'),
            ]);

            $respond = $client->request('POST',$url, ['form_params'=>$params]);
        }catch (RejectionException $exception){
            if($exception->getCode()===401){
                throw ValidationException::withMessages(['message' => '用户名或密码错误']);
            }
        }

        if($respond->getStatusCode() === 200){
            return json_decode($respond->getBody()->getContents(),true);
        }

        abort(500, 'service error');
    }

}