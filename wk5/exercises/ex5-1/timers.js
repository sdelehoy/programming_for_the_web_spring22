let blockX = 0;
let blockY = 0;
let blockColor = 255;
let drawTimer;
const speed = 20;
const distance = 3;
let colors = [255, 255, 255];

function setup () {
  createCanvas(500, 500);
  background(0);
}

function drawBlock(x, y, color) {
  fill(color);
  square(x, y, 50);
}

function keyPressed() {
  let buttonCode = map(keyCode, 48, 111, 0, 255);
  colors.unshift(buttonCode);
  colors.pop();
  c = color(colors[0], colors[1], colors[2]);
  blockColor = c;
  console.log(colors);
}

/* function mouseMoved() {
  let r = map(mouseX, 0, width, 0, 255);
  let b = map(mouseY, 0, height, 0, 255);
  let c = color(r, 0, b);
  blockColor = c;
  return false;
} */

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
