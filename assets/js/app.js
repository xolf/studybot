//Defining Variables

runCode = true;

//Defining funcitons

function sleep(milliseconds) 
{
  
  var start = new Date().getTime();

  for (var i = 0; i < 1e7; i++) 
  {

    if ((new Date().getTime() - start) > milliseconds)
    {

      break;

    }

  }
  
}



function errorLog(error, type)
{

	switch(type)
	{

	case 0:

		tipp = "";

		break;

	

	case 1:

		tipp = "Welt(Breite, Laenge);";

		break;

	case 2:

		tipp = "Bot(X-Position, Y-Position, Blickrichtung, Name);";

		break;

	}

	document.write('<div style="color: #E12222;">' + error + '</div><div style="font-family: Consolas;">' + tipp + '</div>');

}

function Bot(posX, posY, direction, name)
{

	//if(typeof worldX === "undefined" && typeof worldY === "undefined")
	//{
	//
	//	errorLog("Es wurde keine Welt festgelegt", 1);
	//
	//	runCode = false;
	//
	//}

	this.posY = posY;

	this.posX = posX;

	this.direction = direction;

	this.name = name


	if(typeof posX === "undefined" || typeof posY === "undefined" || typeof direction === "undefined" || typeof name === "undefined")
	{

		errorLog("Der Roboter wurde nicht/falsch definiert", 2);

		runCode = false;

	}

	//Render Engine fuer den Bot	

	document.write('<img style="position: absolute; margin-left: ' + (((posY * 52) + 26) + (worldY - posX + 1) * 26 - 100) + 'px; margin-top: ' + (0 + (posX * 26 ))+ 'px;" src="assets/skins/melow/' + direction + '.png">');

	errorLog((worldY - posX), 0);

	//Definierung der Methoden

	this.Schritt = Schritt;

	this.Position = Position;

	this.Linksdrehen = Linksdrehen;

	this.Rechtsdrehen = Rechtsdrehen;

}


function Schritt()
{

	if(this.direction == 1)
	{ 
		if (this.posX+1 <= worldX)
		{ 

			this.posX++;

		}
		else
		{

			errorLog(this.name + " laeuft gegen die Wand", 0);

		}
	}

	if(this.direction == 2)
	{
		if (this.posY+1 <= worldY)
		{

		 	this.posY++;
		
		}
		else
		{

			errorLog(this.name + " laeuft gegen die Wand", 0);

		}
	}

	if(this.direction == 3)
	{ 
		if (this.posX-1 >= 1)
		{

			this.posX--;
		}
		else
		{

			errorLog(this.name + " laeuft bei (" + this.posX + "|" + this.posY + ") gegen die Wand", 0);

		}
	}

	if(this.direction == 0)
	{ 
		if (this.posY-1 >= 1)
		{ 

			this.posY--;

		}
		else
		{

			errorLog(this.name + " laeuft bei (" + this.posX + "|" + this.posY + ") gegen die Wand", 0);

		}
	}

}

function Position()
{

	errorLog(error = "X-Koordinate: " + this.posX + " Y-Koordinate: " + this.posY + "<br>", 0);

}

function Linksdrehen()
{

	this.direction--;

	if(this.direction < 0) this.direction = 3;

}

function Rechtsdrehen()
{

	this.direction++;

	if(this.direction > 3) this.direction = 0;

}


//Welt
function Welt(x, y)
{

	worldX = x;

	document.cookie="worldX="+x;



	worldY = y;

	document.cookie="worldY="+y;

	var iX = 0;

	var iY = 0;

	leftSpace = worldX * 26;

	document.write('<div style="position: absolute; margin: auto; margin-top: 100px; width: ' + (((worldY * 52) + 26) + leftSpace) + 'px; height: ' + worldX * 26 + 'px;">');

	while(worldX-1 >= iX)
	{

		document.write('<div style="margin: 0px; margin-left: ' + (leftSpace - (iX * 26)) + 'px; padding: 0px; height: 26px;">');

		while(worldY-1 >= iY)
		{

			if(iY == 0) document.write('<img style="margin-left: 0px; margin-top: 0px;" src="assets/img/ground.png">');

			else document.write('<img style="margin-left: -26px; margin-top: 0px;" src="assets/img/ground.png">');

			iY++;	

		}

		iY = 0;	

		document.write('</div>');

		iX++;

	}

	document.write('</div>');

}