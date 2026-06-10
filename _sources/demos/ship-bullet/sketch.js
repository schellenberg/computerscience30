// Ship with Bullets
//  Demonstrating Objects within Objects
// Dan Schellenberg
// Nov 22, 2018

class Ship {
  constructor(x, y, theImage) {
    this.x = x;
    this.y = y;
    this.imageToDisplay = theImage;
    this.dx = 5;
    this.dy = 5;
    this.w = this.imageToDisplay.width;
    this.h = this.imageToDisplay.height;
    this.bulletArray = [];
  }

  update() {
    //move ship
    if (keyIsDown("s")) {
      this.y += this.dy;
    }
    if (keyIsDown("w")) {
      this.y -= this.dy;
    }
    if (keyIsDown("d")) {
      this.x += this.dx;
    }
    if (keyIsDown("a")) {
      this.x -= this.dx;
    }

    //show bullets
    for (let i = this.bulletArray.length - 1; i >= 0; i--) {
      this.bulletArray[i].update();
      this.bulletArray[i].display();
      if (this.bulletArray[i].offScreen) {
        this.bulletArray.splice(i, 1);
      }
    }
  }

  display() {
    // fill(0);
    // rect(this.x, this.y, this.w, this.h); 
    imageMode(CENTER);
    image(this.imageToDisplay, this.x, this.y + this.h / 2);
  }

  fireBullet() {
    //fire photons!!!
    let someBullet = new Bullet(this.x, this.y, 0, -10, bulletImage);
    this.bulletArray.push(someBullet);
  }
}

class Bullet {
  constructor(x, y, dx, dy, theImage) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = 5;
    this.offScreen = false;
    this.imageToDisplay = theImage;
  }

  update() {
    this.x += this.dx;
    this.y += this.dy;
    if (this.x >= width + this.radius || this.x <= 0 - this.radius || this.y >= height + this.radius || this.y <= 0 - this.radius) {
      this.offScreen = true;
    }
  }

  display() {
    imageMode(CENTER);
    image(this.imageToDisplay, this.x, this.y);
  }
}

let enterprise;
let shipImage, bulletImage;

async function setup() {
  shipImage = await loadImage("assets/enterprise.png");
  bulletImage = await loadImage("assets/laser-shot.png");

  createCanvas(windowWidth, windowHeight);
  enterprise = new Ship(width / 2, height / 2, shipImage);
}

function draw() {
  background(0);
  enterprise.update();
  enterprise.display();
}

function keyPressed() {
  if (key === " ") {
    enterprise.fireBullet();
  }
}

