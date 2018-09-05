<!doctype html>
<html lang="zh">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="keywords" content="曼巴童鞋,blog,markdown,laravel,Mamba,博客,laravel博客,php7 博客,开源博客,laravel blog">
    <meta name="description" content="Mamba Blog 是一个基于Laravel开发，支持markdown语法开源的简易博客。">
    <link href="/favicon.ico" rel="shortcut icon">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>Mamba Blog</title>

    <link rel="stylesheet" href="/css/app.css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.8/css/all.css" integrity="sha384-3AB7yXWz4OeoZcPbieVW64vVXEwADiYyAEhwilzWsLw+9FgqpyjjStpPnpBO8o8S" crossorigin="anonymous">
</head>
<body>
<div id="app">

</div>

<script src="{{ mix('js/app.js') }}"></script>
<script>
    window.Laravel =<?php echo json_encode(['csrfToken' => csrf_token()]); ?>
</script>
</body>
</html>