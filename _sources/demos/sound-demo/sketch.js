// sound effects demo
// Dan Schellenberg
// Mar 15, 2018

// global variables
let backgroundMusic;
let spellSound;

// the setup function will only run once (before the draw loop begins)
// this is where you want to set up the environment (size of canvas, etc)
async function setup() {
  backgroundMusic = await loadSound("assets/TownTheme.mp3");
  spellSound = await loadSound("assets/swing.wav");

  createCanvas(windowWidth, windowHeight);
  // backgroundMusic.setVolume(0.6);
  // spellSound.setVolume(0.9);
  backgroundMusic.loop();
  backgroundMusic.play();
}

function draw() {
  // background(255);
}

function mousePressed() {
  fill(random(255), random(255), random(255), random(255));
  noStroke();
  ellipse(random(width), random(height), 50, 50);
  spellSound.play();
}
