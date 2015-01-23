<?php
session_start();

$code = $_SESSION['raw_code'];

$code = "    // create an new instance of a pixi stage
    var stage = new PIXI.Stage(0x66FF99);

    // create a renderer instance
    var renderer = PIXI.autoDetectRenderer(400, 300);

    // add the renderer view element to the DOM
    document.body.appendChild(renderer.view);

    requestAnimFrame(animate);

    // create a texture from an image path
    var texture = PIXI.Texture.fromImage(\"melow.png\");

    // create a new Sprite using the texture
    var bunny = new PIXI.Sprite(texture);

    // center the sprites anchor point
    bunny.anchor.x = 0.5;
    bunny.anchor.y = 0.5;

    // move the sprite to the center of the screen
    bunny.position.x = 200;
    bunny.position.y = 150;

    stage.addChild(bunny);

    function animate() {
        requestAnimFrame(animate);

        // just for fun, let's rotate mr rabbit a little
        bunny.rotation += 0.1;

        // render the stage
        renderer.render(stage);
    }".$code;
?>
<!DOCTYPE html>
<html>
<head>
	<script src="assets/js/jquery.js" type="text/javascript"></script>
	<script src="assets/js/app.js" type="text/javascript"></script>
	<style>
        body {
            margin: 0;
            padding: 0;
            background-color: #FBFBFB;
        }
    </style>
	<script type="text/javascript" src="assets/js/pixi/Pixi.js"></script>
</head>
<body>
	<script type="text/javascript"><?php echo $code; ?></script>
</body>
</html>
