function setup() {
  createCanvas(windowWidth, windowHeight);
  fill(255);
  stroke(102);
}

function draw() {
  background(0);
  for (var y = 20; y <= height - 20; y += 10) {
    for (var x = 20; x <= width - 20; x += 10) {
      line(x, y, 240, 60);
      circle(x, y, 4);
    }
  }
}
