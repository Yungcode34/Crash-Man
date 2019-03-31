//Create a new scene
let gameScene = new Phaser.Scene('Game');

// Load assets
gameScene.preload = function(){

    this.load.image('background', 'assets/background.png');
    this.load.image('player', 'assets/player.png');
    this.load.image('enemy', 'assets/dragon.png');
    this.load.image('cop', 'assets/cop.png');
};

// called once after pre load
gameScene.create = function(){
    let bg = this.add.sprite(0, 0, 'background');

    bg.setPosition(640/2, 360/2);

    let player = this.add.sprite(50, 180, 'player');

    player.setScale(1, 1);

    let enemy = this.add.sprite(250, 180, 'enemy');

    this.enemy1 = this.add.sprite(450, 180, 'cop');

    //flip 
    enemy.flipX = true;
    
};

//this is fps
gameScene.update = function(){
    //this.enemy1.x += 0.3;
    //this.enemy1.angle += .3;
    /*if(this.enemy1.scaleX < 2 ){
        this.enemy1.scaleX += 0.01;
        this.enemy1.scaleY += 0.01;
    }
        */


};

gameScene.preload = function(){
}

gameScene.create = function(){
}

//configuration of the game 
let config = {
    type: Phaser.AUTO, //phaser will use Webgl or canvas 
    width:640,
    height:360, 
    scene:gameScene
};
// create new game and pass configuration

let game = new Phaser.Game(config);

