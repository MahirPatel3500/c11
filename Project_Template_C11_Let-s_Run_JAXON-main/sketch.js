    
 var border,border;   
var player_running,path,pathimg,power,player
function preload(){
  pathimg = loadImage("path.png")
  player_running = loadAnimation("Runner-2.png","Runner-1.png")
  
}

function setup(){
  createCanvas(400,400)
  

  createCanvas(400,400);
  //create sprites here

  path = createSprite(200,200)
  path.addImage("path",pathimg);
  player = createSprite(180,340,20,20)
  player.addAnimation("running",player_running);
  player.scale =0.08;
 
  
}

function draw() {
  background("white");
  path.velocityY = 4;
  player.x = World.mouseX
  if(path.y > 400){
    path.y = height/2
  }


  drawSprites();
  
}
