<?php

/**
 * Created by PhpStorm.
 * User: shuai
 * Date: 2018/9/21
 * Time: 15:42
 */

namespace App\Services\FileManager;

use Illuminate\Support\Facades\Storage;
use Symfony\Component\HttpFoundation\File\UploadedFile;

class BaseManager
{
    protected $disk;

    public function __construct()
    {
        $this->disk = Storage::disk(config('filesystems.default'));
    }

    /**
     * @param UploadedFile $file
     * @param string $dir
     * @return array
     */
    public function store(UploadedFile $file,$dir = '')
    {
        $hashName = $file->hashName();

        $mime= $file->getMimeType();

        $realName= $this->disk->putFileAs($dir,$file,$hashName);

        return [
            'success'=>true,
            'filename'=>$hashName,
            'original_name'=>$file->getClientOriginalName(),
            'mime'=>$mime,
            'size'=>$file->getClientSize(),
            'relative_url'=>'/storage/'.$realName,
            'full_relative_url'=>url('/storage/'.$realName)
        ];
    }
}