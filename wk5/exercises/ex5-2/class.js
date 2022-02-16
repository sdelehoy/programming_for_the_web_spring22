let bubble1;
let bubble2;
let bubble3;

function setup() {
  createCanvas(600, 400);
  bubble1 = new Bubble(200, 200, 80, 'magenta');
  bubble2 = new Bubble(400, 200, 40, 'cyan');
  bubble3 = new Bubble(300, 300, 100, 'yellow');
}

function draw() {
  background(0);
  bubble1.move();
  bubble1.show();
  bubble2.move();
  bubble2.show();
  bubble3.move();
  bubble3.show();
}

class Bubble {
  constructor(x, y, d, c) {
    this.x = x;
    this.y = y;
    this.d = d;
    this.c = c;
  }
  move() {
    this.x = this.x + random(-7, 7);
    this.y = this.y + random(-5, 5);
  }
  show() {
    stroke(this.c);
    strokeWeight(4);
    noFill();
    circle(this.x, this.y, this.d);
  }
}