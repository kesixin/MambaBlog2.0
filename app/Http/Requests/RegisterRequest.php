<?php
/**
 * Created by PhpStorm.
 * User: shuai
 * Date: 2018/9/7
 * Time: 14:49
 */

namespace App\Http\Requests;


use Illuminate\Foundation\Http\FormRequest;

class RegisterRequest extends FormRequest
{

    /**
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * @return array
     */
    public function rules()
    {
        return [
            'name'=>'required|min:3|max:10|unique:users,name',
            'email'=>'required|email|unique:users',
            'password'=>'required|min:6|max:16|confirmed',
            'avatar'=>'nullable|string|min:1|max:255',
            'qq_id'=>'nullable|string|min:1|max:255',
            'weibo_id'=>'nullable|string|min:1|max:255',
        ];
    }


    public function messages() : array
    {
        return [
            'name.required' => '名称不能为空',
            'name.min' => '名称最小3个字符',
            'name.max' => '名称最大10个字符',
            'name.unique' => '名称已存在',
            'email.required' => '邮箱不能为空',
            'email.email' => '无效的邮箱',
            'email.unique' => '邮箱已存在',
            'password.required' => '密码不能为空',
            'password.min' => '密码最小为6个字符',
            'password.max' => '密码最大为10个字符',
            'password.confirmed' => '两次密码不一致',
        ];
    }

}