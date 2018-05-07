// illusion
// Dan Schellenberg
// May 6, 2018
// based on an idea from https://boingboing.net/2018/04/30/cool-animated-examples-of-the.html

let arrowArray = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);

  let angle = 1;
  for (let x = 0; x < width; x += 100) {
    for (let y = 0; y < height; y += 100) {
      arrowArray.push(new ChangingArrow(x, y, 30, 0, angle, 15, color(0)));
      angle *= -1;
    }
  }
}

function draw() {
  background(255);
  let thisColor = 1;
  for (let x = 0; x < width; x += 100) {
    for (let y = 0; y < height; y += 100) {
      if (thisColor % 2 === 0) {
        stroke(255, 0, 0);
      }
      else {
        stroke(0, 0, 255);
      }
      strokeWeight(3);
      line(x, y, x, y + 100);
      thisColor++;
    }
  }

  for (let i = 0; i < arrowArray.length; i++) {
    arrowArray[i].updateAngle();
    arrowArray[i].display();
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
    push();

    stroke(this.color);
    strokeWeight(3);
    translate(this.x, this.y);

    push();
    rotate(this.angle);
    // stroke(0);
    line(0, 0, this.length, 0);
    pop();

    push();
    rotate(-this.angle);
    // stroke(255, 0, 0);
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
