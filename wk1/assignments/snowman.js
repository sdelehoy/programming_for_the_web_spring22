let grid = undefined;
let snow = window.prompt('What color would you like the snow to be? Please type a basic color in lowercase', 'white');
let sky = window.prompt('What color would you like the sky to be? Please type a basic color in lowercase', 'skyblue');
let bird = window.prompt('What color would you like the bird to be? Please type a basic color in lowercase', 'red');

function setup() {
  createCanvas(1000,800);
  grid = loadImage("images/100px_grid.png");
}

function draw() {
  //background
  stroke(0);
  strokeWeight(5);
  fill(sky);
  rect(3,3,994,535);
  fill(snow);
  rect(3,532,994,265);

  background(grid);
  
  //snow creature
  fill(snow);

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

  //bird
  fill(bird);
  strokeWeight(5);

  //bird body
  arc(610,450,130,60,0.5,PI+QUARTER_PI, CHORD);
  
  //bird head
  circle(555,415,40);

  //bird eye
  circle(549,411,4);

  //bird legs
  line(605,480,605,500);
  line(595,480,595,500);

  //bird beak
  fill("orange");
  triangle(535, 410, 510, 415, 535, 425);
}

