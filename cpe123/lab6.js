function setup()
{
	createCanvas(600, 600);
	noLoop();

}

function draw()
{
	background(0);
	noStroke();
	for (var y = 5; y < height; y += 5)
	{
		for (var x = 5; x < width; x +=5)
		{
			if (impCircle(400, 360, 30, x+random(-1, 1), y+random(-1, 1)) < 0.0 || impCircle(440, 350, 25, x+random(-1, 1), y+random(-1, 1)) < 0.0 || impCircle(230, 385, 35, x+random(-1, 1), y+random(-1, 1)) < 0.0 || impCircle(270, 395, 25, x+random(-1, 1), y+random(-1, 1)) < 0.0 || impCircle(195, 395, 25, x+random(-1, 1), y+random(-1, 1)) < 0.0)
			{
				fill(255, 160);
				ellipse(x+random(-1, 1), y+random(-1, 1), 10, 5);
			}
			else if (impLine(0, 400, 120, 280, x, y) > 0.0 && impLine(120, 280, 400, 600, x, y) > 0.0)
			{
				d = distance(x, y, 120, 280);
				fill(255 - d/2, 255 - d, 255 - d/2)
				ellipse(x+random(-2, 2), y+random(-2, 2), 4, 10);
			}
			else if (impCircle(300, 300, 100, x+random(-.5, .5), y+random(-.5, .5)) < 0.0)
			{
				d = distance(x, y, 300, 300);
				fill(219, 120 + d/2, 42 + d/4)
				ellipse(x+random(-.5, .5), y+random(-.5, .5), 8, 6);
			}			
			
			else
			{
				d = distance(x, y, x, height);
				fill(9+random(-10, 15), 16+random(-10, 15) + d/12, 77+random(-10, 15) + d/12);
				ellipse(x+random(-1, 1), y+random(-1, 1), 5, 7);
			}
		}
	}
}

function impCircle(Cx, Cy, rad, Px, Py)
{
	return (sq(Px-Cx) + sq(Py-Cy) - sq(rad));
}

function impLine(x0, y0, x1, y1, Px, Py)
{
	return ((y0-y1)*Px + (x1 - x0)*Py + (x0*y1) - (x1*y0));
}

function distance(x0, y0, x1, y1)
{
	return sqrt(sq(x0 - x1) + sq(y0 - y1));
}
