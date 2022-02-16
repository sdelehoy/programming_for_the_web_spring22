let card;

function setup() {
  createCanvas(1000, 1000);
  background(0);
  card = new Card();
  card.show();
}

class Card {
  constructor() {
    this.x = 100;
    this.y = 150;
    this.width = 200;
  }
  show() {
    fill(255);
    square(this.x, this.y, this.width);
  }
}
