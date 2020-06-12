var car1,car2,car3,car4
var wall1,wall2,wall3,wall4


function setup() {
  
  createCanvas(800,400);

  wall1 = createSprite(200,200,50,100);
  wall1.shapeColor = "red";
  

  wall2 = createSprite(200,200,50,100);
  wall2.shapeColor = "blue";
  

  wall3 = createSprite(200,200,50,100);
  wall3.shapeColor = "green";
  
  wall4 = createSprite(200,200,50,100);
  wall4.shapeColor = "yellow";
  
  car1 = createSprite(200,200,50,100);
  car1.shapeColor = "red";
  car1.debug = true;

  car2 = createSprite(400, 200, 80,30);
  car2.shapeColor = "blue";
  car2.debug = true;

  car3 = createSprite(200,200,50,100);
  car3.shapeColor = "green";
  car3.debug = true;

  car4 = createSprite(200,200,50,100);
  car4.shapeColor = "yellow";
  car4.debug = true;

}

function draw() {
  background(255,255,255);
  
  car1.x = World.mouseX 
 car1.y = World.mouseY 

 car3.x = World.mouseX 
 car3.y = World.mouseY 

 car4.x = World.mouseX 
 car4.y = World.mouseY 

  car2.x = World.mouseX 
  car2.y = World.mouseY 

  
  drawSprites();

}

if(car1.X - wall1.X <wall1.width/2 + car1.width/2
  && wall1.X - car1.X < wall1.width/2 + car1.width/2 )
 {

  Text("ok",5,10)
  
}

if(car2.X - wall2.X <wall2.width/2 + car2.width/2
  && wall2.X - car2.X < wall2.width/2 + car2.width/2 )
 {

  Text("ok",200,10)
  
}

if(car3.X - wall3.X <wall3.width/2 + car3.width/2
  && wall3.X - car3.X < wall3.width/2 + car3.width/2 )
 {

  Text("ok",5,20)

}

if(car4.X - wall4.X <wall4.width/2 + car4.width/2
  && wall4.X - car4.X < wall4.width/2 + car4.width/2 )
 {

  Text("ok",100,100)
  
}