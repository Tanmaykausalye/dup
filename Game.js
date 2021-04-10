
class Game{

 constructor(){

 }

 getState(){

var getGameState = database.ref('gameState')
getGameState.on("value",function(data){

gameState = data.val()

})
}

update(state){

gameState.ref('/').update({

  gameState:state  
})
}

async start(){

if(gameState === 0 ){

player = new Player()
var playerCountref = await database.ref('playerCount').once("value")  

if(playerCountref.exists()){

playerCount = playerCountref.val()
player.getCount()
}

form = new Form()
form.display()

}
}

play(){

//form.hideForm()

  Player.getPlayerInfo()

if(allPlayers!==undefined){

  background(lawn)

var index = 0
var x = 170
var y = displayWidth-250

for(var plr in allPlayers){

index += 1
x = displayWidth-[plr].distance
y = displayHeight-300

players[index - 1].x = x;
players[index - 1].y = y;

}

if(index === player.index){

fill("yellow")
text(allPlayers[plr].name,x-25,y+25) 

}

else{
fill("white")
}
textSize(20)
text(allPlayers.player1.score,displayWidth+400,displayHeight+20)
textSize(20)
text(allPlayers.player2.score,displayWidth+400,displayHeight+50)

}

if(keyDown===UP_ARROW && player.index!==null){

  player.y = player.y-10

}

if(keyDown===LEFT_ARROW && player.index!==null){

  player.x = player.x-10
  
  }
  
  if(keyDown===RIGHT_ARROW && player.index!==null){

    player.x = player.x+10
    
    }

    if(frameCount%50===0){

    fruits = createSprite(random(200,displayWidth-200),random(0,displayHeight-100))
    fruits.velocityY = random(5,9)
    fruits.velocityX= random(-5,5)

    var rand = Math.round(random(1,3))
switch(rand){

case 1 : fruits.addImage("banana",banana)  
break;

case 2 : fruis.addImage("apple",apple)
break;

case 3 : fruits.addImage("orange",orange)
break;

//case 4 : fruits.addImage("dragonFruit",dragonFruit)
//break;
}

fruitGroup.add(fruits)
  }

if(player.index!==null){

for(var i = 0 ; i<fruitGroup.length ; i++ ){

if(fruitGroup.get(i).isTouching(players)){

fruitGroup.get(i).destroy()
player.score += 1
player.update()

}

}
}


}
}