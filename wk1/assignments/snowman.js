let grid = undefined;

function setup() {
  createCanvas(1000,800);
  background("#4ECDFF");
  grid = loadImage("images/100px_grid.png");
}

function draw() {
  background(grid);
  
  //ground
  noStroke();
  fill(250);
  rect(0,532,1000,268);
  
  //snow creature
  fill("#f1f1f1");
  stroke(100, 250, 100);
}
