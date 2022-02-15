let blockX = 0;
let blockY = 0;
let blockColor = 255;
let drawTimer;
const speed = 5;
const distance = 2;

function setup () {
  createCanvas(500, 500);
  background(0);
}

function drawBlock(x, y, color) {
  fill(color);
  square(x, y, 50);
}

function mouseMoved() {
  let r = map(mouseX, 0, width, 0, 255);
  let b = map(mouseY, 0, height, 0, 255);
  let c = color('rgb(r, 0, b)');
  blockColor = c;
  return false;
}

window.setTimeout(() => {
  drawTimer = window.setInterval(() => {
    if(blockY <= height) {
      drawBlock(blockX, blockY, blockColor);
      blockY += distance;
    } else {
      blockY = 0;
      blockX += 50;
    }
    if(blockX + 50 >= width && blockY > height) {
      window.clearInterval(drawTimer);
      alert('done');
    }
  }, speed);
}, 1500);
