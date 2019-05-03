// Parallax Effect
// Dan Schellenberg
// May 3, 2019
// uses translate instead of many offset additions

// possible extras:
//  - add random colors for mountains (within a certain range, if you want to get fancy)
//  - add birds flying across the screen (would require loops, if done later in semester, could be OOP)

function setup() {
  createCanvas(600, 600);
  noStroke();
}

function draw() {
  layerOne(2);
  layerTwo(6);
  layerThree(10);
  layerFour(20);
}


function layerFour(maxOffset) {
  let xOffset = map(mouseX, 0, width, -maxOffset, maxOffset);
  let yOffset = map(mouseY, 0, height, -maxOffset, maxOffset);
  
  push();
  translate(xOffset, yOffset);
  grass();
  theGround();
  tree();
  pop();
}

function theGround() {
  // ground
  fill(44, 200, 10);
  rect(-100, 500, 800, 300);
}

function grass() {
  fill(44, 200, 10);
  for (let x = -75; x < width + 50; x += 5) {
    rect(x, 485, 2, 50);
  }
}

function tree() {
  //trunk
  fill(114, 84, 14);
  rect(165, 450, 20, 75);

  //top of tree
  fill(34, 142, 7);
  ellipse(175, 400, 100, 150);
}

function layerThree(maxOffset) {
  let xOffset = map(mouseX, 0, width, -maxOffset, maxOffset);
  let yOffset = map(mouseY, 0, height, -maxOffset, maxOffset);

  push();
  translate(xOffset, yOffset);
  mountainTwo();
  mountainThree();
  pop();
}

function mountainTwo() {
  fill(40, 91, 4);
  triangle(-150, height, 150, 250, 450, height);
}

function mountainThree() {
  fill(84, 91, 4);
  triangle(150, height, 450, 250, 750, height);
}

function layerTwo(maxOffset) {
  let xOffset = map(mouseX, 0, width, -maxOffset, maxOffset);
  let yOffset = map(mouseY, 0, height, -maxOffset, maxOffset);

  push();
  translate(xOffset, yOffset);
  mountainOne();
  pop();
}

function mountainOne() {
  fill(1, 35, 10);
  triangle(0, height, 300, 200, width, height);
}

function layerOne(maxOffset) {
  let xOffset = map(mouseX, 0, width, -maxOffset, maxOffset);
  let yOffset = map(mouseY, 0, height, -maxOffset, maxOffset);

  // blue sky
  background(105, 166, 224);

  push();
  translate(xOffset, yOffset);
  sun();
  pop();
}

function sun() {
  noStroke();
  fill(241, 247, 81);
  ellipse(400, 100, 75, 75);
}