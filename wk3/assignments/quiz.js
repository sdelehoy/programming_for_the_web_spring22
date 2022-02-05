let questArr = [
  {
    question: 'Is this a Black-capped Chickadee or an American Goldfinch?',
    answer: 'black-capped chickadee',
    image: 'images/black-capped_chickadee-720px.jpg'
  },
  {
    question: 'Is this an American Robin or an American Goldfinch',
    answer: 'american goldfinch',
    image: 'images/american_goldfinch-720px.jpg'
  },
  {
    question: 'Is this an American Robin or a House Sparrow?',
    answer: 'american robin',
    image: 'images/american_robin-720px.jpg'
  },
  {
    question: 'Is this a House Finch or a House Sparrow?',
    answer: 'house sparrow',
    image: 'images/house_sparrow-720px.jpg'
  },
  {
    question: 'Is this a House Finch or a Downy Woodpecker?',
    answer: 'house finch',
    image: 'images/house_finch-720px.jpg'
  },
  {
    question: 'Is this a Blue Jay or a Downy Woodpecker?',
    answer: 'downy woodpecker',
    image: 'images/downy_woodpecker-720px.jpg'
  },
  {
    question: 'Is this a Blue Jay or a Black-capped Chickadee?',
    answer: 'blue jay',
    image: 'images/blue_jay-720px.jpg'
  }
];

let response;
let responseColor = 'green';
let h1;
let answerInput;
let submitAnswerBtn;
let img;
let currentIndex = nextQuestion();
let currentQuestion = currentIndex.question;
let currentAnswer = currentIndex.answer;
let currentImage = currentIndex.image;
let numCorrect = 0;
let numIncorrect = 0;

function nextQuestion() {
  if (questArr.length > 0) {
    const randomIndex = Math.round(Math.random() * (questArr.length - 1));
    return questArr[randomIndex];
  }
}

function checkAnswer() {
  if (currentAnswer === answerInput.value().toLowerCase()) {
    questArr = questArr.filter(arr => { 
      return currentAnswer !== arr.answer
    });
    response = 'Correct!';
    responseColor = 'green';
    numCorrect++;
  } else {
      response = 'Sorry, that was not correct.';
      responseColor = 'red';
      numIncorrect++;
  }
  answerInput.value('');
  currentIndex = nextQuestion();
  currentQuestion = currentIndex.question;
  currentAnswer= currentIndex.answer
  currentImage = currentIndex.image;
  preload();
  gameOver();
}

function gameOver() {
  if (numCorrect === 5) {
    alert('You won!');
    numCorrect = 0;
    numIncorrect = 0;
    response = '';
  } else if (numIncorrect === 5) {
    alert('You lost');
    numCorrect = 0;
    numIncorrect = 0;
    response = '';
  }
}

function preload() {
  img = loadImage(currentImage);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  h1 = createElement('h1', 'Backyard Bird Quiz');
  h1.position(200, 20);
  answerInput = createInput('');
  answerInput.position(200, 190);
  answerInput.size(250, 30);
  submitAnswerBtn = createButton('Submit Answer');
  submitAnswerBtn.position(200, 240);
  submitAnswerBtn.size(150, 30);
  submitAnswerBtn.mousePressed(checkAnswer);
}

function draw() {
  background(50);
  noStroke();
  fill(240);
  rect(175, 0, 720, windowHeight);
  fill(100);
  rect(175, 0, 720, 100);
  fill('black');
  textSize(24);
  text(currentQuestion, 200, 165);
  fill(responseColor);
  textSize(18);
  text(response, 465, 212);
  image(img, 175, 300);
  fill('black');
  textSize(12);
  text('Pictures from wwww.allaboutbirds.org.', 200, 865);
  textSize(18);
  text('Correct: ' + numCorrect + '     Incorrect: ' + numIncorrect, 465, 260);
}
