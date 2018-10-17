<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name')->unique()->comment('用户名');
            $table->string('nickname')->nullable()->comment('显示名称');
            $table->text('avatar')->nullable()->comment('头像');
            $table->string('email')->unique()->comment('邮箱');
            $table->tinyInteger('status')->default(false)->comment('状态');
            $table->boolean('is_admin')->default(false)->comment('是否管理员');
            $table->string('password')->comment('密码');
            $table->string('github_name')->nullable()->comment('github名字');
            $table->string('weibo_id')->nullable()->comment('微博id');
            $table->string('weibo_name')->nullable()->comment('微博名称');
            $table->string('weibo_link')->nullable()->comment('微博链接');
            $table->string('qq_id')->nullable()->comment('qq_id');
            $table->string('website')->nullable()->comment('个人网站');
            $table->string('description')->nullable()->comment('描述');
            $table->enum('email_notify_enabled', ['yes',  'no'])->default('yes')->index()->comment('启用电子邮件通知');
            $table->rememberToken();
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
        Schema::dropIfExists('users');
    }
}
