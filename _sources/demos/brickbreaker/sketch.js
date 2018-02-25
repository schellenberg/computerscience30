// Ball Bounce (Local Storage demo)
// Dan Schellenberg
// Feb 24, 2018

// reference:  https://github.com/bmoren/p5.collide2D

// global variables
let x, y, radius;
let dx, dy;
let bricks = [];
const numberBricksAcross = 12;
const numberBricksDown = 8;


function setup() {
  createCanvas(windowWidth, windowHeight);
  x = width / 2;
  y = height / 2;
  radius = 20;
  dx = random(2, 5);
  dy = random(2, 5);

  //spawn bricks
  let edgeSpace = width * 0.05;
  let brickSpacer = 5;
  let brickWidth = (width - edgeSpace * 2 - brickSpacer * numberBricksAcross ) / numberBricksAcross;
  let brickHeight = brickWidth * 0.3;
  for (let i = 0; i < numberBricksAcross; i++) {
    for (let j = 0; j < numberBricksDown; j++) {
      let someBrick = {
        x: edgeSpace + i * brickWidth + i * brickSpacer,
        y: edgeSpace + j * brickHeight + j * brickSpacer,
        w: brickWidth,
        h: brickHeight,
        c: color(255 - 255/numberBricksDown*j, 0, 0),
      };
      bricks.push(someBrick);
    }
  }
}

function draw() {
  background(255);
  moveBall();
  checkForCollision();
  displayBall();
  displayBricks();
}

function moveBall() {
  x += dx;
  y += dy;

  //check if bounce required
  if (y + radius >= height || y - radius <= 0) {
    dy = dy * -1;
  }

  if (x + radius >= width || x - radius <= 0) {
    dx = dx * -1;
  }

}

function checkForCollision() {
  for (let i = 0; i < bricks.length; i++) {
    if (collideRectCircle(bricks[i].x, bricks[i].y, bricks[i].w, bricks[i].h, x, y, radius * 2)) {
      bricks.splice(i, 1); // this removes the ith brick (the 1 argument is number of elements to delete)

      //naive method -- just bounce vertically
      //could fix this up to bounce properly, but would need to implement a smarter collision detection
      dy *= -1;
      y += dy;
    }
  }
}

function displayBall() {
  if (collidePointCircle(mouseX, mouseY, x, y, radius * 2)) {
    fill(255, 0, 0);
  }
  else {
    fill(0);
  }
  ellipse(x, y, radius * 2, radius * 2);
}

function displayBricks() {
  for (let i = 0; i < bricks.length; i++) {
    fill(bricks[i].c);
    rect(bricks[i].x, bricks[i].y, bricks[i].w, bricks[i].h);
  }
}
