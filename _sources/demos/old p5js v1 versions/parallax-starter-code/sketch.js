// Parallax Effect Starter Code
// Your Name
// The Date

// Adapt the following code so that there are 4 "levels" of parallax effect
// In other words, when the mouse is moved, the elements in the picture should move slightly,
// but at different amounts based on how close they are to the viewer. The sun should move
// just a little bit, the mountains a bit more (I have split these into a farther and two 
// closer mountains), and the grass and tree the most.
//
// To see this in action, open the 'parallax-demo.mp4' video included in this folder.
//
// IMPORTANT: You should use the maxOffset value being passed into each of the layers to
// help you calcluate the amount the element be shifted. The larger the maxOffset value,
// the further the element should be moved from it's original position.


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

// ------------------------------------------------------------------------- //

function layerOne(maxOffset) {
  // blue sky
  background(105, 166, 224);

  sun();
}

function sun() {
  noStroke();
  fill(241, 247, 81);
  ellipse(400, 100, 75, 75);
}


// ------------------------------------------------------------------------- //

function layerTwo(maxOffset) {
  mountainOne();
}

function mountainOne() {
  fill(1, 35, 10);
  triangle(0, height, 300, 200, width, height);
}

// ------------------------------------------------------------------------- //

function layerThree(maxOffset) {
  mountainTwo();
  mountainThree();
}

function mountainTwo() {
  fill(40, 91, 4);
  triangle(-150, height, 150, 250, 450, height);
}

function mountainThree() {
  fill(84, 91, 4);
  triangle(150, height, 450, 250, 750, height);
}

// ------------------------------------------------------------------------- //

function layerFour(maxOffset) {
  grass();
  theGround();
  tree();
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

