let kickButton;
let snareButton;
let hihatButton;

let kickSound;
let snareSound;
let hihatSound;

function setup() {
  let cnv = createCanvas(100, 100);
  background(0);
  kickButton = createButton('play kick');
  kickButton.mousePressed(playKick);
  snareButton = createButton('play snare');
  snareButton.mousePressed(playSnare);
  hihatButton = createButton('play hi hat');
  hihatButton.mousePressed(playHihat);
}

function draw() {

}

function playKick() {
  if (kickSound.isPlaying) {
    kickSound.stop();
    kickButton.html('play kick')
  } else
    kickSound.loop();
    kickButton.html('stop kick');
}

function playSnare() {

}

function playHihat() {

}
