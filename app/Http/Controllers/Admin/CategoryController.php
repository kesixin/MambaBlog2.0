<?php

namespace App\Http\Controllers\Admin;

use App\Http\Resources\CategoryResource;
use App\Models\Category;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class CategoryController extends Controller
{
    /**
     * @param Request $request
     * @return \Illuminate\Http\Resources\Json\AnonymousResourceCollection
     */
    public function index(Request $request)
    {
        return CategoryResource::collection(Category::latest()->paginate(10));
    }

    /**
     * @param Request $request
     * @return \Response
     */
    public function store(Request $request)
    {
        $this->validate($request,[
            'name'=> 'required|min:1|max:15',
            'description'=>'required'
        ]);

        Category::create($request->all());

        return $this->noContent();
    }

    /**
     * @param Category $category
     * @return CategoryResource
     */
    public function edit(Category $category)
    {
        return new CategoryResource($category);
    }


    /**
     * @param Category $category
     * @param Request $request
     * @return \Response
     */
    public function update(Category $category,Request $request)
    {
        $this->validate($request,[
            'name'=>'required|min:1|max:15',
            'description'=>'required'
        ]);

        $category->fill($request->all());

        $category->save();

        return $this->noContent();
    }

    public function destroy(Category $category)
    {
        if($category->article()->count()){
            return $this->failed('该分类下有内容，您不能删除该分类');
        }

        $category->delete();
        return $this->noContent();
    }
}
