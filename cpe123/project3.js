var stopHere;
var y = 0;
var rectY = [];
var rectR = [];
var rectG = [];
var rectB = [];

function setup()
{
	createCanvas(600, 600);
	stopHere = 0;

	for (var i = 0; i < 30; i++)
	{
		rectY.push(y);
		rectR.push(random(150, 200));
		rectG.push(random(150, 200));
		rectB.push(random(150, 200));
		y += 30;
	}
}

function draw()
{
	background(255);

	for (var i = 0; i < 30; i++)
	{
		push();
			fill(rectR[i], rectG[i], rectB[i]);
			noStroke();
			rect(0, rectY[i], 600, 15);
		pop();
	}
	
	drawTriangle(490, 490, 8, radians(-10));
	drawTriangle(100, 200, 7, radians(15));
	drawTriangle(215, 50, 6, radians(-15));
	drawTriangle(100, 560, 7.5, radians(150));
	drawTriangle(420, 300, 4, radians(-5));
	drawTriangle2(245, 185, 9, radians(5));
	drawTriangle2(155, 110, 6.5, radians(120));
	drawTriangle2(154, 510, 7, radians(-90));
	drawTriangle3(180, 360, 5, radians(25));
	drawTriangle3(350, 500, 8, radians(180));
	drawTriangle3(305, 200, 6, radians(-90));


	push();
		fill(255);
		noStroke();
		triangle(315, 0, 600, 350, 600, 0);
	pop();

	drawSpiral(520, 110, 80);
	drawSpiral(350, 200, 30);
	drawSpiral(300, 400, 20);
	drawSpiral(395, 400, 20);
	drawSpiral(350, 500, 20);
	drawSpiral(350, 440, 20);
	drawSpiral(175, 420, 15);

	
	push();
		noStroke();
		drawSpiral(620, 280, 50);
		drawSpiral(600, 0, 20);
		drawSpiral(450, 0, 35);
		drawSpiral(190, 280, 25);
		drawSpiral(250, 250, 35);
		drawSpiral(100, 80, 40);
		drawSpiral(165, 510, 20);
		drawSpiral(180, 510, 20);
		drawSpiral(220, 510, 20);
	pop();


}

function drawSpiral(cX, cY, rad)
{
	var sX, sY, sRad;
	fill(191, 177, 96);
	sRad = 0;
	for (var i = 0; i < stopHere; i++)
	{
		sX = cX + sRad*sin(radians(i) * 1.5);
		sY = cY + sRad*cos(radians(i) * 1.5);
		ellipse(sX, sY, sRad/5, sRad/5);
		sRad = sRad + rad/600;
	}

	if (stopHere < 600)
	{
		stopHere = stopHere + 1;
	}
}

function drawTriangle(pX, pY, scl, rot)
{
	push();
		translate(pX, pY);
		scale(scl);
		rotate(rot);
		strokeWeight(.5);
		triangle(-10, 15, 10, 15, 0, -5);
		fill(255);
		ellipse(0, 7, 11, 5);
		fill(125, 114, 54);
		ellipse(0, 7, 5, 5);
		fill(200);
		ellipse(0, 7, 2, 1);
	pop();
}

function drawTriangle2(pX, pY, scl, rot)
{
	push();
		translate(pX, pY);
		scale(scl);
		rotate(rot);
		fill(156, 134, 78);
		strokeWeight(.5);
		triangle(-10, 15, 10, 15, 0, -5);
	pop();
}

function drawTriangle3(pX, pY, scl, rot)
{
	push();
		translate(pX, pY);
		scale(scl);
		rotate(rot);
		fill(79, 56, 12);
		strokeWeight(.5);
		triangle(-10, 15, 10, 15, 0, -5);
	pop();
}
