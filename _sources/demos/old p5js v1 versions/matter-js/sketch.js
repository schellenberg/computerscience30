// Matter.js - Basic Example

const { Engine, Bodies, Composite, Constraint, Mouse, MouseConstraint, Render } = Matter;

// Engine
let engine;
let mouse, mouseConstraint;
let world;
let boundaries = [];
let boxes = [];

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  pixelDensity(1);

  engine = Engine.create();
  world = engine.world;

  // create boundaries
  boundaries.push(new Boundary(width / 2, 10, width, 20));
  boundaries.push(new Boundary(width / 2, height - 10, width, 20));
  boundaries.push(new Boundary(10, height / 2, 20, height));
  boundaries.push(new Boundary(width - 10, height / 2, 20, height));

  // create boxes
  for (let i = 0; i < 5; i++) {
    boxes.push(new Box(random(width), random(height), 50, 50));
  }

  // setup mouse interaction
  mouse = Mouse.create(canvas.elt);
  mouse.pixelRatio = pixelDensity();
  let options = {
    mouse: mouse
  };
  mouseConstraint = MouseConstraint.create(engine, options);
  Composite.add(world, mouseConstraint);

  // render canvas -- needed for VS Code, but not for p5js web editor, says Amy
  let render = Render.create({
    canvas: canvas.elt,
    engine: engine,
    options: { width: width, height: height }
  });
  Render.run(render);
}

function draw() {
  background(220);
  Engine.update(engine);
  
  for (let boundary of boundaries) {
    boundary.display();
  }

  for (let box of boxes) {
    box.display();
  }
}

class Box {
  constructor(x, y, w, h) {
    this.w = w;
    this.h = h;

    let options = {
      restitution: 0.6,
    };
    this.body = Bodies.rectangle(x, y, w, h, options);
    Composite.add(engine.world, this.body);
  }

  display() {
    let pos = this.body.position;
    let angle = this.body.angle;

    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER); //matterjs uses center mode by default
    fill("orange");
    noStroke();
    rect(0, 0, this.w, this.h);
    pop();
  }
}


class Boundary {
  constructor(x, y, w, h) {
    this.w = w;
    this.h = h;

    let options = {
      isStatic: true,
    };
    this.body = Bodies.rectangle(x, y, w, h, options);
    Composite.add(engine.world, this.body);
  }

  display() {
    let pos = this.body.position;
    let angle = this.body.angle;

    push();
    translate(pos.x, pos.y);
    // rotate(angle);
    rectMode(CENTER); //matterjs uses center mode by default
    fill("blue");
    noStroke();
    rect(0, 0, this.w, this.h);
    pop();
  }
}