<!DOCTYPE html>
<html lang=en-us>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="author" content="Jacob Johnson">
    <meta name="description" content="Order from Bulldog Store">
    <title> Order Confirmation </title>
    <link rel="stylesheet" type="text/css" href="assign11.css">
</head>
<body>
<header>
    <div class="navbar">
        <a href="assign11.html">Home</a>
    </div>
    <div class="center-flex" id="headerText" style="color:black";>
        <?php
            $confirmed = $_POST['confirm'];
            $canceled = $_POST['canceled'];
            if (is_null($confirmed)) {$orderStatus = $canceled;}
            else {$orderStatus = $confirmed;}
            echo "<h1> Order " .$orderStatus. "! </h1>";
        ?>
    </div>
</header>
<div style="height:200px"><br></div>
<footer>
    <div class="footer">
        <div id="copyright">
            <p>© 2019<p>
        </div>
        <div id="footer-address">
            <p>Bulldog Store, Mayfield, UT 84643</p>
        </div>
    </div>
</footer>
</body>
</html>
