// Generative Art Demo
// Tiling
// Dan Schellenberg
// Aug 28, 2019


function setup() {
  createCanvas(windowWidth, windowHeight);
  createTilesOfRandomSize();
}

function draw() {  
}

function mousePressed() {
  setup();
}

function keyPressed() {
  setup();
}

function createTilesOfRandomSize() {
  background(220);
  let tileSize = random(5, width/4);
  drawManyDiagonalsInsideArea(0, 0, width, height, tileSize, tileSize);
}

function drawManyDiagonalsInsideArea(x, y, width, height, boxWidth, boxHeight) {
  let numberOfHorizontalBoxes = int(width / boxWidth);
  let numberOfVerticalBoxes = int(height / boxHeight);
  
  let edgeBufferLeft = (width - boxWidth * numberOfHorizontalBoxes) / 2;
  let edgeBufferTop = (height - boxHeight * numberOfVerticalBoxes) / 2;

  for (let i = 0; i < numberOfHorizontalBoxes; i++) {
    for (let j = 0; j < numberOfVerticalBoxes; j++) {
      drawRandomDiagonal(i*boxWidth + edgeBufferLeft, j*boxHeight + edgeBufferTop, boxWidth, boxHeight);
    }
  }
}

function drawRandomDiagonal(x, y, boxWith, boxHeight) {
  // x and y values are for the top left location of the box you will draw a diagonal in
  // pick either top left to bottom right, or top right to bottom left
  let choice = random(1,100);
  if (choice < 50) {
    line(x, y, x + boxWith, y + boxHeight);
  }
  else {
    line(x + boxWith, y, x, y + boxHeight);
  }
}