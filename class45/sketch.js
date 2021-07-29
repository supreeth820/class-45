var Spaceship;
var astroids;
var spaceshipImage;
var astroid1Img;
var astroid2Img;
var astroid3Img;
var astroid4Img;
function preload(){
spaceshipImage=loadImage("spaceship.png");
astroid1Img=loadImage("astroid1.png");
astroid2Img=loadImage("astroid2.png");
astroid3Img=loadImage("astroid3.png");
astroid4Img=loadImage("astroid4.png");
}

function setup(){
    createCanvas(600,600);
    Spaceship =createSprite(500,500,50,100);
    Spaceship.addImage(spaceshipImage);
    Spaceship.scale=0.3;

}

function draw(){
    background("black")
    if(keyDown(RIGHT_ARROW)){
        Spaceship.x =Spaceship.x+3;
    }
    if(keyDown(LEFT_ARROW)){
        Spaceship.x =Spaceship.x-3;
    }
    SpawnAstroids();
  drawSprites()


}

function SpawnAstroids(){
 if(frameCount %110===0){
     var astroids =createSprite(100,0,100,100);
     astroids.x =Math.round(random(20,570));
     astroids.velocityY=3;
     var num=Math.round(random(1,4));
     switch(num){
         case 1:
             astroids.addImage(astroid1Img);
             break;
             case 2:
             astroids.addImage(astroid2Img);
             break;
             case 3:
             astroids.addImage(astroid3Img);
             break;
             case 4:
             astroids.addImage(astroid4Img);
             break;
     }
     astroids.scale=0.5;
     astroids.lifetime=200;
 }   
}