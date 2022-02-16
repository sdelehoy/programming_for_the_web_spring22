let cards = [];
let startX = 100;
let startY = 150;

function setup() {
  createCanvas(1150, 925);
  background('#273C17');
  fill('#121C0B');
  rect(0, 0, width, 75);
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 4; j ++) {
      cards.push(new Card(startX, startY));
      startX += 250;
      console.log(startX);
    }
    startY += 250;
    startX = 100;
  }
}

function mousePressed() {
  for (i = 0; i < cards.length; i++) {
    cards[i].clicked();
  }
}

class Card {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.width = 200;
    this.faceDown = true;
    this.show();
  }
  show() {
    if (this.faceDown === true) {
      fill('magenta');
      square(this.x, this.y, this.width);
      this.faceDown = false;
    } else {
      fill('cyan');
      square(this.x, this.y, this.width);
      //this.faceDown = true;
    }
  }
  clicked() {
    if (mouseX >= this.x && mouseX <= this.x + this.width &&
        mouseY >= this.y && mouseY <= this.y + this.width) {
          this.show();
    }
  }
/*   flip() {
    if (this.faceDown === true) {
      this.faceDown = false;
    }
    this.show();
  } */
}
