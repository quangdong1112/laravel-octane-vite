<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        \App\Models\Artist::factory(100)->create();
        \App\Models\Genre::factory(10)->create();
        \App\Models\Album::factory(20)->create();
        \App\Models\Media::factory(1000)->create();
        \App\Models\MediaArtist::factory(1000)->create();
    }
}
