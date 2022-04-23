/* Used as a guide:
The Coding Train's Coding Challenge #11: 3D Terrain Generation with Perlin Noise in Processing
https://www.youtube.com/watch?v=IKB1hWWedMk */

// columns in grid
let columns;
// rows in grid
let rows;
// scale of grid
let scale = 30;
// width of grid
let w = 2000;
// height of grid
let h = 1400;
// array of z positions for heights of terrain
let z = [];
// initial speed of flying
let flying = 0;

function setup() {
  cnv = createCanvas(1000, 700, WEBGL);
  cnv.parent('canvas');
  angleMode(DEGREES);
  colorMode(HSB);
  // number of columns
  columns = w / scale;
  // number of rows
  rows = h / scale;
  //creating z positions for grid and logging them to the array
  for (let x = 0; x < columns; x++) {
    z[x] = [];
    for (let y = 0; y < rows; y++) {
      z[x][y] = 0;
    }
  }  
}

function draw() {
  // new flying speed;
  flying -= 0.02;
  // offsetting y to make the noise sequence smoother and equal to flying to move y value for flying illusion
  let yoff = flying;
  // loop through and set z value with noise method
  for (y = 0; y < rows; y++) {
    // offsetting x to make the noise seqence smoother
    xoff = 0;
    for (x = 0; x < columns; x++) {
      z[x][y] = map(noise(xoff, yoff), 0, 1, -100, 100);
      // increment x offset
      xoff += 0.15;
    }
    // increment y offset
    yoff += 0.15;
  }
  background('deepskyblue');
  stroke('rgba(0, 0, 0, 0.1)');
  // tilt grid for perspective
  rotateX(80);
  // center the grid
  translate(-w / 2, -h / 2 - 160);
  // create the grid using x and y to draw triangle strips and add in z value to create height and depth
  for (let y = 0; y < rows; y++) {
    beginShape(TRIANGLE_STRIP);
    for (let x = 0; x < columns; x++)
     {
      // use z value to set brightness of hills and valleys
      fill(120, 100, map(z[x][y], -100, 100, 20, 60));
      vertex(x * scale, y * scale, z[x][y]);
      vertex(x * scale, (y + 1) * scale, z[x][y + 1]); 
    }
    endShape();
  }
}
