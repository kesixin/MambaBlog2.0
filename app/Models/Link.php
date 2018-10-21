<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Link extends Model
{
    use SoftDeletes;

    /**
     * @var string
     */
    protected $table = 'links';

    /**
     * @var array
     */
    protected $fillable = [
        'name','link','image','status'
    ];



}
