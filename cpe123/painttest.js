var max_theta;



function setup()
{
	createCanvas(600,700);
	max_theta=0;
	var d, res1, res2;
  	background('#C7EDE9');
  	noStroke();



//sky
 /*for(var y=2; y < height; y+=5)
  	{
  	for (var x=2; x<width; x+=5)
  		{
  		d= distance (x,y,x,height);
  		res1= imp_line (x, y,0,height,width,height);
  		res2= imp_line (x,y,0, height, width,height);
  		if(res1 < 0 || res2 <0)
  
  			fill(random(5),random(66,130), random(77,209));
  		else
  			noFill();
  		ellipse(x+random(-2,2), y+random (-2,2),10,8);
  		}
	}*/
	for (var y=5; y<height; y+=2)
	{
		for(var x=5; x<width;x+=2)
		{
			d=distance(x,y,700,500);
			if (imp_line(x,y,0,700,width,height)<0)
				fill(219-random(60,150)-d/12,254-random(40,45)-d/12,255-random(40,50)-d/12)//d/2);
			else
				fill(255);

			ellipse(x, y,random(10,15));
		}
	}
}





function draw()
{
	var x,y,theta;

	//background('#00364D');
	noStroke();
//squiggles
		fill('#FDD5C0')
		for (theta = 0; theta<max_theta; theta += 2*PI/2)
		{

			x=theta;
			y=50+20*cos(theta/50);
			//console.log(sin(theta))
			ellipse(x,y,10,2);
		}
		max_theta += 2*PI/2

		for (theta = 0; theta<max_theta; theta += 2*PI/2)
		{

			x=theta;
			y=100+20*cos(theta/50);
			//console.log(sin(theta))
			ellipse(x,y,10,5);
		}
		max_theta += 2*PI/2

		fill('#FB8289')
		for (theta = 0; theta<max_theta; theta += 2*PI/2)
		{

			x=theta;
			y=150+20*cos(theta/50);
			//console.log(sin(theta))
			ellipse(x,y,10,2);
		}
		max_theta += 2*PI/2

		for (theta = 0; theta<max_theta; theta += 2*PI/2)
		{

			x=theta;
			y=200+20*cos(theta/50);
			//console.log(sin(theta))
			ellipse(x,y,10,2);
		}
		max_theta += 2*PI/2

		fill('#F46161')
		for (theta = 0; theta<max_theta; theta += 2*PI/2)
		{

			x=theta;
			y=250+20*cos(theta/50);
			//console.log(sin(theta))
			ellipse(x,y,10,5);
		}
		max_theta += 2*PI/2

		for (theta = 0; theta<max_theta; theta += 2*PI/2)
		{

			x=theta;
			y=300+20*cos(theta/50);
			//console.log(sin(theta))
			ellipse(x,y,10,2);
		}
		max_theta += 2*PI/2

		fill('#F89D5B')
		for (theta = 0; theta<max_theta; theta += 2*PI/2)
		{

			x=theta;
			y=350+20*cos(theta/50);
			//console.log(sin(theta))
			ellipse(x,y,10,2);
		}
		max_theta += 2*PI/2

		for (theta = 0; theta<max_theta; theta += 2*PI/2)
		{

			x=theta;
			y=400+20*cos(theta/50);
			//console.log(sin(theta))
			ellipse(x,y,10,5);
		}
		max_theta += 2*PI/2

		fill('#FFCF62')
		for (theta = 0; theta<max_theta; theta += 2*PI/2)
		{

			x=theta;
			y=450+20*cos(theta/50);
			//console.log(sin(theta))
			ellipse(x,y,10,2);
		}
		max_theta += 2*PI/2
		for (theta = 0; theta<max_theta; theta += 2*PI/2)
		{

			x=theta;
			y=500+20*cos(theta/50);
			//console.log(sin(theta))
			ellipse(x,y,10,2);
		}
		max_theta += 2*PI/2

		fill('#EBA434')
		for (theta = 0; theta<max_theta; theta += 2*PI/2)
		{

			x=theta;
			y=550+20*cos(theta/50);
			//console.log(sin(theta))
			ellipse(x,y,10,5);
		}
		max_theta += 2*PI/2

		for (theta = 0; theta<max_theta; theta += 2*PI/2)
		{

			x=theta;
			y=600+20*cos(theta/50);
			//console.log(sin(theta))
			ellipse(x,y,10,2);
		}
		max_theta += 2*PI/2

		fill('#ED8047')
		for (theta = 0; theta<max_theta; theta += 2*PI/2)
		{

			x=theta;
			y=650+20*cos(theta/50);
			//console.log(sin(theta))
			ellipse(x,y,10,5);
		}
		max_theta += 2*PI/2

		for (theta = 0; theta<max_theta; theta += 2*PI/2)
		{

			x=theta;
			y=700+20*cos(theta/50);
			//console.log(sin(theta))
			ellipse(x,y,10,2);
		}
		max_theta += 2*PI/2




	//smaller
		fill('#CBE4F5')
		for (theta = 0; theta<max_theta; theta += 2*PI/1)
		{

			x=theta;
			y=0+20*sin(theta/50);//+cos(theta)/2;
			//console.log(sin(theta))
			ellipse(x,y,random(5));
		}
		max_theta += 2*PI/1

		for (theta = 0; theta<max_theta; theta += 2*PI/1)
		{

			x=theta;
			y=50+20*sin(theta/50);//+cos(theta)/2;
			//console.log(sin(theta))
			ellipse(x,y,random(5));
		}
		max_theta += 2*PI/1


		for (theta = 0; theta<max_theta; theta += 2*PI/1)
		{

			x=theta;
			y=100+20*sin(theta/45);//+cos(theta)/2;
			//console.log(sin(theta))
			ellipse(x,y,random(5));
		}
		max_theta += 2*PI/1

		for (theta = 0; theta<max_theta; theta += 2*PI/1)
		{

			x=theta;
			y=150+20*sin(theta/45);//+cos(theta)/2;
			//console.log(sin(theta))
			ellipse(x,y,random(5));
		}
		max_theta += 2*PI/1


		for (theta = 0; theta<max_theta; theta += 2*PI/1)
		{

			x=theta;
			y=200+20*sin(theta/50);//+cos(theta)/2;
			//console.log(sin(theta))
			ellipse(x,y,random(5));
		}
		max_theta += 2*PI/1

		for (theta = 0; theta<max_theta; theta += 2*PI/1)
		{

			x=theta;
			y=250+20*sin(theta/50);//+cos(theta)/2;
			//console.log(sin(theta))
			ellipse(x,y,random(5));
		}
		max_theta += 2*PI/1


		for (theta = 0; theta<max_theta; theta += 2*PI/1)
		{

			x=theta;
			y=300+20*sin(theta/55);//+cos(theta)/2;
			//console.log(sin(theta))
			ellipse(x,y,random(5));
		}
		max_theta += 2*PI/1

		for (theta = 0; theta<max_theta; theta += 2*PI/1)
		{

			x=theta;
			y=350+20*sin(theta/50);//+cos(theta)/2;
			//console.log(sin(theta))
			ellipse(x,y,random(5));
		}
		max_theta += 2*PI/1


		for (theta = 0; theta<max_theta; theta += 2*PI/1)
		{

			x=theta;
			y=400+20*sin(theta/45);//+cos(theta)/2;
			//console.log(sin(theta))
			ellipse(x,y,random(5));
		}
		max_theta += 2*PI/1

		for (theta = 0; theta<max_theta; theta += 2*PI/1)
		{

			x=theta;
			y=450+20*sin(theta/50);//+cos(theta)/2;
			//console.log(sin(theta))
			ellipse(x,y,random(5));
		}
		max_theta += 2*PI/1


		for (theta = 0; theta<max_theta; theta += 2*PI/1)
		{

			x=theta;
			y=500+20*sin(theta/45);//+cos(theta)/2;
			//console.log(sin(theta))
			ellipse(x,y,random(5));
		}
		max_theta += 2*PI/1
		for (theta = 0; theta<max_theta; theta += 2*PI/1)
		{

			x=theta;
			y=550+20*sin(theta/50);//+cos(theta)/2;
			//console.log(sin(theta))
			ellipse(x,y,random(5));
		}
		max_theta += 2*PI/1


		for (theta = 0; theta<max_theta; theta += 2*PI/1)
		{

			x=theta;
			y=600+20*sin(theta/55);//+cos(theta)/2;
			//console.log(sin(theta))
			ellipse(x,y,random(5));
		}
		max_theta += 2*PI/1
		for (theta = 0; theta<max_theta; theta += 2*PI/1)
		{

			x=theta;
			y=650+20*sin(theta/50);//+cos(theta)/2;
			//console.log(sin(theta))
			ellipse(x,y,random(5));
		}
		max_theta += 2*PI/1


		for (theta = 0; theta<max_theta; theta += 2*PI/1)
		{

			x=theta;
			y=700+20*sin(theta/45);//+cos(theta)/2;
			//console.log(sin(theta))
			ellipse(x,y,random(5));
		}
		max_theta += 2*PI/1


//spirals	
	/*drawSpiral2(208,55,40);
	drawSpiral(208,55, random(47,50));
	drawSpiral3(430,180,75);
	drawSpiral(430,180,random(82,85));
	drawSpiral2(40,320,50);
	drawSpiral(40,320,random(57,60));
	drawSpiral3(269,530,80);
	drawSpiral(269,530,random(87,90));
	drawSpiral2(580,580,20);
	drawSpiral(580,580,random(27,30));*/

//RED FISH
	push();
	translate(-140,-70);
	rotate(radians(6));
	scale(0.9)
	noStroke();
//tail
	fill('#FF5046')
	beginShape();
	curveVertex(283,60);
	curveVertex(283,60);
	curveVertex(260,75);
	curveVertex(240,80);
	curveVertex(220,83);
	curveVertex(200,85);
	curveVertex(180,80);
	curveVertex(160,75);
	curveVertex(140,70);
	curveVertex(120,62);
	curveVertex(100,48);
	curveVertex(97,40);
	curveVertex(97,40);
	curveVertex(90,50);
	curveVertex(93,60);
	curveVertex(100,75);
	curveVertex(110,80);
	curveVertex(115,85);
	curveVertex(120,95);
	curveVertex(130,100);
	curveVertex(132,110);
	curveVertex(128,122);
	curveVertex(120,118);
	curveVertex(110,116);
	curveVertex(100,122);
	curveVertex(90,126);
	curveVertex(80,131);
	curveVertex(60,140);
	curveVertex(68,142);
	curveVertex(80,145);
	curveVertex(100,153);
	curveVertex(120,155);
	curveVertex(140,156);
	curveVertex(160,154);
	curveVertex(180,152);
	curveVertex(200,138);
	curveVertex(220,123);
	curveVertex(240,110);
	curveVertex(262,90);
	curveVertex(262,90);
	endShape(CLOSE);

//top fin
	beginShape('#FF5046');
	curveVertex(523,85);
	curveVertex(523,85);
	curveVertex(540,92);
	curveVertex(560,96);
	curveVertex(580,94);
	curveVertex(600,92);
	curveVertex(610,80);
	curveVertex(600,70);
	curveVertex(598,68);
	curveVertex(584,64);
	curveVertex(580,45);
	curveVertex(570,40);
	curveVertex(565,30);
	curveVertex(560,33);
	curveVertex(550,37);
	curveVertex(540,35);
	curveVertex(536,33);
	curveVertex(525,36);
	curveVertex(520,50);
	curveVertex(516,60);
	curveVertex(508,63);
	curveVertex(500,80);
	endShape(CLOSE);

//body
	fill('#FF8B83');
	beginShape();
	curveVertex(260,90);
	curveVertex(260,90);
	curveVertex(280.85);
	curveVertex(300,90);
	curveVertex(320,92);
	curveVertex(340,95);
	curveVertex(360,98);
	curveVertex(380,105);
	curveVertex(400,110);
	curveVertex(420,122);
	curveVertex(440,137);
	curveVertex(460,145);
	curveVertex(480,152);
	curveVertex(485,160);
	curveVertex(485,160);
	curveVertex(483,165);
	curveVertex(470,175);
	curveVertex(470,175);
	curveVertex(480,172);
	curveVertex(490,168);
	curveVertex(492,167);
	curveVertex(508,170);
	curveVertex(509,170);
	curveVertex(500,180);
	curveVertex(490,187);
	curveVertex(478,200);
	curveVertex(480,200);
	//curveVertex(480,200);
	curveVertex(490,194);
	curveVertex(500,190);
	curveVertex(508,184);
	curveVertex(512,188);
	curveVertex(512,188);
	curveVertex(520,184);
	curveVertex(532,190);
	curveVertex(543,188);
	curveVertex(549,180);
	curveVertex(557,172);
	curveVertex(555,160);
	curveVertex(550,150);
	curveVertex(547,140);
	curveVertex(544,120);
	curveVertex(540,100);
	curveVertex(523,80);
	curveVertex(520,77);
	curveVertex(500,60);
	curveVertex(480,50);
	curveVertex(460,40);
	curveVertex(440,37);
	curveVertex(420,33);
	curveVertex(400,30);
	curveVertex(380,32);
	curveVertex(360,34);
	curveVertex(340,36);
	curveVertex(322,40);
	curveVertex(300,50);
	curveVertex(283,60);
	curveVertex(270,73);
	endShape(CLOSE);

//bottom fin
	fill('#FF5046');
	beginShape();
	curveVertex(420,108);
	curveVertex(420,108);
	curveVertex(408,120);
	curveVertex(402,138);
	curveVertex(402,138);
	curveVertex(404,144);
	curveVertex(400,150);
	curveVertex(399,154);
	curveVertex(399,154);
	curveVertex(410,160);
	curveVertex(408,168);
	curveVertex(408,168);
	curveVertex(414,169);
	curveVertex(418,170);
	curveVertex(418,170);
	curveVertex(423,173);
	curveVertex(426,180);
	curveVertex(428,190);
	curveVertex(428,190);
	curveVertex(440,184);
	curveVertex(443,200);
	curveVertex(445,210)
	curveVertex(446,220);
	curveVertex(445,224);
	curveVertex(455,220);
	curveVertex(464,210);
	curveVertex(472,200);
	//curveVertex(475,196);
	curveVertex(469,180);
	curveVertex(460,160);
	curveVertex(459,140);
	curveVertex(461,132);
	curveVertex(455,120);
	curveVertex(440,105);
	curveVertex(430,102);
	endShape(CLOSE);

//eyes
	fill(255)
	ellipse(520,150,15);
	fill('#FF5046');
	ellipse(522,152,5);

pop();

//ReD ORANGE FISH
push();
	scale(0.75)
	noStroke();
	rotate(radians(40))
	translate(100,-150);
//tail
	fill('#FF9877')
	beginShape();
	curveVertex(283,60);
	curveVertex(283,60);
	curveVertex(260,75);
	curveVertex(240,80);
	curveVertex(220,83);
	curveVertex(200,85);
	curveVertex(180,80);
	curveVertex(160,75);
	curveVertex(140,70);
	curveVertex(120,62);
	curveVertex(100,48);
	curveVertex(97,40);
	curveVertex(97,40);
	curveVertex(90,50);
	curveVertex(93,60);
	curveVertex(100,75);
	curveVertex(110,80);
	curveVertex(115,85);
	curveVertex(120,95);
	curveVertex(130,100);
	curveVertex(132,110);
	curveVertex(128,122);
	curveVertex(120,118);
	curveVertex(110,116);
	curveVertex(100,122);
	curveVertex(90,126);
	curveVertex(80,131);
	curveVertex(60,140);
	curveVertex(68,142);
	curveVertex(80,145);
	curveVertex(100,153);
	curveVertex(120,155);
	curveVertex(140,156);
	curveVertex(160,154);
	curveVertex(180,152);
	curveVertex(200,138);
	curveVertex(220,123);
	curveVertex(240,110);
	curveVertex(262,90);
	curveVertex(262,90);
	endShape(CLOSE);

//top fin
	beginShape('#FF9877');
	curveVertex(523,85);
	curveVertex(523,85);
	curveVertex(540,92);
	curveVertex(560,96);
	curveVertex(580,94);
	curveVertex(600,92);
	curveVertex(610,80);
	curveVertex(600,70);
	curveVertex(598,68);
	curveVertex(584,64);
	curveVertex(580,45);
	curveVertex(570,40);
	curveVertex(565,30);
	curveVertex(560,33);
	curveVertex(550,37);
	curveVertex(540,35);
	curveVertex(536,33);
	curveVertex(525,36);
	curveVertex(520,50);
	curveVertex(516,60);
	curveVertex(508,63);
	curveVertex(500,80);
	endShape(CLOSE);

//body
	fill('#FF7646');
	beginShape();
	curveVertex(260,90);
	curveVertex(260,90);
	curveVertex(280.85);
	curveVertex(300,90);
	curveVertex(320,92);
	curveVertex(340,95);
	curveVertex(360,98);
	curveVertex(380,105);
	curveVertex(400,110);
	curveVertex(420,122);
	curveVertex(440,137);
	curveVertex(460,145);
	curveVertex(480,152);
	curveVertex(485,160);
	curveVertex(485,160);
	curveVertex(483,165);
	curveVertex(470,175);
	curveVertex(470,175);
	curveVertex(480,172);
	curveVertex(490,168);
	curveVertex(492,167);
	curveVertex(508,170);
	curveVertex(509,170);
	curveVertex(500,180);
	curveVertex(490,187);
	curveVertex(478,200);
	curveVertex(480,200);
	//curveVertex(480,200);
	curveVertex(490,194);
	curveVertex(500,190);
	curveVertex(508,184);
	curveVertex(512,188);
	curveVertex(512,188);
	curveVertex(520,184);
	curveVertex(532,190);
	curveVertex(543,188);
	curveVertex(549,180);
	curveVertex(557,172);
	curveVertex(555,160);
	curveVertex(550,150);
	curveVertex(547,140);
	curveVertex(544,120);
	curveVertex(540,100);
	curveVertex(523,80);
	curveVertex(520,77);
	curveVertex(500,60);
	curveVertex(480,50);
	curveVertex(460,40);
	curveVertex(440,37);
	curveVertex(420,33);
	curveVertex(400,30);
	curveVertex(380,32);
	curveVertex(360,34);
	curveVertex(340,36);
	curveVertex(322,40);
	curveVertex(300,50);
	curveVertex(283,60);
	curveVertex(270,73);
	endShape(CLOSE);

//bottom fin
	fill('#FF9877');
	beginShape();
	curveVertex(420,108);
	curveVertex(420,108);
	curveVertex(408,120);
	curveVertex(402,138);
	curveVertex(402,138);
	curveVertex(404,144);
	curveVertex(400,150);
	curveVertex(399,154);
	curveVertex(399,154);
	curveVertex(410,160);
	curveVertex(408,168);
	curveVertex(408,168);
	curveVertex(414,169);
	curveVertex(418,170);
	curveVertex(418,170);
	curveVertex(423,173);
	curveVertex(426,180);
	curveVertex(428,190);
	curveVertex(428,190);
	curveVertex(440,184);
	curveVertex(443,200);
	curveVertex(445,210)
	curveVertex(446,220);
	curveVertex(445,224);
	curveVertex(455,220);
	curveVertex(464,210);
	curveVertex(472,200);
	//curveVertex(475,196);
	curveVertex(469,180);
	curveVertex(460,160);
	curveVertex(459,140);
	curveVertex(461,132);
	curveVertex(455,120);
	curveVertex(440,105);
	curveVertex(430,102);
	endShape(CLOSE);

//eyes
	fill(255)
	ellipse(520,150,15);
	fill('#FFCB93');
	ellipse(522,152,5);

pop();

//ORANGE FISH
push();
	scale(0.3)
	noStroke();
	translate(1400,900);
	rotate(radians(75))
	
//tail
	fill('#FFBD7C')
	beginShape();
	curveVertex(283,60);
	curveVertex(283,60);
	curveVertex(260,75);
	curveVertex(240,80);
	curveVertex(220,83);
	curveVertex(200,85);
	curveVertex(180,80);
	curveVertex(160,75);
	curveVertex(140,70);
	curveVertex(120,62);
	curveVertex(100,48);
	curveVertex(97,40);
	curveVertex(97,40);
	curveVertex(90,50);
	curveVertex(93,60);
	curveVertex(100,75);
	curveVertex(110,80);
	curveVertex(115,85);
	curveVertex(120,95);
	curveVertex(130,100);
	curveVertex(132,110);
	curveVertex(128,122);
	curveVertex(120,118);
	curveVertex(110,116);
	curveVertex(100,122);
	curveVertex(90,126);
	curveVertex(80,131);
	curveVertex(60,140);
	curveVertex(68,142);
	curveVertex(80,145);
	curveVertex(100,153);
	curveVertex(120,155);
	curveVertex(140,156);
	curveVertex(160,154);
	curveVertex(180,152);
	curveVertex(200,138);
	curveVertex(220,123);
	curveVertex(240,110);
	curveVertex(262,90);
	curveVertex(262,90);
	endShape(CLOSE);

//top fin
	beginShape('#FFBD7C');
	curveVertex(523,85);
	curveVertex(523,85);
	curveVertex(540,92);
	curveVertex(560,96);
	curveVertex(580,94);
	curveVertex(600,92);
	curveVertex(610,80);
	curveVertex(600,70);
	curveVertex(598,68);
	curveVertex(584,64);
	curveVertex(580,45);
	curveVertex(570,40);
	curveVertex(565,30);
	curveVertex(560,33);
	curveVertex(550,37);
	curveVertex(540,35);
	curveVertex(536,33);
	curveVertex(525,36);
	curveVertex(520,50);
	curveVertex(516,60);
	curveVertex(508,63);
	curveVertex(500,80);
	endShape(CLOSE);

//body
	fill('#FFA446');
	beginShape();
	curveVertex(260,90);
	curveVertex(260,90);
	curveVertex(280.85);
	curveVertex(300,90);
	curveVertex(320,92);
	curveVertex(340,95);
	curveVertex(360,98);
	curveVertex(380,105);
	curveVertex(400,110);
	curveVertex(420,122);
	curveVertex(440,137);
	curveVertex(460,145);
	curveVertex(480,152);
	curveVertex(485,160);
	curveVertex(485,160);
	curveVertex(483,165);
	curveVertex(470,175);
	curveVertex(470,175);
	curveVertex(480,172);
	curveVertex(490,168);
	curveVertex(492,167);
	curveVertex(508,170);
	curveVertex(509,170);
	curveVertex(500,180);
	curveVertex(490,187);
	curveVertex(478,200);
	curveVertex(480,200);
	//curveVertex(480,200);
	curveVertex(490,194);
	curveVertex(500,190);
	curveVertex(508,184);
	curveVertex(512,188);
	curveVertex(512,188);
	curveVertex(520,184);
	curveVertex(532,190);
	curveVertex(543,188);
	curveVertex(549,180);
	curveVertex(557,172);
	curveVertex(555,160);
	curveVertex(550,150);
	curveVertex(547,140);
	curveVertex(544,120);
	curveVertex(540,100);
	curveVertex(523,80);
	curveVertex(520,77);
	curveVertex(500,60);
	curveVertex(480,50);
	curveVertex(460,40);
	curveVertex(440,37);
	curveVertex(420,33);
	curveVertex(400,30);
	curveVertex(380,32);
	curveVertex(360,34);
	curveVertex(340,36);
	curveVertex(322,40);
	curveVertex(300,50);
	curveVertex(283,60);
	curveVertex(270,73);
	endShape(CLOSE);

//bottom fin
	fill('#FFBD7C');
	beginShape();
	curveVertex(420,108);
	curveVertex(420,108);
	curveVertex(408,120);
	curveVertex(402,138);
	curveVertex(402,138);
	curveVertex(404,144);
	curveVertex(400,150);
	curveVertex(399,154);
	curveVertex(399,154);
	curveVertex(410,160);
	curveVertex(408,168);
	curveVertex(408,168);
	curveVertex(414,169);
	curveVertex(418,170);
	curveVertex(418,170);
	curveVertex(423,173);
	curveVertex(426,180);
	curveVertex(428,190);
	curveVertex(428,190);
	curveVertex(440,184);
	curveVertex(443,200);
	curveVertex(445,210)
	curveVertex(446,220);
	curveVertex(445,224);
	curveVertex(455,220);
	curveVertex(464,210);
	curveVertex(472,200);
	//curveVertex(475,196);
	curveVertex(469,180);
	curveVertex(460,160);
	curveVertex(459,140);
	curveVertex(461,132);
	curveVertex(455,120);
	curveVertex(440,105);
	curveVertex(430,102);
	endShape(CLOSE);

//eyes
	fill(255)
	ellipse(520,150,15);
	fill('#FFCB93');
	ellipse(522,152,5);

pop();

//YELLOWORANGE FISH
push();
	scale(0.6)
	noStroke();
	translate(800,400);
	rotate(radians(75))
	
//tail
	fill('#FFB800')
	beginShape();
	curveVertex(283,60);
	curveVertex(283,60);
	curveVertex(260,75);
	curveVertex(240,80);
	curveVertex(220,83);
	curveVertex(200,85);
	curveVertex(180,80);
	curveVertex(160,75);
	curveVertex(140,70);
	curveVertex(120,62);
	curveVertex(100,48);
	curveVertex(97,40);
	curveVertex(97,40);
	curveVertex(90,50);
	curveVertex(93,60);
	curveVertex(100,75);
	curveVertex(110,80);
	curveVertex(115,85);
	curveVertex(120,95);
	curveVertex(130,100);
	curveVertex(132,110);
	curveVertex(128,122);
	curveVertex(120,118);
	curveVertex(110,116);
	curveVertex(100,122);
	curveVertex(90,126);
	curveVertex(80,131);
	curveVertex(60,140);
	curveVertex(68,142);
	curveVertex(80,145);
	curveVertex(100,153);
	curveVertex(120,155);
	curveVertex(140,156);
	curveVertex(160,154);
	curveVertex(180,152);
	curveVertex(200,138);
	curveVertex(220,123);
	curveVertex(240,110);
	curveVertex(262,90);
	curveVertex(262,90);
	endShape(CLOSE);

//top fin
	beginShape('#FFB800');
	curveVertex(523,85);
	curveVertex(523,85);
	curveVertex(540,92);
	curveVertex(560,96);
	curveVertex(580,94);
	curveVertex(600,92);
	curveVertex(610,80);
	curveVertex(600,70);
	curveVertex(598,68);
	curveVertex(584,64);
	curveVertex(580,45);
	curveVertex(570,40);
	curveVertex(565,30);
	curveVertex(560,33);
	curveVertex(550,37);
	curveVertex(540,35);
	curveVertex(536,33);
	curveVertex(525,36);
	curveVertex(520,50);
	curveVertex(516,60);
	curveVertex(508,63);
	curveVertex(500,80);
	endShape(CLOSE);

//body
	fill('#FFDC7A');
	beginShape();
	curveVertex(260,90);
	curveVertex(260,90);
	curveVertex(280.85);
	curveVertex(300,90);
	curveVertex(320,92);
	curveVertex(340,95);
	curveVertex(360,98);
	curveVertex(380,105);
	curveVertex(400,110);
	curveVertex(420,122);
	curveVertex(440,137);
	curveVertex(460,145);
	curveVertex(480,152);
	curveVertex(485,160);
	curveVertex(485,160);
	curveVertex(483,165);
	curveVertex(470,175);
	curveVertex(470,175);
	curveVertex(480,172);
	curveVertex(490,168);
	curveVertex(492,167);
	curveVertex(508,170);
	curveVertex(509,170);
	curveVertex(500,180);
	curveVertex(490,187);
	curveVertex(478,200);
	curveVertex(480,200);
	//curveVertex(480,200);
	curveVertex(490,194);
	curveVertex(500,190);
	curveVertex(508,184);
	curveVertex(512,188);
	curveVertex(512,188);
	curveVertex(520,184);
	curveVertex(532,190);
	curveVertex(543,188);
	curveVertex(549,180);
	curveVertex(557,172);
	curveVertex(555,160);
	curveVertex(550,150);
	curveVertex(547,140);
	curveVertex(544,120);
	curveVertex(540,100);
	curveVertex(523,80);
	curveVertex(520,77);
	curveVertex(500,60);
	curveVertex(480,50);
	curveVertex(460,40);
	curveVertex(440,37);
	curveVertex(420,33);
	curveVertex(400,30);
	curveVertex(380,32);
	curveVertex(360,34);
	curveVertex(340,36);
	curveVertex(322,40);
	curveVertex(300,50);
	curveVertex(283,60);
	curveVertex(270,73);
	endShape(CLOSE);

//bottom fin
	fill('#FFB800');
	beginShape();
	curveVertex(420,108);
	curveVertex(420,108);
	curveVertex(408,120);
	curveVertex(402,138);
	curveVertex(402,138);
	curveVertex(404,144);
	curveVertex(400,150);
	curveVertex(399,154);
	curveVertex(399,154);
	curveVertex(410,160);
	curveVertex(408,168);
	curveVertex(408,168);
	curveVertex(414,169);
	curveVertex(418,170);
	curveVertex(418,170);
	curveVertex(423,173);
	curveVertex(426,180);
	curveVertex(428,190);
	curveVertex(428,190);
	curveVertex(440,184);
	curveVertex(443,200);
	curveVertex(445,210)
	curveVertex(446,220);
	curveVertex(445,224);
	curveVertex(455,220);
	curveVertex(464,210);
	curveVertex(472,200);
	//curveVertex(475,196);
	curveVertex(469,180);
	curveVertex(460,160);
	curveVertex(459,140);
	curveVertex(461,132);
	curveVertex(455,120);
	curveVertex(440,105);
	curveVertex(430,102);
	endShape(CLOSE);

//eyes
	fill(255)
	ellipse(520,150,15);
	fill('#FFB800');
	ellipse(522,152,5);

pop();

//YELLOW FISH
push();
	scale(0.5)
	noStroke();
	translate(1275,900);
	rotate(radians(105))
	
//tail
	fill('#FFF88D')
	beginShape();
	curveVertex(283,60);
	curveVertex(283,60);
	curveVertex(260,75);
	curveVertex(240,80);
	curveVertex(220,83);
	curveVertex(200,85);
	curveVertex(180,80);
	curveVertex(160,75);
	curveVertex(140,70);
	curveVertex(120,62);
	curveVertex(100,48);
	curveVertex(97,40);
	curveVertex(97,40);
	curveVertex(90,50);
	curveVertex(93,60);
	curveVertex(100,75);
	curveVertex(110,80);
	curveVertex(115,85);
	curveVertex(120,95);
	curveVertex(130,100);
	curveVertex(132,110);
	curveVertex(128,122);
	curveVertex(120,118);
	curveVertex(110,116);
	curveVertex(100,122);
	curveVertex(90,126);
	curveVertex(80,131);
	curveVertex(60,140);
	curveVertex(68,142);
	curveVertex(80,145);
	curveVertex(100,153);
	curveVertex(120,155);
	curveVertex(140,156);
	curveVertex(160,154);
	curveVertex(180,152);
	curveVertex(200,138);
	curveVertex(220,123);
	curveVertex(240,110);
	curveVertex(262,90);
	curveVertex(262,90);
	endShape(CLOSE);

//top fin
	beginShape('#FFF88D');
	curveVertex(523,85);
	curveVertex(523,85);
	curveVertex(540,92);
	curveVertex(560,96);
	curveVertex(580,94);
	curveVertex(600,92);
	curveVertex(610,80);
	curveVertex(600,70);
	curveVertex(598,68);
	curveVertex(584,64);
	curveVertex(580,45);
	curveVertex(570,40);
	curveVertex(565,30);
	curveVertex(560,33);
	curveVertex(550,37);
	curveVertex(540,35);
	curveVertex(536,33);
	curveVertex(525,36);
	curveVertex(520,50);
	curveVertex(516,60);
	curveVertex(508,63);
	curveVertex(500,80);
	endShape(CLOSE);

//body
	fill('#FFEF2A');
	beginShape();
	curveVertex(260,90);
	curveVertex(260,90);
	curveVertex(280.85);
	curveVertex(300,90);
	curveVertex(320,92);
	curveVertex(340,95);
	curveVertex(360,98);
	curveVertex(380,105);
	curveVertex(400,110);
	curveVertex(420,122);
	curveVertex(440,137);
	curveVertex(460,145);
	curveVertex(480,152);
	curveVertex(485,160);
	curveVertex(485,160);
	curveVertex(483,165);
	curveVertex(470,175);
	curveVertex(470,175);
	curveVertex(480,172);
	curveVertex(490,168);
	curveVertex(492,167);
	curveVertex(508,170);
	curveVertex(509,170);
	curveVertex(500,180);
	curveVertex(490,187);
	curveVertex(478,200);
	curveVertex(480,200);
	//curveVertex(480,200);
	curveVertex(490,194);
	curveVertex(500,190);
	curveVertex(508,184);
	curveVertex(512,188);
	curveVertex(512,188);
	curveVertex(520,184);
	curveVertex(532,190);
	curveVertex(543,188);
	curveVertex(549,180);
	curveVertex(557,172);
	curveVertex(555,160);
	curveVertex(550,150);
	curveVertex(547,140);
	curveVertex(544,120);
	curveVertex(540,100);
	curveVertex(523,80);
	curveVertex(520,77);
	curveVertex(500,60);
	curveVertex(480,50);
	curveVertex(460,40);
	curveVertex(440,37);
	curveVertex(420,33);
	curveVertex(400,30);
	curveVertex(380,32);
	curveVertex(360,34);
	curveVertex(340,36);
	curveVertex(322,40);
	curveVertex(300,50);
	curveVertex(283,60);
	curveVertex(270,73);
	endShape(CLOSE);

//bottom fin
	fill('#FFF88D');
	beginShape();
	curveVertex(420,108);
	curveVertex(420,108);
	curveVertex(408,120);
	curveVertex(402,138);
	curveVertex(402,138);
	curveVertex(404,144);
	curveVertex(400,150);
	curveVertex(399,154);
	curveVertex(399,154);
	curveVertex(410,160);
	curveVertex(408,168);
	curveVertex(408,168);
	curveVertex(414,169);
	curveVertex(418,170);
	curveVertex(418,170);
	curveVertex(423,173);
	curveVertex(426,180);
	curveVertex(428,190);
	curveVertex(428,190);
	curveVertex(440,184);
	curveVertex(443,200);
	curveVertex(445,210)
	curveVertex(446,220);
	curveVertex(445,224);
	curveVertex(455,220);
	curveVertex(464,210);
	curveVertex(472,200);
	//curveVertex(475,196);
	curveVertex(469,180);
	curveVertex(460,160);
	curveVertex(459,140);
	curveVertex(461,132);
	curveVertex(455,120);
	curveVertex(440,105);
	curveVertex(430,102);
	endShape(CLOSE);

//eyes
	fill(255)
	ellipse(520,150,15);
	fill('#FFF88D');
	ellipse(522,152,5);

pop();
}

function imp_line(x,y,x0,y0,x1,y1)
	{
		return (y0-y1)*x+ (x1-x0)*y+ (x0*y1)-(x1*y0);
	}

function distance(x0,y0,x1,y1) 
	{
		return sqrt(pow(x0-x1,2) + pow(y0-y1,2));
	}