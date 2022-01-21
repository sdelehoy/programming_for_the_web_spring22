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
  fill(255);
  rect(0,532,999,268);
  
  //snow creature
  fill("#f1f1f1");
  stroke(100, 250, 100);
}
