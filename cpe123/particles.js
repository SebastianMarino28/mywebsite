// Example of very simple particle systems - introduction to objects in javascript

// define a single particle
function Particle2(x , y) 
{
   
   this.accelY = 0.1; 
   this.velX = random(-1, 1);
   this.velY = random(-5, -7);

   
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
         this.life -= 5;  
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

// declare of a variable to represent a particle system
var fireW1; 

function setup() 
{
   createCanvas(1000, 700);

   // start a new particle system
   fireW1 = new PSys2(width/2, height/2, 400);
}

function draw() 
{
   background(0);

   // run the particle system
   fireW1.run(); 
}