<?php

use Faker\Generator as Faker;

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| This directory should contain each of the model factory definitions for
| your application. Factories provide a convenient way to generate new
| model instances for testing / seeding your application's database.
|
*/

$factory->define(App\Models\User::class, function (Faker $faker) {
    static $password;
    $now = \Carbon\Carbon::now()->toDateTimeString();

    return [
        'name' => $faker->name,
        'nickname' => $faker->firstName,
        'email' => $faker->unique()->safeEmail,
        'status' => 1,
        'is_admin' => $faker->randomNumber([1, 2]),
        'password' => bcrypt(123456),
        'remember_token' => str_random(10),
        'description' => $faker->sentence,
        'created_at' => $now,
        'updated_at' => $now,
    ];
});
