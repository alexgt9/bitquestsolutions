/*
 * Do it.
 *
 */

this.on('start', function() {
  this.thrusters.top( true );
});

var start = true, first = false, second = false, third = false, four = false, five = false, six = false;
var seven = false, eight = false, nine = false, ten = false;
this.radar.ping();
this.radar.angle( 90 );

this.on('radar:hit', function( angle, distance ) {

	if ( ten && distance < 10 )
	{
		direction = 0;
		this.move( direction );
		this.radar.angle( direction );
		ten = false;
	};

	if ( nine && distance < 190 )
	{
		direction = 270;
		this.move( direction );
		this.radar.angle( direction );
		nine = false;
		ten = true;
	};

	if ( eight && distance < 45 )
	{
		direction = 0;
		this.move( direction );
		this.radar.angle( direction );
		eight = false;
		nine = true;
	};

	if ( seven && distance < 65 )
	{
		direction = 90;
		this.move( direction );
		this.radar.angle( direction );
		seven = false;
		eight = true;
	};

	if ( six && distance < 10 )
	{
		direction = 0;
		this.move( direction );
		this.radar.angle( direction );
		six = false;
		seven = true;
	};

	if ( five && distance < 40 )
	{
		direction = 90;
		this.move( direction );
		this.radar.angle( direction );
		five = false;
		six = true;
	};

	if ( four && distance < 10 )
	{
		direction = 180;
		this.move( direction );
		this.radar.angle( direction );
		four = false;
		five = true;
	};

	if ( third && distance < 10 )
	{
		direction = 270;
		this.move( direction );
		this.radar.angle( direction );
		third = false;
		four = true;
	};

	if ( second && distance < 50 )
	{
		direction = 180;
		this.move( direction );
		this.radar.angle( direction );
		second = false;
		third = true;
	};

	if ( first && distance < 10 )
	{
		direction = 90;
		this.move( direction );
		this.radar.angle( direction );
		first = false;
		second = true;
	};

	if ( start && distance < 20 )
	{
		this.move( 0 );
		this.radar.angle( 0 );
		start = false;
		first = true;
	};

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