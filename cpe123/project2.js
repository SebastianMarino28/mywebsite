var cupX = 300;
var cupY = 1100;
var fishX = 300;
var fishY = 1100;
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


var xP = 215;
var yP = 950;
var scaleP = .5;
var xS = 2;
var yS = 100;
var scaleS = 0;
var boo = false;
var counter = 0;
var digHeight = 10;
var digX = 300;
var digY = 1100;


function setup() {
	frameRate(60);
	createCanvas(600, 1200);
	
}


function draw() {
	background(backR, backG, backB);
	push();
		noStroke();
		fill(117, 76, 21);
		rect(0, 600, 600, 120);
		fill(110, 74, 20);
		rect(0, 720, 600, 120);
		fill(97, 62, 17);
		rect(0, 840, 600, 120);
		fill(84, 54, 15);
		rect(0, 960, 600, 120);
		fill(74, 47, 13);
		rect(0, 1080, 600, 120);
	pop();
	//room outline
	line(0, 600, 100, 400);
	line(600, 600, 500, 400);
	line(100, 400, 500, 400);
	line(100, 400, 100, 80);
	line(500, 400, 500, 80);
	line(0, 0, 100, 80);
	line(600, 0, 500, 80);
	line(100, 80, 500, 80);
	line(0, 600, 600, 600);





	//windows
	push()
		fill(50, 60, 100);
		strokeWeight(3);
		quad(523, 143, 573, 123, 573, 293, 523, 263);
		if (lightON) {
			for (var i = 0; i < 5; i++) {
				makeStar(random(525, 570), random(140, 260));
			}
		}
		line(543, 135, 543, 274);
		line(524, 203, 572, 203);

		quad(600 - 523, 143, 600 - 573, 123, 600 - 573, 293, 600 - 523, 263);
		if (lightON) {
			for (var i = 0; i < 5; i++) {
				makeStar(random(600 - 525, 600 - 570), random(140, 260));
			}
		}
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

	if (boo) {
		if (counter < 200){
			makeDig(digX, digY, .1, digHeight);
			cupY -= 3;
			fishY -= 3;
			
			if (digY > 630){
				digHeight += 30;
				digY -=3;	
			}
			
			
			counter ++;
		}

		
	}

	if (counter == 200){
	 		makeDig(digX, digY, .1, digHeight);
	 }

	 if (counter > 190) {
		push();
			fill(0);
			ellipse(300, 500, 25, 10);
		pop();
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

	if (counter < 200) {
		push();
			fill(backR, backG, backB);
			noStroke();
			quad(60, 504, 551, 504, 600, 600, 5, 600);
		pop();
	}

	
	
	//makeFish(fishScale, fishX, fishY, fishMoveX, fishMoveY, fishR, fishG, fishB);

	
	
	//drawMouse(mouseX, mouseY);
	//textFont(myFont);

	//fill()
	//rect(60, 95, 200, 300, 100);
	//rect(60, 320, 340, 75);

	

push();
	pipe(xP,yP,scaleP)
pop();

	

	

	
	

}

function makeStar(xS, yS) {
	push();
		translate(xS, yS);
		stroke(255, 252, 87);
		strokeWeight(.7);
		line(-2, 0, 2, 0);
		line(0, -2, 0, 2);
		line(2, -2, -2, 2);
		line(-2, -2, 2, 2);
	pop();
}

function makeDig(xD, yD, scl, height) {
	push();
		translate(xD, yD);
		scale(scl);
		fill(0);
		rect(-140, -290, 280, height);
	pop();
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

	if (mouseX > 244 && mouseX < 600 && mouseY > 978 && mouseY < 1167){
		boo = true;			
	}

}





//tsunami's code




//	myFont = loadFont('libraries/Parisienne.ttf');
//}




	





 
//function mousePressed(){
	//mytext +="vertex("+round(mouseX)+","+round(mouseY+620)+");"

//}

function pipe(xP, yP, scaleP){

push();
	let c1 = color(16,17,10)
//body
	noStroke();
	 translate(xP, yP);
	 scale(scaleP);
	 beginShape();
	 fill(c1)

	 vertex(79,99);
	 vertex(77,116);
	 vertex(77,116);
	 vertex(70,238);
	 vertex(70,238);
	 vertex(91,342);
	 vertex(91,342);
	 vertex(137,396);
	 vertex(137,396);
	 vertex(193,417);
	 vertex(193,417)
	 vertex(277,415)
	 vertex(277,415)
	 vertex(379,370)
	 vertex(379,370)
	 vertex(464,293)
	 vertex(464,293)
	 vertex(526,224)
	 vertex(526,224)
	 vertex(575,177)
	 vertex(575,177)
	 vertex(641,145)
	 vertex(641,145)
	 vertex(696,132)
	 vertex(696,132)
	 vertex(726,132)
	 vertex(726,132)
	 vertex(741,132)
	 vertex(741,132)
	 vertex(726,99)
	 vertex(726,99)
	 vertex(659,100)
	 vertex(659,100)
	 vertex(601,105)
	 vertex(601,105)
	 vertex(545,121)
	 vertex(545,121)
	 vertex(492,144)
	 vertex(492,144)
	 vertex(451,169)
	 vertex(451,169)
	 vertex(411,199)
	 vertex(411,199)
	 vertex(376,224)
	 vertex(376,224)
	 vertex(348,245)
	 vertex(348,245)
	 vertex(320,263)
	 vertex(320,263)
	 vertex(290,277)
	 vertex(290,277)
	 vertex(273,279)
	 vertex(273,279)
	 vertex(271,251)
	 vertex(271,251)
	 vertex(272,228)
	 vertex(272,228)
	 vertex(272,225)
	 vertex(272,225)
	 vertex(271,188)
	 vertex(271,188)
	 vertex(268,151)
	 vertex(268,151)
	 vertex(263,120)
	 vertex(263,120)
	 vertex(261,100)
	 vertex(261,100)
	 vertex(82,99)
	 vertex(82,99)

	 endShape(CLOSE);

//secondary layer

	 beginShape();
	 fill(86,46,38)

	 vertex(79,99);
	 vertex(77,116);
	 vertex(77,116);
	 vertex(70,238);
	 vertex(70,238);
	 vertex(91,342);
	 vertex(91,342);
	 vertex(137,396);
	 vertex(137,396);
	 vertex(174,369);
	 vertex(174,369);
	 vertex(211,319);
	 vertex(211,319);
	 vertex(211,251);
	 vertex(211,251);
	 vertex(217,171);
	 vertex(217,171);
	 vertex(216,123);
	 vertex(216,123);
	 vertex(210,99);
	 

	 endShape(CLOSE);


	 beginShape();
	 fill('#956a4c')

	 vertex(90,99);
	 vertex(90,186);
	 vertex(87,257);
	 vertex(112,320);
	 vertex(145,284);
	 vertex(140,228);
	 vertex(139,170);
	 vertex(140,99);

	 endShape(CLOSE);

	 beginShape();
	 fill('#dab9af')

	 vertex(110,99);
	 vertex(105,186);
	 vertex(96,257);
	 vertex(115,311);
	 vertex(135,284);
	 vertex(131,228);
	 vertex(130,167);
	 vertex(129,99);

	 endShape(CLOSE);

	  endShape(CLOSE);

	 beginShape();
	 fill(86,46,38)

	 vertex(282,281);
	 vertex(271,303);
	 vertex(266,322);
	 vertex(279,340);
	 vertex(330,343);
	 vertex(503,219);
	 vertex(457,167);
	 vertex(427,189);
	 vertex(388,219);
	 vertex(355,247);
	 vertex(326,268);
	 vertex(293,280);
	 vertex(274,286);
	 vertex(416,248);

	 endShape(CLOSE);

	 beginShape();
	 fill('#dab9af')

	 vertex(734,122);
	 vertex(651,117);
	 vertex(582,124);
	 vertex(515,149);
	 vertex(438,195);
	 vertex(364,255);
	 vertex(280,292);
	 vertex(270,317);
	 vertex(286,333);
	 vertex(327,331);
	 vertex(367,305);
	 vertex(414,276);
	 vertex(457,237);
	 vertex(496,197);
	 vertex(535,160);
	 vertex(591,131);
	 vertex(634,125);
	 vertex(677,123);
	 vertex(706,125);
	 vertex(739,127);
	 
	 endShape(CLOSE);

	 beginShape();
	 fill('#c99980');

	 vertex(502,246);
	 vertex(515,235);
	 vertex(463,167);
	 vertex(453,177);
	 vertex(453,177);

	 endShape(CLOSE);

	 push();

	 fill(c1);

	 ellipse(744, 113, 40, 55)

	 pop();

	 push();

	 fill('#c5b092');

	 ellipse(170, 98, 185, 50)

	 pop();

	 push();

	 fill('#331e18');

	 ellipse(170, 98, 125, 15)

	 pop();


pop();

}

function smoke(xS, yS, scaleS){

	noStroke();
	fill(100)
	translate(xS,yS)
	scale(scaleS);

	ellipse(170,82,45,15)

	ellipse(170,57,90,30)

	ellipse(170,25,130,30)
}



