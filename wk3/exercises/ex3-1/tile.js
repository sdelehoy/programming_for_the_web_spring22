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
  
  noFill();
  stroke('magenta');
  strokeWeight(4);
  line(59, 171, 100, 100);
  line(100, 100, 181, 100);
  line(59, 29, 100, 100);
  
  noStroke();
  fill('orange');
  circle(100, 100, 100);
  
  noFill();
  stroke('magenta');
  strokeWeight(4);
  polygon(100, 100, 85, 6);
  line(18, 100, 100, 100);
  line(100, 100, 140, 29);
  line(100, 100, 141, 171);

  
}

function draw() {
  createTile();
}