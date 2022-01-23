let grid = undefined;
let snow = window.prompt('What color would you like the snow to be? Please type a basic color in lowercase', 'white');

function setup() {
  createCanvas(1000,800);
  grid = loadImage("../images/100px_grid.png");
}

function draw() {
  //background
  background(200);

  //background(grid);
  
  //snow creature
  fill(snow);
  stroke(0);
  strokeWeight(5);

  //body
  circle(300, 550, 300);
  circle(300, 325, 250);

  //head
  circle(600, 600, 200);

  //eyes
  circle(575, 575, 30);
  circle(625, 575, 30);

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

  //eye pupils
  strokeWeight(10);
  circle(568, 569, 5);
  circle(618, 569, 5);

  //buttons
  circle(300, 275, 5);
  circle(300, 325, 5);
  circle(300, 375, 5);
}

