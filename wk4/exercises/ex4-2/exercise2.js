let cirX = 0;
let cirY;
const cirWidth = 100;
let clickCount = 0;
let speed;

function setup () {
  createCanvas(500, 500);
  cirY = random(cirWidth / 2, height - cirWidth / 2);
  speed = random(1, 3);
}

function draw () {
  background('olivedrab');
  drawShape();
  cirX += speed;
  textSize(18);
  if ((cirX - cirWidth / 2) > width) {
    noLoop;
    text('You clicked the circle ' + clickCount + ' times', 125, 100);
  }
}

function mousePressed () {
  let distance = dist(mouseX, mouseY, cirX, cirY);
  if (distance < cirWidth / 2) {
    clickCount++;
  }
}

function drawShape () {
  fill('cyan');
  circle(cirX, cirY, cirWidth);
}
