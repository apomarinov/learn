<?php

namespace App\Http\Controllers;

use App\Collection;
use Illuminate\Http\Request;

class CollectionController extends Controller
{

    public function list(Request $request)
    {
        return response()->json(Collection::all());
    }

    public function show(Collection $col)
    {
        $col->load('books');
        return response()->json($col);
    }
}
