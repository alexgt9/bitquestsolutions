/*
 * Open all three doors to exit.
 *
 * The answer is 5.
 */

this.on('start', function() {
  this.thrusters.left( true );
});

var inside = false;

this.radar.ping();

this.on('radar:hit', function( angle, distance ) {
	console.log( distance );
	if ( !inside && angle == 0 && distance < 380 )
    {
		this.thrusters.left( false );
  		this.thrusters.bottom( true );
    	this.radar.angle( 270 );
        inside = true;
    }
    
    if ( angle == 270 && distance < 130 )
    {
		this.thrusters.left( false );
  		this.thrusters.bottom( true );
    }
    
    if ( angle == 270 && distance < 80 )
    {
		this.thrusters.left( true );
  		this.thrusters.bottom( false );
    	this.radar.angle( 0 );
    }
    
    if ( inside && angle == 0 && distance < 170 )
    {
		this.thrusters.left( false );
  		this.thrusters.top( true );
    	this.radar.angle( 90 );
    }
    
    if ( angle == 90 && distance < 300 )
    {
		this.thrusters.right( true );
  		this.thrusters.top( false );
    	this.radar.angle( 180 );
    }
    
    if ( angle == 180 && distance < 260 )
    {
		this.thrusters.right( false );
  		this.thrusters.top( true );
    	this.radar.angle( 180 );
    }
    
    
    this.radar.ping();
});

this.on( 'sensor:right', function( status ) {
	this.thrusters.left( false );
	this.thrusters.right( true );
});

this.on( 'sensor:left', function( status ) {
	this.thrusters.left( true );
	this.thrusters.right( false );
});