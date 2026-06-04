// Generative Art Demo
// Bezier Curves with Repetition
// Dan Schellenberg
// Aug 28, 2019


function setup() {
  createCanvas(windowWidth, windowHeight);
  drawManyCurves(1000);
}

function draw() {  
}

function mousePressed() {
  setup();
}

function keyPressed() {
  setup();
}

function drawManyCurves(howManyCurves) {
  background(255);
  stroke(0);
  for (let i = 0; i < howManyCurves; i++) {
    drawCurveyLine(50, height/2, width, random(2, 20));
  }
}

function drawCurveyLine(startingX, startingY, endingX, numberOfSegments) {
  let segmentWidth = (endingX - startingX) / numberOfSegments;
  let y = startingY;
  for (let x = startingX; x < endingX; x += segmentWidth) {
    let controlOneX = random(x, x + segmentWidth);
    let controlOneY = y + random(-100, 100);
    let controlTwoX = random(x, x + segmentWidth);
    let controlTwoY = y + random(-100, 100);
    let endingY = y + random(-50, 50);
    noFill();
    stroke(0, 0, 0, 50);
    bezier(x, y, controlOneX, controlOneY, controlTwoX, controlTwoY, x + segmentWidth, endingY);
    y = endingY;
  }
}