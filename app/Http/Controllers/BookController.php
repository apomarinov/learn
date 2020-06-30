<?php

namespace App\Http\Controllers;

use App\Book;
use App\Collection;

class BookController extends Controller
{

    public function show(Collection $col, Book $book)
    {
        return response()->json($book);
    }

}
