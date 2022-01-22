let grid = undefined;

function setup() {
  createCanvas(1000,800);
  grid = loadImage("images/100px_grid.png");
}

function draw() {
  //background
  strokeWeight(5);
  fill("#4ECDFF");
  rect(3,3,994,535);
  fill(250);
  rect(3,532,994,265);

  //background(grid);
  
  //snow creature
  fill(250);
  stroke(0);

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

  //mouth
  arc(600,660,40,40,180,360);

  //nose
  fill("orange");
  triangle(600, 600, 550, 610, 600, 625);

  //left arm
  line(183,275,100,200);
  line(100,200,200,100);
  line(150,150,200,150);

  //right arm
  line(418,275,500,200);
  line(500,200,400,100);
  line(400,150,450,150);
}
