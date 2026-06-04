// Generative Art Demo
// Polygons with Offsets
// Dan Schellenberg
// Aug 29, 2019


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
}

function draw() { 
  stroke(0, 0, 0, 30);
  drawPolygon(300, 200);
}

function mouseClicked() {
  background(255);
}

function drawPolygon(x, y) {
  let baseMovementPoints = [
    {x: 0, y: 0},
    {x: 25, y: 10},
    {x: 50, y: 30},
    {x: 75, y: 50},
    {x: 100, y: 100},
    {x: 75, y: 135},
    {x: 50, y: 160},
    {x: 25, y: 190},
    {x: 0, y: 200},
    {x: -25, y: 185},
    {x: -50, y: 160},
    {x: -75, y: 135},
    {x: -100, y: 100},
    {x: -75, y: 50},
    {x: -50, y: 30},
    {x: -25, y: 10},
    {x: 0, y: 0}
  ];
  
  let shiftAmount = [];
  for (let i=0; i<baseMovementPoints.length-1; i++) {
    let xDiff = random(-30, 30);
    let yDiff = random(-30, 30);
    shiftAmount.push({x: xDiff, y: yDiff});
  }
  shiftAmount.push(shiftAmount[0]); //keep the end point the same as the start point

  for (let i=0; i<baseMovementPoints.length - 1; i++) {
    line(x + baseMovementPoints[i].x + shiftAmount[i].x, y + baseMovementPoints[i].y + shiftAmount[i].y, 
      x + baseMovementPoints[i+1].x + shiftAmount[i+1].x, y + baseMovementPoints[i+1].y + shiftAmount[i+1].y);
  }
}