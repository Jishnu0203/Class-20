var Box, Box1;

function setup() {
  createCanvas(800,400);
  Box = createSprite(400, 200, 50, 50);
  Box1 = createSprite(200, 400, 40, 60);
}

function draw() {
  background(255,255,255);
  Box.x = World.mouseX; 
  Box.y = World.mouseY; 
  if (Box.x - Box1.x < Box.width/2 + Box1.width/2 && Box1.x - Box.x < Box1.width/2 + Box.width/2 && 
    Box.y - Box1.y < Box.height/2 + Box1.height/2 && Box1.y - Box.y < Box1.height/2 + Box.height/2){
Box.shapeColor = "green";
Box1.shapeColor = "green";
  }  
else{
  Box.shapeColor = "red";
  Box1.shapeColor = "red";
}
  drawSprites();
}