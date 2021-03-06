let coordinates = [
  {offsetX: 0, offsetY: 0},
  {offsetX: 0, offsetY: 200},
  {offsetX: 0, offsetY: 200},
  {offsetX: 200, offsetY: 0},
  {offsetX: 0, offsetY: -200},
  {offsetX: 0, offsetY: -200},
  {offsetX: 200, offsetY: 0},
  {offsetX: 0, offsetY: 200},
  {offsetX: 0, offsetY: 200},
]

function setup() {
  createCanvas(600, 600);
  noLoop();
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

function createTile(bgColor, lineColor, circleColor) {
  fill(bgColor);
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
  stroke(lineColor);
  strokeWeight(2);
  line(42, 200, 100, 100);
  line(100, 100, 200, 100);
  line(42, 0, 100, 100);
  
  stroke('red');
  fill(circleColor);
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
  stroke(lineColor);
  strokeWeight(2);
  polygon(100, 100, 85, 6);
  
  line(0, 100, 100, 100);
  line(100, 100, 158, 0);
  line(100, 100, 158, 200);
}

function draw() {
  for (let i = 0; i < coordinates.length; i++) {
      translate(coordinates[i].offsetX, coordinates[i].offsetY);
      createTile('purple', 'magenta', 'orange');
  }
}