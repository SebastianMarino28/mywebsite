var plantFg = [];
var plantSg = [];
var plantY = [];
var plantX = [];
var plantScl = [];
var plantRot = [];
var numPlants;
var pX = 0;

var fX = [];
var fY = [];
var vX = [];
var vY = [];
var bfScl = [];
var bfColor = [];
var numBflies;

var rectX = 0;
var rectY = 0;
var colDiff = 0;


function setup()
{
	createCanvas(600, 600);
	numPlants = 30;
	numBflies = 10;
	for (var i = 0; i < numPlants; i++)
	{
		plantFg[i] = random(80, 210);
		plantSg[i] = random(130, 200);
		plantY[i] = random(600, 800);
		plantX[i] = pX;
		plantScl[i] = random(.5, 1);
		plantRot[i] = random(-10, 10);
		pX += 20;
	}

	for (var i = 0; i < numBflies; i++)
	{
		vX.push(random(-3, 3));
		vY.push(random(-3, 3));
		fX.push(random(600));
		fY.push(random(300, 600));
		bfColor.push(color(random(255), random(255), random(255)));
		bfScl.push(random(.5, 1.2));
	}
}

function draw()
{
	background(165, 220, 232);
	push();
		noStroke();
		fill(160, 210, 232);
		rect(0, 120, 600, 120);
		fill(160, 200, 232);
		rect(0, 240, 600, 120);
		fill(160, 190, 232);
		rect(0, 360, 600, 120);
		fill(170, 180, 232);
		rect(0, 480, 600, 120);
	pop();
	
	for (var i = 0; i < numPlants; i++)
	{
		fill(255, plantFg[i], 5);
		stroke(255, plantSg[i], 5);
		drawPlant(plantX[i], plantY[i], plantScl[i], plantRot[i]);
	}
	
	for (var i = 0; i < numBflies; i++)
	{
		drawBfly(fX[i], fY[i], vX[i], vY[i], bfScl[i], bfColor[i]);

		fX[i] += vX[i];
		fY[i] += vY[i];

		if (fX[i] >= width || fX[i] <= 0)
		{
			vX[i] = -vX[i];
		}

		if (fY[i] >= height || fY[i] <= 0)
		{
			vY[i] = -vY[i];
		}
	}
}

function drawPlant(x, y, scl, rot)
{
	push();
		translate(x, y);
		scale(scl);
		rotate(radians(rot));
		push();
			strokeWeight(3)
			line(0, 0, 0, -300);
		pop();
		push();
			noStroke();
			arc(0, -300, 100, 100, radians(165), radians(375));
		pop();
		line(50, -300, -50, -300);
		line(0, -300, -45, -320);
		line(0, -300, 45, -320);
		line(0, -300, -20, -345);
		line(0, -300, 20, -345);
	pop();
	}

function drawBfly(x, y, dX, dY, scl, col)
{
	push();
		translate(x, y);
		rotate(atan2(dY, dX)+PI/2);
		scale(scl);
		noStroke();
		fill(col);
		ellipse(-30, -25, 30, 30);
		ellipse(30, -25, 30, 30);
		ellipse(0, 0, 5, 30);
		triangle(0, 0, -32, -10, -16, -30);
		triangle(0, 0, 32, -10, 16, -30);
		ellipse(-20, 10, 20, 20);
		ellipse(20, 10, 20, 20);
		triangle(0, 0, -20, 0, -11, 15);
		triangle(0, 0, 20, 0, 11, 15);

		fill(255);
		ellipse(-30, -25, 18, 18);
		ellipse(30, -25, 18, 18);
		fill(0);
		ellipse(-20, 10, 10, 10);
		ellipse(20, 10, 10, 10);

	pop();



}