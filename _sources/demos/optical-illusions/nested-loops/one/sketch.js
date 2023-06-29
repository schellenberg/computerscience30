// Nested Loops Optical Illusion

let cellSize;

function setup() {
  createCanvas(windowWidth, windowHeight);
  if (width < height) {
    cellSize = width/10;
  }
  else {
    cellSize = height/10;
  }
  noStroke();
  // ellipseMode(CORNER);
}

function draw() {
  background("gray");
  blackSquares();
  whiteDots();
}

function blackSquares() {
  let buffer = width/20;
  for (let y = 0; y < 8; y++) {
    for (let x = 0; x < 8; x++) {
      fill("black");
      rect(x*cellSize + buffer, y*cellSize + buffer, cellSize*0.8, cellSize*0.8);
    }
  }
}

function whiteDots() {
  let buffer = width/20;
  let circleSize = cellSize/3;
  for (let y = 1; y < 8; y++) {
    for (let x = 1; x < 8; x++) {
      fill("white");
      ellipse(x*cellSize, y*cellSize, circleSize);
    }
  }
}