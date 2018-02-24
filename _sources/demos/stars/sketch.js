//Drawing a Star Chart
//Dan Schellenberg
//Feb 24, 2018
//based on http://nifty.stanford.edu/2009/reid-starmap/starmap.html

let canvasSize = 1000;
let locationMap = new Map();
let magnitudeMap = new Map();
let nameMap = new Map();
let starChart;
let constellation;
let selectConstellation;
let sizeSlider;

function preload() {
  starChart = loadStrings("stars.txt");
  constellation = loadStrings("BigDipper_lines.txt");
}

function setup() {
  createCanvas(canvasSize, canvasSize);

  createUI();
  parseStarTextFile();
}

function draw() {
  background(0);
  drawStars();
  drawConstellation();
}

function drawStars() {
  for (let [draperNum, starLocation] of locationMap) {
    drawStar(starLocation, magnitudeMap.get(draperNum));
  }
}

function createUI() {
  // create options for which constellation to draw
  selectConstellation = createSelect();
  selectConstellation.position(10, 10);
  selectConstellation.option("BigDipper_lines.txt");
  selectConstellation.option("Bootes_lines.txt");
  selectConstellation.option("Cas_lines.txt");
  selectConstellation.option("Cyg_lines.txt");
  selectConstellation.option("Gemini_lines.txt");
  selectConstellation.option("Hydra_lines.txt");
  selectConstellation.option("UrsaMajor_lines.txt");
  selectConstellation.option("UrsaMinor_lines.txt");
  selectConstellation.changed(loadConstellationFile);

  //zoom in or out with slider
  sizeSlider = createSlider(400,1000,600);
  sizeSlider.position(10, 40);
  sizeSlider.style("width", "80px");
  sizeSlider.changed(resetDrawing);
}

function resetDrawing() {
  canvasSize = sizeSlider.value();
  parseStarTextFile();
  resizeCanvas(canvasSize, canvasSize);
}

function parseStarTextFile() {
  // load data for stars, and populate dictionaries
  for (let i = 0; i < starChart.length; i++) {
    let starInfo = starChart[i].split(" ");
    let x = float(starInfo[0]);
    let y = float(starInfo[1]);
    let draperNum = starInfo[3]; //leave as string so we can use it for our map

    let starLocation = coordsToPixel(x, y, canvasSize);
    locationMap.set(draperNum, starLocation);

    let magnitude = float(starInfo[4]);
    let starSize = round(10.0 / (magnitude + 2));
    magnitudeMap.set(draperNum, starSize);

    // drawStar(starLocation, starSize);

    // check if this star is named
    if (starInfo.length > 6) {
      let lastId = starInfo[6];
      let splitLocation = starChart[i].lastIndexOf(lastId);
      let starNames = starChart[i].slice(splitLocation).trim();
      // print(starNames);

      //check if more than one name
      if (starNames.includes(";")) {
        let nameList = starNames.split(";");
        for (let i = 0; i < nameList.length; i++) {
          nameMap.set(nameList[i].trim(), draperNum);
        }
      }
      else {
        nameMap.set(starNames, draperNum);
      }
    }
  }
}

function coordsToPixel(originalX, originalY, imageSize) {
  let newX = map(originalX, -1, 1, 0, canvasSize);
  let newY = map(originalY, -1, 1, 0, canvasSize);
  let newPoint = {
    x : newX,
    y : newY,
  };
  return newPoint;
}

function drawStar(location, starSize) {
  fill(255);
  noStroke();
  ellipseMode(CENTER);
  ellipse(location.x, location.y, starSize, starSize);
}

function drawLineBetweenStars(theStars) {
  let names = theStars.split(",");
  let firstStar = names[0].trim();
  let secondStar = names[1].trim();

  let firstDraperNum = nameMap.get(firstStar);
  let secondDraperNum = nameMap.get(secondStar);

  let point1 = locationMap.get(firstDraperNum);
  let point2 = locationMap.get(secondDraperNum);

  stroke(255, 0, 0);
  strokeWeight(2);
  line(point1.x, point1.y, point2.x, point2.y);
}

function loadConstellationFile() {
  print(selectConstellation.value());
  constellation = loadStrings(selectConstellation.value(), drawConstellation);
}

function drawConstellation() {
  for (let i = 0; i < constellation.length; i++) {
    drawLineBetweenStars(constellation[i]);
  }
}
