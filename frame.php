<?php
session_start();

$code = $_SESSION['raw_code'];

?>
<!DOCTYPE html>
<html>
<head>
	<script src="assets/js/jquery.js" type="text/javascript"></script>
	<script src="assets/js/app.js" type="text/javascript"></script>
    <script><?php echo $code; ?></script>
	<style>
        body {
            margin: 0;
            padding: 0;
            background-color: #FBFBFB;
        }
    </style>
</head>
<body>
	
</body>
</html>
