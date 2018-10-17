<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\Resource;

class TagResource extends Resource
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
            'id'      =>$this->id,
            'tag'     =>$this->tag,
            'meta_description' =>$this->meta_description,
            'created_at'=>$this->created_at->toDateTimeString()
        ];

    }
}
