let bubbles = [];

function setup() {
  createCanvas(600, 400);
  for (let i = 0; i < 10; i++) {
    let x = random(width);
    let y = random(height);
    let d = random(10, 100);
    let r = random(0, 255);
    let g = random(0, 255);
    let b = random(0, 255);
    let c = color(r, g, b);
    bubbles[i] = new Bubble(x, y, d, c)
  }
}

function draw() {
  background(0);
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].move();
    bubbles[i].show();
  }
}

class Bubble {
  constructor(x, y, d, c) {
    this.x = x;
    this.y = y;
    this.d = d;
    this.c = c;
  }
  move() {
    this.x = this.x + random(-5, 5);
    this.y = this.y + random(-5, 5);
  }
  show() {
    stroke(this.c);
    strokeWeight(4);
    noFill();
    circle(this.x, this.y, this.d);
  }
}