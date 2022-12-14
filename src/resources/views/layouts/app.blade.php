<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    @stack('script')
</head>
<body>
    <div id="app">
        <master>
            @yield('content')
        </master>
    </div>
    @vite([
        'resources/sass/app.scss',
        'resources/js/app.js',
        'resources/js/app/master.js',
        'resources/js/app/home.js',
        ])
</body>
</html>
