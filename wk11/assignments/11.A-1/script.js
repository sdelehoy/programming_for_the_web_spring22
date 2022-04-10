//Turtle
let angle = 25; //how much it turns with + or -

//L-System
let string = 'X'; //axiom or start of the string
let n = 5; //number of iterations
let rules = [];
rules[0] = ['X', 'F+[[X]-X]-F[-FX]+X'];
rules[1] = ['F', 'FF'];

function setup() {
  var canvas = createCanvas(1000, 700);
  canvas.parent('container');
  background(255);
  fill(0);
  stroke(0);
  let button = createButton('generate');
  button.mousePressed(createString);
}

function draw() {

}

//create new l-system string for next iteration
function createString() {
  let newString = '';
  for (let i = 0; i < string.length; i++) {
    let match = false;
    for (let j = 0; j < rules.length; j++) {
      if (string[i] === rules[j][0]) {
        newString += rules[j][1];
        match = true;
        break;
      }
    }
    if (match === false) {
      newString += string[i];
    }
  }
  string = newString;
  createP(string);
}
