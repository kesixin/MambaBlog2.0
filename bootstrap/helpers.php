<?php

/**
 * Created by PhpStorm.
 * User: shuai
 * Date: 2018/9/7
 * Time: 15:28
 */

if(!function_exists('rand_avatar')){
    function rand_avatar() {
        $avatars = [
            '/images/default_avatar.png',
            '/images/default_avatar_1.png',
            '/images/default_avatar_2.png',
            '/images/default_avatar_3.png',
            '/images/default_avatar_4.png'
        ];
        return array_random($avatars);
    }
}