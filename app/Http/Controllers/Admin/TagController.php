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

    /**
     * @param Request $request
     * @return \Response
     */
    public function store(Request $request)
    {
        $data = $this->validate($request,[
            'tag' => 'required|min:1|max:15',
            'meta_description' => 'required'
        ]);

        Tag::create($data);

        return $this->noContent();
    }

    /**
     * @param Tag $tag
     * @return TagResource
     */
    public function edit(Tag $tag)
    {
        return new TagResource($tag);
    }

    /**
     * @param Tag $tag
     * @param Request $request
     * @return \Response
     */
    public function update(Tag $tag,Request $request)
    {
        $data=$this->validate($request,[
            'tag'=>'required|min:1|max:15',
            'meta_description'=>'required'
        ]);

        $tag->fill($data);

        $tag->save();

        return $this->noContent();

    }

    /**
     * @param Tag $tag
     * @return mixed|\Response
     */
    public function destroy(Tag $tag)
    {
        if($tag->articles()->count()){
            return $this->failed('该标签下有内容，您不能删除该标签');
        }

        $tag->delete();

        return $this->noContent();
    }
}
