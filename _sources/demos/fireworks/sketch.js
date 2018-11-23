// Fireworks Demo
// Dan Schellenberg
// Nov 14, 2018

class Particle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = 25;
    this.dx = random(-10, 10);
    this.dy = random(-10, 10);
    this.transparency = 255;
    this.color = color(random(255), random(255), random(255), this.transparency);
  }

  display() {
    noStroke();
    fill(this.color);
    ellipse(this.x, this.y, this.size, this.size);
  }

  update() {
    this.transparency -= 5;
    this.color.setAlpha(this.transparency);
    this.x += this.dx;
    this.y += this.dy;
  }
}

let fireworks = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);

  for (let i=fireworks.length-1; i>=0; i--) {
    if (fireworks[i].transparency <= 0) {
      //delete this firework -- already hidden
      fireworks.splice(i, 1);
    }
    else {
      fireworks[i].update();
      fireworks[i].display();
    }
  }

}

function mousePressed() {
  for (let i=0; i<100; i++) {
    let someParticle = new Particle(mouseX, mouseY);
    fireworks.push(someParticle);
  }
}
