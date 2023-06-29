// Optical Illusions - Five - Leviant Enigma

let linesShowing = true;

function setup() {
  createCanvas(800, 800);
  angleMode(DEGREES);
}

function draw() {
  background("white");
  if (linesShowing) {
    linesFromCenter(90);
  }
  concentricCircles();
}

function mousePressed() {
  linesShowing = !linesShowing;
}

function concentricCircles() {
  fill(104, 96, 111);
  ellipseMode(CENTER);
  noStroke();
  ellipse(width/2, height/2, 750);
}

function linesFromCenter(howMany) {
  let angleChange = 360/howMany;
  let maxThickness = 15;
  push();
  translate(width/2, height/2);
  fill("black");
  for (let i=0; i<howMany; i++) {
    quad(0, 0, width, -maxThickness, width, maxThickness, 0, 0);
    rotate(angleChange);
  }
  pop();
}
