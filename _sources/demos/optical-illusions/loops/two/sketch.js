// Optical Illusions - Loops - Two

let isCircles = true;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  if (isCircles) {
    growingCircles();
  }
  purpleSquares();
}

function mousePressed() {
  isCircles = !isCircles;
}

function purpleSquares() {
  rectMode(CENTER);
  stroke("purple");
  noFill();
  strokeWeight(3);
  rect(width/2, height/2, mouseX);

  strokeWeight(5);
  rect(width/2, height/2, mouseX * 1.5);

  strokeWeight(8);
  rect(width/2, height/2, mouseX *2.5);
}

function growingCircles() {
  let theWeight = 20;
  for (let r = width * 1.5; r > 0; r -= 50) {
    stroke(125);
    strokeWeight(theWeight);
    circle(width/2, height/2, r);
    theWeight -= 0.5;
  }
}
