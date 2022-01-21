let grid = undefined;

function setup() {
  createCanvas(1000,800);
  background("#4ECDFF");
  grid = loadImage("images/100px_grid.png");
}

function draw() {
  //ground
  noStroke();
  fill(250);
  rect(0,532,1000,268);

  background(grid);
  
  //snow creature
  fill(250);
  stroke(0);
  strokeWeight(5);

  //body
  circle(300, 550, 300);
  circle(300, 325, 250);

  //head
  circle(600, 600, 200);

  //face
  circle(575, 575, 30);
  circle(625, 575, 30);
}
