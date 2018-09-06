<?php
/**
 * Created by PhpStorm.
 * User: shuai
 * Date: 2018/9/6
 * Time: 18:27
 */

namespace App\Listeners\Auth;


use Illuminate\Support\Facades\DB;
use Laravel\Passport\Events\RefreshTokenCreated;

class PruneOldTokens
{

    /**
     * 事件监听清理token
     * Hand the event.
     * @param RefreshTokenCreated $event
     */
    public function handle(RefreshTokenCreated $event)
    {
        DB::table('oauth_refresh_tokens')
            ->where('access_token_id', '!=', $event->accessTokenId)
            ->where('revoked', true)
            ->delete();
    }
}