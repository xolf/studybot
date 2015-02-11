<?php
session_start();

$code = $_SESSION['raw_code'];
//$code = '$(document).ready ( function(){ '.$code.'});';

?>
<!DOCTYPE html>
<html>
<head>
    <style>
        body {
            margin: 0;
            padding: 0;
            background-color: #FBFBFB;
        }
        #bot {
            position: fixed;
        }
    </style>
	<script src="assets/js/jquery.js" type="text/javascript"></script>
	<script src="assets/js/app.js" type="text/javascript"></script>
    <script><?php echo $code; ?></script>
</head>
<body>
	
</body>
</html>
