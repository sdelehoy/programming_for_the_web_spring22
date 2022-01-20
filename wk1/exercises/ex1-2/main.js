function setup() {
  createCanvas(windowWidth, windowHeight);
  background('purple');
}

function draw() {
  if (mouseIsPressed) {
    fill('orange');
    noStroke();

  } else {
    noFill();
    noStroke();
    blendMode(HARD_LIGHT);
  }
  circle(mouseX, mouseY, 80);
}
