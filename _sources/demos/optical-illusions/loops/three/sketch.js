// Optical Illusions - Three

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
  redLines();
}

function mousePressed() {
  linesShowing = !linesShowing;
}

function linesFromCenter(howMany) {
  stroke("black");
  let angleChange = 360/howMany;
  push();
  translate(width/2, height/2);
  for (let i=0; i<howMany; i++) {
    rotate(angleChange);
    line(0, 0, width, 0);
  }
  pop();
}

function redLines() {
  stroke("red");
  line(width*0.4, 0, width*0.4, height);
  line(width*0.6, 0, width*0.6, height);
}