function setup() {
  createCanvas(200, 200);
}

function polygon(x, y, radius, npoints) {
  let angle = TWO_PI / npoints;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius;
    let sy = y + sin(a) * radius;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}

function createTile() {
  translate(0, 0);
  fill('purple');
  noStroke();
  rect(0, 0, 200, 200);
  fill('orange');
  circle(100, 100, 100);
  noFill();
  stroke('magenta');
  strokeWeight(3);
  polygon(100, 100, 85, 6);
  rotate(90);
}

function draw() {
  createTile();
}