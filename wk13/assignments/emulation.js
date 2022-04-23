/* Used as a guide:
The Coding Train's Coding Challenge #11: 3D Terrain Generation with Perlin Noise in Processing
https://www.youtube.com/watch?v=IKB1hWWedMk */

let columns;
let rows;
let scale = 20;
let w = 1000;
let h = 700;
let z = [];

function setup() {
  createCanvas(1000, 700, WEBGL);
  //angleMode(DEGREES);
  //colorMode(HSB);
  columns = w / scale;
  rows = h / scale;
}

function draw() {
  background('skyblue');
  
  rotateX(PI / 3);
  translate(-w / 2, -h / 2);

  stroke('green');
  noFill();
  for (let x = 0; x < columns; x++) {
    beginShape(TRIANGLE_STRIP);
    for (let y = 0; y < rows; y++)
     {
      vertex(x * scale, y * scale);
      vertex((x + 1) * scale, y * scale); 
    }
    endShape();
  }
}
