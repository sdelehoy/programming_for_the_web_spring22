let cardX = 100;
let cardY = 100;
const cardWidth = 200;
let cards = [];
let cardId = 0;

function setup () {
  createCanvas (1150, 900);
  drawingContext.shadowOffsetX = 5;
  drawingContext.shadowOffsetY = 5;
  drawingContext.shadowBlur = 10;
  drawingContext.shadowColor = 'black';
  background(65);
  fill(255);
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
  mousePressed();
}

function mousePressed () {
  for (let k = 0; k < cards.length; k++) {
    if ((mouseX > cards[k].x) && (mouseX < cards[k].x + cardWidth) &&
      (mouseY > cards[k].y) && (mouseY < cards[k].y + cardWidth)) {
        console.log('hit');
    }
  }  
}
