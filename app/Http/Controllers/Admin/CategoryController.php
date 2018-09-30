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
}
