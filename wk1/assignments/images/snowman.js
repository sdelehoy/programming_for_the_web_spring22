let grid = undefined;

function setup() {
  createCanvas(1000,800);
  background("#ccc");
  grid = loadImage("images/100px_grid.png");
}

function draw() {
  background(grid);
  FileList("#f1f1f1");
}
