<?php

namespace App\Http\Resources;


use Illuminate\Http\Resources\Json\Resource;

class ArticleResource extends Resource
{

    public function toArray($request)
    {
        return [
            'id'                => $this->id,
            'category_id'       => $this->category_id,
            //'category'          => new CategoryResource($this->whenLoaded('category')),
            //'user'              => new UserResource($this->whenLoaded('user')),
            //'tags'              => TagResource::collection($this->whenLoaded('tags')),
            'comments_count'    => $this->comments_count,
            'slug'              => $this->slug,
            'title'             => $this->title,
            'content'           => collect(json_decode($this->content))->get('raw'),
            'content_html'      => collect(json_decode($this->content))->get('html'),
            'page_image'        => $this->page_image,
            'wx_image'          => $this->page_image . '_372x110px' . strrchr($this->page_image, '.'),
            'share_wx_image'    => $this->page_image . '_500x400px' . strrchr($this->page_image, '.'),
            'meta_description'  => $this->meta_description,
            'is_original'       => $this->is_original,
            'is_draft'          => $this->is_draft,
            'visitors'          => $this->view_count,
            'comments_count'    => $this->comments_count,
            //'published_at'      => $this->published_at->toDateTimeString(),
            //'published_time'    => $this->published_at->toDayDateTimeString(),
            //'published_individualization' => $this->published_at->diffForHumans(),
            //'created_at'        => $this->created_at->toDateString(),
        ];
    }

}