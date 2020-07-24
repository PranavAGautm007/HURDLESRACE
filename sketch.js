var gameState=0;
var playerCount;
var database;
var form,player,game;
var allplayerinfo;
var jumper1,jumper2,jumper3,jumper4;
//var car1img,car2img,car3img,car4img;
var jumpers;
function preload (){
   /* car1img=loadImage("../Images/car1.png");
    car2img=loadImage("../Images/car2.png");
    car3img=loadImage("../Images/car3.png");
    car4img=loadImage("../Images/car4.png");*/
    




}
function setup(){
 createCanvas(displayWidth,displayHeight);
 database=firebase.database();
 game= new Game();
 game.getState();
 game.start(); 
 
 
}
function draw(){
    if(playerCount===4){
        game.update(1)
    }
    if(gameState===1 ){
      clear();
        game.play();
       
    }
    if(gameState===2){
       game.end();
    }
    }

