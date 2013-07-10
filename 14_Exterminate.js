/*
 * Destroy the other bot before it destroys you.
 *
 */

this.on('start', function() {
  this.move( 110 );
});

this.radar.ping();

var aim = 90;

this.on('radar:hit', function( angle, distance ) {

	aim += 5;
	this.cannon.aim( aim );
	this.cannon.fire();

	this.radar.ping();
});

this.move = function( angle )
{
	this.thrusters.top( false );
	this.thrusters.right( false );
	this.thrusters.left( false );
	this.thrusters.bottom( false );

    if ( angle > 270 || angle < 90 )
    {
		this.thrusters.left( true );
    }

    if ( angle < 270 && angle > 90 )
    {
		this.thrusters.right( true );
    }

    if ( angle > 0 && angle < 180 )
    {
		this.thrusters.top( true );
    }

    if ( angle > 180 && angle < 360 )
    {
		this.thrusters.bottom( true );
    }
};