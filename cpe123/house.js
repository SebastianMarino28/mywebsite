
function setup()
{
	createCanvas(400, 400);
}

function draw()
{
	background(0, 128, 255);
	// set stroke color with hexadecimal
	stroke('#D7B5FF');

	// set stroke weight
	strokeWeight(5);

	// set fill with hexadecimal
	fill('#C1C6FF');

	// draw a house
	rect(100, 200, 200, 200);
	triangle(100, 200, 200, 100, 300, 200);
	line(200, 100, 210, 60);
	push();
		translate(210, 60);
		rotate(radians(10));
		arc(-2, 0, 60, 10, 3*PI/2, PI/2);
	pop();

	// turn off stroke and make a bush using arc
	noStroke();
	fill(0, 255, 0);
	arc(303, 400, 100, 100, 3*PI/2, 0);
}