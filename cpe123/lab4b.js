function setup() {
	createCanvas(600, 600);
	noLoop();
}

function draw() {
	var x, w, h;
	var r = random(255);
	var g = random(255);
	var b = random(255);
 	background(255);
 	//sky & sun & water
 	push();
 		push();
	 		fill(154, 119, 212);
	 		noStroke();
	 		rect(0, 0, 600, 50);
	 		fill(170, 119, 212);
	 		rect(0, 50, 600, 50);
	 		fill(209, 119, 212);
	 		rect(0, 100, 600, 50);
	 		fill(209, 119, 151);
	 		rect(0, 150, 600, 50);
	 		fill(209, 134, 119);
	 		rect(0, 200, 600, 50);
	 		fill(209, 157, 119);
	 		rect(0, 250, 600, 50);
	 		fill(209, 181, 119);
	 		rect(0, 300, 600, 50);
	 		fill(250, 230, 120, 20);
	 		ellipse(300, 350, 500);
	 		fill(250, 230, 120, 50);
	 		ellipse(300, 350, 250);
	 		fill(250, 230, 120);
	 		ellipse(300, 350, 50);
	 		fill(60, 80, 200);
	 		rect(0, 350, 600, 200);
	 	pop();
 		push();
 			stroke(255, 255, 255, 30);
 			strokeWeight(1);
 			line(0, 360, 600, 360);
 			line(0, 380, 600, 380);
 			line(0, 410, 600, 410);
 			
 		pop();
 		noStroke();
 		fill(250, 230, 120, 20);
 		ellipse(300, 350, 50, 60);
 	pop();

 	//hills
 	push();
 		strokeWeight(2);
 		fill(64, 42, 9);
 		beginShape();
 		vertex(0, 189);
 		vertex(81, 196);
 		vertex(135, 244);
 		vertex(236, 293);
 		vertex(315, 409);
 		vertex(320, 600);
 		vertex(0, 600);
 		endShape();
 		fill(110, 74, 20);
 		triangle(0, 189, 81, 196, 0, 350);
 		triangle(0, 350, 136, 248, 171, 355);
 		triangle(171, 355, 236, 293, 315, 409);
 	pop();



	x = 0;

	while (x < 600)
	{
		w = random(50, 100);
		h = random(160, 280);

		if (w+x > 600){
			w = 600 - x;
		}

		makePlank(x, 600 - h, w, h, color(r, g, b), color(g, b, r));
		x += w;
	}
	



}

function makePlank(x, y, w, h, fillColor, strokeColor) {
push();
	translate(x, y);
	fill(fillColor);
	
	strokeWeight(2);
	
	beginShape();
	vertex(0, 0);
	vertex(0, h);
	vertex(w, h);
	vertex(w, 0);
	endShape();

	beginShape();
	vertex(-.2, 1);
	vertex(w/4, -h/10);
	vertex(w - (w/4), -h/10);
	vertex(w + .2, 1);
	endShape();

	stroke(strokeColor);
	line(w/6, -h/20, w/6, h);
	line(w/3, -h/11.5, w/3, h); 
	line(w/2, -h/11.5, w/2, h);
	line(w - w/3, -h/11.5, w - w/3, h);
	line(w - w/6, -h/20, w - w/6, h);
pop();

	
}