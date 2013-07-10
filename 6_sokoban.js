/*
 * The round switches won't stay on unless something is placed on top of them.
 */


this.on('start', function() {
  this.thrusters.left(true);
});

var right = false, bottom = false, pushed = false, topped = false;

this.on('sensor:right', function( status ) {
  this.thrusters.left( false );
  if ( status )
  {
  	this.thrusters.bottom( !topped );
  	this.thrusters.top( topped );
  }
  if ( pushed && status )
  {
    this.thrusters.left( false );
    this.thrusters.bottom( true );
    this.thrusters.top( false );
    right = false;
    bottom = true;
  }
});

this.on('sensor:top', function( status ) {
  if ( !pushed )
  {
    this.thrusters.left( status );
    this.thrusters.bottom( false );
    topped = true;
  }
});

this.on('sensor:left', function( status ) {
    this.thrusters.left( true );
    this.thrusters.top( false );
    pushed = true;
  
    if ( !status && pushed && bottom )
      this.thrusters.bottom( false );
});
  



this.on('sensor:bottom', function( status ) {
  if ( !status && pushed && !bottom )
   this.thrusters.top( true );
});