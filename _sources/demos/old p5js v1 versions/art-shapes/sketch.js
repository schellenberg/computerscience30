// Generative Art Demo
// Shapes and Repetition
// Dan Schellenberg
// Aug 28, 2019


function setup() {
  createCanvas(windowWidth, windowHeight);
  drawManyShapes(50, 50, width - 100, height - 100, 50);
}

function draw() {  
}

function mousePressed() {
  setup();
}

function keyPressed() {
  setup();
}

function drawManyShapes(startingX, startingY, totalWidth, totalHeight, shapeSize) {
  background(255);
  for (let x = startingX; x < totalWidth; x += shapeSize) {
    for (let y = startingY; y < totalHeight; y += shapeSize) {
      drawRandomShape(x, y, shapeSize);
    }
  }
}

function drawRandomShape(x, y, size) {
  let fillChoice = random(0, 100);
  if (fillChoice < 50) {
    fill(0);
  }
  else {
    fill(255);
  }

  let shapeChoice = random(0, 100);
  if (shapeChoice < 20) {
    //nothing drawn
  }
  else if (shapeChoice < 40) {
    //square
    rect(x, y, size, size);
  }
  else if (shapeChoice < 60) {
    //circle
    ellipse(x + size/2, y + size/2, size, size);
  }
  else if (shapeChoice < 80) {
    //triangle with positive sloped hypotenuse
    triangle(x, y, x + size, y, x, y + size);
  }
  else if (shapeChoice < 100) {
    //triangle with negative sloped hypotenuse
    triangle(x, y, x, y + size, x + size, y + size);
  }
}