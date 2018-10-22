<?php

namespace App\Http\Controllers\Admin;

use App\Http\Resources\LinkResource;
use App\Models\Link;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Cache;

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

    /**
     * @param Request $request
     * @return \Response
     */
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

    /**
     * @param Link $link
     * @return LinkResource
     */
    public function edit(Link $link)
    {
        return new LinkResource($link);
    }

    /**
     * @param Request $request
     * @param Link $link
     * @return \Response
     */
    public function update(Request $request,Link $link)
    {
        $this->validate($request,[
            'name'=>'required|min:1|max:255',
            'link'=>'required|min:1|max:255',
            'image'=>'required'
        ]);

        $link->fill($request->all());

        $link->save();

        Cache::forget('cocoyo_links');

        return $this->noContent();

    }

    /**
     * @param Link $link
     * @return \Response
     */
    public function destroy(Link $link)
    {
        $link->delete();

        Cache::forget('cocoyo_links');

        return $this->noContent();
    }
}
