class Form{

    constructor(){
    
     this.input = createInput("").attribute("placeholder","name")   
     this.button = createButton('PLAY')
     this.greeting = createElement('h2')
     this.title = createElement('h2')
     this.reset = createButton('Reset') 
     this.guide = createElement('h2')
    
     this.next = createButton('Next')
    }
    
    hideform(){
    
    this.button.hide()
    this.input.hide()
    this.greeting.hide()
    this.title.hide()
    
    }
    
    display(){
    
    this.title.html("runner")
    this.title.position(displayWidth/2-30,10)
    
    this.input.position(displayWidth/2-40,displayHeight/2-80)
    
    this.button.position(displayWidth/2+30,displayHeight/2)
    
    this.reset.position(displayWidth-100,20)
    
    
    
    
    this.button.mousePressed(()=>{
    
    this.button.hide()
    this.input.hide()
    
    player.name = this.input.value()
    
    playerCount += 1
    
    player.index = playerCount
    
    player.update()
    player.updateCount(playerCount)
    
    //guideline = new Guideline()
    
    //guideline.display()
    
    //this.greeting.html("Lets Play "+ player.name)
    //this.greeting.position(displayWidth/2-70,displayHeight/4)
    
    this.guide.html("1. You will be playing with a live player <br> 2. You have to collect more fruits than your opponent to win the game <br> 3. You will be able to move with ARROW keys <br> 4. At last who won and a scoreboard will appear ")
    this.guide.position(displayWidth/5-40,displayHeight/4-80)
    
    this.next.position(displayWidth/2+30,displayHeight/2)
    
    this.next.mousePressed(()=>{
        game.play()
    })
    })
    
    this.reset.mousePressed(()=>{
    
    player.updateCount(0)
    game.update(0)
    
    database.ref('/').update
    ({players:null})
    
    }
    )
    

    
    }
    
    }
    