<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateArticlesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('articles', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('category_id')->comment('分类id');
            $table->unsignedInteger('user_id')->comment('用户id');
            $table->unsignedInteger('last_user_id')->nullable()->comment('最后一次评论id');
            $table->string('slug')->unique()->comment('链接');
            $table->string('title')->comment('标题');
            $table->text('content')->comment('内容');
            $table->string('page_image')->nullable()->comment('图片');
            $table->string('meta_description')->nullable()->comment('描述');
            $table->string('is_original')->default(false)->comment('原创?');
            $table->boolean('is_draft')->default(false)->comment('草稿？');
            $table->unsignedInteger('view_count')->default(0)->index()->comment('查看数量');
            $table->timestamp('published_at')->nullable()->comment('发布时间');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('articles');
    }
}
