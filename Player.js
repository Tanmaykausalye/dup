class Player{
  constructor(){

this.index = null
this.name = null
this.distance = 0
this.score = 0

  }

getCount(){

var getPlayerCount = database.ref('playerCount')
getPlayerCount.on("value",function(data){
playerCount = data.val()

})
}

updateCount(count){

database.ref('/').update({

playerCount : count

})

}
update(){

//var playerIndex = "players/player"+this.index
//database.ref(playerIndex).set({

  //name:this.name,
  //score:this.score,
  //d//istance:this.distance

//})
//}
var playerIndex = "players/player"+this.index
database.ref(playerIndex).set({
    name:this.name,
    distance:this.distance,
    score : this.score
})
}

static getPlayerInfo(){

var playerInforef = database.ref('players')
playerInforef.on("value",(data)=>{

allPlayers = data.val()

})
}

}