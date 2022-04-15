let polySynth;

function setup() {
  let cnv = createCanvas(100, 100);
  cnv.mousePressed(playSynth);
  background(0);
  polySynth = new p5.PolySynth();
}

function draw() {

}

function playSynth() {
  userStartAudio();
  let note = 'G4';
  let velocity = 1;
  let time = 0;
  let dur = 1;
  polySynth.noteAttack(note);
}

function mouseReleased() {
  polySynth.noteRelease();
}