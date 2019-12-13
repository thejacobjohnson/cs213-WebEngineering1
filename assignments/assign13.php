<!DOCTYPE html>
<html lang=en-us>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="author" content="Jacob Johnson">
    <meta name="description" content="Confirm Order from Bulldog Store">
    <title> Order Confirmation </title>
    <link rel="stylesheet" type="text/css" href="assign11.css">
</head>
<body>
<header>
    <div class="navbar">
        <a href="assign11.html">Home</a>
    </div>
</header>
<div  style="margin-left:100px;">
<div>
    <h2 style="margin:20px"> Confirm Order </h2>
</div>
<?php
    $first_name = $_POST['first_name'];
    $last_name = $_POST['last_name'];
    $address = $_POST['address'];
    $phone = $_POST['phone'];
    $items = $_POST['item'];
    $total = $_POST['total'];
    $card =$_POST['card'];
    $exp_date = $_POST['exp_date'];
    echo "<b>CONTACT INFO</b>";
    echo "<br>First Name: " . $first_name;
    echo "<br>Last Name: " . $last_name;
    echo "<br>Address: " . $address;
    echo "<br>Phone Number: " . $phone;
    echo "<br><br><b>ITEMS TO PURCHASE</b>";
    if (!empty($items)) {
        foreach ($items as $item) {
            echo "<br>" .$item. ", $". $_POST[$item];
        }
    }
    echo "<br>Total: $". $total;
    echo "<br><br><b>PAYMENT INFORMATION</b>";
    echo "<br>Card Type: " . $card;
    echo "<br>Expiration Date: " . $exp_date;
?>
<form action="assign11_a.php" method="post">
    <input type="submit" id="confirm" name="confirm" value="Confirmed">
    <input type="submit" id="canceled" name="canceled" value="Canceled">
</form></div>

<footer>
    <div style="height: 50px"><br></div>
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
