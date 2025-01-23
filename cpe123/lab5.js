var max_theta, num_lines;


function setup() {
	createCanvas(600, 600);

	max_theta = 0;
	num_lines = 100;
	angle = 2*PI/2.8
}

function draw() {
	var x1, y1, x2, y2, x3, y3, x4, y4, x5, y5, x6, y6, x7, y7, theta, r, g, b, z;
	
	background(0);
	r = 255;
	g = 100;
	b = 0; 
	z = 100;

	for (theta = 0; theta < max_theta; theta += 2*PI/num_lines)
	{
		x1 = 100 + z * cos(theta);
		y1 = 100 + z * sin(theta);

		x2 = 100 + z * cos(theta+angle);
		y2 = 300 + z * sin(theta+angle);

		x3 = 200 + z * cos(theta);
		y3 = 200 + z * sin(theta);

		x4 = 150 + z * cos(theta+angle);
		y4 = 300 + z * sin(theta+angle);

		x5 = 160 + 50*pow(cos(theta), 3);
		y5 = 230 + 50*pow(sin(theta), 3);

		x6 = 160 + 30*pow(cos(theta), 3);
		y6 = 230 + 30*pow(sin(theta), 3);

		x7 = 160 + 10*pow(cos(theta), 3);
		y7 = 230 + 10*pow(sin(theta), 3);


		stroke(r, g, b);
		line(x1, y1, x2, y2);

		stroke(g, b, r);
		line(x3, y3, x4, y4);

		ellipse(x5, y5, 2);
		ellipse(x6, y6, 1);
		ellipse(x7, y7, 1);

		r -= .5;
		b += .5;
		z += 2;

	}
	
	max_theta += 2*PI/num_lines;

	if (max_theta > 820*PI/num_lines)
	{
		noLoop();
	}
}

