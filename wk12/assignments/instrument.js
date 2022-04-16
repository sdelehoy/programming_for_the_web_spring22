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

function setup() {
  createCanvas(100, 100);

  kickSound1 = loadSound('sounds/Kick_V_10.wav');
  kickButton1 = createButton('play kick 1');
  kickButton1.mousePressed(playKick1);
  kickSlider1 = createSlider(0.5, 2, 1, 0.25);

  kickSound2 = loadSound('sounds/Kick_V_10.wav');
  kickButton2 = createButton('play kick 2');
  kickButton2.mousePressed(playKick2);
  kickSlider2 = createSlider(0.5, 2, 1, 0.25);

  snareSound = loadSound('sounds/Snare-1_V_9.wav');
  snareButton = createButton('play snare');
  snareButton.mousePressed(playSnare);
  snareSlider = createSlider(0.5, 2, 1, 0.25);
  
  hihatSound = loadSound('sounds/Closed-Shank.wav');
  hihatButton = createButton('play hi hat');
  hihatButton.mousePressed(playHihat);
  hihatSlider = createSlider(0.25, 2, 1, 0.25);
}

function draw() {
  background(255);
 text(kickSlider1.value(), 10, 10);
 text(kickSlider2.value(), 10, 30);
 text(snareSlider.value(), 10, 50);
 text(hihatSlider.value(), 10, 70);
}

function playKick1() {
  if (kickSound1.isPlaying()) {
    kickSound1.stop();
    kickButton1.html('play kick 1');
  } else {
    kickSound1.loop(0, 1, 1, 0, kickSlider.value());
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
