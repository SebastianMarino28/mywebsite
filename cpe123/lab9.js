

// Example of very simple particle systems - introduction to objects in javascript

// define a single particle
function Particle(x, y) // you will need to modify the parameters
{
   // the data associated with a particle
   this.accelY = 0.05; //gravity
   this.velX = random(-2, 2);
   this.velY = random(-2, 1.3);

   // note this particle only can vary its blue color 
   // - change this to include red and green
   this.pcolorB = random(255);
   this.pcolorR = random(255);
   this.pcolorG = random(255);
   this.locX = x;
   this.locY = y;
   this.r = 6.0;
   this.r2 = 6.0;
   this.life = 200;
  
   // a function to update the particle each frame
   this.updateP = function()
   {
      this.velY += this.accelY;
      this.locX += this.velX;
      this.locY += this.velY;
      this.life -= 1.75;
      this.r -= .05;
      this.r2 += .05
   };
  
   // function to draw a particle
   this.renderP = function() 
   {
      noStroke();
      push();

         if (col < 1)
         {
            fill(14, 66, this.pcolorB, this.life);
         }

         else if (col >= 1 && col < 2)
         {
            fill(this.pcolorR, 30, 12, this.life);
         }

         else if (col >= 2)
         {
            fill(14, this.pcolorG, 66, this.life);
         }
         
         translate(this.locX, this.locY);
         ellipse(0, 0, this.r, this.r2);
      pop();
   };
} //end of particle object definition


// define a group of particles as a particleSys
function PSys(sX, sY, num)
{
   // the data - lots of particles
   this.particles = [];
   for (var i=0; i < num; i++) 
   {
      this.particles.push(new Particle(sX, sY));
   }
  
   // function defining what to do each frame
   this.run = function() 
   {
      for (var i=0; i < this.particles.length; i++) 
      {
         //update each particle per frame
         this.particles[i].updateP();
         this.particles[i].renderP();
      }
   }
}

// declare of a variable to represent a particle system
var fireW = []; 
var col;

function setup() 
{
   createCanvas(500, 500);

   // start a new particle system
   //fireW.push(PSys(200, 100, 20));
   //col = random(3);

}

function draw() 
{
   background(0);

   // run the particle system
   for (var i = 0; i < fireW.length; i++)
   {
      fireW[i].run();
   }
}

function mousePressed()
{
   if (mouseX > 0)
   {
      fireW.push(new PSys(mouseX, mouseY, 50));
      col = random(3);
   }
}