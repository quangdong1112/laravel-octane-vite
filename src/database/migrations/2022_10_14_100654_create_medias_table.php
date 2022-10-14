<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('medias', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('link');
            $table->time('time');
            $table->string('showers');
            $table->integer('views');
            $table->time('release')->nullable();
            $table->string('type');
            $table->string('category');
            $table->string('license');
            $table->string('posters')->nullable();
            $table->tinyInteger('created_by');
            $table->foreignId('author_id')->constrained();
            $table->foreignId('album_id')->constrained();
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
        Schema::dropIfExists('songs');
    }
};
