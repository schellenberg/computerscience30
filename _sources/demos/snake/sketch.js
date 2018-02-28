//snake demo
//Dan Schellenberg
//Feb 15, 2018

let locations, foodSpots;
let segmentSize;
let x, y, direction;
let numberOfSegments;
let state;

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = round(width / 2);
  y = round(height / 2);

  state = 1;
  numberOfSegments = 1;
  segmentSize = 10;
  direction = "right";
  locations = [];
  locations.push([x, y]);
  foodSpots = [];
}

function draw() {
  background(255);

  if (state === 1) {
    spawnFood();
    displayFood();

    moveSnake();
    displaySnake();
  }
  else if (state === 2) {
    deathScreen();
  }
}

function keyPressed() {
  if (key === "w" || key === "W") {
    direction = "up";
  }
  if (key === "s" || key === "S") {
    direction = "down";
  }
  if (key === "a" || key === "A") {
    direction = "left";
  }
  if (key === "d" || key === "D") {
    direction = "right";
  }
}

function spawnFood() {
  if (frameCount % 50 === 0) {
    foodSpots.push([random(width), random(height)]);
  }
}

function displayFood() {
  for (let i=0; i<foodSpots.length; i++) {
    noStroke();
    fill(255, 0, 0, 120);
    rect(foodSpots[i][0], foodSpots[i][1], segmentSize, segmentSize);
  }
}

function displaySnake() {
  for (let i = 0; i < locations.length; i++) {
    stroke(0);
    fill(0);
    rect(locations[i][0], locations[i][1], segmentSize, segmentSize);
  }
}

function checkForCollision() {
  let currentX = locations[locations.length - 1][0];
  let currentY = locations[locations.length - 1][1];

  for (let i = 0; i < locations.length - 1; i++) { //don't check against last location (current spot)
    if (locations[i][0] === currentX && locations[i][1] === currentY) {
      return true;
    }
  }
  return false;
}

function moveSnake() {
  if (frameCount % 20 === 0) {
    numberOfSegments++;
  }
  if (frameCount % 5 === 0) {
    if (direction === "right") {
      x += segmentSize;
    }
    if (direction === "down") {
      y += segmentSize;
    }
    if (direction === "left") {
      x -= segmentSize;
    }
    if (direction === "up") {
      y -= segmentSize;
    }
    locations.push([round(x), round(y)]);
    if (locations.length > numberOfSegments) {
      locations.shift();
    }

    if (checkForCollision() === true) {
      state = 2;
    }
  }
}

function deathScreen() {
  textSize(42);
  textAlign(CENTER, CENTER);
  fill(0);
  text("DEAD!", width / 2, height / 2);
}
