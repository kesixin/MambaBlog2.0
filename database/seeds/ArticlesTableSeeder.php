<?php

use Illuminate\Database\Seeder;

class ArticlesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //所有用户 ID 数组
        $user_ids = \App\Models\User::all()->pluck('id')->toArray();

        //所有分类 ID 数组
        $category_ids = \App\Models\Category::all()->pluck('id')->toArray();

        $faker = app(\Faker\Generator::class);

        $articles = factory(\App\Models\Article::class)
            ->times(100)
            ->make()->each(function ($article, $index) use ($user_ids, $category_ids, $faker){
                // 从用户 ID 数组中随机取出一个并赋值
                $article->user_id = $faker->randomElement($user_ids);
                // 文章分类，同上
                $article->category_id = $faker->randomElement($category_ids);
            });

        \App\Models\Article::insert($articles->toArray());
    }
}
