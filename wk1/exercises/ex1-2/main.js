const diameter = window.prompt('Enter a number for circle diameter');

function setup() {
  createCanvas(windowWidth, windowHeight);
  background('purple');
}

function draw() {
  if (mouseIsPressed) {
    fill('orange');
    noStroke();
    blendMode(HARD_LIGHT);
  } else {
    noFill();
    noStroke();
  }
  circle(mouseX, mouseY, diameter);
}
