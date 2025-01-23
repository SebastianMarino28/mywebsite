var scaleSign = 1;
var scaleMan = 2;
var xSign = 300;
var ySign = 225;

function setup() {
	createCanvas(400, 600);
}

function draw() {
	background('#FFFBDD');

	

	

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
		//quad(295, 479, 307, 495, 307, 525, 295, 515);

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
		fill('#FFFBDD');
		arc(239, 258, 10, 20, radians(90), radians(220));
		arc(209.5, 263, 10, 9, radians(300), radians(90));
	pop();

// sign 
	push();
		translate(xSign, ySign);
		scale(scaleSign);
		noStroke();
		fill(70, 150, 250, 190);
		rect(-5, 0, 12, 330)
		fill(250, 70, 60);
		ellipse(0, -32, 65);
		fill('#FFFBDD');
		rect(-18, -36, 35, 10);
	pop();

fill(70, 150, 250, 190);
	textSize(50);
	textFont("Impact")
	text("UN", 10, 80);
	textSize(70);
	text("D I S T R A I T", 14, 143);


}