class Game{
    constructor(){

    }
    getState(){
        var gameStateref=database.ref("gameState");
        gameStateref.on("value",function(data){

            gameState=data.val();

        })
    }
    update(state){
        database.ref("/").update({
            gameState:state
        })
    }
    async start(){
        if(gameState===0){
            
            player=new Player();
            var playercountref=await database.ref("playerCount").once("value");
            if(playercountref.exists()){
                playerCount=playercountref.val();
                player.getCount();
            }
           
            form= new Form();
            form.display();
        }
        jumper1= createSprite(100,200);
       
        
        jumper2= createSprite(300,200);
        
        
        jumper3= createSprite(500,200);
       
        jumper4= createSprite(700,200);
       /* car2.addImage("c2",car2img);
        car3.addImage("c3",car3img);
        car4.addImage("c4",car4img);*/
        jumpers=[jumper1,jumper2,jumper3,jumper4];
    }
    play(){
        form.hide();
        //textSize(30);
        //text("Let the game begin",120,100);
        Player.getplayerinfo();
        player.getRank();
        if(allplayerinfo!==undefined){
            
            image(track,0,-displayHeight*4,displayWidth,displayHeight*5);
            var index=0;
            var x = 200;
            var y;
            
        for(var i in allplayerinfo){
            index=index+1;
            x = x+200;
            y=displayHeight-allplayerinfo[i].distance;
            jumpers[index-1].x=x;
            jumpers[index-1].y=y;
            if(index === player.id){
                jumpers[index-1].shapeColor="red";
                 camera.position.x=displayWidth/2;
                 camera.position.y=cars[index-1].y;
                 stroke(10);
                 fill("red");
                 ellipse(x,y,60,60);

            }
            /*if(i==="player"+player.id){
               fill("red");
            }else {
                fill("black");
            }
               
        // displayposition+=20;
         //textSize(15);
         //text(allplayerinfo[i].name+":"+ allplayerinfo[i].distance,120,displayposition);
*/

        }
        }
        if(keyIsDown(UP_ARROW)&& player.id!==null){
            player.distance+=10;
            player.update();
        }
        if(player.distance>3270){
            gameState=2;
            player.rank+=1;
            Player.updateRank(player.rank);
        }
        drawSprites();    
    }
  end(){
      console.log("game Ended");
      console.log(player.rank);
      game.update(2);
      
  }
}