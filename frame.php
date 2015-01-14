<?php
session_start();

$code = $_SESSION['raw_code'];

?>
<!DOCTYPE html>
<html>
<head>
	<script src="assets/js/jquery.js" type="text/javascript"></script>
	<script src="assets/js/app.js" type="text/javascript"></script>
	<script type="text/javascript"><?php echo $code; ?></script>
</head>
<body>

</body>
</html>
