// sound effects demo
// Dan Schellenberg
// Mar 15, 2018

// global variables
let backgroundMusic;
let spellSound;

// the preload function guarentees that the code inside the function is
// executed before the rest of the program runs -- helpful for things
// like loading images (since JS is asynchronous)
function preload() {
  backgroundMusic = loadSound("assets/TownTheme.mp3");
  spellSound = loadSound("assets/swing.wav");
}

// the setup function will only run once (before the draw loop begins)
// this is where you want to set up the environment (size of canvas, etc)
function setup() {
  createCanvas(windowWidth, windowHeight);
  backgroundMusic.setVolume(0.6);
  backgroundMusic.loop();
  spellSound.setVolume(0.9);
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
