
function setup() {
	createCanvas(400, 400);
}


function draw() {
	background('#180C47');
	
	// moon
	push();
		fill('#FFFCA4');
		arc(60, 70, 80, 80, radians(90), radians(270));
		fill('#180C47');
		noStroke();
		ellipse(60, 70, 40, 80);
	pop();

	// stars
	push();
		stroke('#FFFCA4');
		strokeWeight(2);
		
		line(180, 60, 180, 70);
		line(175, 60, 185, 70);
		line(185, 60, 175, 70);
		line(175, 65, 185, 65);

		line(300, 40, 300, 50);
		line(295, 40, 305, 50);
		line(305, 40, 295, 50);
		line(295, 45, 305, 45);

		line(100, 30, 100, 40);
		line(95, 30, 105, 40);
		line(105, 30, 95, 40);
		line(95, 35, 105, 35);

		line(80, 160, 80, 170);
		line(75, 160, 85, 170);
		line(85, 160, 75, 170);
		line(75, 165, 85, 165);

		line(120, 110, 120, 120);
		line(115, 110, 125, 120);
		line(125, 110, 115, 120);
		line(115, 115, 125, 115);

		line(250, 110, 250, 120);
		line(245, 110, 255, 120);
		line(255, 110, 245, 120);
		line(245, 115, 255, 115);

		line(380, 60, 380, 70);
		line(375, 60, 385, 70);
		line(385, 60, 375, 70);
		line(375, 65, 385, 65);
	pop();
		


	// grass
	push();
		fill(100, 125, 50);
		noStroke();
		rect(0, 255, 400, 142);
	pop();

	line(0, 265, 50, 300);
	line(50, 300, 150, 270);
	line(150, 270, 300, 300);
	line(300, 300, 400, 270);
	line(0, 340, 50, 330);
	line(50, 330, 150, 360);
	line(150, 360, 300, 330);
	line(300, 330, 400, 360);
	line(0, 370, 80, 360);
	line(80, 360, 100, 385);
	line(100, 385, 250, 360);
	line(250, 360, 360, 390);
	line(360, 390, 400, 380);
	line(0, 300, 120, 335);
	line(120, 335, 200, 300);
	line(200, 300, 360, 320);
	line(360, 320, 400, 305);

	
	fill(255, 192, 203);
	// legs
	rect(274, 220, 15, 35);
	rect(198, 220, 15, 35);
	push();
		fill(100);
		rect(274, 250, 15, 5);
		rect(198, 250, 15, 5);
	pop();
	rect(262, 220, 15, 35);
	rect(208, 220, 15, 35);
	push();
		fill(100);
		rect(262, 250, 15, 5);
		rect(208, 250, 15, 5);
	pop();
	// body
	ellipse(240, 200, 120, 80);
	push();
		translate(207, 183);
		rotate(radians(340));
		fill(120);
		noStroke();
		ellipse(0, 0, 23, 15);
	pop();
	push();
		fill(120);
		noStroke();
		ellipse(240, 173, 30, 20);
		ellipse(227, 190, 10, 13);
	pop();

	// tail
	triangle(183, 185, 170, 170, 193, 175);

	// ears
	ellipse(320, 158, 22, 24);
	ellipse(280, 158, 22, 24);
	// head
	ellipse(300, 180, 62, 60);
	// eyes
	fill(255);
	ellipse(318, 170, 15, 15);
	ellipse(283, 170, 15, 15);
	fill(0);
	ellipse(318, 170, 4, 4);
	ellipse(283, 170, 4, 4);
	fill(255, 175, 203);
	arc(318, 170, 15, 15, radians(180), 0);
	arc(283, 170, 15, 15, radians(180), 0);
	// nose
	fill(255, 175, 203);
	ellipse(300, 186, 26, 20);
	fill(0);
	ellipse(307, 186, 3, 10);
	ellipse(293, 186, 3, 10);






}