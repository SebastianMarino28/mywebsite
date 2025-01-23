
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
         this.life -= .5;
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


var fireW1; 

function setup() 
{
   createCanvas(1000, 700);

   
   fireW1 = new PSys1();
}

function draw() 
{
   background(0);

   
   fireW1.run(); 
}