// Clock demo
// Dan Schellenberg
// March 14, 2018

let clockSize;

function setup() {
  createCanvas(windowWidth, windowHeight);
  if (width > height) {
    clockSize = height * 0.9;
  }
  else {
    clockSize = width * 0.9;
  }
  angleMode(DEGREES);
}

function draw() {
  background(255);
  drawClockFace();
  displayHourHand();
  displayMinuteHand();
  displaySecondHand();
}


function displaySecondHand() {
  push();
  translate(width / 2, height / 2);
  rotate(second()*6);
  stroke(255, 0, 0);
  strokeCap(SQUARE);
  strokeWeight(3);
  line(0, 0, 0, -clockSize / 2 * 0.9);
  pop();
}

function displayMinuteHand() {
  push();
  translate(width / 2, height / 2);
  rotate(minute()*6 + second() / 12);
  stroke(0);
  strokeCap(SQUARE);
  strokeWeight(5);
  line(0, 0, 0, -clockSize / 2 * 0.65);
  pop();
}

function displayHourHand() {
  push();
  translate(width / 2, height / 2);
  rotate(hour()%12 + minute() / 12); //this is wrong...
  stroke(0);
  strokeCap(SQUARE);
  strokeWeight(10);
  line(0, 0, 0, -clockSize / 2 * 0.4);
  pop();
}

function drawClockFace() {
  push(); //save current drawing state
  translate(width / 2, height / 2);

  // outer circle
  fill(255);
  stroke(0);
  strokeWeight(8);
  ellipse(0, 0, clockSize, clockSize);

  // little dot in the middle
  fill(0);
  ellipse(0, 0, 4, 4);

  // hour tick marks
  strokeWeight(10);
  strokeCap(SQUARE);
  for (let i = 0; i < 12; i++) {
    line(0, clockSize / 2 * 0.95, 0, clockSize / 2 * 0.75);
    rotate(360 / 12);
  }

  // minute tick marks
  strokeWeight(4);
  for (let i = 0; i < 60; i++) {
    line(0, clockSize / 2 * 0.95, 0, clockSize / 2 * 0.80);
    rotate(360 / 60);
  }

  pop(); //return to previous drawing state
}
