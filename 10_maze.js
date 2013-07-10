this.on('start', function() {
  this.move( 270 );
});

this.radar.ping();

var direction = 270;
var min_dinstace = 15, max_distance = 40;
var wait = 0, max_wait = 6;
var right_increment = 10, left_decrement = 40;

this.on('radar:hit', function( angle, distance ) {
	direction = angle;
	if ( distance <= min_dinstace )
	{
		direction = ( direction + right_increment ) % 359;
	}
	else
	{
		if ( distance > max_distance )
		{
			if ( wait == max_wait )
			{
				direction = ( direction + 360 - left_decrement ) % 359;
				wait = 0;
			}
			else
			{
				wait++;
			}
		}
	}

	this.move( direction );
	this.radar.angle( direction );
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
}