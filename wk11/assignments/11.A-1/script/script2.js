/* In doing this assignment I found the following helpful guides:
1. The Coding Train video Coding Challenge #16: L-System Fractal Trees
https://www.youtube.com/watch?v=E1B4UoSQMFw
2. P5.js examples L-Systems
https://p5js.org/examples/simulate-l-systems.html */

let angle = 80; //how much it turns with + or -
let length = 4; //length of each branch/node

//L-System
let string = 'F'; //axiom or start of the string
let n = 6; //number of iterations
let rules = [];
rules[0] = ['F', 'F+F--F+F'];

function setup() {
  var canvas = createCanvas(1000, 700);
  canvas.parent('canvas-container');
  background(255);
  stroke(87, 156, 68);
  strokeWeight(2);
  for (i = 0; i < n; i++) {
    createString();
  }
  createDrawing();
}

function draw() {
  
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
}

//Translate turtle commands to draw branches
function createDrawing() {
  resetMatrix();
  translate(400, height);
  for (let i = 0; i < string.length; i++) {
    if (string[i] === 'F') {
      line(0, 0, 0, -length);
      translate(0, -length);
    } else if (string[i] === '+') {
      rotate(radians(angle));
    } else if (string[i] === '-') {
      rotate(radians(-angle));
    } else if (string[i] === '[') {
      push();
    } else if (string[i] === ']') {
      pop();
    } else {
      continue;
    }
  }
}
