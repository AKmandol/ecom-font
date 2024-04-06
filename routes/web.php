<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\HomeController;

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

// Route::get('/', function () {
//     return view('welcome');
// });

Auth::routes();

Route::get('/',[AdminController::class, 'index']);
Route::get('/home',[AdminController::class, 'index']);
Route::get('/location',[AdminController::class, 'index']);
Route::get('/faq',[AdminController::class, 'index']);



//Route::any('{slug}',[AdminController::class, 'index'])->where('slug','([A-z\d/_.]+)?');
Route::get('/{pathMatch}',[AdminController::class, 'index'])->where('pathMacth',".*");
