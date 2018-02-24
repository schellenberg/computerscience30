//State Variable -- Square Following Edge
//Dan Schellenberg
//Adapted from Daniel Shiffman's Learning Processing 5-8 Example
//Feb 23, 2018

let x, y;
let rectSize;
let speed;

// A variable to keep track of the square's "state."
// Depending on the value of its state, it will either move right, down, left, or up.
let state;

function setup() {
  createCanvas(windowWidth, windowHeight);

  x = 0;
  y = 0;
  rectSize = 50;
  speed = 5;
  state = 0;
}

function draw() {
  background(255);

  // Display the square
  stroke(0);
  fill(0);
  rect(x, y, rectSize, rectSize);

  // If the state is 0, move to the right.
  if (state === 0) {
    x = x + speed;
    // If, while the state is 0, it reaches the right side of the window, change the state to 1
    // Repeat this same logic for all states!?
    if (x > width - rectSize) {
      x = width - rectSize;
      state = 1;
    }
  }
  else if (state === 1) {
    y = y + speed;
    if (y > height - rectSize) {
      y = height - rectSize;
      state = 2;
    }
  }
  else if (state === 2) {
    x = x - speed;
    if (x < 0) {
      x = 0;
      state = 3;
    }
  }
  else if (state === 3) {
    y = y - speed;
    if (y < 0) {
      y = 0;
      state = 0;
    }
  }
}
