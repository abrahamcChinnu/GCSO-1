var car,wall;
var speed,weight;

function setup() {
createCanvas(1200,600);

car=createSprite(500,300,50,50);
car.shapeColor="white";

wall=createSprite(1000,300,60,height/2);
wall.shapeColor="grey";


}

function draw() {
  background("blue");
  speed=random(80,181);
  weight=random(400,1500);  
 if(wall.x-car.x<(car.width+wall.width)/2) {
   
  var deformation=0.5*weight*speed*speed/22509;
   if(deformation>180) {
     car.shapeColor="red";
   }
   if (deformation<180 && deformation>100) {
     car.shapeColor="yellow";
   }
   if (deformation<100) {
     car.shapeColor="green";
   }
 }
 if (keyDown("space")) {
  car.velocityX=speed;
}
if(keyDown("R"))  {
  car.x=500;
  car.y=300;
}
  drawSprites();
}