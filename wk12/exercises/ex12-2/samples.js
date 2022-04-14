let song;
var slider;

function setup() {
  createCanvas(500, 500);
  song = loadSound('disco-funk-drums-loop_116bpm_E_minor.wav', loaded);
  slider = createSlider(0, 1, 0.5, 0.01);
}

function loaded() {
  song.play();
}

function draw() {
  background(0);
  song.setVolume(slider.value());
}