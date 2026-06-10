let waitTime = 2000;
let lastSwap = 0;
let isRed = true;

async function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  changeState();
  theBackground();
}

function changeState() {
  if (millis() > lastSwap + waitTime) {
    isRed = !isRed;
    lastSwap = millis();
  }
}

function theBackground() {
  if (!isRed) {
    background("white");
  }
  else {
    background("red");
  }
  
  // console.log(millis());
}