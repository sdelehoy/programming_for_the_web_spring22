const questArr = [
  {
    question: 'In what year was the War of 1812?',
    answer: '1812'
  },
  {
    question: 'What color was George Washingtons white horse?',
    answer: 'white'
  },
  {
    question: 'Who is buried in Grants tomb?',
    answer: 'Grant'
  },
  {
    question: 'If a rooster lands directly on the peak of a barn and lays an egg which direction would the egg roll off the barn roof, right or left?',
    answer: 'roosters do not lay eggs'
  },
  {
    question: 'If a plane crashed right on the border of the USA and Canada in which country would they bury the survivors?',
    answer: 'survivors are not buried'
  }
];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(240);
  let h1 = createElement('h1', 'Backyard Bird Quiz');
  h1.position(300, 100);
  let answerInput = createInput('');
  answerInput.position(300, 300);
  answerInput.size(250, 30);
  let submitAnswerBtn = createButton('Submit Answer');
  submitAnswerBtn.position(300, 350);
  submitAnswerBtn.size(100, 30);
}

function draw() {

}

/* const randomNum = Math.round(Math.random() * (questArr.length - 1)); 

const promptResponse = window.prompt(questArr[randomNum].question);

const alertString = ''.concat('You answered ', promptResponse, '. The correct answer is ', questArr[randomNum].answer, '.');

window.alert(alertString); */