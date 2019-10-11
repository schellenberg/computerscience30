// Practice Quiz - Loops
// Dan Schellenberg
// Oct 11, 2019

function setup() {
  createCanvas(300, 300);
  background(255);  // white background
  stroke(0);        // black stroke
 
  // loops1();
  // loops2();
  // loops3();
  // loops4();
  // loops5();
  // loops6();
  loops7();
}

function draw() {
}

function loops1() { 
  for (let i = 0; i < 20; i++) {
    line(i*2, 0, i * 15, height);
  }
  // saveCanvas("loops-1", "png");
}

function loops2() { 
  for (let i = 40; i > 0; i--) {
    rect(i * 2, i * 2, i * 2, i * 5);
  }
  // saveCanvas("loops-2", "png");
}


function loops3() { 
  for (let i = 0; i < width; i += 10) {
    line(0, i, width, i);
  }
  // saveCanvas("loops-3", "png");
}

function loops4() { 
  for (let i = 0; i < width; i += 10) {
    line(i, 0, i, height);
  }
  // saveCanvas("loops-4", "png");
}


function loops5() { 
  for (let i = 0; i < width; i++) {
    if (i % 15 === 0) {
      line(0, 0, width, i);
    }
  }
  // saveCanvas("loops-5", "png");
}

function loops6() { 
  for (let i = 125; i > 50; i -= 15) {
    rect(i, i + 50, 10, i);
  }
  // saveCanvas("loops-6", "png");
}


function loops7() { 
  for (let i = 50; i < 170; i += 20) {
    rect(i, i + 50, i, 10);
  }
  // saveCanvas("loops-7", "png");
}
