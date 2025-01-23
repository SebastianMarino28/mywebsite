



var bX = [];
var bY = [];
var vX = [];
var vY = [];
var bScl = [];
var numBugs;

var x, y;


let painting;

function preload()
{
	painting = loadImage("images/winter.jpg");
}



function setup()
{
	createCanvas(1000, 700);
	numBugs = 50;
	for (var i = 0; i < numBugs; i++)
	{
		vX.push(random(-3, 5));
		vY.push(random(-3, 5));
		bX.push(random(1000));
		bY.push(random(700));
		bScl.push(random(.5, .7));
	}
	x = 100;
	y = 200;

}

function draw()
{
	background(255);

	if (mode1) {
		for (var i = 0; i < numBugs; i++)
		{
			drawBug(bX[i], bY[i], vX[i], vY[i], bScl[i]);

			bX[i] += vX[i];
			bY[i] += vY[i];

			if (bX[i] >= width || bX[i] <= 0)
			{
				vX[i] = -vX[i];
			}

			if (bY[i] >= height || bY[i] <= 0)
			{
				vY[i] = -vY[i];
			}
		}

		x += 1;
	}
	/*if (mode1)
	{
		
	}*/

	image(painting, x, y);
}

function mousePressed()
{
	if (mouseX > 0 && mouseY > 0)
	{
		mode1 = !mode1;
	}


}

function drawBug(x, y, dX, dY, scl)
{
	push();
		translate(x, y);
		rotate(atan2(dY, dX)+PI/2);
		scale(scl);
		fill(97, 67, 24);
		push();
			noStroke();
			ellipse(0, 0, 40, 80);
			ellipse(0, -35, 30, 20);
		pop();
		noFill();
		stroke(97, 67, 24);
		arc(-5, -60, 15, 40, radians(90), radians(180));
		arc(5, -60, 15, 40, radians(360), radians(90));
		strokeWeight(2);
		line(-32, 0, 32, 0);
		arc(0, -25, 60, 30, radians(0), radians(180));
		arc(0, 25, 60, 30, radians(180), radians(0));

	pop();
}



