var backImage,backgr;
var player, player_running;
var ground,ground_img,banana_IMG,banana,i,stone,FoodGroup;
var stone_IMG;

var END =0;
var PLAY =1;
var gameState = PLAY;
var score = 0;

function preload(){
  backImage=loadImage("jungle.jpg");
  player_running = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
 banana_IMG = loadImage("banana.png")
 stone_IMG = loadImage("stone.png")
}

function setup() {
  createCanvas(800,400);
  
  backgr=createSprite(0,0,800,400);
  backgr.addImage(backImage);
  backgr.scale=1.5;
  backgr.x=backgr.width/2;
  backgr.velocityX=-4;
  
  player = createSprite(100,340,20,50);
  player.addAnimation("Running",player_running);
  player.scale = 0.1;
  
  ground = createSprite(400,350,800,10);
  ground.x=ground.width/2;
  ground.visible=false;

  FoodGroup = new Group();
  
}

function draw() { 
  background(0);
  textSize(20)
 fill("red")

  if(gameState===PLAY){
  
  if(backgr.x<100){
    backgr.x=backgr.width/2;
  }
  
    if(keyDown("space") ) {
      player.velocityY = -12;
    }
    player.velocityY = player.velocityY + 0.8;
  
    player.collide(ground);
 
    spawnFood();
    spawnObstacle();

    if(FoodGroup.isTouching(player))
    {
      FoodGroup.destroyEach();
      score++;
    }
  }

  drawSprites();
  text("Score : " + score,700,50)
}

function spawnFood()
{
  if(frameCount % 100 == 0)
  {
    banana = createSprite(700,random(100,200));
    banana.addImage(banana_IMG);
    banana.scale = 0.05;
    banana.velocityX = -5;
    banana.lifetime = 200;
    FoodGroup.add(banana)
  }
  
}

function spawnObstacle()
{
  if(frameCount % 350 == 0)
  {
    stone = createSprite(700,320);
    stone.addImage(stone_IMG);
    stone.scale = 0.2;
    stone.velocityX = -5;
    stone.lifetime = 200;
  }
}



