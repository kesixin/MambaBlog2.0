<?php

namespace App\Http\Controllers\Admin;

use App\Http\Resources\LinkResource;
use App\Models\Link;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class LinkController extends Controller
{
    /**
     * @return \Illuminate\Http\Resources\Json\AnonymousResourceCollection
     */
    public function index()
    {
        $links = Link::latest()->paginate(10);

        return LinkResource::collection($links);
    }

    public function store(Request $request)
    {
        $this->validate($request,[
            'name'=>'required|min:1|max:255',
            'link'=>'required|min:1|max:255',
            'image'=>'required'

        ]);

        Link::create($request->all());

        Cache::forget('cocoyo_links');

        return $this->noContent();
    }
}
