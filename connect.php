<?php
// Create connection
$connect = mysqli_connect('localhost', 'root', '', 'bluease');

// Check connection
if (mysqli_connect_error()) {echo 'Failed to connect' ;}
?>