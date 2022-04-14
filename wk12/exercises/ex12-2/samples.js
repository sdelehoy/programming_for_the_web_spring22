let song;
let button;
let slider;
let fft;


function setup() {
  createCanvas(500, 500);
  //load song with callback function
  song = loadSound('disco-funk-drums-loop_116bpm_E_minor.wav', loaded);
  fft = new p5.FFT(0.93, 16);
  slider = createSlider(0, 1, 0.5, 0.01);
  colorMode(HSB, 16);
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
  button.mousePressed(togglePlay);
}

function draw() {
  background(0);
  noFill();
  song.setVolume(slider.value());
  let spectrum = fft.analyze();
  for (let i = 0; i < spectrum.length; i++) {
    let amp = spectrum[i];
    stroke(i, 100, 70);
    strokeWeight(1);
    circle(width / 2, height / 2, amp * 1.5);
  }
}