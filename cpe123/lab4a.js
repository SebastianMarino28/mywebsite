var x = 0;

function setup() {
	createCanvas(600, 600);
	noLoop();
}

function draw() {
	background(19, 14, 33);

	for (var i = 0; i < 100; i++)
	{
		fill(random(0, 180), random(0, 180), random(0, 180));
		rect(x, 0, 6, 600);
		rect(0, x, 600, 3);
		x += 6;
	}

	for (var j = 0; j < 100; j++)
	{
		drawObject(random(height), random(width), random(.5, 3), color(random(255), random(255), random(255), random(255)), color(random(255), random(255), random(255)));
	}
}

function drawObject(x, y, scl, fillCol, strokeCol) {
	push();
		translate(x, y);
		scale(scl);
		fill(fillCol)
		stroke(strokeCol);
		strokeWeight(2);

		beginShape();
		vertex(-5, -20);
		vertex(5, -20);
		vertex(5, -15);
		vertex(0, -15);
		vertex(10, -5);
		vertex(10, -2);
		vertex(0, -10);
		vertex(-8, -10);
		vertex(-10, -12);
		vertex(-5, -20);
		endShape(CLOSE);
	pop();

	

}