<?php

namespace App\Http\Controllers\Admin;

use App\Http\Resources\ArticleResource;
use App\Models\Article;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ArticleController extends Controller
{
    //
    public function index()
    {
        $articles = Article::latest()->paginate(10);
        $articles->load(['user','category','tags']);

        return ArticleResource::collection($articles);
    }
}
