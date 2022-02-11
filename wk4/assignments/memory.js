let x = 100;
let y = 100;
const squareWidth = 200;

function setup () {
  createCanvas (1150, 900);
  background('steelblue');
  fill('lime');
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 4; j++) {
      square(x, y, squareWidth);
      x += 250;
    }
    y += 250;
    x = 100;
  }
}
