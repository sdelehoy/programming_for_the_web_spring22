let song;
var slider;
var button;

function setup() {
  createCanvas(500, 500);
  song = loadSound('disco-funk-drums-loop_116bpm_E_minor.wav', loaded);
}

function togglePlay() {
  if(!song.isPlaying()) {
    song.loop();
    button.html('pause');
  } else {
    song.pause();
    button.html('play');
  }
}

function loaded() {
  button = createButton('play');
  button.mousePressed(togglePlay);
  slider = createSlider(0, 1, 0.5, 0.01);
}

function draw() {
  background(0);
  song.setVolume(slider.value());
}