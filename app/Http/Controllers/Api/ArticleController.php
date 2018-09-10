<?php

namespace App\Http\Controllers\Api;

use App\Http\Resources\ArticleResource;
use App\Models\Article;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ArticleController extends Controller
{

    /**
     * 文章列表
     * @return \Illuminate\Http\Resources\Json\AnonymousResourceCollection
     */
    public function index()
    {
        $articles = Article::latest()->valid()->paginate(6);

        $articles->load(['user','category']);

        return ArticleResource::collection($articles);

    }


    /**
     * 文章详情
     * @param $slug
     * @return ArticleResource
     */
    public function show($slug)
    {
        $article = Article::where('slug',$slug)->first();
        $article->load(['user']);

        return new ArticleResource($article);
    }
}
