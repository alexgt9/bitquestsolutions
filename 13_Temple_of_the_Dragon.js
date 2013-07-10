/*
 * You have a cannon object available to you which can send out projectiles.
 * The projectiles don't move terribly quickly but they will destroy your enemy
 * if they hit.
 *
 * The cannon object attached to this has the following methods:
 *
 * cannon.aim()  - returns the current direction the cannon is pointing.
 * cannon.aim(number) - points the cannon in the supplied direction.
 * cannon.fire() - fires a projectile.
 * cannon.ready() - tests to see if the cannon can be fired again.  The cannon
 *    requires a cooldown period after each firing.
 *
 *
 * Go up the elevator.
 */

this.on('start', function() {
  this.thrusters.top( true );
});

this.radar.ping();
this.radar.angle( 90 );

var fire = true;

this.on('radar:hit', function( angle, distance ) {

	if ( angle == 90 && distance < 120 )
	{
		this.move( 0 );
		this.radar.angle( 270 );
	};

	if ( fire && angle == 270 && distance > 90 && distance < 300 )
	{
		this.move( 320 );
		this.cannon.aim( 270 );
		this.cannon.fire();
	};

	this.radar.ping();
});

this.on( 'sensor:right' , function( state )
{
	this.move( 240 );
});

this.on( 'sensor:top' , function( state )
{
	fire = false;
	this.move( 240 );
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