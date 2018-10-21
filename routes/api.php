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

Route::post('upload/image','UploadController@uploadImage');

Route::group(["namespace" => "Api"],function (){
    //文章列表
    Route::get('articles','ArticleController@index')->name('articles.index');
    //文章详情
    Route::get('articles/{slug}','ArticleController@show')->name('articles.show');
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

Route::group(['namespace'=>'Admin','prefix'=>'dashboard','middleware'=>'auth:api'],function (){

    Route::resource('users','UserController',['except'=>['create','show']]);

    Route::post('users/{user}/avatar','UserController@avatar');

    Route::put('users/{user}/status','UserController@status');

    Route::resource('categories','CategoryController',['except'=>['create','show']]);

    Route::resource('tags','TagController',['except'=>['create','show']]);

    Route::resource('articles','ArticleController',['except'=>['create','show']]);

    Route::resource('links','LinkController',['except'=>['create','show']]);



    Route::post('upload/image','UploadController@image');
});
