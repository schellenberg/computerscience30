// Take a look at COVID-19 data from Health Canada
// Dan Schellenberg

let table;
let saskHistory = [];
let displayDates = [];
let scribble;
let numberOfDaysToRetrieve = 15;
let highestCount = 0;
let lowestCount = 0;
let scrollIndex = 0;

function preload() {
  //might want to download this file to take a look at it in Excel...
  table = loadTable("https://health-infobase.canada.ca/src/data/covidLive/covid19.csv", "csv", "header");
}

function setup() {
  createCanvas(displayWidth, displayHeight);

  // create an instance of scribble and set a few parameters
  scribble = new Scribble();
  scribble.bowing    = 0.1;
  scribble.roughness = 1.5;

  // imported momentjs in the index.html file to make date handling easier
  let now = moment();
  let startOfTheMadness = moment([2020, 2, 1]);
  numberOfDaysToRetrieve = now.diff(startOfTheMadness, 'days');

  let daysToRetrieve = [];
  for (let i = 0; i < numberOfDaysToRetrieve; i++) {
    //format that the csv files uses is DD-MM-YYYY;
    daysToRetrieve.push(now.format("DD-MM-YYYY"));
    displayDates.push(now.format("MMM Do"));
    now.subtract(1, "days");
  }

  for (const d of daysToRetrieve) {
    let allProvinces = table.findRows(d, "date");

    for (const province of allProvinces) {
      if (province.get("prname") === "Saskatchewan") {
        saskHistory.push(province.get("numtoday"));
      }
    }
  }

  highestCount = max(saskHistory);
  lowestCount = min(saskHistory);
}

function draw() {
  background("white");
  
  // strokeWeight(1);
  noStroke();
  fill("green");
  textSize(75);
  textAlign(CENTER, CENTER);
  text("Saskatchewan Daily COVID Cases", width/2, 75);

  fill("black");
  textSize(15);
  text("Scroll wheel or arrow keys to shift. Click to reset.", width/2, 130);

  // history spread horizontally
  for (let i = scrollIndex; i < saskHistory.length; i++) {
    // number of cases
    textSize(50);
    text(saskHistory[i], 100 + 100*(i - scrollIndex), 200);

    // date of cases
    textSize(15);
    text(displayDates[i], 100 + 100*(i - scrollIndex), 250);
  }

  drawBarChart();
  noLoop();
}

function drawBarChart() {
  //scribble bar chart...
  // calculate a few sizes
  let w = 75; //windowWidth * 0.7 * 0.98  / saskHistory.length;
  let barChartBase = windowHeight - 25;

  // draw a horizontal line across the center of the screen
  // scribble.scribbleLine( 0, barChartBase, windowWidth, barChartBase );

  // draw every value as a filled rect in a bar graph
  for ( let i = scrollIndex; i < saskHistory.length; i++ ) {
    // calculate the x and y coordinates of the center of the rect and the height
    let h = map(barChartBase * 0.01 * saskHistory[i], barChartBase * 0.01 * lowestCount, barChartBase * 0.01 * highestCount, -1, barChartBase - 275);
    let x =  100 + 100*(i - scrollIndex); 
    let y = barChartBase - h / 2;
    // set the thickness of the rect lines
    strokeWeight( 5 );
    // set the color of the rect lines to black
    stroke( 0 );

    // draw a rect for the value
    scribble.scribbleRect( x, y, w, h );

    // calculate the x and y coordinates for the border points of the hachure
    let xleft   = x - w / 2 + 5;
    let xright  = x + w / 2 - 5;
    let ytop    = y -  h / 2 ;
    let ybottom = y +  h / 2 ;
    // reduce the sizes to fit in the rect
    if ( ytop > ybottom ) {
      ytop    -= 5;
      ybottom += 5;
    }
    else {
      ytop    += 5;
      ybottom -= 5;
    }
    // the x coordinates of the border points of the hachure
    let xCoords = [ xleft, xright, xright, xleft ];
    // the y coordinates of the border points of the hachure
    let yCoords = [ ytop, ytop, ybottom, ybottom ];
    // the gap between two hachure lines
    let gap = 3.5;
    // the angle of the hachure in degrees
    let angle = 315;
    // set the thickness of our hachure lines
    strokeWeight( 3 );
    //set the color of the hachure to a nice blue
    stroke( 0, 50, 180 );

    // fill the rect with a hachure
    scribble.scribbleFilling( xCoords, yCoords , gap, angle );
  }
}

function mouseWheel(event) {
  if (event.delta < 0 && scrollIndex > 0) {
    scrollIndex--;
  }
  else {
    scrollIndex++;
  }
  redraw();
}

function mousePressed() {
  scrollIndex = 0;
  redraw();
}

function keyPressed() {
  if (keyCode === RIGHT_ARROW) {
    scrollIndex++;
  }
  else if (keyCode === LEFT_ARROW && scrollIndex > 0) {
    scrollIndex--;
  }
  redraw();
}