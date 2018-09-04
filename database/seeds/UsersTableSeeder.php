<?php

use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = app(\Faker\Generator::class);

        // 头像假数据
        $avatars = [
            '/images/default_avatar.png',
            '/images/default_avatar_1.png',
            '/images/default_avatar_2.png',
            '/images/default_avatar_3.png',
            '/images/default_avatar_4.png',
        ];

        //生成数据集合
        $users = factory(\App\Models\User::class)
            ->times(10)
            ->make()
            ->each(function ($user, $index) use ($faker, $avatars) {
                // 从头像数组中随机取出一个并赋值
                $user->avatar = $faker->randomElement($avatars);
            });

        // 让隐藏字段可见，并将数据集合转换为数组
        $user_array = $users->makeVisible(['password', 'remember_token'])->toArray();

        // 插入到数据库中
        \App\Models\User::insert($user_array);

        // 单独处理第一个用户的数据
        $user = \App\Models\User::find(1);
        $user->name = 'cocoyo';
        $user->nickname = 'cocoyo';
        $user->email = '2430114823@qq.com';
        $user->is_admin = 1;
        $user->save();
    }
}
