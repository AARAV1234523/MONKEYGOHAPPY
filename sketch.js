
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score,survivalTime

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  //create monkey
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running)
  monkey.scale = 0.1;
  
  
  ground = createSprite(400,350,900,10);
  ground.velocityX = -4;
  ground.x = ground.width/2;
  console.log(ground.x);
 
  FoodGroup = createGroup();
  ObstacleGroup = createGroup();
  
  var survivalTime = 0;
  var score = 0;
}


function draw() {
  createCanvas(400, 400);
  background(255);
  
  stroke("white");
  textSize(20);
  fill("white");
  text("Score: "+ score, 500,50);
  
  stroke("back");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate());
  text("Survival Time: "+ survivalTime, 100,50);
  
    if (ground.x < 0){
      ground.x = ground.width/2;
    }

   //jump when the space key is pressed
    if(keyDown("space")) {
        monkey.velocityY = -12;
    }
 
   //add gravity
    monkey.velocityY = monkey.velocityY + 0.8
  
  //stop monkey from falling down
   monkey.collide(ground);
    
  Food();
  Obstacles();
  
  drawSprites();
}

function Food(){
  if (frameCount % 80 === 0) {
    var banana = createSprite(600,120,40,10);
    banana.y = Math.round(random(120,200));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -3;
    
     //assign lifetime to the variable
   banana.lifetime = 200;
   FoodGroup.add(banana);
}
}

function Obstacles(){
  if (frameCount % 300 === 0) {
    var obstacle = createSprite(330,330,40,10);
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.1;
    obstacle.velocityX = -3;
    
     //assign lifetime to the variable
   obstacle.lifetime = 200;
   ObstacleGroup.add(obstacle);
}
}


