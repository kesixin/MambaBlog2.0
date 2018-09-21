<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    protected $table = 'categories';

    protected $fillable =['parent_id','name','path','description','image_url'];

    public function article()
    {
        return $this->hasMany(Article::class);
    }
}
