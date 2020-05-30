<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    $b = new App\Book;
    $b->asd = 123;
    $b->save();
    header('Content-type: application/json');
    echo json_encode(App\Book::all()->toArray(), JSON_PRETTY_PRINT);
    exit;
    return view('welcome');
});
