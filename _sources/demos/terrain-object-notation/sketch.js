// Terrain Generation
// Object Notation and Arrays

let theRectangles = [];
let numberOfRects;
let rectWidth;

function setup() {
  createCanvas(windowWidth, windowHeight);
  numberOfRects = width;
  rectWidth = width / numberOfRects;
  generateTerrain();
}

function draw() {
  background(220);

  for (let someRect of theRectangles) {
    fill("black");
    stroke("black");
    rect(someRect.x, someRect.y, someRect.w, someRect.h);
  }
}

function generateTerrain() {
  let time = 0;
  let dt = 0.002;

  for (let x = 0; x < width; x += rectWidth) {
    let thisHeight = noise(time) * height;
    spawnRectangle(x, thisHeight);
    time += dt;
  }
}

function spawnRectangle(leftSide, rectHeight) {
  let thisRect = {
    x: leftSide, 
    y: height - rectHeight,
    w: rectWidth,
    h: rectHeight,
  };
  theRectangles.push(thisRect);
}
