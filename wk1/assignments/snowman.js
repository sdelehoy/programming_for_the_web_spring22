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

  //buttons
  circle(300, 275, 5);
  circle(300, 325, 5);
  circle(300, 375, 5);

  //head
  circle(600, 600, 200);

  //eyes
  circle(575, 575, 30);
  circle(625, 575, 30);
  circle(568, 569, 5);
  circle(618, 569, 5);

  //nose
  fill("orange");
  triangle(600, 600, 550, 610, 600, 625);
}
