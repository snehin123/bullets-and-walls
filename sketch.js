var bullet;
 var wall;
var speed;
var weight;
var thickness;

function setup() {
  createCanvas(800,400);

  thickness = random(22,83)
  speed=random(223,321);
  weight=random(30,52);

  bullet = createSprite(50,200,50,10)

 bullet.velocityX = speed;

  bullet.shapeColor = "white";
 
 // wall = createSprite(700, 200, 60, height/2);
 wall = createSprite(700, 200, thickness, height/2);
  wall.shapeColor = "grey";

  

}

function draw() {
  background(255,255,255);  
  background("black")


  if(wall.x - bullet.x < (bullet.width + wall.width)/2){
    bullet.velocityX=0
  
    var deformation = 0.5*weight*speed*speed/22500;

    if (deformation<100){
      bullet.shapeColor="white";
    }

if(deformation<180 && deformation>100){
  bullet.shapeColor="white";
}

if(deformation<100){
  bullet.shapeColor="white";

}
if(hasCollided(bullet,wall))
{
  bullet.velocityX=0;
  var damage =0.5*weight*speed*speed/(thickness*thickness*thickness);

  if(damage>10)
  {
    wall.shapeColor= "red";
  }
if (damage<10)
{
  wall.shapeColor = "green";
}

}

}


  drawSprites();

  }

  function hasCollided (lbullet,lwall){
    bulletRightEdge=lbullet.x+ lbullet.width;
    wallLeftEdge=lwall.x;
    if (bulletRightEdge>=wallLeftEdge){
      return true
    }
    return false;
  }