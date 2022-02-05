let questArr = [
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

function nextQuestion() {
  if (questArr.length > 0) {
    const randomIndex = Math.round(Math.random() * (questArr.length - 1));
    return questArr[randomIndex];
  } else {
    alert('You won!');
  }
}

function checkAnswer() {
  if (currentAnswer === answerInput.value()) {
    questArr = questArr.filter(arr => { 
      return currentAnswer !== arr.answer
    });
    response = 'Correct!';
    responseColor = 'green';
  } else {
      response = 'Sorry, that was not correct.';
      responseColor = 'red';
  }
  answerInput.value('');
  currentIndex = nextQuestion();
  currentQuestion = currentIndex.question;
  currentImage = currentIndex.image;
  preload();
}

function preload() {
  img = loadImage(currentImage);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  h1 = createElement('h1', 'Backyard Bird Quiz');
  h1.position(200, 50);
  answerInput = createInput('');
  answerInput.position(200, 205);
  answerInput.size(250, 30);
  submitAnswerBtn = createButton('Submit Answer');
  submitAnswerBtn.position(200, 250);
  submitAnswerBtn.size(150, 30);
  submitAnswerBtn.mousePressed(checkAnswer);
}

function draw() {
  background(240);
  fill('black');
  textSize(24);
  text(currentQuestion, 200, 175);
  fill(responseColor);
  textSize(18);
  text(response, 465, 217);
  image(img, 200, 300);
}
