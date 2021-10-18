var issImg, spaceCraftImg;
var iss, spaceCraft;

function setup() {
  createCanvas(800,400);
  iss =createSprite(400, 100, 50, 50);
  spaceCraft = createSprite(400, 300, 50, 50);
 iss.addImage("iss", issImg)
 iss.scale = 0.5
 spaceCraft.addImage("spaceCraft", spaceCraftImg)
 spaceCraft.scale = 0.2
}

function preload(){
  backgroundImage = loadImage("spacebg.jpg");
  issImg = loadImage("iss.png");
  spaceCraftImg = loadImage("spacecraft1.png")
}

function draw() {
  background(255,255,255);  
  image(backgroundImage, 0, 0, width, height);
  drawSprites();

  if(keyDown(LEFT_ARROW)){
    spaceCraft.x = spaceCraft.x - 2;
  }

  if(keyDown(RIGHT_ARROW)){
    spaceCraft.x = spaceCraft.x + 2;
  }

  if(keyDown(UP_ARROW)){
    spaceCraft.y = spaceCraft.y - 2;
  }

  if(keyDown(DOWN_ARROW)){
    spaceCraft.y = spaceCraft.y + 2;
  }

  /*if(spaceShip.isTouching(iss)){
    text("Docking Successful", 400, 350)
  }*/
}