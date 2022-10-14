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
        Schema::create('media', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('link');
            $table->time('time');
            $table->integer('views')->default(0);
            $table->time('release')->nullable();
            $table->tinyInteger('type')->default(0);
            $table->string('license')->nullable();
            $table->string('posters')->nullable();
            $table->string('authors')->nullable();
            $table->tinyInteger('created_by')->default(1);
            $table->foreignId('artist_id')->constrained();
            $table->foreignId('genre_id')->constrained();
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
        Schema::dropIfExists('media');
    }
};
