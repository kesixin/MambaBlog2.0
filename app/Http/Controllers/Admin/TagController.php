<?php

namespace App\Http\Controllers\Admin;

use App\Http\Resources\TagResource;
use App\Models\Tag;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class TagController extends Controller
{
    /**
     * @param Request $request
     * @return \Illuminate\Http\Resources\Json\AnonymousResourceCollection
     */
    public function index(Request $request)
    {
        return TagResource::collection(Tag::latest()->paginate(10));
    }

    public function store(Request $request)
    {
        $data = $this->validate($request,[
            'tag' => 'required|min:1|max:15',
            'meta_description' => 'required'
        ]);

        Tag::create($data);

        return $this->noContent();
    }
}
