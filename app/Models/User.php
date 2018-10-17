<?php

namespace App\Models;

//use App\Traits\UserNotificationHelper;

use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Laravel\Passport\HasApiTokens;
use Overtrue\LaravelFollow\Traits\CanBeFollowed;
use Overtrue\LaravelFollow\Traits\CanFollow;

class User extends Authenticatable
{
    use HasApiTokens, Notifiable, CanFollow, CanBeFollowed;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'is_admin', 'avatar', 'password', 'nickname',
        'real_name', 'weibo_name', 'weibo_link', 'email_notify_enabled',
        'weibo_id', 'github_name', 'website', 'description', 'status',
        'qq_id','weixin_session_key', 'weapp_openid'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * @param Builder $query
     * @return $this
     */
//    public function scopeValid(Builder $query)
//    {
//        return $query->where('status', 1);
//    }

    /**
     * 重写passport查询用户
     *
     * @param $email
     * @return mixed
     */
    public function findForPassport($email)
    {
        return User::where('email', $email)->first();
    }
}
