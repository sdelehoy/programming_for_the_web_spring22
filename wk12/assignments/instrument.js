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

function preload() {
  kickSound1 = loadSound('sounds/Kick_V_10.wav');
  kickSound2 = loadSound('sounds/Kick_V_10.wav');
  snareSound = loadSound('sounds/Snare-1_V_9.wav');
  hihatSound = loadSound('sounds/Closed-Shank.wav');
  tomSound = loadSound('sounds/Floor-Tom_V_10.wav');
}

function setup() {
  let cnv = createCanvas(100, 100);
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
}

function draw() {
  background(255);
  text('kick slider 1: ' + kickSlider1.value(), 10, 10);
  text('kick slider 2: ' + kickSlider2.value(), 10, 30);
  text('snare slider: ' + snareSlider.value(), 10, 50);
  text('hi hat slider: ' + hihatSlider.value(), 10, 70);
  text('tom slider: ' + tomSlider.value(), 10, 90);
}

function playKick1() {
  if (kickSound1.isPlaying()) {
    kickSound1.stop();
    kickButton1.html('play kick 1');
  } else {
    kickSound1.loop(0, 1, 1, 0, kickSlider1.value());
    kickButton1.html('stop kick 1');
  }
}

function playKick2() {
  if (kickSound2.isPlaying()) {
    kickSound2.stop();
    kickButton2.html('play kick 2');
  } else {
    kickSound2.loop(0, 1, 1, 0, kickSlider2.value());
    kickButton2.html('stop kick 2');
  }
}

function playSnare() {
  if (snareSound.isPlaying()) {
    snareSound.stop();
    snareButton.html('play snare');
  } else {
    snareSound.loop(0, 1, 1, 0, snareSlider.value());
    snareButton.html('stop snare');
  }
}

function playHihat() {
  if (hihatSound.isPlaying()) {
    hihatSound.stop();
    hihatButton.html('play hi hat');
  } else {
    hihatSound.loop(0, 1, 1, 0, hihatSlider.value());
    hihatButton.html('stop hi hat');
  }
}

function playTom() {
  if (tomSound.isPlaying()) {
    tomSound.stop();
    tomButton.html('play tom');
  } else {
    tomSound.loop(0, 1, 1, 0, tomSlider.value());
    tomButton.html('stop tom');
  }
}
