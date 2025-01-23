// cpe 123 (computational art) final project
var Robt = false;
var locR, rotr1, rotr2, dir;
var robstatic, leg2static;
var startPg1 = true;
var startPg2 = false;
var mainRoom = false;
var bed = false;
var paintZoom = false;
var getSpray = false;
var gotSpray = false;
var drawerZoom = false;
var getBattery = false;
var gotBattery = false;
var roboZoom = false;
var batteryIn = false;
var robStop = false;
var smoke;
var spraying;
var sprayCounter = 0;
var sparkles;
var paintMoved = false;

let painting;
var pX, pY;


//bugs vars
var bX = [];
var bY = [];
var vX = [];
var vY = [];
var bScl = [];
var numBugs;
var bugsAlive = true;


function preload()
{
  painting = loadImage("images/fish.png");
}


function setup(){

   createCanvas(1000, 700);
   background('#CBECF5');
   fill('#5EDB64');
   quad(230, 300, 1000, 300, 1000, 600, 0, 600);
   fill('#53DBD9');
   quad(230, 300, 1000, 600, 0, 600, 1000, 300);
   xr=500;
   //yr=310;
   rotr1=0;
   rotr2=0;
   robstatic = true;
   leg2static = false;
   locR = createVector(530, 308);
   dir = createVector(-1, 0);


   //bugs setup
   numBugs = 20;
  for (var i = 0; i < numBugs; i++)
  {
    vX.push(random(-3, 5));
    vY.push(random(-3, 5));
    bX.push(random(300, 700));
    bY.push(random(50, 350));
    bScl.push(random(.5, .7));
  }

  smoke = new PSys1(width/2, height, 50);

  sparkles = new PSys2(355, 325, 400);

  pX = 250;
  pY = 50;
}

function draw(){
    
    
  if (startPg1 == true)
  {

    background('#B0B3FF');
  fill('#61628C');
  noStroke();
  textSize(160);
  textFont("Francois One");
  text("TREASURE",50,230);
  
  fill(255)
  textSize(250);
  text("HUNT!",200,450);

  fill('#61628C');
  textSize(80);
  text("click to start", 270,600)


  }

  if (startPg2 == true)
  {
    background('#61628C');
  fill(255);
  noStroke();
  textSize(50);
  textFont("Francois One");
  text("Your goal is to open the chest.",50,230);

  fill('#B0B3FF')
  textSize(50);
  textFont("Francois One");
  text("Find clues by clicking objects around",50,310);
  text("the room. You will see your objects on",50,365);
  text("the bottom of the screen.",50,420);

  fill(255);
  text("The first clue is found where you sleep.", 50, 500)

  backButton(500, 625, 3, 180);
  }

  if (bed == true)
  {

    background('#CBECF5');
    noStroke();

//Bed
  fill(255, 245, 167)
  quad(610,0, 240,150, 1000,295, 1000,0);
  
  
//Bed Post  
  fill(184, 177, 125)
  quad(240,300, 390,300, 390,700, 240,700);

  fill(145, 140, 99)
  quad(390,300, 470,300, 470,700, 390,700);

//Bed Side
  fill(227, 218, 152)
  quad(240,150, 240,300, 1000,440, 1000,295);

//Blanket
  fill(83, 82, 163);
  quad(1000,120, 750,248, 750,700, 1000,700);

  fill(104, 102, 204);
  triangle(1000,120, 750,248, 1000,295)

//Clue2: Fish
  
  push();
  translate(260,620);
  fill(255)
  triangle(27,30, 27,50, 40,40)
  beginShape();
  curveVertex(40,40);
  curveVertex(40,40);
  curveVertex(60,22);
  curveVertex(80,20);
  curveVertex(100,40);
  curveVertex(80,60);
  curveVertex(60,60);
  curveVertex(40,40);
  endShape(CLOSE);
  fill('#6A91A6')
  ellipse(80,35,8)
  pop();

  push();
  translate(325,500);
  scale(0.5)
  fill(255)
  triangle(27,30, 27,50, 40,40)
  beginShape();
  curveVertex(40,40);
  curveVertex(40,40);
  curveVertex(60,22);
  curveVertex(80,20);
  curveVertex(100,40);
  curveVertex(80,60);
  curveVertex(60,60);
  curveVertex(40,40);
  endShape(CLOSE);
  fill('#6A91A6')
  ellipse(80,35,8)
  pop();

  push();
  translate(210,350);
  scale(1.4)
  fill(255)
  triangle(27,30, 27,50, 40,40)
  beginShape();
  curveVertex(40,40);
  curveVertex(40,40);
  curveVertex(60,22);
  curveVertex(80,20);
  curveVertex(100,40);
  curveVertex(80,60);
  curveVertex(60,60);
  curveVertex(40,40);
  endShape(CLOSE);
  fill('#6A91A6')
  ellipse(80,35,8)
  pop();
 
  fill('#FFF5B9');
   ellipse(280,570,25)
   ellipse(270,360,10);
   ellipse(350,610,10);
   ellipse(360,450,20);
   ellipse(310,490,6)

   backButton(50, 625, 2);
  }


  if (paintZoom == true)
  {
  push();
    background('#CBECF5');



      //Indentation
    fill(174, 201, 209);
    noStroke();
    rect(250,50,500,600);

  //BackWall
    fill(106, 123, 128);
    rect(310,110,380,460);

  //Bottom + Top
    fill(142, 165, 171);
    quad(250,650, 310,570, 690,570, 750,650);
    quad(250,50, 310,110, 690,110, 750,50);



  if (getSpray == false)
  {

  //Shadow
    fill(106, 123, 128);
    ellipse(440,610,200,30)

  drawSpray(510,250,0,1);
  }

//painting
  
if (paintMoved == true)
{
  if (pX < 800)
  {
    pX += 3;
  }
}
  
  image(painting, pX, pY, 500, 600);


  pop();

  backButton(50, 625, 2);

}

if (drawerZoom == true)
{

push();
  background('#CBECF5');
  drawDrawer(width/2, 200, 1);
pop();

if (getBattery == false)
{
  battery(470, 210, .7, -45);
}

if (bugsAlive == true)
{
//bugs
  for (var i = 0; i < numBugs; i++)
    {
      drawBug(bX[i], bY[i], vX[i], vY[i], bScl[i]);

      bX[i] += vX[i];
      bY[i] += vY[i];

      if (bX[i] >= 700 || bX[i] <= 300)
      {
        vX[i] = -vX[i];
      }

      if (bY[i] >= 350 || bY[i] <= 50)
      {
        vY[i] = -vY[i];
      }
    }
}

  
  fill('#8F471A');
  rect(0, 600, 1000, 100);
  if (gotSpray == true)
    {
      push();
        drawSpray(350, 605, 0, .25);
      pop();
    }

  if (gotBattery == true)
    {
      battery(650, 615, .5, 0);
    }

  backButton(50, 625, 2);

  if (spraying == true)
  {
    smoke.run()
    sprayCounter++;
    if (sprayCounter > 200)
    {
      bugsAlive = false;
    }
  }

}

if (roboZoom == true)
{
  background('#CBECF5');
  robotBack(width/3, 20, 1);

  fill('#8F471A');
  rect(0, 600, 1000, 100);
  if (gotSpray == true)
    {
      push();
        drawSpray(350, 605, 0, .25);
      pop();
    }

  if (gotBattery == true)
    {
      battery(650, 615, .5, 0);
    }

  if (batteryIn == true)
  {
    battery(455, 400, 1.2, 0);
  }


  backButton(50, 625, 2);

}
    

    //main room
    if (mainRoom == true)
    {
    background('#CBECF5');
    stroke('#6795C9');
    strokeWeight(5);
    line(230, 300, 0, 600);
    line(230, 0, 230, 300);
    line(230, 300, 1000, 300);

//drawer
    fill('#F5F3C7');
    stroke(100);
    strokeWeight(1);
    quad(100, 300, 200, 300, 100, 400, 0, 400);   
    rect(0, 400, 100, 200);
    quad(100, 400, 200, 300, 200, 600, 100, 600);
    quad(100, 400, 200, 300, 200, 400, 100, 500);
    quad(100, 500, 200, 400, 200, 500, 100, 600);

//handle
    fill('#C9C4C1');
    rect(154, 390, 5, 5);
    fill('#F0EAE7');
    rect(135, 410, 5, 5);

    quad(140, 410, 160, 390, 160, 395, 140, 415);
/*
    fill('#D4CB8A');
    quad(100, 400, 200, 300, 200, 500, 100, 500);
    fill('#EBE198');
    triangle(100, 500, 200, 500, 100, 600);
    */
//battery
/*   push();
    noStroke();
    fill('#473FF0')
    ellipse(150, 530, 9);
    ellipse(140, 530, 9);
    quad(145, 530, 155, 530, 145, 550, 135, 550);
    quad(135, 530, 145, 530, 135, 550, 125, 550);
    ellipse(140, 550, 9);
    ellipse(130, 550, 9);
    fill('#ECE6D6')
    ellipse(140, 550, 5);
    ellipse(130, 550, 5);
    pop();
*/
//desk
    fill('#8F471A');
    rect(580, 300, 20, 80);
    rect(300, 300, 20, 80);

    fill('#C46123');
    rect(250, 400, 15, 80);
    rect(530, 400, 15, 80);

    fill('#8F471A');
    quad(265, 400, 270, 400, 270, 475, 265, 480);
    quad(545, 400, 550, 400, 550, 475, 545, 480);
    
    fill('#C46123');
    quad(300, 300, 600, 300, 550, 400, 250, 400);
    fill('#8F471A');
    rect(250, 400, 300, 10);
    quad(600, 300, 600, 310, 550, 410, 550, 400);

//bed
    fill('#6866CC');
    triangle(850, 225, 1000, 225, 1000, 300);
    quad(850, 225, 1000, 300, 1000, 450, 850, 375);
 
    fill('#FFF5A7');
    rect(800, 275, 40, 325);

    quad(800, 200, 850, 225, 850, 300, 800, 275);
    quad(800, 200, 1000, 200, 1000, 225, 850, 225);

    quad(875, 386, 950, 425, 890, 600, 800, 600);

//box 
    //fill(255);
    image(painting, 310, 50, 150, 200);
    
//
    fill('#8F471A');
    rect(0, 600, 1000, 100);
//chest part1

    fill(0)
    quad(352, 280, 400, 281, 350, 332, 300, 332);
    
    if (robStop == false)
    {
    fill('#EB421B');
    stroke('#F0F732');
    strokeWeight(2);
    arc(375, 280, 50, 50, -PI, 0);
    noStroke();
    quad(350, 330, 400, 280, 360, 260, 310, 310);
    stroke('#F0F732');
    strokeWeight(2);
    fill('#EB421B');
    //arc(375, 280, 50, 50, -PI, 0);
    arc(325, 330, 50, 50, -PI, 0);
    } 

    if (robStop == true)
    {
      sparkles.run();
    }

//chest part2
    stroke(0);
    strokeWeight(1);
    fill('#D4730D');
    quad(380, 300, 400, 280, 400, 340, 380, 360);
    stroke(0);
    strokeWeight(.5);
    fill('#F0F732');
    //quad(377, 325, 382, 320, 382, 340, 377, 345);
    quad(382, 320, 387, 315, 387, 335, 382, 340);
    fill(0);
    arc(382, 331, 5, 7, -PI/2, PI/2);

//robot
  push();
  translate(locR.x, locR.y);
//head    
    fill('#E6E6E6');
    rect(0, 0, 20, 15);

//arms   
    push(); 
    translate(1, 20);
    rotate(PI/4);
    fill('#E6E6E6');
    rect(0, 0, 4, 13);
    pop();
    push();
    translate(15, 20);
    rotate(-PI/4);
    rect(-1, 3, 4, 13);
    pop();

//leg1
    push();
    translate(5, 37);
    rotate(rotr1);
    fill('#E6E6E6');
    rect(0, 0, 3, 15);
    rect(-3, 15, 6, 3);
    pop();
//leg2
    push();
    translate(13, 37);
    rotate(rotr2);
    fill('#E6E6E6');
    rect(0, 0, 3, 15);
    rect(-3, 15, 6, 3);
    pop();    

//body    
    rect(1, 15, 18, 25);
//face    
    noStroke();
    fill(0);
    rect(5, 3, 3, 3);
    rect(13, 3, 3, 3);
    
    fill(0);
    rect(6, 10, 8, 3);
//key 
    push();
    translate(-4, 24);
    stroke('#DEC378');
    strokeWeight(3);
    ellipse(0, 0, 6);
    stroke('#F5F5F5');
    strokeWeight(2);
    line(-12, 0, -5, 0);
    line(-10, 0, -10, 4);
    line(-7, 0, -7, 2);

    pop();
pop();
   
//chest part3
    
    fill('#D4730D');
    rect(300, 330, 50, 60);
    quad(350, 330, 380, 300, 380, 360, 350, 390);
    noStroke();
    fill('#FFE04E');
    quad(378, 303, 382, 298, 382, 358, 378, 362);
    stroke(0);
    strokeWeight(.5);
    fill('#F0F732');
    quad(377, 325, 382, 320, 382, 340, 377, 345);
    fill('#EDCF4A');
    rect(374.5, 326, 2, 19);
    
    fill(0);
    arc(382, 331, 5, 7, PI/2, -PI/2);


    if (gotSpray == true)
    {
      drawSpray(350, 605, 0, .25);
    }

    if (gotBattery == true)
    {
      battery(650, 615, .5, 0);
    }


    if(Robt==true){
        moveRob();
        
    }
    if(locR.x<=390){
      Robt = false;
      robStop = true;
    }
  }
     
    
    

}

function mousePressed(){

//starting page
if (startPg1 == true && mouseY > 0)
{
  startPg1 = !startPg1;
  startPg2 = !startPg2;
}

//starting page 2
else if (startPg2 == true && mouseX > 440 && mouseX < 547 && mouseY > 550 && mouseY < 646)
{
  startPg2 = !startPg2;
  mainRoom = !mainRoom;
}

//bed clue
if (mainRoom == true && mouseX > 800 && mouseY > 200)
{
  bed = !bed;
  mainRoom = !mainRoom;
}

// backbutton from bed to room
if (bed == true && mouseX > 20 && mouseX < 91 && mouseY > 615 && mouseY < 676)
{
  bed = !bed;
  mainRoom = !mainRoom;
}

// painting clue
if (mainRoom == true && mouseX > 309 && mouseX < 463 && mouseY > 50 && mouseY < 254)
{
  mainRoom = !mainRoom;
  paintZoom = !paintZoom;
}

//moving painting
if (paintZoom == true && paintMoved == false && mouseX > 660 && mouseX < 740 && mouseY > 540 && mouseY < 650)
{
  paintMoved = !paintMoved;

}

// getting bug spray
  if (paintZoom == true && gotSpray == false && paintMoved == true && mouseX > 450 && mouseX < 571 && mouseY > 264 && mouseY < 623)
  {
    getSpray = !getSpray;
    gotSpray = !gotSpray;

  }


// backbutton from painting to room
if (paintZoom == true && mouseX > 20 && mouseX < 91 && mouseY > 615 && mouseY < 676)
{
  paintZoom = !paintZoom;
  mainRoom = !mainRoom;
  if (paintMoved == true)
  {
    paintMoved =!paintMoved;
    pX = 250;
  }
}

// drawer clue
if (mainRoom == true && mouseX > 0 && mouseX < 201 && mouseY > 300 && mouseY < 603)
{
  mainRoom = !mainRoom;
  drawerZoom = !drawerZoom;
}

// killing bugs
if (drawerZoom == true && bugsAlive == true && gotSpray == true && mouseX > 335 && mouseX < 365 && mouseY > 609 && mouseY < 700)
{
  spraying = !spraying;
  //bugsAlive = !bugsAlive;
}

//getting battery
if (drawerZoom == true && gotBattery == false && bugsAlive == false && mouseX > 469 && mouseX < 570 && mouseY > 185 && mouseY < 290)
{
  getBattery = !getBattery;
  gotBattery = !gotBattery;
}

// backbutton from drawer to room
if (drawerZoom == true && mouseX > 20 && mouseX < 91 && mouseY > 615 && mouseY < 676)
{
  drawerZoom = !drawerZoom;
  mainRoom = !mainRoom;
}

// robot zoom in
if (mainRoom == true && Robt == false && robStop == false && mouseX > 520 && mouseX < 560 && mouseY > 309 && mouseY < 367)
{
  mainRoom = !mainRoom;
  roboZoom = !roboZoom;
}
    

//putting battery in robot
if (roboZoom == true && gotBattery == true && batteryIn == false && mouseX > 650 && mouseX < 677 && mouseY > 613 && mouseY < 694)
{
  batteryIn = !batteryIn;


}


// backbutton from robot to room
if (roboZoom == true && mouseX > 20 && mouseX < 91 && mouseY > 615 && mouseY < 676)
{
  roboZoom = !roboZoom;
  mainRoom = !mainRoom;
  if (batteryIn == true)
  {
    Robt = !Robt;
  }
}




    
    
}

function moveRob(){
    locR.add(dir);
    //xr += dir.x;
    //dir.x = -1;
    
    


    if(rotr1<-PI/6){
      robstatic = true;
   }
   if(rotr1>PI/6){
      
      robstatic = false;
   }
   if(robstatic == false){
      rotr1 -= PI/25;
      
   }
   else
   {
      rotr1 += PI/25;
      
   }

   if(rotr1 >= PI/6){
      leg2static = true;
   }
   if(rotr1 <= -PI/6){
      leg2static = false;
   }
   if(leg2static == true){
      rotr2 += PI/25;
   }
   else
   {
      rotr2 -= PI/25;
   }
   /*if(locR.x <= 400);
    {
        Robt=false;
    }*/
}

function backButton(pX, pY, scl, rot)
{
  push();
    translate(pX, pY)
    rotate(radians(rot));
    scale(scl);
    noStroke();
    fill(222, 198, 80);
    rect(0, 0, 20, 20);
    triangle(0, -5, 0, 25, -15, 10);
  pop();  
}

function battery(x,y,scl,rot)
{
  push();
    translate(x,y);
    scale(scl);
    rotate(radians(rot));
    fill(139, 69, 19);
    rect(0, 0, 50, 75);
    fill(0);
    rect(0,50, 50,100);
    fill(255);
    rect(20, -5, 10, 5);
  pop();
}

function drawSpray(x,y,rot,sc)
{
 push();
  translate(x,y);
  scale(sc);
  rotate(rot);
//Top of Can
  fill('#79CCA1')
  beginShape();
  curveVertex(-60,110);
  curveVertex(-60,110);
  curveVertex(-55,80);
  curveVertex(-48,60);
  curveVertex(-40,40);
  curveVertex(-27,20);
  curveVertex(0,20);
  curveVertex(0,20);
  curveVertex(28,20);
  curveVertex(40,40);
  curveVertex(48,60);
  curveVertex(55,80);
  curveVertex(60,110);
  curveVertex(44,110);
  endShape(CLOSE);
  ellipse(0,23,58,20);
  fill('#4B8064');
  ellipse(5,40,10,30);
  fill(255)
  ellipse(5,35,3,10)

//Body of Can
  fill('#87E6B5');
  push();
  //ellipse(0,350, 120,40 );
  rect(-60,110,120,237);
  ellipse(0,110, 120,40);
  fill('#62A683');
  ellipse(0,350, 120,40 );
  rect(-60,140,120,210);
  ellipse(0,140, 120,40);
//Bug on Can
  fill(255);
  ellipse(0,210,40,60);
  ellipse(0,180,25)
  ellipse(-12,164,6);
  ellipse(12,164,6);
  stroke(255);
  strokeWeight(2)
  line(-8,170, -12,164);
  line(8,170, 12,164);
  line(-15, 200,-25,193);
  line(-25,193,-27,185);
  line(15, 200,25,193);
  line(25,193,27,185);
  line(-15,220,-25,227);
  line(-25,227,-27,237);
  line(15,220,25,227);
  line(25,227,27,237);
  
  pop();
pop();
}


function drawDrawer(x,y,scl)
{
  push();
  translate(x,y);
  scale(scl);
  fill(0);

  
    translate(-250,-200);
    push();
    fill(0);
    ellipse(250,400, 100);
    pop();
    fill(212, 210, 176);
    rect(0,0, 500, 400);
    fill('#F5F3C7');
    rect(50,50, 400, 300);
    strokeWeight(1);
    line(50,50, 0,0);
    line(50,350,0,400);
    line(500,0, 450,50);
    line(500,400,450,350);

  pop();
}


function drawBug(x, y, dX, dY, scl)
{
  push();
    translate(x, y);
    rotate(atan2(dY, dX)+PI/2);
    scale(scl);
    fill(97, 67, 24);
    push();
      noStroke();
      ellipse(0, 0, 40, 80);
      ellipse(0, -35, 30, 20);
    pop();
    noFill();
    stroke(97, 67, 24);
    arc(-5, -60, 15, 40, radians(90), radians(180));
    arc(5, -60, 15, 40, radians(360), radians(90));
    strokeWeight(2);
    line(-32, 0, 32, 0);
    arc(0, -25, 60, 30, radians(0), radians(180));
    arc(0, 25, 60, 30, radians(180), radians(0));

  pop();
}


function robotBack(x, y, scl)
{
  push();
    translate(x,y);
    scale(scl);
    fill(160)
    rect(0,0, 300,200)
    rect(120,200, 50,75)
    rect(0, 275, 300, 450)
    rect(-50, 300, 50,75)
    rect(300, 300, 50,75)
    fill(0)
    rect(100, 350, 100, 210)
  pop();
    
}


function Particle1(x , y) 
{
  
   this.accelY = -0.02; 
   this.velX = random(-1, 1);
   this.velY = random(-1);

   
   this.pcolorB = random(200, 240);
   this.pcolorR = random(220, 250);
   this.pcolorG = random(250, 255);
   this.locX = x + random(-20, 20);
   this.locY = y + random(-5, 5);
   this.r = 8.0;
   this.life = 100;
  
   
   this.updateP = function()
   {
      this.velY += this.accelY;
      this.locX += this.velX;
      this.locY += this.velY;
      if (this.locY < 670)
      {
         this.life -= .3;
      }
      this.r += 1.5;
   };
  
   
   this.renderP = function() 
   {
      //noStroke();
      push();
         noStroke();
         fill(this.pcolorR, this.pcolorG, this.pcolorB, this.life);
         translate(this.locX, this.locY);
         ellipse(0, 0, this.r, this.r);
      pop();
   };
} 


function PSys1(sX, sY, num)
{
   
   this.particles = [];
   for (var i=0; i < num; i++) 
   {
      this.particles.push(new Particle1(sX, sY));
   }
  
   
   this.run = function() 
   {
      for (var i=0; i < this.particles.length; i++) 
      {
         
         this.particles[i].updateP();
         this.particles[i].renderP();
      }
   }
}


function Particle2(x , y) 
{
   
   this.accelY = 0.1; 
   this.velX = random(-2, 2);
   this.velY = random(-7, -9);

   
   this.pcolorB = random(251, 255);
   this.pcolorR = random(251, 255);
   this.pcolorG = random(170, 250);
   this.locX = x;
   this.locY = y + random(-5, 5);
   this.r = 4.0;
   this.life = 250;
  
   
   this.updateP = function()
   {
      this.velY += this.accelY;
      this.locX += this.velX;
      this.locY += this.velY;
      if (this.locY > y - 100)
      {
         this.life -= 3;  
      }
      
      
   };
  
   
   this.renderP = function() 
   {
      
      push();
         noStroke();
         fill(this.pcolorR, this.pcolorG, this.pcolorB, this.life);
         translate(this.locX, this.locY);
         rotate(radians(45));
         rect(0, 0, this.r, this.r);
      pop();
   };
} 



function PSys2(sX, sY, num)
{
  
   this.particles = [];
   for (var i=0; i < num; i++) 
   {
      this.particles.push(new Particle2(sX, sY));
   }
  
   
   this.run = function() 
   {
      for (var i=0; i < this.particles.length; i++) 
      {
         
         this.particles[i].updateP();
         this.particles[i].renderP();
      }
   }
}