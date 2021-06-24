// Image Slicing
//  uses https://p5js.org/reference/#/p5.Image/get

let img;
let imgArray = [];
let correctOrder = [];
let displayOrder = [];
let puzzleWidth, puzzleHeight;
let numberOfSlices = 2;
let xSegmentSize, ySegmentSize;
let xBuffer, yBuffer;
let lastClicked = -1;
let backgroundColor = "black";
let photoOptions = ["beach", "desert", "elephant", "north", "northern-lights", "river", "trees"];

function preload() {
  let whichPhoto = random(photoOptions);
  img = loadImage("assets/" + whichPhoto + ".jpg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  //set image and puzzle sizes
  puzzleWidth = width * 0.8;
  puzzleHeight = height * 0.8;
  img.resize(puzzleWidth, puzzleHeight);
  xBuffer = (width - puzzleWidth) / 2;
  yBuffer = (height - puzzleHeight) / 2;

  //slice image into sections and store it in the array
  let index = 0;
  xSegmentSize = img.width/numberOfSlices;
  ySegmentSize = img.height/numberOfSlices;
  for (let y=0; y<img.height; y+=ySegmentSize) {
    for (let x=0; x<img.width; x+=xSegmentSize) {
      //store image slice into the array
      let thisSection = img.get(x, y, xSegmentSize, ySegmentSize);
      imgArray.push(thisSection);

      //keep track of how many sections there are
      correctOrder.push(index);
      index++;
    }
  }

  //randomize display order
  displayOrder = shuffle(correctOrder);
}

function draw() {
  background(backgroundColor);
  displayGrid();
}

function mouseClicked() {
  let x = floor((mouseX - xBuffer) / xSegmentSize);
  let y = floor((mouseY - yBuffer) / ySegmentSize);
  let index = y * numberOfSlices + x;
  
  if (index >= 0 && index <= numberOfSlices*numberOfSlices-1) {
    if (lastClicked !== -1) {
      //swap with last click
      let temp = displayOrder[index];
      displayOrder[index] = displayOrder[lastClicked];
      displayOrder[lastClicked] = temp;
      lastClicked = -1;
    }
    else {
      //first click
      lastClicked = index;
    }
  }

  //check if it's sorted by converting the arrays to strings, then checking for equality
  if (correctOrder.join() === displayOrder.join()) {
    backgroundColor = "red";
  }
  else {
    backgroundColor = "black";
  }

}

function displayGrid() {
  //show the sections created in the image array
  for (let y=0; y<numberOfSlices; y++) {
    for (let x=0; x<numberOfSlices; x++) {
      let index = y * numberOfSlices + x;
      let displayIndex = displayOrder[index];
      image(imgArray[displayIndex], x*xSegmentSize + xBuffer, y*ySegmentSize + yBuffer);
    }
  }
}
