this.on('start', function() {
  move( 270, this );
});

this.radar.ping();

var direction = 270;

this.on( 'sensor:right', function( status ) {
	direction = ( direction + 90 ) % 360;
	move( direction, this );
});

this.on( 'sensor:left', function( status ) {
	direction = ( direction + 90 ) % 360;
	move( direction, this );
});

this.on( 'sensor:top', function( status ) {
	direction = ( direction + 90 ) % 360;
	move( direction, this );
});

this.on( 'sensor:bottom', function( status ) {
	direction = ( direction + 90 ) % 360;
	move( direction, this );
});

this.on('radar:hit', function( angle, distance ) {
	if ( angle == 0 )
	{
		distance_r = distance;
	}

	if ( angle == 90 )
	{
		distance_b = distance;
	}

	if ( angle == 180 )
	{
		distance_l = distance;
	}

	if ( angle == 270 )
	{
		distance_t = distance;
	}

	this.radar.angle( ( this.radar.angle + 90 % 360) )
});

var move = function( angle, obj )
{
	obj.thrusters.top( false );
	obj.thrusters.right( false );
	obj.thrusters.left( false );
	obj.thrusters.bottom( false );
    
    if ( angle > 270 || angle < 90 )
    {
		obj.thrusters.left( true );
    }

    if ( angle < 270 && angle > 90 )
    {
		obj.thrusters.right( true );
    }
    
    if ( angle > 0 && angle < 180 )
    {
		obj.thrusters.top( true );
    }
    
    if ( angle > 180 && angle < 360 )
    {
		obj.thrusters.bottom( true );
    }
}