<?php

namespace App\Http\Controllers;

use App\Book;
use App\Collection;
use App\Lesson;

class LessonController extends Controller
{

    public function show(Collection $col, Book $book, Lesson $lesson)
    {
        return response()->json($lesson);
    }

}
