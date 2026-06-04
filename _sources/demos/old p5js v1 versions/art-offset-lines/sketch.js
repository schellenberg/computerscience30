// Generative Art Demo
// Offset with Lines
// Dan Schellenberg
// Aug 28, 2019


function setup() {
  createCanvas(windowWidth, windowHeight);
  // drawLineWithOffset(0, 50, width, 5);
  drawRowOfLinesWithOffsets(10, 10, width - 20, 5, height - 20, 20);
}

function draw() {  
}

function mousePressed() {
  setup();
}

function keyPressed() {
  setup();
}

function drawRowOfLinesWithOffsets(x, startingY, lineWidth, segmentLength, totalHeight, verticalSpacer) {
  background(220);
  let lineNumber = 0;
  for (let y = startingY; y < totalHeight; y += verticalSpacer) {
    drawLineWithOffset(x, y, lineWidth, segmentLength, lineNumber, totalHeight);
    lineNumber += 1;
  }
}

function drawLineWithOffset(startingX, y, lineWidth, segmentLength, lineNumber, totalHeight) {
  // let offset = 0;
  for (let x = startingX; x < lineWidth; x += segmentLength) {
    let offset = x * random(-0.001, 0.001) * lineNumber/4;
    if (y + offset > totalHeight) {
      line(x, y, x + segmentLength, y - offset);
      y -= offset;
    }
    else {
      line(x, y, x + segmentLength, y + offset);
      y += offset;
    }
  }
}