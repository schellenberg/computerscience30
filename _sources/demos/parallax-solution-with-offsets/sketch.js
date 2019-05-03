// Parallax Effect
// Dan Schellenberg
// May 3, 2019


// possible extras:
//  - add random colors for mountains (within a certain range, if you want to get fancy)
//  - add birds flying across the screen (would require loops, if done later in semester, could be OOP)

function setup() {
  createCanvas(600, 600);
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
  
  theGround(xOffset, yOffset);
  grass(xOffset, yOffset);
  tree(xOffset, yOffset);
}

function theGround(xOffset, yOffset) {
  // ground
  fill(44, 200, 10);
  rect(-100 + xOffset, 500 + yOffset, 800 + xOffset, 300 + yOffset);
}

function grass(xOffset, yOffset) {
  fill(44, 200, 10);
  for (let x = -75; x < width + 50; x += 5) {
    rect(x, 485 + yOffset, 2, 50);
  }
}

function tree(xOffset, yOffset) {
  //trunk
  fill(114, 84, 14);
  rect(165 + xOffset, 450 + yOffset, 20, 75);

  //top of tree
  fill(34, 142, 7);
  ellipse(175 + xOffset, 400 + yOffset, 100, 150);
}

function layerThree(maxOffset) {
  let xOffset = map(mouseX, 0, width, -maxOffset, maxOffset);
  let yOffset = map(mouseY, 0, height, -maxOffset, maxOffset);

  mountainTwo(xOffset, yOffset);
  mountainThree(xOffset, yOffset);
}

function mountainTwo(xOffset, yOffset) {
  fill(40, 91, 4);
  triangle(-150 + xOffset, height + yOffset, 150 + xOffset, 250 + yOffset, 450 + xOffset, height + yOffset);
}

function mountainThree(xOffset, yOffset) {
  fill(84, 91, 4);
  triangle(150 + xOffset, height  + yOffset, 450 + xOffset, 250 + yOffset, 750 + xOffset, height + yOffset);
}

function layerTwo(maxOffset) {
  let xOffset = map(mouseX, 0, width, -maxOffset, maxOffset);
  let yOffset = map(mouseY, 0, height, -maxOffset, maxOffset);

  mountainOne(xOffset, yOffset);
}

function mountainOne(xOffset, yOffset) {
  fill(1, 35, 10);
  triangle(0 + xOffset, height + yOffset, 300 + xOffset, 200 + yOffset, width + xOffset, height + yOffset);
}

function layerOne(maxOffset) {
  let xOffset = map(mouseX, 0, width, -maxOffset, maxOffset);
  let yOffset = map(mouseY, 0, height, -maxOffset, maxOffset);
  // blue sky
  background(105, 166, 224);
  sun(xOffset, yOffset);
}

function sun(xOffset, yOffset) {
  noStroke();
  fill(241, 247, 81);
  ellipse(400 + xOffset, 100 + yOffset, 75, 75);
}