// p5js template project - replace with project title
// Dan Schellenberg - replace with your name
// Feb 2, 2018 - replace with the date

let x, y;
let radius;
let xVelocity, yVelocity;
let xAcceleration, yAcceration;
let gravity;

// the setup function will only run once (before the draw loop begins)
// this is where you want to set up the environment (size of canvas, etc)
function setup() {
  createCanvas(windowWidth, windowHeight);
  radius = 50;
  x = width/2;
  y = height - radius;
  yAcceration = 0;
  yVelocity = 0;
  gravity = 0.5;
}

function draw() {
  background(255);

  // move ball
  yVelocity += yAcceration;
  yVelocity += gravity;
  y += yVelocity;

  yAcceration = 0;

  //display ball
  ellipse(x, y, radius*2, radius*2);
}

function keyPressed() {
  yAcceration = -20;
}
