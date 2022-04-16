let kickSound;
let kickButton;
let kickSlider;

let snareSound;
let snareButton;
let snareSlider;

let hihatSound;
let hihatButton;
let hihatSlider;

function setup() {
  createCanvas(100, 100);
  background(0);

  kickSound = loadSound('sounds/Kick_V_10.wav');
  kickButton = createButton('play kick');
  kickButton.mousePressed(playKick);
  kickSlider = createSlider(0.5, 2, 1, 0);

  snareSound = loadSound('Snare-1_V_9.wav');
  snareButton = createButton('play snare');
  snareButton.mousePressed(playSnare);
  snareSlider = createSlider(0.5, 2, 1, 0);
  
  hihatSound = loadSound('Closed-Shank.wav');
  hihatButton = createButton('play hi hat');
  hihatButton.mousePressed(playHihat);
  hihatSlider = createSlider(0.5, 2, 1, 0);
}

function draw() {

}

function playKick() {
  if (kickSound.isPlaying()) {
    kickSound.stop();
    kickButton.html('play kick');
  } else {
    kickSound.loop(0, 1, 1, 0, kickSlider.value());
    kickButton.html('stop kick');
  }
}

function playSnare() {
  if (snareSound.isPlaying()) {
    snareSound.stop();
    snareButton.html('play snare');
  } else {
    snareSound.loop(0, 1, 1, 0, kickSlider.value());
    snareButton.html('stop snare');
  }
}

function playHihat() {
  if (hihatSound.isPlaying()) {
    hihatSound.stop();
    hihatButton.html('play hi hat');
  } else {
    hihatSound.loop(0, 1, 1, 0, kickSlider.value());
    hihatButton.html('stop hi hat');
  }
}
