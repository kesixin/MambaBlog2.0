<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::group(["namespace" => "Api"],function (){
   //文章列表
    Route::get('articles','ArticleController@index')->name('articles.index');
});

Route::group(['namespace' =>'Auth'],function (){
    //用户登录
    Route::post('login','LoginController@login')->name('login');
    //退出登录
    Route::post('logout','LoginController@logout')->name('logout')->middleware('auth:api');
    //用户注册
    Route::post('register','RegisterController@register')->name('register');
    //确认邮箱
    Route::put('register/confirmed', 'RegisterController@confirmed')->name('register.confirmed');
});
