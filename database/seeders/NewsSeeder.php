<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\News;

class NewsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Create sample data for the news table
        News::create([
            'title' => 'Breaking News: Market Reaches New High',
            'content' => 'The stock market has reached a new high today...',
            'author' => 'Jane Doe',
            'published_at' => now(),
        ]);

        // Add more sample data as needed
        News::create([
            'title' => 'Weather Update: Heavy Rain Expected Tomorrow',
            'content' => 'Meteorologists predict heavy rain in the city...',
            'author' => 'John Smith',
            'published_at' => now(),
        ]);
    }
}
