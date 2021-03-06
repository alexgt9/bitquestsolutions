/*
 * Some times it helps to retain some state, state like "did I just come from 
 * back there?" You can keep any data you wish to preserve across events 
 * in the closure created by the initial execution of your code.
 *
 * For example:
 *
 *   var beenThere = false;
 *   
 *   this.on('sensor:left', function() {
 *      beenThere = true;
 *   });
 *
 *   this.on('sensor:right', function() {
 *      if (beenThere) {
 *         // already been left
 *      }
 *   });
 */

this.on('start', function() {
  this.thrusters.left(true);
  this.thrusters.bottom(true);
});

this.on('sensor:right', function() {
  console.log( 'right' );
  this.thrusters.left(true);
  this.thrusters.bottom(false);
  this.thrusters.top(true);
});