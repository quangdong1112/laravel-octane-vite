<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\DB;
/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\MediaArtist>
 */
class MediaArtistFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'artist_id' => fake()->randomElement(DB::table('artists')->pluck('id')),
            'media_id' => fake()->randomElement(DB::table('media')->pluck('id')),
        ];
    }
}
