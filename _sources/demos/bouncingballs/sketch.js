// bouncing ball demo
// Dan Schellenberg
// March 20, 2018

let theBalls = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);
  moveBalls();
  displayBalls();
}

function displayBalls() {
  for (let i=0; i<theBalls.length; i++) {
    fill(theBalls[i].color);
    noStroke();
    ellipse(theBalls[i].x, theBalls[i].y, theBalls[i].diameter, theBalls[i].diameter);
  }
}

function moveBalls() {
  for (let i=0; i<theBalls.length; i++) {
    theBalls[i].x += theBalls[i].dx;
    theBalls[i].y += theBalls[i].dy;

    if (theBalls[i].x > width) {
      theBalls[i].x = 0;
    }
    else if (theBalls[i].x < 0) {
      theBalls[i].x = width;
    }

    if (theBalls[i].y > height) {
      theBalls[i].y = 0;
    }
    else if (theBalls[i].y < 0) {
      theBalls[i].y = height;
    }

  }
}

function mouseClicked() {
  let aBall = {
    x: mouseX,
    y: mouseY,
    diameter: random(10, 100),
    color: color(random(255), random(255), random(255), random(255)),
    dx: random(-5, 5),
    dy: random(-5, 5),
  };
  theBalls.push(aBall);
}
