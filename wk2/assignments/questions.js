let questArr = [
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
    answer: 'Roosters do not lay eggs'
  },
  {
    question: 'If a plane crashed right on the border of the USA and Canada in which country would they bury the survivors?',
    answer: 'Survivors are not buried'
  }
];

let randomNum = Math.round(Math.random() * (questArr.length - 1)); 

let response = window.prompt(questArr[randomNum].question);