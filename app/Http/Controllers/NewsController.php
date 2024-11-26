<?php

namespace App\Http\Controllers;

use App\Models\News;
use Inertia\Inertia;
use Inertia\Response;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class NewsController extends Controller
{
    public function index(): Response
    {
        // Fetch paginated news data
        $news = News::latest()->paginate(10);

        // Return the Inertia response with the 'News/Index' component and pass the data
        return Inertia::render('News/Index', [
            'news' => $news,
        ]);
    }

     /**
     * Fetch paginated news data for the API.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function IndexApi(Request $request): JsonResponse
    {
        // Fetch paginated news data
        $news = News::latest()->paginate(10);

        // Return a JSON response for the API
        return response()->json($news);
    }
}


