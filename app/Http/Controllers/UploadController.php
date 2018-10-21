<?php

namespace App\Http\Controllers;

use App\Services\FileManager\BaseManager;
use Illuminate\Http\Request;

class UploadController extends Controller
{
    protected $manager;

    /**
     * UploadController constructor.
     * @param BaseManager $manager
     */
    public function __construct(BaseManager $manager)
    {
        $this->manager = $manager;
    }

    /**
     * @param Request $request
     * @return mixed
     */
    public function uploadImage(Request $request)
    {
        $this->validate($request,[
           'image'=>'required|image'
        ]);

        $path = date('Y').date('m').'/'.date('d');

        $resource = $this->manager->store($request->file('image'),$path);

        return $this->respond($resource);
    }
}
