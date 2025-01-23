// To start the animation click anywhere in the window
var loc, dir;
var neckR, wingR, leg1R, leg2R, beakR, time;

var neckDown = true;
var wingDown = false;
var animate = false;
var leg1Back = false;
var leg2Forward = false;
var beakDown = true;

// normal set up
function setup() 
{
   createCanvas(400, 400);

   loc = createVector(width*.9, height*.5);
   dir = createVector(-1, 0);
   neckR = 0;
   wingR = -PI/10;
   leg1R = -10;
   leg2R = 10;
   beakR = -35;

}

// normal draw
function draw() 
{
   background(12, 200, 240);
   fill(220);
   ellipse(20, 35, 45);
   ellipse(40, 20, 50);
   ellipse(65, 25, 40);
   ellipse(200, 80, 40);
   ellipse(220, 60, 50);
   ellipse(180, 70, 45);

   fill(200, 200, 0);
   ellipse(400, 25, 100);
   
   fill(150, 0, 150);
   ellipse(175, 200, 80);
   fill(120, 50, 160);
   ellipse(150, 200, 50);
   fill(110, 20, 120);
   ellipse(220, 200, 30);


   //foreground
   fill(70, 130, 16);
   rect(0, height/2, width, height/2);
   fill(87, 168, 64);
   rect(0, 250, 400, 50);
   rect(0, 350, 400, 50);

   drawDuck();
   if (animate) 
   {
      moveDuck();
   }
}

// method to control starting the duck over again and 
// control animation on and off
function mousePressed() 
{
   loc = createVector(width*.9, height*.5);
   animate = !animate;
}

// code to draw the duck with animation parameters 
// neckR and wingR - other transforms align the pieces 
// to the correct pivot points Be very careful modifying 
// this code - the structure of the push and pops are 
// what builds the hierarchical relationships
function drawDuck() 
{
   noStroke();

   push();
      //move the entire duck
      translate(loc.x, loc.y);
      scale(2); //scale the entire duck

      push();
         translate(-3, 15);
         rotate(radians(leg2R));
         fill(255, 100, 0);
         rect(0, 0, 1.5, 10);
         push();
            translate(0, 10);
            rect(0, 0, 1, 3);
            rotate(radians(-45));
            rect(0, 0, 1, 3);
            rotate(radians(90));
            rect(0, 0, 1, 3);
         pop();
      pop();      

      // draw body
      fill(245, 226, 12);
      ellipse(0, 0, 40, 30); 

      //draw neck and head with possible animation transforms
      push();
         translate(-16, 0); //move into pivot position
         rotate(neckR);  //rotate by neckR parameter
         ellipse(0, -10, 10, 18); //neck
         ellipse(0, -17, 14, 14); //head
         fill(0);
         ellipse(0, -19, 4, 4);  //eye
         fill(255, 111, 16);
         triangle(-10, -18, -4, -21, -4, -15);//beak
         push();
            //fill(0);
            translate(-4, -17);
            rotate(radians(beakR));
            triangle(0, 0, 0, 3, -5, 0);
         pop();
      pop();

      



      //draw wing with possible animation transforms
      fill(227, 208, 66);
      push();
         translate(-8, -5); //move into pivot position
         rotate(wingR); //animtion parameter to control wing flap
         ellipse(14, 0, 34, 20); //wing
      pop();

      //TODO - this is where you will add the code to animation the legs - follow
      //the examples for the wings and neck 
      push();
         translate(0, 15);
         rotate(radians(leg1R));
         fill(255, 100, 0);
         rect(0, 0, 1.5, 10);
         push();
            translate(0, 10);
            rect(0, 0, 1, 3);
            rotate(radians(-45));
            rect(0, 0, 1, 3);
            rotate(radians(90));
            rect(0, 0, 1, 3);
         pop();
      pop();

   pop();
}

// function to update all animation parameters - very 
// simple scripted animation
function moveDuck() 
{
   // update the ducks global location
   loc.add(dir);

   // find out how much the neck is rotated to decide which way to rotate
   // these constrain how much the neck moves up and down
   if (neckR < -PI/3) 
   {
      neckDown = false;
   } 
   if (neckR > PI/10) 
   {
      neckDown = true;
   }

   // depending on which way we need to rotate, do so
   if (neckDown == true) 
   {
      neckR -= PI/100;
   } 
   else 
   {
      neckR += PI/100;
   }

   // find out how much the wing is rotated to decide which way to rotate
   // these constrain how much the wing moves up and down
   if (wingR < -2*PI/5) 
   {
      wingDown = true;
   } 
   if (wingR > -PI/20) 
   {
      wingDown = false;
   }

   // depending on which way we need to rotate, do so
   if (wingDown == false) 
   {
      wingR -= PI/100;
   } 
   else 
   {
      wingR += PI/100;
   }

   if (leg1R < -25)
   {
      leg1Back = true;
   }

   if (leg1R > 25)
   {
      leg1Back = false;
   }

   if (leg1Back == true)
   {
      leg1R += .7;
   }

   if (leg1Back == false)
   {
      leg1R -= .7;
   }

   if (leg2R < -25)
   {
      leg2Forward = false;
   }

   if (leg2R > 25)
   {
      leg2Forward = true;
   }

   if (leg2Forward == true)
   {
      leg2R -= .7;
   }

   if (leg2Forward == false)
   {
      leg2R += .7;
   }

   if (beakR > 0)
   {
      beakDown = false;
   }

   if (beakR < -35)
   {
      beakDown = true;
   }

   if (beakDown == true)
   {
      beakR += .7;
   }

   if (beakDown == false)
   {
      beakR -= .7;
   }
}

