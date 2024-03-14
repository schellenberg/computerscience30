// Tiling Art
// Object Notation and Arrays

let theTiles = [];
let tileSize = 20;

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let x = 0; x < width; x += tileSize) {
    for (let y = 0; y < height; y += tileSize) {
      spawnTile(x, y);
    }
  }
}

function draw() {
  background(220);

  for (let tile of theTiles) {
    line(tile.x1, tile.y1, tile.x2, tile.y2);
  }
}

function mousePressed() {
  theTiles = [];
  setup();
}


function spawnTile(x, y){
  //randomly choose between a positive or negative slope
  let choice = random(100);
  let tile;
  if (choice > 50) {
    //positive slope
    tile = {
      x1: x - tileSize/2,
      y1: y + tileSize/2,
      x2: x + tileSize/2,
      y2: y - tileSize/2,
    };
  }
  else {
    //negative slope
    tile = {
      x1: x - tileSize/2,
      y1: y - tileSize/2,
      x2: x + tileSize/2,
      y2: y + tileSize/2,
    };
  }
  theTiles.push(tile);
}