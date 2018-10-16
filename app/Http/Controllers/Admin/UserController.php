<?php

namespace App\Http\Controllers\Admin;

use App\Http\Resources\UserResource;
use App\Services\FileManager\BaseManager;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\User;

class UserController extends Controller
{
    /**
     * @return \Illuminate\Http\Resources\Json\AnonymousResourceCollection
     */
    public function index()
    {
        return UserResource::collection(User::latest()->paginate(10));
    }

    /**
     * @param User $user
     * @return UserResource
     */
    public function edit(User $user){
        return new UserResource($user);
    }

    /**
     * @param User $user
     * @param Request $request
     * @return UserResource
     */
    public function update(User $user,Request $request)
    {
        $user->fill($request->only(['nickname','website','description','github_name','weibo_link','weibo_name']));

        $user->save();

        return new UserResource($user);
    }

    /**
     * @param User $user
     * @param Request $request
     * @param BaseManager $manager
     * @return mixed
     */
    public function avatar(User $user,Request $request,BaseManager $manager)
    {
        $this->validate($request,[
            'image'=>'required|image'
        ]);

        $path = date('Y').date('m').'/'.date('d');

        $resource = $manager->store($request->file('image'),$path);

        $user->avatar = $resource['relative_url'];

        $user->save();

        return $this->respond($resource);
    }

    /**
     * @param User $user
     * @param Request $request
     * @return mixed|\Response
     */
    public function status(User $user,Request $request)
    {
        if($user->id == $request->user()->id){
            return $this->failed('您无法为自己和其他管理员更改状态');
        }

        $user->status = ! $user->status;

        $user->save();

        return $this->noContent();
    }
}
