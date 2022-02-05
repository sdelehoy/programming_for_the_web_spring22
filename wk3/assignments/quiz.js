const questArr = [
  {
    question: 'Is this a Black-capped Chickadee or an American Goldfinch?',
    answer: 'Black-capped Chickadee',
    image: 'images/black-capped_chickadee-720px.jpg'
  },
  {
    question: 'Is this an American Robin or an American Goldfinch',
    answer: 'American Goldfinch',
    image: 'images/american_goldfinch-720px.jpg'
  },
  {
    question: 'Is this an American Robin or a House Sparrow?',
    answer: 'American Robin',
    image: 'images/american_robin-720px.jpg'
  },
  {
    question: 'Is this a House Finch or a House Sparrow?',
    answer: 'House Sparrow',
    image: 'images/house_sparrow-720px.jpg'
  },
  {
    question: 'Is this a House Finch or a Downy Woodpecker?',
    answer: 'House Finch',
    image: 'images/house_finch-720px.jpg'
  },
  {
    question: 'Is this a Blue Jay or a Downy Woodpecker?',
    answer: 'Downy Woodpecker',
    image: 'images/downy_woodpecker-720px.jpg'
  },
  {
    question: 'Is this a Blue Jay or a Black-capped Chickadee?',
    answer: 'Blue Jay',
    image: 'images/blue_jay-720px.jpg'
  }
];

let nextQuestion = function() {
  if (questArr.length > 0) {
    const randomIndex = Math.round(Math.random() * (questArr.length - 1));
    return questArr[randomIndex];
  }else {
    alert('You won!');
  }
}

let currentIndex = nextQuestion();
let currentQuestion = currentIndex.question;
let currentAnswer = currentIndex.answer;
let currentImage = currentIndex.image;

let capInput = answerInput.value().split('');
for (let i = 0; i < capInput.length; i++) {
  capInput[i] = capInput[i][0].toUpperCase() + capInput[i].substr(1);
}
capInput.join('');

function checkAnswer() {
  if (currentAnswer === capInput) {
    questArr = questArr.filter()
  }
}

let img;
function preload() {
  img = loadImage(currentImage);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  let h1 = createElement('h1', 'Backyard Bird Quiz');
  h1.position(200, 50);
  let answerInput = createInput('');
  answerInput.position(200, 200);
  answerInput.size(250, 30);
  let submitAnswerBtn = createButton('Submit Answer');
  submitAnswerBtn.position(200, 250);
  submitAnswerBtn.size(100, 30);
}

function draw() {
  background(240);
  image(img, 200, 300);
  textSize(24);
  text(currentQuestion, 200, 175);
}
