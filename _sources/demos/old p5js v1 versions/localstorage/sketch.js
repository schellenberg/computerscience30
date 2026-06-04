// Ball Bounce (Local Storage demo)
// Dan Schellenberg
// Feb 24, 2018

// reference: https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API

// watch the local storage values in Chrome by hitting F12 (developer menu),
// then open Application tab and select Local Storage

// global variables
let x, y, radius;
let dx, dy;
let bounceCounter;
let allTimeBounceCounter;

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = width / 2;
  y = height / 2;
  bounceCounter = 0;
  allTimeBounceCounter = 0;
  radius = 50;
  dx = random(2, 5);
  dy = random(2, 5);

  //set allTimeBounceCounter from local storage, if ir already exists
  if (!localStorage.getItem("highscore")) {
    setHighScore();
  }
  else {
    getHighScore();
  }
}

function draw() {
  background(255);
  move();
  display();
}

function move() {
  x += dx;
  y += dy;

  //check if bounce required
  if (y + radius >= height || y - radius <= 0) {
    dy = dy * -1;
    bounceCounter++;
  }

  if (x + radius >= width || x - radius <= 0) {
    dx = dx * -1;
    bounceCounter++;
  }

  if (bounceCounter > allTimeBounceCounter) {
    setHighScore();
  }
}

function display() {
  fill(0);
  ellipse(x, y, radius * 2, radius * 2);

  //current high score
  fill(0);
  textSize(32);
  text(bounceCounter, 25, 40);

  //all time high score (from local storage)
  fill(0, 0, 255);
  textSize(32);
  text(allTimeBounceCounter, 25, 100);
}

function setHighScore() {
  localStorage.setItem("highscore", bounceCounter);
}

function getHighScore() {
  allTimeBounceCounter = localStorage.getItem("highscore");
}

function keyTyped() {
  if (key === "c") {
    localStorage.removeItem("highscore");
  }
}
