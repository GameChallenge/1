var game = new Phaser.Game(800, 550, Phaser.AUTO, 'game');

var ball;
var paddle;
var paddleWidth = 100; 
var bricks;
var score = 0;


var mainState = {
	 preload: function() { 
        // Change the background color of the game
		    game.stage.backgroundColor = '#000';

		    game.load.image('white', 'assets/white.png'); 

    },

    create: function () {
    		game.physics.startSystem(Phaser.Physics.ARCADE);

    		game.physics.arcade.checkCollision.down = false;

    		paddle = game.add.tileSprite(game.world.centerX - paddleWidth / 2, 510, paddleWidth, 20, 'white');

    		bricks = game.add.group();
    		bricks.enableBody = true;
		    bricks.physicsBodyType = Phaser.Physics.ARCADE;

		    var brick;

		    for (var y = 0; y < 4; y++) {
		        for (var x = 0; x < 15; x++) {
            		brick = bricks.create(120 + (x * 36), 100 + (y * 52), 'white');
		            brick.body.bounce.set(1);
		            brick.body.immovable = true;
        		}
   			}
    }
}


game.state.add('main', mainState);  
game.state.start('main');  

