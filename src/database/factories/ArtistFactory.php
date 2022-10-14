<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Artist>
 */
class ArtistFactory extends Factory
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
            'avatar' => fake()->imageUrl($width = 400, $height = 400),
            'date_of_birth' => fake()->dateTimeBetween('1975-01-01', '2005-12-31')->format('YYYY-mm-dd'),
            'gender' => rand(0, 1),
        ];
    }
}
