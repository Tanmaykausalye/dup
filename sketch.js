var form,game,player,database,playerCount
var guideline
var lawn,apple,banana,dragonFruit,orange,burger
var person1Img, person2Img

var gameState = 0
var allPlayers,player1,player2,players
var fruits, fruitGroup
var burger, burgerGroup

function preload(){

burger = loadImage("image/burger.png")

apple = loadImage("image/apple.png")
banana = loadImage("image/banana.png")
orange = loadImage("image/orange.png")
//dragonFruit = loadImage("image/dragonFruit")

lawn = loadImage("image/grass.png")

person1 = loadImage("image/person1.png")
person2 = loadImage("image/person2.png")

}
function setup() {
  createCanvas(displayWidth-20,displayHeight-30);

 database = firebase.database()

//form = new Form()
game = new Game()
game.getState()
game.start()

  }

function draw() {
  background(255,255,255);  
  
if(playerCount === 2){

game.update(1)

}

if(gameState===1){

game.play()

}

if(gameState === 2){
  game.end()
}

}