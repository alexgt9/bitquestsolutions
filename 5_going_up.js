/*
 * No explanation.
 */

var bottom = false, right = false, top = false, left = false;

this.on('start', function() {
  this.thrusters.top(true);
});

this.on('sensor:bottom', function( state ) {
  this.thrusters.left(state);
  this.thrusters.top(false);
  bottom = true;
});

this.on('sensor:right', function( status ) {
  this.thrusters.bottom(status);
  this.thrusters.left(false);
  right = true;
});

this.on('sensor:top', function( status ) {
  this.thrusters.bottom(false);
  this.thrusters.right(status);
  top = true;
});

this.on('sensor:left', function( status ) {
  this.thrusters.right(false);
  this.thrusters.top( status );
  left = true;
});