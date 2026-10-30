<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\DashboardController;



Route::get('/', function () {
    return inertia('LandingPage');
});


Route::get('/items', function () {
    return inertia('Items/Index');
})->middleware('auth');;

Route::middleware('guest')->group(function () {
    Route::get('/login', [AuthController::class, 'showLogin']);
    Route::post('/login', [AuthController::class, 'login']);

    Route::get('/register', [AuthController::class, 'showRegister']);
    Route::post('/register', [AuthController::class, 'register']);
});

Route::post('/logout', [AuthController::class, 'logout'])
    ->middleware('auth');

Route::get('/dashboard', [DashboardController::class, 'dashboard'])
    ->middleware('auth');


    Route::get('/test', function () {
    return inertia('Test');
});