// Generative Art Demo
// Cubic Disarray
// Dan Schellenberg
// Aug 28, 2019


function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  drawGridOfCubes(100, 50, 25, 25, 450, height - 50);
}

function draw() {  
}

function mousePressed() {
  setup();
}

function keyPressed() {
  setup();
}

function drawGridOfCubes(startingX, startingY, cubeWidth, cubeHeight, endingX, endingY) {
  background(255);
  for (let x = startingX; x < endingX; x += cubeWidth) {
    let rowNumber = 0;
    for (let y = startingY; y < endingY; y += cubeHeight) {
      let offsetAngle = random(-5, 5) * rowNumber;
      let offsetX = random(-1, 1) * rowNumber;
      let offsetY = random(-1, 1) * rowNumber;
      drawCube(x + offsetX, y + offsetY, cubeWidth, cubeHeight, offsetAngle);
      rowNumber++;
    }
  }
}

function drawCube(x, y, cubeWidth, cubeHeight, offsetAngle) {
  push();
  translate(x, y);
  rotate(offsetAngle);
  fill(255, 255, 255, 0);
  rectMode(CENTER);
  rect(0, 0, cubeWidth, cubeHeight);
  pop();
}