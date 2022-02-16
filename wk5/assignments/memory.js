let cards = [];
let startX = 100;
let startY = 150;
let cardback;
let cardfaces = [];

function preload() {
  cardback = loadImage('images/cardback.jpg');
  cardfaces = [
    loadImage('images/bluejay.jpg'),
    loadImage('images/chickadee.jpg'),
    loadImage('images/goldfinch.jpg'),
    loadImage('images/housefinch.jpg'),
    loadImage('images/robin.jpg'),
    loadImage('images/woodpecker.jpg')
  ]
}

function setup() {
  createCanvas(1150, 925);
  background('#273C17');
  drawingContext.shadowOffsetX = 5;
  drawingContext.shadowOffsetY = 5;
  drawingContext.shadowBlur = 10;
  drawingContext.shadowColor = 'black';
  fill('#121C0B');
  rect(0, 0, width, 75);
  let selectedFaces = [];
  for (let k = 0; k < 6; k++) {
    const randomIdx = floor(random(cardfaces.length));
    const face = cardfaces[randomIdx];
    selectedFaces.push(face);
    selectedFaces.push(face);
    cardfaces.splice(randomIdx, 1);
  }
  selectedFaces = shuffleArray(selectedFaces);
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 4; j ++) {
      const faceImage = selectedFaces.pop();
      cards.push(new Card(startX, startY, faceImage));
      startX += 250;
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
  constructor(x, y, cardface) {
    this.x = x;
    this.y = y;
    this.width = 200;
    this.faceDown = true;
    this.cardface = cardface;
    this.show();
  }
  show() {
    if (this.faceDown === true) {
      fill('magenta');
      square(this.x, this.y, this.width);
      this.faceDown = false;
      image(cardback, this.x, this.y);
    } else {
      fill('cyan');
      square(this.x, this.y, this.width);
      image(this.cardface, this.x, this.y);
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

function shuffleArray (array) {
  let counter = array.length;
  while (counter > 0) {
    const idx = Math.floor(Math.random() * counter);
    counter--;
    const temp = array[counter];
    array[counter] = array[idx];
    array[idx] = temp;
  }
  return array;
}
