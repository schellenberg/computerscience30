let a;
let b;
let c;
let d;
let e;
let f;
let g;
let h;
let i;

function setup() {
  createCanvas(windowWidth, windowHeight);
  i = width / 30;
  j();
  k();
  background(255);
  fill(0);
  textAlign(CENTER, CENTER);
  textSize(i);
  text("You need to outsmart my computer program.\nI will predict whether you will choose tails or heads.\n\nIf I'm right, I get 1 point.\nIf I'm wrong, you get 1 point.\n\nThe game goes to " + h + " points.\n\nControls:\nTails - click on left side of screen or press 't'\nHeads - click on right side of screen or press 'h'", width/2, height/2);
  noLoop();
}

function draw() {
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  setup();
}

function j() {
  a = new Map();
  b = "";
  c = 0;
  d = 0;
  e;
  f;
  g = false;
  h = 50;
}

function l() {
  if (!g) {
    background(255);
    m();
    fill(0);
    textAlign(LEFT);
    textSize(i);
    let n = "I predicted ";
    let o = "You picked ";
    text(n, width/2 - i*2.7, height/2 - i*2.5);
    text(o, width/2 - i*2.7, height/2 - i);
    fill(0, 0, 255);
    text(f, width/2 - i*2.7 + textWidth(n), height/2 - i*2.5);
    fill(0, 255, 0);
    text(e, width/2 - i*2.7 + textWidth(o), height/2 - i);
    fill(0);
    textAlign(CENTER);
    text("User: " + d + "\nComputer: " + c, width/2, height/2 + i*2.5);
  }
  else {
    background(255);
    textAlign(CENTER);
    textSize(i);
    if (d > c) {
      fill(0, 255, 0);
      text("You win!\nI'm impressed!\nClick to play again.", width/2, height/2);
    }
    else {
      fill(0, 0, 255);
      text("You lose!\nBetter luck next time!\nClick to play again.", width/2, height/2);
    }
  }
}

function m() {
  let p = width / 6;
  noStroke();
  let q = d / h;
  fill(0, 255, 0);
  rect(0, height - height*q, p, height*q);
  let r = c / h;
  fill(0, 0, 255);
  rect(width-p, height - height*r, p, height*r);
}

function keyTyped() {
  if (key === "h") {
    e = "h";
    t();
  } 
  else if (key === "t") {
    e = "t";
    t();
  }
  else if (key === "s") {
    setup();
  }
}

function mousePressed() {
  if (g) {
    setup();
  }
  if (mouseX < width/2) {
    e = "h";
    t();
  }
  else {
    e = "t";
    t();
  }
}

function t() {
  w();
  l();
  x();
  if (b.length < 4) {
    b = b + e;
  }
  else {
    b = b.substring(1,4) + e; 
  }
  k();
}

function x() {
  if (b.length === 4) {
    if (a.has(b)) {
      let y = a.get(b).h;
      let z = a.get(b).t;
      if (e === "h") {
        y++;
      } else if (e === "t") {
        z++;
      }
      a.set(b, {
        "h": y,
        "t": z,
      });
    } else {
      if (e === "h") {
        a.set(b, {
          "h": 1,
          "t": 0
        });
      } else {
        a.set(b, {
          "h": 0,
          "t": 1
        });
      }
    }
  }
}

function k() {
  if (a.has(b)) {
    if (a.get(b).t > a.get(b).h) {
      f = "t";
    } else if (a.get(b).h > a.get(b).t) {
      f = "h";
    } else {
      if (random(100) < 50) {
        f = "h";
      } else {
        f = "t";
      }
    }
  } else {
    if (random(100) < 50) {
      f = "h";
    } else {
      f = "t";
    }
  }
}

function w() {
  if (f === e) {
    c++;
  } else {
    d++;
  }
  if (c === h || d === h) {
    g = true;
  }
}