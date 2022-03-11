var ball, db, nodeloc, pos,ballImg,bgImg,bg;

function preload()
{
  bgImg=loadImage("Hot Air Ballon-01.png")
 
  ballImg=loadAnimation("Hot Air Ballon-02.png","Hot Air Ballon-03.png","Hot Air Ballon-04.png")
}

function setup() {
  createCanvas(1200,530);
  bg=createSprite(600,170,1200,530)
bg.addImage(bgImg)
bg.scale=0.48
ball= createSprite(70,400, 30, 30);
ball.addAnimation("hot Balloon",ballImg)
ball.scale=.5
 db=firebase.database();
 nodeloc=db.ref("ball/position").on("value",readPos) 

console.log("fdsfdfd")
}
 
function draw() {
  background(0);  
 if(pos != undefined) {
  if(keyDown("up")){    writePos(0,-1,0,-2); ball.scale=ball.scale-0.001  } else
  if(keyDown("down")){   writePos(0,1,0,2) ;ball.scale=ball.scale+0.001 } else
  if(keyDown("LEFT_ARROW")){   writePos(-1,0,-2,0)  } else
  if(keyDown("RIGHT_ARROW")){  writePos( 1,0,2,0)  } 
 }
  drawSprites();
  textSize(25)
  fill("blue")
  text("USE ARROW KEYS TO MOVE HOT BALLOON",450, 30)
}

function writePos(x,y,vx,vy)
{
  db.ref("ball/position").update({x: pos.x+ x, y: pos.y+ y})
  //ball.velocityX=vx;
  //ball.velocityY=vy;
}

function readPos(data)
{
  pos=data.val();
  ball.x=pos.x;
  ball.y=pos.y
  console.log("hi")
}
