/*
 * This other bot is helping-- somewhat.
 */

this.on('start', function() {
  this.thrusters.left( true );
});

var danger = false;

this.radar.ping();

this.on( 'radar:hit', function( angle, distance ) {
	if ( !danger && angle == 0 && distance < 55 )
    {
    	this.thrusters.left( false );
    	this.thrusters.bottom( true );
        this.radar.angle( 270 );
        danger = true;
    }
	if ( angle == 270 && distance < 280 )
    {
    	this.thrusters.bottom( false );
        this.radar.angle( 0 );
    }
    
	this.radar.ping();
});

this.on( 'radar:miss', function( angle, distance ) {
	this.thrusters.left( true );
});
