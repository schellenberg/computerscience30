// Using the Illusion Class
// Dan Schellenberg
// based on an idea from https://boingboing.net/2018/04/30/cool-animated-examples-of-the.html

// Add code to use the class as described in the quiz question.

let theIllusion;

function setup() {
  createCanvas(windowWidth, windowHeight);
  theIllusion = new Illusion("blue", "red", "black");
}

function draw() {
  background(255);
  theIllusion.display();
}

function mousePressed() {
  theIllusion.togglePause();
}

// Do not edit the code beneath this comment. 
// -----------------------------------------------

class Illusion {
  constructor(firstLineColor, secondLineColor, arrowColor) {
    this.firstLineColor = firstLineColor;
    this.secondLineColor = secondLineColor;
    this.arrowColor = arrowColor;
    this.isPaused = false;
    this.arrowArray = [];
    
    //initialize
    let angle = 1;
    for (let x = 0; x < width; x += 100) {
      for (let y = 0; y < height; y += 100) {
        this.arrowArray.push(new ChangingArrow(x, y, 30, 0, angle, 15, this.arrowColor));
        angle *= -1;
      }
    }
  }

  togglePause() {
    this.isPaused = !this.isPaused;
  }

  display() {
    let thisColor = 1;
    for (let x = 0; x < width; x += 100) {
      for (let y = 0; y < height; y += 100) {
        if (thisColor % 2 === 0) {
          stroke(this.firstLineColor);
        }
        else {
          stroke(this.secondLineColor);
        }
        strokeWeight(3);
        line(x, y, x, y + 100);
        thisColor++;
      }
    }
    
    if (!this.isPaused) {
      for (let i = 0; i < this.arrowArray.length; i++) {
        this.arrowArray[i].updateAngle();
      }
    }
    for (let i = 0; i < this.arrowArray.length; i++) {
      this.arrowArray[i].display();
    }
  }
}

class ChangingArrow {
  constructor(x, y, length, angle, angleChange, speed, color) {
    this.x = x;
    this.y = y;
    this.length = length;
    this.angle = angle;
    this.color = color;
    this.lastUpdateTime = millis();
    this.speed = speed;
    this.angleChange = angleChange;
  }

  display() {
    angleMode(DEGREES);
    push();

    stroke(this.color);
    strokeWeight(3);
    translate(this.x, this.y);

    push();
    rotate(this.angle);
    line(0, 0, this.length, 0);
    pop();

    push();
    rotate(-this.angle);
    line(0, 0, -this.length, 0);
    pop();

    pop();
  }

  updateAngle() {
    if (millis() > this.lastUpdateTime + this.speed) {
      this.angle += this.angleChange;
      this.lastUpdateTime = millis();
      if (this.angle >= 45 || this.angle <= -45) {
        this.angleChange *= -1;
      }
    }
  }

}
