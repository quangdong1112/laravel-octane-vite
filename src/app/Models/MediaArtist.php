<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MediaArtist extends Model
{
    use HasFactory;

    public function artist()
    {
        return $this->belongsTo(Artist::class);
    }

    public function media()
    {
        return $this->belongsTo(Media::class);
    }

}
