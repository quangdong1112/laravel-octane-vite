<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\DB;


/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Media>
 */
class MediaFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'name' => fake()->name(),
            'link' => fake()->imageUrl(),
            'posters' => fake()->imageUrl($width = 400, $height = 400),
            'created_by' => 1,
            'time' => fake()->dateTimeBetween('00:03:00', '03:00:00')->format('H:i:s'),
            'artist_id' => fake()->randomElement(DB::table('artists')->pluck('id')),
            'genre_id' => fake()->randomElement(DB::table('genres')->pluck('id')),
            'album_id' => fake()->randomElement(DB::table('albums')->pluck('id')),
        ];
    }
}
