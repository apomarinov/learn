<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/collections', 'CollectionController@list');
Route::get('/collections/{col}', 'CollectionController@show');
Route::get('/collections/{col}/books/{book}', 'BookController@show');
Route::get('/collections/{col}/books/{book}/lessons/{lesson}', 'LessonController@show');

Route::get('/words', 'WordController@list');
