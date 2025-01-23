var cupX = 300;
var cupY = 500;
var fishX = 300;
var fishY = 500;
var cupScale = .1;
var fishScale = .1;
var fishMoveX = 0;
var fishMoveY = 0;
var count = 0;
var animate = false;
var lightX = 300;
var lightY = 50;
var lightR = 245;
var lightG = 245;
var lightB = 233;
var lightON = false;
var backR = 100;
var backG = 100;
var backB = 100;
var fishR = 0;
var fishG = 0;
var fishB = 0;


function setup() {
	createCanvas(600, 600);
}


function draw() {
	background(backR, backG, backB);

	//room outline
	line(0, 600, 100, 400);
	line(600, 600, 500, 400);
	line(100, 400, 500, 400);
	line(100, 400, 100, 80);
	line(500, 400, 500, 80);
	line(0, 0, 100, 80);
	line(600, 0, 500, 80);
	line(100, 80, 500, 80);

	//windows
	push()
		fill(50, 60, 100);
		strokeWeight(3);
		quad(523, 143, 573, 123, 573, 293, 523, 263);
		line(543, 135, 543, 274);
		line(524, 203, 572, 203);

		quad(600 - 523, 143, 600 - 573, 123, 600 - 573, 293, 600 - 523, 263);
		line(600 - 543, 135, 600 - 543, 274);
		line(600 - 524, 203, 600 - 572, 203);
	pop();

	
	if (animate) {
		if (count < 100) {
			cupScale += .014;
			fishScale += .014;
			count++;
		}
	}
	if (count == 100){
		noLoop();
	}

	makeCup(cupScale, cupX, cupY);
	
	if (lightON) {
		lightR = 255;
		lightG = 255;
		lightB = 105;
		backR = 255;
		backG = 253;
		backB = 230;
		/*push();
			noStroke();
			fill (255, 250, 158, 50);
			quad(285, 53, 316, 53, 445, 520, 145, 520);
			ellipse(295, 520, 300, 100);
		pop();*/
	}

	makeLight(lightX, lightY, lightR, lightG, lightB);
	
	for (var i = 0; i < 30; i++){
		fishMoveX = random(-80, 90);
		fishMoveY = random(-190, -20);
		fishR = random(0, 255);
		fishG = random(0, 255);
		fishB = random(0, 255)
		makeFish(fishScale, fishX, fishY, fishMoveX, fishMoveY, fishR, fishG, fishB);
	}
	
	//makeFish(fishScale, fishX, fishY, fishMoveX, fishMoveY, fishR, fishG, fishB);

	
	

	

	

	
	

}



function makeCup(cScale, cX, cY) {
	push();
		translate(cX, cY);
		scale(cScale);
		strokeWeight(3);
		stroke(153, 173, 171);
		fill(220, 247, 244, 70);
		quad(-140, -250, 140, -250, 100, 0, -100, 0);
		fill(235, 252, 250);
		ellipse(0, 0, 200, 20);
		ellipse(0, -10, 203, 20);
		ellipse(0, -250, 280, 20);
		fill(133, 212, 255, 50);
		noStroke();
		quad(-130, -200, 130, -200, 100, -10, -100, -10);
		arc(0, -10, 200, 20, radians(0), radians(180));
	pop();
}

function makeFish(fScale, fX, fY, fMoveX, fMoveY, r, g, b) {
	push();
		
		fill(r, g, b);
		translate(fX, fY);
		scale(fScale);
		push();
			noStroke();
			triangle(-10 + fMoveX, 0 + fMoveY, -20 + fMoveX, -10 + fMoveY, -20 + fMoveX, 10 + fMoveY);
			ellipse(0 + fMoveX, 0 + fMoveY, 30, 15);
		pop();
		noFill();
		arc(10 + fMoveX, 0 + fMoveY, 10, 15, radians(115), radians(240));
		ellipse(10 + fMoveX, -2 + fMoveY, 3, 3);
		line(-15 + fMoveX, 0 + fMoveY, -20 + fMoveX, 0 + fMoveY);
		line(-15 + fMoveX, 1 + fMoveY, -20 + fMoveX, 3 + fMoveY);
		line(-15 + fMoveX, -1 + fMoveY, -20 + fMoveX, -3 + fMoveY);
		line(-15 + fMoveX, 2 + fMoveY, -20 + fMoveX, 6 + fMoveY);
		line(-15 + fMoveX, -2 + fMoveY, -20 + fMoveX, -6 + fMoveY);
		arc(1 + fMoveX, 3 + fMoveY, 7, 5, radians(80), radians(280));
	pop();
}

function makeLight(lX, lY, r, g, b) {
	push();
		translate(lX, lY)
		fill(190);
		arc(0, 0, 30, 45, radians(180), radians(0));
		fill(r, g, b);
		ellipse(0, 0, 30, 10);
		fill(240);
		ellipse(0, -2, 8, 5);
		fill(100);
		ellipse(0, -31, 6, 4);
		strokeWeight(2);
		line(0, -23, 0, -30);
	pop();
}

function mousePressed() {
	if (mouseX > 288 && mouseX < 317 && mouseY > 471 && mouseY < 505) {
		animate = true;
	}

	if (mouseX > 281 && mouseX < 317 && mouseY > 26 && mouseY < 59) {
		lightON = true;
	}

}