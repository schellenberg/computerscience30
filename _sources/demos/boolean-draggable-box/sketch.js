let button = false;
let x = 50;
let y = 50;
let w = 100;
let h = 75;
let offsetX = 0;
let offsetY = 0;

async function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  if (button) {
    background(255);
    stroke(0);
    x = mouseX - offsetX;
    y = mouseY - offsetY;
  } 
  else {
    background(0);
    stroke(255);
  }
  fill(175);
  rect(x, y, w, h);
}

function mousePressed() {
  if (mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h) {
    button = !button;
    offsetX = mouseX - x;
    offsetY = mouseY - y;
  }
}