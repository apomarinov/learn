<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Word;

class WordController extends Controller
{

    public function list(Request $request)
    {
        $search = $request->query('q');
        $res = [];
        if (!empty($search)) {
            $res = Word::where('word', '=', $search)->first();
        } else {
            $res = Word::all();
        }
        return response()->json($res);
    }

}
