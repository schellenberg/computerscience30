// grid demo
// Dan Schellenberg
// Mar 26, 2018

let rows = 5;
let cols = 5;
let grid;
let cellSize;

function setup() {
  createCanvas(600, 600);
  cellSize = width / cols;
  grid = createRandom2dArray(cols, rows);
}

function draw() {
  background(255);
  displayGrid();
}

function displayGrid() {
  for (let x=0; x<cols; x++) {
    for (let y=0; y<rows; y++) {
      if (grid[x][y] === 0) {
        fill(0);
      }
      else {
        fill(255);
      }
      rect(x*cellSize, y*cellSize, cellSize, cellSize);
    }
  }
}

function mousePressed() {
  let xcoord = floor(mouseX / cellSize);
  let ycoord = floor(mouseY / cellSize);

  if (grid[xcoord][ycoord] === 1) {
    grid[xcoord][ycoord] = 0;
  }
  else {
    grid[xcoord][ycoord] = 1;
  }
}

function keyPressed() {
  grid = createRandom2dArray(cols, rows);
}

function createRandom2dArray(cols, rows) {
  let randomGrid = [];
  for (let x=0; x<cols; x++) {
    randomGrid.push([]);
    for (let y=0; y<rows; y++) {
      if (random(100) < 50) {
        randomGrid[x].push(0);
      }
      else {
        randomGrid[x].push(1);
      }
    }
  }
  return randomGrid;
}
