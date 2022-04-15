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
  let note = 'Fb4';
  polySynth.noteAttack(note);
}

function mouseReleased() {
  polySynth.noteRelease();
}