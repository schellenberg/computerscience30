let cellSize;

async function setup() {
  if (windowWidth > windowHeight) {
    createCanvas(windowHeight, windowHeight);
  }
  else {
    createCanvas(windowWidth, windowWidth);
  }
  cellSize = width/8;
}

function draw() {
  background(220);
  chessBoard();
}

function chessBoard() {
  let isWhite = true;
  for (let x = 0; x < 8; x++) {
    for (let y = 0; y < 8; y++) {
      if (isWhite) {
        fill("white");
      }
      else {
        fill("black");
      }
      square(x*cellSize, y*cellSize, cellSize);
      isWhite = !isWhite;
    }
    isWhite = !isWhite;
  }
}