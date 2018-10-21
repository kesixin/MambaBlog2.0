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

    }
}
