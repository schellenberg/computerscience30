let x;
let y;
let speed;

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = width/2;
  y = height/2;
  speed = 5;
}

function draw() {
  background(220);
  moveRect();
  displayRect();
}

function moveRect() {
  if (keyIsDown("w")) { 
    y -= speed;
  }
  if (keyIsDown("s")) {
    y += speed;
  }
  if (keyIsDown("d")) {
    x += speed;
  }
  if (keyIsDown("a")) {
    x -= speed;
  }
}

function displayRect() {
  fill("red");
  rect(x, y, 25, 75);
}

// function keyPressed() {
//   if (key === "w") {
//     y -= speed;
//   }
// }