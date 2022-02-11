let cardX = 100;
let cardY = 100;
const cardWidth = 200;
let cards = [];
let cardId = 0;

function setup () {
  createCanvas (1150, 900);
  background('steelblue');
  fill('limegreen');
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 4; j++) {
      square(cardX, cardY, cardWidth);
      cards.push ({ x: cardX, y: cardY, id: cardId });
      cardX += 250;
      cardId++;
    }
    cardY += 250;
    cardX = 100;
  }
}

function mousePressed () {

}
