// Optical Illusions - Four

let linesShowing = true;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
}

function draw() {
  background("white");
  if (linesShowing) {
    linesFromCenter(30);
  }
  redShapes();
}

function mousePressed() {
  linesShowing = !linesShowing;
}

function linesFromCenter(howMany) {
  stroke("black");
  strokeWeight(1);
  let angleChange = 360/howMany;
  push();
  translate(width/2, height/2);
  for (let i=0; i<howMany; i++) {
    rotate(angleChange);
    line(0, 0, width, 0);
  }
  pop();
}

function redShapes() {
  stroke("red");
  strokeWeight(2);
  noFill();
  ellipseMode(CENTER);
  rectMode(CENTER);
  ellipse(width*0.3, height/2, 300, 300);
  rect(width*0.7, height/2, 300, 300);
}