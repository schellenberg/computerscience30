// Loops 1 - Gradient Illusion 

let gradientShowing = true;

function setup() {
  createCanvas(255*4, 255*2);
}

function draw() {
  background("white");
  if (gradientShowing) {
    drawGradient();
  }
  grayRectangle();
}

function mousePressed() {
  gradientShowing = !gradientShowing;
}

function drawGradient() {
  for (let x = 0; x < width; x++) {
    stroke(x/4);
    fill(x);
    rect(x, 0, 3, height);
  }
}

function grayRectangle() {
  noStroke();
  fill(125);
  rect(100, 100, 750, 300);
}