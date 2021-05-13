 var gameState = 1;
var PLAY=1;
var END=2;
var score=0;

var car1,car1Img;
var car2,car2Imgcoin,coinImg;
var road,rodImg,carG,coinG;
var invisibleroad1,invisibleroad2,invisibleroad3,invisibleroad4;

function preload(){
car1Img=loadImage("car1p.png");
  car2Img=loadImage("car1.png");
  roadImg=loadImage("road3.png");
  coinImg=loadImage("coin.png");
}

function setup() {
  
  createCanvas(400,600);
  
console.log(gameState) ;  
  road=createSprite(200,300);
  road.velocityY=-3;
  road.addImage(roadImg);
  road.scale=2;
  
 car1=createSprite(200,580,20,20);
  car1.addImage(car1Img);
  car1.scale=0.2;
  
invisibleroad1=createSprite(200,10,400,5);  
invisibleroad1.visible=false; 
  
 invisibleroad2=createSprite(200,595,400,5);  
invisibleroad2.visible=false; 
  
  invisibleroad3=createSprite(395,300,5,600);  
invisibleroad3.visible=false; 
  
  invisibleroad4=createSprite(5,300,5,600);  
invisibleroad4.visible=false; 
coinG=new Group();
carG=new Group();
score=0;

  car1.setCollider("circle",0,0,20)
car1.debug=true;
}

function draw() {
  background(0);
  if(gameState===PLAY){

    
car1.collide(invisibleroad1); 
car1.collide(invisibleroad2);
car1.collide(invisibleroad3);
car1.collide(invisibleroad4);
  
  

road.velocityY=-4;
  
 if(road.y<100){
   road.y=road.height/2;
 } 
  
if(keyDown("up")){
  car1.velocityY=-2;
}
  
  if(keyDown("down")){
    car1.velocityY=2;
  }
  
  if(keyDown("right")){
    car1.velocityX=2;
  }
  
  if(keyDown("left")){
    car1.velocityX=-2;
  }
    
 Createcoin(); 
 Createcar2 ();
  
  if(car1.isTouching(coinG)){
  
score=score+1;
coinG.destroyEach() ;   
} 
  else if(car1.isTouching(carG)){
  
gameState=END
    
}
} 
  
if(gameState===END){
  
  carG.destroyEach();
  coinG.destroyEach();
 
  carG.setVelocityYEach(0);
  coinG.setVelocityYEach(0);
  
  carG.visible=false;
  coinG.visible=false;
  
 car1.velocityY=0 
 car1.velocityX=0;
 road.velocityY=0;
  
  
  
}  
  
  

  
drawSprites();
  
  textSize(25) ;
text("score: " + score,50,20) ;



}

function Createcar2(){
  
 if(frameCount%250==0){
   car2=createSprite(Math.round(random(100,400)),50,20,20) ;
  car2.addImage(car2Img);
   car2.velocityY=1;
   car2.lifetime=500;
  car2.scale=0.1;
   carG.add(car2);
 } 
  
}

function Createcoin(){
  
if(frameCount%200==0){
  coin=createSprite(Math.round(random(100,400)),50,10,10);
  coin.addImage(coinImg);
  coin.velocityY=1;
  coin.lifetime=400;
  coin.scale=0.01;
  coinG.add(coin);
}  
    
}



