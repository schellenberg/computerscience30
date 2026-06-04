// Connected Objects Demo
// idea from Stefan Scott
// OOP, arrays, perlin noise, OOP interaction

let points = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  for (let point of points) {
    point.update();
    point.display();
    point.connectTo(points);
  }
}

function mousePressed() {
  let thePoint = new MovingPoint(mouseX, mouseY);
  points.push(thePoint);
}


class MovingPoint {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.time = random(1000);
    this.color = color(random(255), random(255), random(255));
    this.radius = 15;
    this.deltaTime = 0.01;
    this.reach = 150;
  }

  display() {
    noStroke();
    fill(this.color);
    circle(this.x, this.y, this.radius*2);
  }

  update() {
    let xSpeed = noise(this.time);
    xSpeed = map(xSpeed, 0, 1, -5, 5);
    let ySpeed = noise(this.time + 2000);
    ySpeed = map(ySpeed, 0, 1, -5, 5);

    this.x += xSpeed;
    this.y += ySpeed;

    this.time += this.deltaTime;

    //change size if mouse close by
    let mouseDistance = dist(mouseX, mouseY, this.x, this.y);
    if (mouseDistance < this.reach) {
      this.radius = map(mouseDistance, 0, this.reach, 30, 15);
    }
    else {
      this.radius = 15;
    }

    //wrap around screen
    if (this.x < 0) {
      this.x += width;
    }
    if (this.x > width) {
      this.x -= width;
    }

    if (this.y < 0) {
      this.y += height;
    }
    if (this.y > height) {
      this.y -= height;
    }
  }

  connectTo(pointsArray) {
    for (let otherPoint of pointsArray) {
      if (this !== otherPoint) {
        if (dist(this.x, this.y, otherPoint.x, otherPoint.y) < this.reach) {
          stroke(this.color);
          line(this.x, this.y, otherPoint.x, otherPoint.y);
        }
      }
    }
  }
}