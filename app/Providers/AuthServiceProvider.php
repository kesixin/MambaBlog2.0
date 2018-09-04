<?php

namespace App\Providers;

use Carbon\Carbon;
use Illuminate\Support\Facades\Gate;
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;
use Laravel\Passport\Passport;
use Laravel\Passport\RouteRegistrar;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * The policy mappings for the application.
     *
     * @var array
     */
    protected $policies = [
        'App\Model' => 'App\Policies\ModelPolicy',
    ];

    /**
     * Register any authentication / authorization services.
     *
     * @return void
     */
    public function boot()
    {
        $this->registerPolicies();

        //Passport路由
        Passport::routes(function(RouteRegistrar $router){
           $router->forAccessTokens();
        },['prefix'=>'api/oauth']);

        //access_token过期时间
        Passport::tokensExpireIn(Carbon::now()->addDays(15));

        //refreshTokens 过期时间
        Passport::refreshTokensExpireIn(Carbon::now()->addDays(30));
    }
}
