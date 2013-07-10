/*
 * The square below is a pressure switch. Move your robot over it to trigger
 * the change to the on state and open the door.
 */

this.on('start', function() {
  this.thrusters.left(true);
  this.thrusters.top(true);
});

this.on('sensor:bottom', function() {
  this.thrusters.left(true);
  this.thrusters.bottom(true);
  this.thrusters.top(false);
});