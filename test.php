<!DOCTYPE HTML>
<html>
<head>
    <title>Pixi</title>
    <script src="assets/js/pixi/Pixi.js"></script>
    <style>
    body{
        margin: 0px;
    }
    </style>
</head>
<body>
    <script>
    var height = "innerHeight" in window 
               ? window.innerHeight
               : document.documentElement.offsetHeight; 
    var width = "innerWidth" in window 
               ? window.innerWidth
               : document.documentElement.offsetWidth; 
    width -= 5;
    height -= 5;

    // create an new instance of a pixi stage
    var stage = new PIXI.Stage(0x000000);

    // create a renderer instance
    var renderer = PIXI.autoDetectRenderer(width, height, null, true);

    // add the renderer view element to the DOM
    document.body.appendChild(renderer.view);

    requestAnimFrame(animate);

    // create a texture from an image path
    var texture = PIXI.Texture.fromImage("assets/img/melow.png");

    // create a new Sprite using the texture
    var bunny = new PIXI.Sprite(texture);

    // center the sprites anchor point
    bunny.anchor.x = 0.5;
    bunny.anchor.y = 0.5;

    // move the sprite to the center of the screen
    bunny.position.y = 140;
    bunny.position.x = 400;

    stage.addChild(bunny);

    function animate() {
        requestAnimFrame(animate);

        // just for fun, let's rotate mr rabbit a little
        bunny.x -= 2.5;

        if(bunny.x == 0){
            bunny.x = width;
        }

        if(bunny.x == width){
            bunny.x = 0;
        }

        if(bunny.y == 0){
            bunny.y = height;
        }

        if(bunny.y == height){
            bunny.y = 0;
        }

        if(bunny.y == 140){
            bunny.y += 1;
        }

        if(bunny.y == 170){
            bunny.y -= 1;
        }

        // render the stage
        renderer.render(stage);
    }
    </script>

    </body>
</html>
