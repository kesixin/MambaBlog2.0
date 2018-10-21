<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\Resource;

class LinkResource extends Resource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id'=>$this->id,
            'name'=>$this->name,
            'link'=>$this->link,
            'image'=>$this->image,
            'status'=>$this->status,
            'created_at'=>$this->created_at->toDateTimeString()
        ];
    }
}
