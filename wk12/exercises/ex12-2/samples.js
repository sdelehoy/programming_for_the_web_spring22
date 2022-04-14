let song;
let button;
let slider;
let fft;


function setup() {
  createCanvas(500, 500);
  //load song with callback function
  song = loadSound('disco-funk-drums-loop_116bpm_E_minor.wav', loaded);
  fft = new p5.FFT(0.9, 16);
  slider = createSlider(0, 1, 0.5, 0.01);
  colorMode(HSB);
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
    let y = map(amp, 0, 16, 0, 32);
    stroke(100, 100);
    circle(width / 2, height / 2, y);
  }
}