<!DOCTYPE html>
<html lang="en-US">
<head>
  <meta charset="utf-8">
  <title>Ping-Pong</title>
  <meta name="viewport" content="width=device=width, initial-scale=1.0">
  <link rel="stylesheet" type="text/css" href="assets/css/bootstrap.min.css">
  <link rel="stylesheet" type="text/css" href="assets/css/main.css" media="all">
  <script src="assets/js/jquery-2.1.4.min.js"></script>
  <script src="assets/js/bootstrap.min.js"></script>
</head>
<body>
  <div class="container-fluid">
    <header class="row-fluid main-header clearfix">
      <h1 class="col-md-12">Ping-Pong</h1>
    </header>
    <div class="row-fluid columns">
      <aside class="col-md-3 about">
        <h2>About Ping Pong</h2>
        <h3>Created by:</h3>
        <h4>Kyle Misener</h4>
        <h3>GitHub Username/URL:</h3>
        <h4><a href="https://github.com/kmisener/ping-pong">kmisener</a></h4>
        <h3>Level 2 Test for:</h3>
        <h4>Java</h4>
      </aside>

      <article class="col-md-9 main-content">
        <h2>Let's play!</h2>
        <h3>Rules:</h3>
        <h4>Ping Pong will count up to your number from 1 with the following exceptions</h4>

        <ol>
          <li>Numbers divisable by 3 become "ping"</li>
          <li>Numbers divisable by 5 become "pong"</li>
          <li>Numbers divisable by 3 and 5 become "pingpong"</li>
        </ol>

        <form id="pingpong-number">
          <div class="form-group">
            <label for="user-input">Enter your number here: </label>
            <input type="number" id="user-input">
            <button type="submit" class="btn btn-primary">Ping Pong!</button>
          </div>
        </form>

        <section id="results"></section>
      </article>
    </div>
  </div>
  <script src="assets/js/main.js"></script>
</body>
</html>
