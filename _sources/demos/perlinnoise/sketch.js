//Perlin Noise Terrain Generation Demo
//Dan Schellenberg
//Feb 23, 2018

let rects = [];
let time = 0;
let dt = 0.01;
let numberOfRects;
let rectWidth;

function setup() {
  createCanvas(windowWidth, windowHeight);
  numberOfRects = width;
  rectWidth = width / numberOfRects;
  generateInitialTerrain();
}

function draw() {
  background(255);
  displayRects(rects);
  scrollLeft();
  showHighestPoint();
  showAverageLine();
}

function generateInitialTerrain() {
  for (let i = 0; i < numberOfRects; i++) {
    let rectHeight = noise(time) * height;
    let someRect = {
      height: rectHeight,
      width: rectWidth,
      x: i * rectWidth,
      y: height - rectHeight,
    };
    rects.push(someRect);

    //increase location on perlin noise graph
    time += dt;
  }
}

function displayRects(theRects) {
  for (let i = 0; i < theRects.length; i++) {
    stroke(0);
    strokeWeight(1);
    fill(0);
    rect(theRects[i].x, theRects[i].y, theRects[i].width, theRects[i].height);
  }
}

function scrollLeft() {
  // remove the 0th / left side element
  rects.shift();

  // move all current values to the left by rectWidth
  for (let i = 0; i < rects.length; i++) {
    rects[i].x -= rectWidth;
  }

  // add a new value on right side
  let rectHeight = noise(time) * height;
  let someRect = {
    height: rectHeight,
    width: rectWidth,
    x: (numberOfRects - 1) * rectWidth,
    y: height - rectHeight,
  };
  rects.push(someRect);

  //increase location on perlin noise graph
  time += dt;
}

function showHighestPoint() {
  let highestX = 0;
  let highestY = height;
  for (let i = 0; i < rects.length; i++) {
    if (rects[i].y < highestY) {  // need to check <, since it's the lowest value on screen
      highestX = rects[i].x;
      highestY = rects[i].y;
    }
  }

  stroke(0);
  fill(255, 0, 0);
  ellipse(highestX, highestY, 10, 10);
}

function showAverageLine() {
  let theSum = 0;
  for (let i = 1; i < rects.length; i++) {
    theSum += rects[i].y;
  }
  let yAverage = theSum / rects.length;

  stroke(255, 0, 0, 100);
  strokeWeight(5);
  line(0, yAverage, width, yAverage);
}
