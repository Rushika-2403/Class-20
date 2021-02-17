var rect1,mrect2,nrect1,nrect2,nrect3;

function setup() {
  createCanvas(800,400);
  rect1=createSprite(400, 200, 50, 50);
  rect1.shapeColor='Green';
  rect1.debug
  mrect2=createSprite(100,300,20,20);
  mrect2.shapeColor='Green';

  nrect1=createSprite(100,100,50,100);
  nrect2=createSprite(500,250,100,50);
  nrect3=createSprite(200,150,50,50);
}

function draw() {
  background('black');  

mrect2.y=World.mouseY;
mrect2.x=World.mouseX;

  if(mrect2.isTouching(nrect1)|| mrect2.isTouching(nrect2)||mrect2.isTouching(nrect3)){
    mrect2.shapeColor='red';
    rect1.shapeColor='red';
  }
  else{
    rect1.shapeColor='green';
    mrect2.shapeColor='green';
  }
  drawSprites();
}
