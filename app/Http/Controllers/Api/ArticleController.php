<?php

namespace App\Http\Controllers\Api;

use App\Http\Resources\ArticleResource;
use App\Models\Article;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ArticleController extends Controller
{


    public function index()
    {
        $articles = Article::latest()->valid()->paginate(6);

        $articles->load(['user','category']);

        return ArticleResource::collection($articles);

    }
}
