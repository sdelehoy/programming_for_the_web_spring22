function setup() {
  var canvas = createCanvas(1000, 700);
  canvas.parent('container');
  colorMode(HSB);
  background(0);
}

function draw() {
  stroke(0, 0, 100);
  const numColumns = 800;
  const numRows = 500;
  for (let x = 0; x <= width; x+= 10) {
    for (let y = 0; y <= height; y+= 10) {
      line(x, y, x + 7, y + 7);
    }
  }
}
