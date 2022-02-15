let blockX = 0;
let blockY = 0;
let blockColor = 255;
let drawTimer;
const speed = 20;
const distance = 2;

function setup () {
  createCanvas(500, 500);
  background(0);
}

function drawBlock(x, y, color) {
  fill(color || 255);
  square(x, y, 50);
}

window.setTimeout(() => {
  drawTimer = window.setInterval(() => {
    if(blockY - 50 <= height) {
      drawBlock(blockX, blockY, blockColor);
      blockY += distance;
    } else {
      blockY = 0;
      blockX += 50;
    }
    if(blockY - 50 > height && blockX - 50 > width) {
      window.clearInterval(drawTimer);
      alert('done');
    }
  }, speed);
}, 1500);
