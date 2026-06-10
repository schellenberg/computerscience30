let x;
let y;
let dx;
let dy;
let radius = 50;
let r;
let g;
let b;

async function setup() {
  createCanvas(400, 400);
  noStroke();
  x = width/2;
  y = height/2;
  randomizeSpeed();
  randomizeColor();
}

function draw() {
  background(220);
  
  moveCircle();
  bounceOffWall();
  displayCircle();
}

function mousePressed() {
  randomizeSpeed();
}

function randomizeSpeed() {
  dx = random(-5, 5);
  dy = random(-5, 5);
}

function randomizeColor() {
  r = random(0, 255);
  g = random(0, 255);
  b = random(0, 255);
}

function moveCircle() {
  //move circle
  x += dx;
  y += dy;
}

function bounceOffWall() {
  //bounce if required
  if (x > width - radius || x < radius) {
    dx *= -1;
    console.log("left/right bounce" + dx);
    randomizeColor();
  }
  if (y > height - radius || y < radius) {
    dy *= -1;
    console.log("top/bottom bounce");
    randomizeColor();
  }
}

function displayCircle() {
  //display circle
  fill(r, g, b);
  circle(x, y, radius * 2);
}