<?php

namespace App\Http\Controllers;

use App\Models\MediaArtist;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class MediaArtistController extends Controller
{
    public function index() {
        return DB::table('media_artists')->where('id' , 110)->get();
    }
}
