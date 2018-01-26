var Main = function(game){
var me = this;
 
    //Get the dimensions of the tile we are using
    me.tileWidth = me.game.cache.getImage('tile').width;
    me.tileHeight = me.game.cache.getImage('tile').height;
 
    //Set the background colour to blue
    me.game.stage.backgroundColor = '479cde';
 
    //Enable the Arcade physics system
    me.game.physics.startSystem(Phaser.Physics.ARCADE);
 
    //Add a platforms group to hold all of our tiles, and create a bunch of them
    me.platforms = me.game.add.group();
    me.platforms.enableBody = true;
    me.platforms.createMultiple(250, 'tile');
 
};

Main.prototype = {

	create: function() {

	},

	update: function() {

	},

	gameOver: function(){
		this.game.state.start('GameOver');
	}

};
