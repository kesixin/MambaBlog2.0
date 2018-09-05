<?php
/**
 * Created by PhpStorm.
 * User: cocoyo
 * Date: 2018/1/16 0016
 * Time: 19:23
 */

return [
    'proxy' => [
        'grant_type'    => env('OAUTH_GRANT_TYPE'),
        'client_id'     => env('OAUTH_CLIENT_ID'),
        'client_secret' => env('OAUTH_CLIENT_SECRET'),
        'scope'         => env('OAUTH_SCOPE', '*'),
    ],
];