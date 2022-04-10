/* In doing this assignment I found the following helpful guides:
1. The Coding Train video Coding Challenge #16: L-System Fractal Trees
https://www.youtube.com/watch?v=E1B4UoSQMFw
2. P5.js examples L-Systems
https://p5js.org/examples/simulate-l-systems.html */

//Turtle graphics
let x1;
let y1;
let angle = 25; //how much it turns with + or -
let length = 50; //length of each branch/node

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
  stroke(0);
  fill(0);
  x1 = width / 2; //starting x
  y1 = height; //starting y
/*   for (i = 0; i < n; i++) {
    createString();
  } */
  let button = createButton('generate');
  button.mousePressed(createString);
}

function draw() {
/*   createCommands(); */
}

//create new l-system/turtle string for next iteration
function createString() {
  let newString = '';
  //see if character in string matches character in rules
  for (let i = 0; i < string.length; i++) {
    let match = false;
    for (let j = 0; j < rules.length; j++) {
      if (string[i] === rules[j][0]) {
        //if they match add replacement from rules to newString
        newString += rules[j][1];
        match = true;
        break;
      }
    }
    //if nothing matches rewrite same character
    if (match === false) {
      newString += string[i];
    }
  }
  string = newString;
  createP(string);
}

//Translate turtle commands to draw branches
function createCommands() {
  for (i = 0; i < string.length; i++) {
    if (string[i] === 'X') {

    } else if (string[i] === 'F') {
      let x2 = x1 + length * cos(radians(newAngle));
      let y2 = y1 - length * sin(radians(newAngle));
      line(x1, y1, x2, y2);
      x1 = x2;
      y1 = y2;
    } else if (string[i] === '+') {
      newAngle += angle;
    } else if (string[i] === '-') {
      newAngle -= angle;
    } else if (string[i] === '[') {
      push();
    } else if (string[i] === ']') {
      pop();
    }
  }
}
