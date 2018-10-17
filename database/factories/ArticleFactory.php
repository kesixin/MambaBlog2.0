<?php

use Faker\Generator as Faker;

$factory->define(\App\Models\Article::class, function (Faker $faker) {

    $sentence = $faker->sentence();

    // 随机取一个月以内的时间
    $updated_at = $faker->dateTimeThisMonth();
    // 传参为生成最大时间不超过，创建时间永远比更改时间要早
    $created_at = $faker->dateTimeThisMonth($updated_at);

    return [
        'title' => $sentence,
        'slug' => str_slug($sentence),
        'meta_description' => $sentence,
        'page_image' => $faker->imageUrl(),
        'content' => $faker->text,
        'published_at' => $created_at,
        'created_at' => $created_at,
        'updated_at' => $updated_at,
    ];
});
