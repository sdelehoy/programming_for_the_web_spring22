let cirX = 0;
let cirY = 50;
const cirWidth = 100;

function setup () {
  createCanvas(500, 500);
}

function draw () {
  background('olivedrab');
  drawShape();
  cirX += 1.5;
  cirY++;
}

/* function mousePressed () {
  if (mouseX, mouseY,)
} */

function drawShape () {
  fill('cyan');
  circle(cirX, cirY, cirWidth);
}