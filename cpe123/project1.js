
//Tsunami Fischman, Sebastian Marino

var scaleBC = 1;
var xBC = 247;
var yBC = 438;
var scaleSign = .6;
var xSign = 330;
var ySign = 300;
var scaleMan = .26
var counter = 0;
var rotSign = 0;

function setup(){
	createCanvas(800, 600);
}

function draw(){
	background(255);

	//title
	fill(247,98,139);
	textSize(30);
//find a different font
	textFont("Verdana");
	text("UNA", 100, 50);
// make bolder
	push();
	textStyle(BOLD);
	textSize(45);
	text('FUGA', 125, 100);
	pop();

	//2nd backdrop
	fill(118, 177, 242);
	strokeWeight(0);
	rect(25, 115, 750, 500);

	translate(0, 100);

//ground_1
	fill(119, 134, 64);
	rect(25, 490, 750, 10);
//sidewalk
	fill(255);
	rect(25, 450, 750, 40);
//ground_2
	fill(119, 134, 64);
	rect(25, 430, 750, 30);

//trees
	//trunk
		fill(255, 246, 244);
		rect(50, 300, 6, 135);
		stroke(0);
		strokeWeight(2);
		line(50, 360, 53, 360);
		line(56, 380, 52, 380);
		line(50, 370,52, 370);
		strokeWeight(1);
		line(50, 330,  54, 330);
		line(56, 420, 51, 420);
		line(50,  410, 52, 410);
		line(50, 400, 54, 400);
		line(50, 393, 53, 393);
		line(56, 310, 53,  310);
		line(50, 350, 52, 350);
		line(50, 340, 53, 340);
		tree(53, 250);

	//trunk2
		strokeWeight(0);
		fill(255, 246, 244);
		rect(175, 300, 6, 135);
		stroke(0);
		strokeWeight(2);
		line(175, 420, 178, 420);
		line(175, 390, 179, 390);
		line(181, 350, 177, 350);
		strokeWeight(1);
		line(175, 370, 177, 370);
		line(175, 400, 178, 400);
		line(181, 355, 177, 355);
		line(181, 375, 176,  375);
		line(175, 310, 178, 310);
		line(175, 320, 177, 320);
		line(181, 335, 178, 335);
		tree(178, 250);

	//trunk3
		fill(255, 246, 244);
		strokeWeight(0);
		rect(300, 300, 6,  135);
		stroke(0);
		strokeWeight(2);
		line(306, 360, 304, 360);
		line(306, 375, 302, 375);
		line(300, 355, 303, 355);
		line(300, 330, 304, 330);
		strokeWeight(1);
		line(300, 430, 303, 430);
		line(300, 390, 303, 390);
		line(306, 410, 302, 410);
		line(306, 380, 303, 380);
		line(300, 320, 304, 320);
		line(300, 345, 302, 345);
		line(306, 310, 304, 310);
		tree(303, 250);

	fill(255);
	noStroke();
	rect(0, 215, 25, 80 );

push();
translate(400, 0)
scale(scaleMan);
translate(400, 1200)
		// man
	push();
		stroke('#804932');
		strokeWeight(3);
		noFill();
		ellipse(325, 518, 10, 42);
	pop();
	push();
		fill('#804932');
		noStroke();
		quad(307, 495, 321, 513, 323, 540, 307, 525);

		//leg behind sign 
		quad(295, 479, 307, 495, 307, 525, 295, 515);

	pop();
	push();
		fill('#804932');
		noStroke();
		quad(260, 425, 295, 479, 295, 515, 270, 490);
		triangle(271, 491, 261, 424, 240, 465);
		quad(210, 430, 240, 465, 225, 498, 212, 470);
		stroke('#804932');
		strokeWeight(2);
		triangle(240, 465, 212, 432, 260, 426);
		noStroke();
		arc(216, 494, 20, 20, 0, radians(180));
		triangle(206, 494, 213, 470, 226, 494);
		quad(180, 466, 213, 475, 210, 502, 180, 487);
		ellipse(180, 487, 10, 40);
		ellipse(185, 505, 15, 9);
		push();
			translate(260, 386);
			rotate(radians(3));
			ellipse(0, 0, 30, 80);
		pop();
		push();
			translate(247.4, 285);
			rotate(radians(-5));
			rect(0, 0, 20, 90);
		pop();
		arc(190, 435, 20, 20, 0, radians(180));
		push();
			translate(164, 410);
			rotate(radians(-30));
			rect(0, 0, 40, 35);
		pop();
		push();
			translate(210, 409.5);
			rotate(radians(56));
			rect(0, 0, 20, 30);
		pop();
		rect(210, 285, 47, 150);
		push();
			translate(167.9	, 376);
			rotate(radians(-25));
			rect(0, 0, 50, 70);
		pop();
		arc(176, 361, 20, 50, radians(90), radians(270));
		push();
			translate(180, 284);
			rotate(radians(11));
			rect(0, 0, 30, 61);
		pop();
		rect(176, 304, 40, 70);
		arc(252.2, 284, 30, 25, radians(260), radians(45));
		arc(195.2, 284, 30, 25, radians(125), radians(280));
		rect(193, 272, 60, 40);
		triangle(259, 273, 235, 267, 235, 275);
		triangle(215, 267, 193, 272, 215, 275);
		push();
			fill('#7F931D')
			translate(214, 258);
			rotate(radians(-3));
			rect(0, 0, 22, 140);
			arc(11, 139, 22, 10, 0, radians(180));
		pop();
		fill('#EB606E');
		arc(223, 255, 26, 10, 0, radians(190));
		triangle(209.6, 255, 211, 246, 234, 257);
		ellipse(210, 245, 12, 5);
		arc(216, 237, 15, 18, radians(90), radians(290));
		triangle(206, 244, 212, 240, 215, 245);
		ellipse(223, 244, 25, 29);
		rect(230, 243, 5, 12);
		fill('#804932');
		ellipse(223, 228, 20, 8);
		arc(229, 238, 20, 25, radians(270), radians(0));
		triangle(217, 231, 227, 237, 231, 229);
		ellipse(227, 242, 4, 4);
		triangle(225, 243, 225, 230, 239, 238);
		triangle(239, 238, 234, 256.5, 228, 238);		
		push();
			fill('#EB606E');
			translate(231, 248)
			rotate(radians(5));
			ellipse(0, 0, 5, 12);
			ellipse(0, -5, 5, 5);
		pop();
		fill(118, 177, 242);
		arc(239, 258, 10, 20, radians(90), radians(220));
		arc(209.5, 263, 10, 9, radians(300), radians(90));
	pop();
	pop();

	biker(xBC, yBC, scaleBC);
counter += 1;
if (counter < 250) {
	xBC += 2.7;
}

if (counter >= 165 && counter < 230) {
	rotSign += -5;
	xSign += -2;
	ySign += -2;
}
if (counter > 230 && counter < 240) {
	rotSign += -5;
	xSign += -2;
}

if (counter > 240 && counter < 305){
	rotSign += -5;
	xSign += -2;
	ySign += 1.7; 
} 

if (counter > 303){
	push();
		fill('#804932');
		ellipse(-43, 585, 15, 5);
		triangle(-50, 585, -55, 576, -43, 585);
		triangle(-36, 585, -32, 578, -43, 585);
	pop();
}

}


function tree(x, y){
	push();
	translate(x, y);
	noStroke();
	fill(111, 125, 58);
	triangle(-20, -94, -30, 0, 24, -30);
	ellipse(0,0, 60, 100);
	pop();


}


function drawMouse(){
	textSize(30);
	fill(0);
	text(mouseX + "  , " + mouseY,200,200);

}

function biker(xBC,yBC, scaleBC){

push();
	translate(xBC,yBC);
	scale(scaleBC);
	noStroke();

	//wheel
	strokeWeight(2);
	stroke(0);
	strokeCap(ROUND);
	noFill();
	ellipse(-4,28,20,20);
	ellipse(35, 28, 20, 20);

	//right leg
	push();
		noStroke();
		rotate(radians(-10));
		fill(94, 40, 116);
		rect(2, -2, 4, 25);
		fill(255, 232, 210);
		rect(2, 20, 4, 13);
	pop();
	
	//right foot
	push();
		fill(83, 83, 84);
		noStroke();
		rect(7, 30, 10, 5, 30);
	pop();

		//frame
		strokeCap(SQUARE);
		stroke(119, 186, 231);
		triangle(-4, 28, 4, 8, 15, 29);
		triangle(5, 7, 28, 7, 16, 28.5);
		line(27, -4, 35, 28);

		//seat
		stroke(255, 253, 251);
		line(5, 6, 3, -1);
		stroke(0,0,0);
		strokeWeight(3);
		line(-1, 0, 3, -2);
		strokeWeight(2);
		line(3, -1, 7, -2);

		//handles
		arc(29, -1, 3, 5, radians(225), radians(90), false);
		arc(27, -2, 3, 5,  radians(225), radians(90), false);

		//pants
		noStroke();
		fill(94, 40, 116);
	push();
		rotate(radians(11));
		rect(1, -12, 7, 10, 7);
	pop();
		
		//thigh
		fill(94, 40, 116);
		rect(5, -3, 15, 5, 20);

		//torso/ arms
	push();
		fill(123, 136, 67);
		rotate(radians(25));
		rect(-2, -24, 8, 15, 7);
		fill(102,36,46);
		rotate(radians(15));
		rect(-1, -22, 20, 3, 5);
	pop();

	//head
		fill(102, 36, 46);
		ellipse(14, -22, 9, 8);

	//hat
	push();
		fill(255, 232, 210);
		rotate(radians(16));
		ellipse(8, -28, 8, 4);
		stroke(255, 253, 251);
		strokeWeight(1);
		line(11, -28, 14, -28);
	pop();

	//left leg
	push();
		noStroke(0);
		rotate(radians(20));
		fill(94, 40, 116);
		rect(15, -8, 5, 14, 10);
		fill(255,232, 210);
		rect(15, 2, 5, 8);
	pop();

	//left shoe
	push();
		rotate(radians(180));
		noStroke();
		fill(83, 83, 84);
		rect(-20, -17, 10, 5, 30);
	pop();

pop();

translate(400, 0);


// sign 
	push();
		translate(xSign, ySign);
		scale(scaleSign);
		rotate(radians(rotSign));
		noStroke();
		fill(70, 150, 250, 190);
		rect(-5, 0, 12, 330)
		fill(250, 70, 60);
		ellipse(0, -32, 65);
		fill('#FFFBDD');
		rect(-18, -36, 35, 10);
	pop();

translate(0, -135)
fill(70, 150, 250, 190);
	textSize(50);
	textFont("Impact")
	text("UN", 10, 80);
	textSize(70);
	text("D I S T R A I T", 14, 143);


}