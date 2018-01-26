var Preload = function(game){};

Preload.prototype = {

	preload: function(){ 
 this.game.load.image('tile', 'assets/tile.png');
    this.game.load.spritesheet('dude', 'assets/Moonkeys.png', 32, 32);
	},

	create: function(){
		this.game.state.start("Main");
	}
}
