// Maze Generation
// Dan Schellenberg
// Adapted from the Coding Challenge done by Daniel Shiffman
//  https://www.youtube.com/watch?v=HyK_Q5rrcr4

// global variables
let cols, rows;
let cellSize = 10;
let current;
let grid = [];
let stack = [];

async function setup() {
  createCanvas(800, 800);

  cols = floor(width / cellSize);
  rows = floor(height / cellSize);

  // create grid of cells
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      let someCell = new Cell(x, y);
      grid.push(someCell);
    }
  }

  // start making maze from top left corner
  current = grid[0];
}

function draw() {
  background(50);

  // look for a new spot to visit in the grid
  current.visited = true;
  // current.highlight();

  let next = current.checkNeighbors();
  if (next) {
    next.visited = true;
    stack.push(current);

    removeWalls(current, next);
    current = next;
  }

  // no current neighbors, so check stack to restart from new location
  else if (stack.length > 0) {
    current = stack.pop();
    console.log(stack.length);
  }

  else {
    noLoop();
    // display the grid cells
    for (let i = 0; i < grid.length; i++) {
      grid[i].display();
    }
    saveJSON(grid, "maze3.json");
  }

}



function index(i, j) {
  // given an x, y value, return the index value of the location in a 1d array

  if (i < 0 || j < 0 || i > cols - 1 || j > rows - 1) {
    // check for edge cases
    return -1;
  }

  else {
    // the location exists in the grid array
    return i + j * cols;
  }
}

function removeWalls(firstCell, secondCell) {
  let xIndexDifference = firstCell.i - secondCell.i;
  if (xIndexDifference === 1) {
    firstCell.walls.left = false;
    secondCell.walls.right = false;
  }
  else if (xIndexDifference === -1) {
    firstCell.walls.right = false;
    secondCell.walls.left = false;
  }

  let yIndexDifference = firstCell.j - secondCell.j;
  if (yIndexDifference === 1) {
    firstCell.walls.top = false;
    secondCell.walls.bottom = false;
  }
  else if (yIndexDifference === -1) {
    firstCell.walls.bottom = false;
    secondCell.walls.top = false;
  }
}


class Cell {
  // i and j are the col and row values in the grid
  constructor(i, j) {
    this.i = i;
    this.j = j;
    this.walls = {
      top: true,
      right: true,
      bottom: true,
      left: true
    };
    this.visited = false;
    this.endingLocation = false;
  }

  highlight() {
    let x = this.i * cellSize;
    let y = this.j * cellSize;
    noStroke();
    fill(0, 255, 0, 100);
    rect(x, y, cellSize, cellSize);
  }

  display() {
    // x and y are the coordinates to display this cell
    let x = this.i * cellSize;
    let y = this.j * cellSize;

    // draw the walls, if that wall is set to true
    stroke(255);
    if (this.walls.top) {
      line(x, y, x + cellSize, y);
    }
    if (this.walls.right) {
      line(x + cellSize, y, x + cellSize, y + cellSize);
    }
    if (this.walls.bottom) {
      line(x, y + cellSize, x + cellSize, y + cellSize);
    }
    if (this.walls.left) {
      line(x, y, x, y + cellSize);
    }

    // if cell has been visited, change it's color
    if (this.visited) {
      noStroke();
      fill(255, 0, 255, 100);
      rect(x, y, cellSize, cellSize);
    }
  }

  checkNeighbors() {
    let neighbors = [];

    // calculate which cells are the neighbors of the current cell
    //  if the cell is off the edge, the index function will return -1
    let top = grid[index(this.i, this.j - 1)];
    let right = grid[index(this.i + 1, this.j)];
    let bottom = grid[index(this.i, this.j + 1)];
    let left = grid[index(this.i - 1, this.j)];

    // since accessing an array with a negative index returns undefined,
    //  we can check if the neighbor is defined before checking if it's visited
    if (top && !top.visited) {
      neighbors.push(top);
    }
    if (right && !right.visited) {
      neighbors.push(right);
    }
    if (bottom && !bottom.visited) {
      neighbors.push(bottom);
    }
    if (left && !left.visited) {
      neighbors.push(left);
    }

    // as long as there is at least one neighbor that hasn't been visited,
    //  pick one of the neighbors at random
    if (neighbors.length > 0) {
      let r = floor(random(0, neighbors.length));
      return neighbors[r];
    }
    // if there are no unvisited neighbors, should return undefined
    else {
      return undefined;
    }
  }

}
