// OOP Pair Programming Starter Code
// Your Names
// The Date

class Ship {
  constructor(x, y, theImage) {
    // define the variables needed for this ship

  }

  update() {
    // move ship -- should use keyIsDown()

    // if doing extra for experts, show bullet(s)

  }

  display() {
    // show the ship

  }

  fireBullet() {
    // if doing extra for experts, create a new Bullet and add it to the bullet array

  }
}

// ------------------------------------------------------------------------- //

// Extra for Experts 
//  - you can instantiate a bullet (or a bullet array) within the Ship class,
//    and call the display and update functions in the logical location of the 
//    Ship class. If you create an array of bullets, you might want to think about
//    when the bullets should be removed from the array...

class Bullet {
  constructor(x, y, dx, dy, theImage) {
    // define the variables needed for the bullet here
  }

  update() {
    // what does the bullet need to do during each frame? how do we know if it is off screen?
  }

  display() {
    // show the bullet
  }
}

// ------------------------------------------------------------------------- //

let enterprise;
let shipImage, bulletImage;

async function setup() {
  shipImage = await loadImage("assets/enterprise.png");
  bulletImage = await loadImage("assets/laser-shot.png");

  createCanvas(windowWidth, windowHeight);
  enterprise = new Ship(width/2, height/2, shipImage);
}

function draw() {
  background("black");
  enterprise.update();
  enterprise.display();
}

function keyPressed() {
  if (key === " ") {
    enterprise.fireBullet();
  }
}

