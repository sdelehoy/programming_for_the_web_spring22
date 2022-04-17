let kickSound1;
let kickButton1;
let kickSlider1;

let kickSound2;
let kickButton2;
let kickSlider2;

let snareSound;
let snareButton;
let snareSlider;

let hihatSound;
let hihatButton;
let hihatSlider;

let tomSound;
let tomButton;
let tomSlider;

let kickAmp1;
let kickAmp2;
let snareAmp;
let hihatAmp;
let tomAmp;

function preload() {
  kickSound1 = loadSound('sounds/Kick_V_10.wav');
  kickSound2 = loadSound('sounds/Kick_V_10.wav');
  snareSound = loadSound('sounds/Snare-1_V_9.wav');
  hihatSound = loadSound('sounds/Closed-Shank.wav');
  tomSound = loadSound('sounds/Floor-Tom_V_10.wav');
}

function setup() {
  let cnv = createCanvas(700, 200);
  cnv.parent('canvas');

  kickButton1 = createButton('play kick 1');
  kickButton1.parent('kick-button-1');
  kickButton1.mousePressed(playKick1);
  kickSlider1 = createSlider(0.25, 2, 1, 0.25);
  kickSlider1.parent('kick-slider-1');

  kickButton2 = createButton('play kick 2');
  kickButton2.parent('kick-button-2');
  kickButton2.mousePressed(playKick2);
  kickSlider2 = createSlider(0.25, 2, 1, 0.25);
  kickSlider2.parent('kick-slider-2');

  snareButton = createButton('play snare');
  snareButton.parent('snare-button');
  snareButton.mousePressed(playSnare);
  snareSlider = createSlider(0.25, 2, 1, 0.25);
  snareSlider.parent('snare-slider');
  
  hihatButton = createButton('play hi hat');
  hihatButton.parent('hihat-button');
  hihatButton.mousePressed(playHihat);
  hihatSlider = createSlider(0.25, 2, 1, 0.25);
  hihatSlider.parent('hihat-slider');

  tomButton = createButton('play tom');
  tomButton.parent('tom-button');
  tomButton.mousePressed(playTom);
  tomSlider = createSlider(0.25, 2, 1, 0.25);
  tomSlider.parent('tom-slider');

  kickAmp1 = new p5.Amplitude(0.9);
  kickAmp1.setInput(kickSound1);

  kickAmp2 = new p5.Amplitude(0.9);
  kickAmp2.setInput(kickSound2);

  snareAmp = new p5.Amplitude(0.9);
  snareAmp.setInput(snareSound);

  hihatAmp = new p5.Amplitude(0.9);
  hihatAmp.setInput(hihatSound);

  tomAmp = new p5.Amplitude(0.9);
  tomAmp.setInput(tomSound);
}

function draw() {
  background(0);

  let kickLevel1 = kickAmp1.getLevel();
  let kickSize1 = map(kickLevel1, 0, 1, 0, 200);
  fill('red');
  text(kickSlider1.value(), 65, 190);
  circle(65, 100, kickSize1);

  let kickLevel2 = kickAmp2.getLevel();
  let kickSize2 = map(kickLevel2, 0, 1, 0, 200);
  fill('orange');
  text(kickSlider2.value(), 210, 190);
  circle(210, 100, kickSize2);

  let snareLevel = snareAmp.getLevel();
  let snareSize = map(snareLevel, 0, 1, 0, 200);
  fill('yellow');
  text(snareSlider.value(), 350, 190);
  circle(350, 100, snareSize);

  let hihatLevel = hihatAmp.getLevel();
  let hihatSize = map(hihatLevel, 0, 1, 0, 200);
  fill('green');
  text(hihatSlider.value(), 500, 190);
  circle(500, 100, hihatSize);

  let tomLevel = tomAmp.getLevel();
  let tomSize = map(tomLevel, 0, 1, 0, 200);
  fill('deepskyblue');
  text(tomSlider.value(), 640, 190);
  circle(640, 100, tomSize);
}

function playKick1() {
  if (kickSound1.isPlaying()) {
    kickSound1.stop();
    kickButton1.html('play kick 1');
    kickButton1.style('border', '1px solid green');
    kickButton1.style('color', 'red');
  } else {
    kickSound1.loop(0, 1, 1, 0, kickSlider1.value());
    kickButton1.html('stop kick 1');
    kickButton1.style('border', '1px solid red');
    kickButton1.style('color', 'red');
  }
}

function playKick2() {
  if (kickSound2.isPlaying()) {
    kickSound2.stop();
    kickButton2.html('play kick 2');
    kickButton2.style('border', '1px solid green');
    kickButton2.style('color', 'orange');
  } else {
    kickSound2.loop(0, 1, 1, 0, kickSlider2.value());
    kickButton2.html('stop kick 2');
    kickButton2.style('border', '1px solid red');
    kickButton2.style('color', 'red');
  }
}

function playSnare() {
  if (snareSound.isPlaying()) {
    snareSound.stop();
    snareButton.html('play snare');
    snareButton.style('border', '1px solid green');
    snareButton.style('color', 'yellow');
  } else {
    snareSound.loop(0, 1, 1, 0, snareSlider.value());
    snareButton.html('stop snare');
    snareButton.style('border', '1px solid red');
    snareButton.style('color', 'red');
  }
}

function playHihat() {
  if (hihatSound.isPlaying()) {
    hihatSound.stop();
    hihatButton.html('play hi hat');
    hihatButton.style('border', '1px solid green');
    hihatButton.style('color', 'green');
  } else {
    hihatSound.loop(0, 1, 1, 0, hihatSlider.value());
    hihatButton.html('stop hi hat');
    hihatButton.style('border', '1px solid red');
    hihatButton.style('color', 'red');
  }
}

function playTom() {
  if (tomSound.isPlaying()) {
    tomSound.stop();
    tomButton.html('play tom');
    tomButton.style('border', '1px solid green');
    tomButton.style('color', 'deepskyblue');
  } else {
    tomSound.loop(0, 1, 1, 0, tomSlider.value());
    tomButton.html('stop tom');
    tomButton.style('border', '1px solid red');
    tomButton.style('color', 'red');
  }
}
