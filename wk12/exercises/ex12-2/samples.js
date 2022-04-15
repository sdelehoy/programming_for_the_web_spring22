let song;
let button;
let slider;
let fft;
let sound;
let add;


function setup() {
  let canvas = createCanvas(500, 500);
  canvas.parent('canvas');
  //load song with callback function
  song = loadSound('disco-funk-drums-loop_116bpm_E_minor.wav', loaded);
  sound = loadSound('strat-riff_115bpm_E_minor.wav');
  fft = new p5.FFT(0.93, 128);
  slider = createSlider(0, 1, 0.5, 0.01);
  slider.parent('slider');
  colorMode(HSB, 128);
}

//button toggles between play and pause
function togglePlay() {
  if(!song.isPlaying()) {
    song.loop();
    button.html('pause');
  } else {
    song.pause();
    button.html('play');
  }
}

//callback to display button and slider after song has loaded
function loaded() {
  button = createButton('play');
  button.parent('button');
  button.mousePressed(togglePlay);
  add = createButton('guitar');
  add.parent('add');
  add.mousePressed(addSound);
}

function addSound() {
  sound.play();
}

function draw() {
  background(0);
  noFill();
  song.setVolume(slider.value());
  let spectrum = fft.analyze();
  for (let i = 0; i < spectrum.length; i++) {
    let amp = spectrum[i];
    stroke(i, 100, 100);
    strokeWeight(1);
    circle(width / 2, height / 2, amp * 1.7);
  }
}