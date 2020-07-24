class Player{
    constructor(){
this.id=null;
this.name=null;
this.distance=0;
this.rank=null;
    }
    getCount(){
        var playerCountref = database.ref("playerCount");
        playerCountref.on("value",(data)=> {
            playerCount=data.val();
        
        })
}
updateCount(Count){
    database.ref("/").update({ 
        playerCount:Count
    })
}
 getRank(){
  database.ref("jumpersAtEnd").on("value",(data)=>{
      this.rank=data.val();
  })

}
static updateRank(Rank){
   database.ref("/").update({
       jumpersAtEnd:Rank
   })
}

    

update(){
    var playerindex="players/player"+this.id;
    database.ref(playerindex).set({
        name:this.name,
        distance:this.distance
    
    })
}
static getplayerinfo(){
    var playerinforef = database.ref("players");
    playerinforef.on("value",(data)=>{
        allplayerinfo=data.val();
    })

    
}

}