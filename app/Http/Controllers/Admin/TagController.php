<?php

namespace App\Http\Controllers\Admin;

use App\Http\Resources\TagResource;
use App\Models\Tag;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class TagController extends Controller
{
    public function index(Request $request)
    {
        return TagResource::collection(Tag::latest()->paginate(10));
    }
}
