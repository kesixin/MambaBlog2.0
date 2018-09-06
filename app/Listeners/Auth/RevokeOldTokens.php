<?php
/**
 * Created by PhpStorm.
 * User: shuai
 * Date: 2018/9/6
 * Time: 18:22
 */

namespace App\Listeners\Auth;


use Carbon\Carbon;
use Laravel\Passport\Events\AccessTokenCreated;
use Laravel\Passport\Token;

class RevokeOldTokens
{

    /**
     *  事件监听清理token
     *  Handle the event.
     * @param AccessTokenCreated $event
     */
    public function handle(AccessTokenCreated $event)
    {
        Token::where('id', '!=', $event->tokenId)
            ->where('user_id', $event->userId)
            ->where('client_id', $event->clientId)
            ->where('expires_at', '<', Carbon::now())
            ->orWhere('revoked', true)
            ->delete();
    }

}