/* Used as a guide:
The Coding Train video Simple Harmonic Motion-The Nature of Code
https://www.youtube.com/watch?v=GvwPwIUSYqE
Chapter 3. Ocillation in The Nature of Code by Daniel Shiffman
https://natureofcode.com/book/chapter-3-oscillation/#chapter03_section6 */

// set up an array
let ocillators = [];

function setup() {
  let cnv = createCanvas(700, 700);
  cnv.parent('canvas');
  colorMode(HSB);
  // loop to create new instances of circles
  for (let i = 0; i < 8; i++) {
    // value that will increment
    let angle = createVector();
    // amount of incrementation
    let velocity = createVector(random(-0.04, 0.04), random(-0.04, 0.04));
    // length of ocillation from center
    let amplitude = createVector(random(width / 2 - 20), random(height / 2 - 20));
    let hue = random(0, 360);
    // create new instances in array
    ocillators[i] = new Oscillator(angle, velocity, amplitude, hue);
  }

}

function draw() {
  background(0, 0, 0);
  // loop through items in array and display
  for (let i = 0; i < ocillators.length; i++) {
    ocillators[i].ocillate();
    ocillators[i].display();
  }
}

class Oscillator {
  constructor(angle, velocity, amplitude, hue) {
    this.angle = angle;
    this.velocity = velocity;
    this.amplitude = amplitude;
    this.hue = hue;
  }
  ocillate() {
    //increment angle
    this.angle.add(this.velocity);
  }
  display() {
    // calculate x with sine wave
    let x = sin(this.angle.x) * this.amplitude.x;
    // calculate y with sine wave
    let y = sin(this.angle.y) * this.amplitude.y;
    // start new drawing state
    push();
    // start drawing from the center
    translate(width / 2, height / 2);
    stroke(0, 0, 100);
    fill(this.hue, 100, 100);
    line(0, 0, x, y);
    circle(x, y, 35);
    // return to original drawing state
    pop();
  }
}
