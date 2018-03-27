//snake demo
//Dan Schellenberg
//Mar 27, 2018

let locations, foodSpots;
let segmentSize;
let x, y, direction;
let numberOfSegments;
let state;
let speed;
let backgroundMusic;
let eatFoodSound;
let speedUpSound;
let deathSound;

function preload() {
  eatFoodSound = loadSound("assets/eat-food.wav");
  speedUpSound = loadSound("assets/speed-up.wav");
  deathSound = loadSound("assets/dead.wav");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  // since the background music is a big file, load it outside preload (so we
  // don't have to wait for it), and then call a function when it completes loading
  backgroundMusic = loadSound("assets/background-music.wav", loopBackgroundMusic);

  eatFoodSound.setVolume(0.9);
  speedUpSound.setVolume(0.9);
  deathSound.setVolume(0.9);

  state = "start";
  numberOfSegments = 1;
  segmentSize = 10;
  direction = "right";
  speed = 5;

  locations = [];
  x = roundDownToNearestMultiple(width / 2, segmentSize);
  y = roundDownToNearestMultiple(height / 2, segmentSize);
  locations.push([x, y]);
  foodSpots = [];
}

function draw() {
  background(255);

  if (state === "start") {
    startScreen();
  }

  else if (state === "game") {
    spawnFood();
    displayFood();

    moveSnake();
    displaySnake();

    displayScore();
  }
  else if (state === "dead") {
    deathScreen();
  }
}

function keyPressed() {
  if (state === "start") {
    state = "game";
  }
  else if (state === "game") {
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
  else if (state === "dead") {
    if (key === "r" || key === "R") {
      setup();
    }
  }
}

function loopBackgroundMusic() {
  backgroundMusic.setVolume(0.6);
  backgroundMusic.loop();
}

function roundDownToNearestMultiple(number, multiple) {
  let remainder = number % multiple;
  let answer = number - remainder;
  return answer;
}


function spawnFood() {
  if (frameCount % 50 === 0 && foodSpots.length < 4) {
    let x = roundDownToNearestMultiple(random(width), segmentSize);
    let y = roundDownToNearestMultiple(random(height), segmentSize);
    foodSpots.push([x, y]);
  }
}

function displayFood() {
  for (let i = 0; i < foodSpots.length; i++) {
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

function eatingFood() {
  let currentX = locations[locations.length - 1][0];
  let currentY = locations[locations.length - 1][1];

  for (let i = 0; i < foodSpots.length; i++) {
    if (foodSpots[i][0] === currentX && foodSpots[i][1] === currentY) {
      // remove this food location from the array
      foodSpots.splice(i, 1);
      return true;
    }
  }
  return false;
}

function moveSnake() {
  if (frameCount % speed === 0) {
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
      state = "dead";
      deathSound.play();
    }

    else if (isOffScreen() === true) {
      state = "dead";
      deathSound.play();
    }

    else if (eatingFood() === true) {
      eatFoodSound.play();
      numberOfSegments++;
      if (numberOfSegments === 4) {
        speed = 4;
        speedUpSound.play(1);
      }
      else if (numberOfSegments === 8) {
        speed = 3;
        speedUpSound.play(1);
      }
      else if (numberOfSegments === 12) {
        speed = 2;
        speedUpSound.play(1);
      }
      else if (numberOfSegments === 16) {
        speed = 1;
        speedUpSound.play(1);
      }
    }
  }
}

function isOffScreen() {
  let currentX = locations[locations.length - 1][0];
  let currentY = locations[locations.length - 1][1];

  return currentX < 0 || currentX > width || currentY < 0 || currentY > height;
}

function deathScreen() {
  backgroundMusic.setVolume(0.2);
  textSize(42);
  textAlign(CENTER, CENTER);
  fill(0);
  text("DEAD!", width / 2, height / 2);
  text("Press R to restart.", width / 2, height / 2 + 55);
}

function displayScore() {
  textSize(42);
  textAlign(CENTER, CENTER);
  fill(255, 0, 0, 125);
  noStroke();
  text(numberOfSegments, 30, 40);
}

function startScreen() {
  textSize(42);
  textAlign(CENTER, CENTER);
  fill(0);
  text("Snake!", width / 2, height / 2);
  text("Use WASD to move.", width / 2, height / 2 + 55);
  text("Press any key to begin...", width / 2, height / 2 + 110);
}
