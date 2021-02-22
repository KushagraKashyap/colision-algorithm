var fixedRect,movingRect;
var ob1,ob2;



function setup() {
  createCanvas(800,400);
  fixedRect= createSprite(200, 200, 50, 80);
  movingRect= createSprite(400, 200, 80, 30);

 ob1 = createSprite(300, 200, 50, 80);
 ob2= createSprite(370, 200, 80, 30);
  
ob1.shapeColor="green"
ob2.shapeColor="green"


 
}

function draw() {
  background(255,255,255);  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;

  if (isTouching (movingRect,ob2)){ 
  movingRect.shapeColor="red"
  ob2.shapeColor="red"





  }
else{

  movingRect.shapeColor="green"
  ob2.shapeColor="green"

}

  drawSprites();
}

function isTouching ( a1,a2){

  if(a1.x-a2.x<a2.width/2+a1.width/2 && 
    a2.x - a1.x < a2.width/2+a1.width/2 &&
    a1.y-a2.y<a2.width/2+a1.width/2 &&
    a2.y- a1.y<a2.width/2+a1.width/2  ) {
    return true
  
  }

  else{
  return false
  }

}
