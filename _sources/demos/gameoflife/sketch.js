//Game of Life Simulation
//Dan Schellenberg
//Feb 23, 2018

//global variables
let board = [];
let cols, rows;
let cellWidth, cellHeight;

function setup() {
  createCanvas(600, 600);
  // createCanvas(windowWidth, windowHeight);

  rows = 20;
  cols = 20;

  board = createBoard(cols);

  cellWidth = width / cols;
  cellHeight = height / rows;

  randomizeBoard();
}

function draw() {
  displayBoard();
}

//---------------------------------------------------------------

function displayBoard() {
  //go through each of the cells in the 2d array, displaying
  //a dead (white) cell, or a live (black) cell

  for (let x = 0; x < cols; x++) {
    for (let y = 0; y < rows; y++) {
      if (board[x][y] === 0) {
        fill(255); //dead
      }
      else {
        fill(0); //alive
      }
      rect(x * cellWidth, y * cellHeight, cellWidth, cellHeight);
    }
  }
}

//---------------------------------------------------------------

function update() {
  //determine what the state of the board should be on the next turn

  //need a second 2d array, so the new results don't mess up the
  //decisions you are making in the first array
  let nextTurn = createBoard(cols);

  //loop through the array, but totally ignore the edges (that's left
  //as a challenge for you). Fun.
  for (let x = 1; x < cols - 1; x++) {
    for (let y = 1; y < rows - 1; y++) {

      //count the number of neighbors
      let neighbors = 0;

      //look at the cells in a 3x3 grid surrounding the current cell
      for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
          neighbors += board[x + i][y + j];
        }
      }

      //since we counted the current cell in the loop above, we need
      //to subtract it in (in case it is alive) to get the correct
      //number of neighbors
      neighbors -= board[x][y];


      //apply the rules of the 'game'
      if (board[x][y] === 1) { //currently alive
        if (neighbors === 2 || neighbors === 3) {
          nextTurn[x][y] = 1;
        }
        else {
          nextTurn[x][y] = 0;
        }
      }

      if (board[x][y] === 0) { //currently dead
        if (neighbors === 3) {
          nextTurn[x][y] = 1;
        }
        else {
          nextTurn[x][y] = 0;
        }
      }
    }
  }

  board = nextTurn;
}

//---------------------------------------------------------------

function randomizeBoard() {
  //populate the grid with randomly selected dead/alive cells
  //dead - 0, alive - 1
  for (let x = 0; x < cols; x++) {
    for (let y = 0; y < rows; y++) {
      board[x][y] = floor(random(2));
    }
  }
}

//---------------------------------------------------------------

function createBoard(boardSize) {
  let theBoard = [];

  for (let i = 0; i < boardSize; i++) {
    theBoard[i] = [];
  }

  return theBoard;
}


//---------------------------------------------------------------

function keyPressed() {
  // space key moves to the next turn
  // r creates a new randomized board
  // c clears the entire board (to prepare for clicking cells)

  if (key === " ") {
    update();
  }
  if (key === "r") {
    randomizeBoard();
  }
  if (key === "c") {
    board = createBoard(cols);
  }
}

//---------------------------------------------------------------

function mousePressed() {
  //toggle a cell alive/dead based on mouse being clicked

  //determine which cell in the 2d grid has been clicked
  //  converting to an int truncates any decimal value, and since
  //  we are drawing the rectangles from top left corner with a width
  //  and height, it makes determining the cell really simple...
  let xcord = floor(mouseX / cellWidth);
  let ycord = floor(mouseY / cellHeight);

  //toggle cell based on previous value
  if (board[xcord][ycord] === 1) {
    board[xcord][ycord] = 0;
  }
  else {
    board[xcord][ycord] = 1;
  }
}
