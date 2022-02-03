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
  
  noStroke();
  fill('rgba(0, 255, 255, 0.3)');
  beginShape();
  vertex(59, 26);
  vertex(142, 26);
  vertex(185, 100);
  vertex(100, 100);
  vertex(59, 174);
  vertex(16, 100);
  
  endShape();
  
  noFill();
  stroke('magenta');
  strokeWeight(2);
  line(42, 200, 100, 100);
  line(100, 100, 200, 100);
  line(42, 0, 100, 100);
  
  stroke('red');
  fill('orange');
  circle(100, 100, 100);

  noStroke();
  fill('rgba(0, 255, 255, 0.4)');
  beginShape();
  vertex(16, 100);
  vertex(100, 100);
  vertex(142, 26);
  vertex(185, 100);
  vertex(142, 174);
  vertex(59, 174);
  endShape();

  noFill();
  stroke('magenta');
  strokeWeight(2);
  polygon(100, 100, 85, 6);
  
  line(0, 100, 100, 100);
  line(100, 100, 158, 0);
  line(100, 100, 158, 200);
}

function draw() {
  createTile();
}