<?php

namespace App\Http\Resources;


use Illuminate\Http\Resources\Json\Resource;

class UserResource extends Resource
{

    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'nickname' => $this->nickname,
            'email' => $this->email,
            'avatar' => $this->avatar,
            'is_admin' => $this->is_admin,
            'status' => $this->status,
            'github_name' => $this->github_name,
            'weibo_name' => $this->weibo_name,
            'weibo_link' => $this->weibo_link,
            'website' => $this->website,
            'description' => $this->description,
            'email_notify_enabled' => $this->email_notify_enabled,
            'created_at' => $this->created_at->toDateTimeString()
        ];
    }

}