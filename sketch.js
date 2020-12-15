var fixedRect, movingRect;

var car, wall;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  car = createSprite(400, 200, 50, 50);
  car.shapeColor = "pink";
  car.velocityX = 2;
  wall = createSprite(550, 200, 30, 100);
  wall.shapeColor = "white";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

if (isTouching (movingRect, fixedRect)){
  
  textSize("30");
  text("Touching !", 600,300);

}



  collide(car, wall);
  drawSprites();
}


