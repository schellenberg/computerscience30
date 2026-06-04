// 2D Grid from Text File Demo
// Dan Schellenberg

// Global variables
let grid;
let shape;
let rows, cols;

// Need to load the text file before the rest of the sketch runs
function preload() {
  shape = loadStrings('assets/happy.txt');
}

function setup() {
  // Set column and row size based on the number of rows in the text file, and the
  // length of the first row of text in the text file. Assumes the rest of the lines
  // will have the same length.
  cols = shape[0].length;
  rows = shape.length;
  grid = createGrid(cols, rows);

  createCanvas(windowWidth, windowHeight);
  
  // convert the grid into the characters from the text file
  for (let i=0; i<shape.length; i++) {
    grid[i] = [...shape[i]];
  }
}

function draw() {
  background(220);
  
  // these values will change based on the text file and the size of the canvas
  let cellWidth = width/cols;
  let cellHeight = height/rows;

  // loop through both width and height of the grid, looking at each cell inside
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      let theColor = grid[y][x];
      if (theColor === 'w') {
        fill("white");
      }
      else if (theColor === "b") {
        fill('black');
      }

      // use the values of cellWidth and Height to move along the x and y axis
      rect(x*cellWidth, y*cellHeight, cellWidth, cellHeight);
    }
  }
}

function createGrid(cols, rows) {
  let grid = [];
  for (let y = 0; y < rows; y++) {
    grid.push([]);
    for (let x = 0; x < cols; x++) {
      grid[y].push(0);
    }
  }
  return grid;
}

// https://health-infobase.canada.ca/src/data/covidLive/covid19.csv