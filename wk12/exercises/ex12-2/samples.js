let song;

function preload() {
  song = loadSound('disco-funk-drums-loop_116bpm_E_minor.wav');
}

function setup() {
  createCanvas(500, 500);
  background(0);
  song.play();
}

function draw() {

}