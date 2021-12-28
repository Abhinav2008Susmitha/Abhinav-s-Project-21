var space,spaceImg;
var rocket,rocketImg;
var asteriod,asteriod1,asteriod2,asteriod3,asteriodsGroup;
var gameState = "play"


function preload(){
    spaceImg = loadImage("Space.jpg");
    rocketImg = loadImage("Rocket.jpg");
    asteriod1 = loadImage("Asteriod1.jpg");
    asteriod2 = loadImage("Asteriod2.jpg");
    asteriod3 = loadImage("Asteriod3.jpg");
    
}

function setup() {
    createCanvas(600,500);

    space = createSprite(300,300);
    space.addImage(spaceImg);
    space.velocityY = 5;

    rocket = createSprite(300,450,30,30);
    rocket.addImage(rocketImg);
    rocket.scale = 0.5;

    asteriodsGroup = new Group();
    
}

function draw() {
    background(180);
    
    if (gameState === "play") {

        if(keyDown("LEFT_ARROW")){
            
            rocket.x = rocket.x -3;

        }
        if(keyDown("RIGHT_ARROW")){
            
            rocket.x = rocket.x +3;

        }
        if(keyDown("UP_ARROw")){
            
            rocket.velocityY = -10;

        }
        rocket.velocityY = rocket.velocityY + 0.3;

        if(space.y > 300){
            space.y = 200;
        }     
        spawnAsteriods();
        if(asteriodsGroup.isTouching(rocket) || rocket.y > 600){
            rocket.velocityY = 0;
            rocket.destroy();
            gameState = "end"
        }
        drawSprites();
    }

    if (gameState === "end"){
        stroke("yellow");
        fill("yellow");
        textSize(30);
        text("Game Over", 230,250)
      }
    
}
function spawnAsteriods(){
    if (frameCount % 240 === 0) {
       asteriod = createSprite(200,100,20,20);
       asteriod.velocityY = 5;
       asteriod.x = Math.round(random(50,550))
      
       var rand = Math.round(random(1,3));
       switch(rand){
        case 1: asteriod.addImage(asteriod1);
                 break;
        case 2: asteriod.addImage(asteriod2);
                 break;
        case 3: asteriod.addImage(asteriod3);
                 break;
        default: break;
        
       }
       asteriodsGroup.scale = 0.3;
       asteriodsGroup.add(asteriod);
      
    }

}