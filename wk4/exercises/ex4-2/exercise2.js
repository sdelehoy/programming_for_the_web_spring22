let cirX = 0;
let cirY = 50;
const cirWidth = 100;
let clickCount = 0;

function setup () {
  createCanvas(500, 500);
}

function draw () {
  background('olivedrab');
  drawShape();
  cirX += 1.5;
  cirY++;
  textSize(18);
  if (cirX > width) {
    noLoop;
    text('You clicked ' + clickCount + ' times', 200, 100);
  }
}

function mousePressed () {
  let distance = dist(mouseX, mouseY, cirX, cirY);
  if (distance < cirWidth / 2) {
    clickCount++;
    console.log('hit');
  }
}

function drawShape () {
  fill('cyan');
  circle(cirX, cirY, cirWidth);
}