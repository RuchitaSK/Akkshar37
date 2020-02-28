class Form{
    constructor(){
     this.input = createInput("name = ");
     this.button = createButton('submit');
     this.greeting = createElement('h2');
    }
    hide(){
        this.greeting.hide();
        this.input.hide();
        this.button.hide();
    }

   display(){
       var title = createElement('h1');
       title.html("car racing game");
       title.position(displayWidth/2-60,0);
       this.input.position(displayWidth/2-40,displayHeight/2-80);
       this.button.position(displayWidth/2+55 , displayHeight/2);
       this.button.mousePressed(()=>{
           this.input.hide();
           this.button.hide();
           player.name = this.input.value();
           playerCount+=1;
           player.index = playerCount;
           player.update();
        player.updateCount(playerCount);
        
       this.greeting.html("whats up player"+player.name);
        this.greeting.position(displayWidth/2-40,displayHeight/2-50);       
    })
   }

}