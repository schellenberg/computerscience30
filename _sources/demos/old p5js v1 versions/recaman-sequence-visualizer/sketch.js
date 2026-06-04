// Recaman Sequence
// Dan Schellenberg
// Nov 21, 2019

// Rules of the Recaman Sequence:
//  - Start at zero.
//  - Every step you take will be 1 bigger than the last step you took.
//  - If it’s possible to step backward (negatively), do so. Otherwise step forward.
//  - Backward steps are only allowed if the resulting location is positive (greater 
//      than zero) and if we’ve never been to that number before.

// initialize global variables
// set the values inside setup to make it simple to start again when certain keys are pressed
let scaleSize = 0.5;  // can adjust the scale with up and down arrows
let current;          // current value of the Recaman sequence
let stepsTaken;       // list of numbers already used from the Recaman sequence
let stepSize;         // how much do we add/subtract by to get to the next number in the sequence?
let mode = "BOTTOM";  // options are CENTER or BOTTOM
let soundPlayer;      // need to have p5.sound.min.js uncommented in index.html

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);

  // set starting values of variables here, so we can reset the sketch by calling setup()
  current = 0;
  stepSize = 0;
  stepsTaken = [];

  // visual settings
  noFill();
  strokeWeight(1);
  ellipseMode(CENTER);

  // set initial sound values
  soundPlayer = new p5.Oscillator();
  soundPlayer.setType('sine');
  soundPlayer.freq(0);
  soundPlayer.start();
  soundPlayer.amp(0.5, 0.05);
}

function draw() {
  let backwardStep = current - stepSize;
  // step backward in the sequence, but only if it is positive, and we haven't seen the number before
  if (backwardStep > 0 && !stepsTaken.includes(backwardStep)) {
    current = backwardStep;
    // all backward steps are red; fourth parameter is opacity, which improves the visual
    stroke(color(255, 0, 0, 20));
  }
  // if you can't step backward in the sequence, step forward
  else {
    current = current + stepSize;
    // all forward steps are black; fourth parameter is opacity, which improves the visual
    stroke(color(0, 0, 0, 20));
  }

  // add the current number to the list of numbers that have already been seen
  stepsTaken.push(current);


  if (mode === "BOTTOM") {
    // choose this by pressing b -- draw the circles from the center bottom of the screen
    translate(width/2, height);
    circleDrawnFromCenterBottom(0, 0, current * scaleSize);
  }
  else if (mode === "CENTER") {
    // choose this by pressing c -- draw the circles from the middle of the screen
    translate(width/2, height/2);
    circle(0, 0, current * scaleSize);
  }

  // every step is one larger than the last step taken
  stepSize++;

  // set the frequency of the sound to be the current number from the sequence
  soundPlayer.freq(current);
}

function circleDrawnFromCenterBottom(x, y, diameter) {
  // push() allows you to save the current state of the translation matrix (in this case, where the origin is)
  push();
  // move the origin up by the radius of the circle, so the bottom edges of the circles line up
  translate(0, y - diameter/2);
  circle(0, 0, diameter);
  // reset the transformation matrix back to what is was before (put the origin back to where it was)
  pop();
}

function keyPressed() {
  // up arrow zooms in
  if (keyCode === UP_ARROW) {
    scaleSize *= 1.5;
    setup();
  }
  // down arrow zooms out
  else if (keyCode === DOWN_ARROW) {
    scaleSize *= 0.75;
    setup();
  }
  // the r key resets the sketch to the default zoom value
  else if (key === "r") {
    scaleSize = 0.5;
    setup();
  }
  // the c key switches the sketch to drawing from the center, and begins the drawing again
  else if (key === "c") {
    mode = "CENTER";
    setup();
  }
  // the b key switches the sketch to drawing from the bottom, and begins the drawing again
  else if (key === "b") {
    mode = "BOTTOM";
    setup();
  }
}

