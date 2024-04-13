<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>{{env('APP_NAME')}}</title>

        {{-- <base href="/public" target="_blank"> --}}

        <!-- favicon -->
        <link rel="icon" href="{{ url('img/fav.png') }}">
        <!-- favicon -->

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">

        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Play:wght@400;700&display=swap" rel="stylesheet">

       
        <!-- Bootstrap CSS -->
        <link rel="stylesheet" href="./bootstrap/bootstrap.min.css">
        <link rel="stylesheet" href="./css/app.css">

    </head>
    <body class="m-0 p-0">

        <div id="app">
            <mainapp></mainapp>
        </div>
        
        <script src="{{asset('/bootstrap/bootstrap.bundle.min.js')}}"></script> 
        <script src="{{asset('/js/app.js')}}"></script> 
        
    </body>
</html>
