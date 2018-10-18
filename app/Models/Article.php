<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Builder;

class Article extends Model
{
    protected $table = 'articles';

    protected $dates = ['published_at'];
    /**
     * @var array
     */
    protected $fillable = [
        'user_id','last_user_id','category_id','title','slug','page_image','content','meta_description',
        'is_draft','is_original','published_at','view_count'
    ];

    /**
     * Get the category for the article
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function category()
    {
        return $this->belongsTo(Category::class,'category_id','id');
    }

    /**
     * Get the user for the article
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function user()
    {
        return $this->belongsTo(User::class,'user_id','id');
    }


    /**
     * 中间操作流（Builder）
     * @param Builder $query
     * @return $this
     */
    public function scopeValid(Builder $query)
    {
        return $query->where([
           ["published_at",'<=',date('Y-m-d H:i:s',time())],
            ['is_draft',0]
        ]);
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\MorphToMany
     */
    public function tags()
    {
        return $this->morphedByMany(Tag::class,'taggable');
    }
}
