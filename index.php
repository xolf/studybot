<?php
session_start();
$_SESSION['raw_code'] = $_POST['code'];
?>
<!DOCTYPE html>
	<head>
		<title>Studybot</title>
		<link rel="stylesheet" href="assets/css/bootstrap.min.css"> 
		<link rel="stylesheet" href="assets/css/global.css"> 
	</head>
	<body>
		<div id="main">
			<nav class="navbar navbar-inverse">
		        <div class="navbar-header">
		          	<a class="navbar-brand" href="#">Studybot</a>
		        </div>
		        <div id="navbar" class="collapse navbar-collapse">
		          	<ul class="nav navbar-nav">
		            	<li><a><span class="glyphicon glyphicon-play" aria-hidden="true" id="play"></span> Los</a></li>
		            	<li><a href="#about"><span class="glyphicon glyphicon-chevron-down" aria-hidden="true"></span> Herunterladen</a></li>
		            	<li><a href="#contact">Mehr</a></li>
		          	</ul>
		        </div>
		    </nav>
		    <div class="col-md-6">
		    	<form method="post" id="code-form">
		    	<div class="coding-space">
		    	<textarea name="code"><?php if (isset($_POST['code'])) echo $_POST['code']; ?></textarea>
      			</div>	
      			</form>
		    </div>
		    <div class="col-md-6">
		    <div class="viewer">
		    	<iframe id="viewer" src="frame.php">
		    	Dein Browser unterstützt keine iFrames
		    	</iframe>
      		</div>	
		    </div>
		</div>	
	</body>
	<script src="assets/js/jquery.js"></script>
	<script src="assets/js/app.js"></script>
	<script src="assets/js/design.js"></script>
</html>