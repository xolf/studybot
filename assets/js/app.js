runCode = true;

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

	if(typeof worldX === "undefined" && typeof worldY === "undefined")
	{

		errorLog("Es wurde keine Welt festgelegt", 1);

		runCode = false;

	}

	this.posY = posY;

	this.posX = posX;

	this.direction = direction;

	this.name = name


	if(typeof posX === "undefined" || typeof posY === "undefined" || typeof direction === "undefined" || typeof name === "undefined")
	{

		errorLog("Der Roboter wurde nicht/falsch definiert", 2);

		runCode = false;

	}


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
		if (this.PosX-1 > 0)
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
		if (this.PosY-1 > 0)
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

	worldY = y;

}