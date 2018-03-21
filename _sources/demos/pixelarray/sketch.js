// Terrain Generation
// Dan Schellenberg
// Mar 19, 2018

let easter, eye, mammal;

function preload() {
  easter = loadImage("images/easter.jpg");
  eye = loadImage("images/eye.jpg");
  mammal = loadImage("images/mammal.jpg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);
  image(mammal, 0, 0);

  loadPixels();

  for (let x=0; x<width; x++) {
    for (let y=0; y<height; y++) {
      let location = y*width+x;
      let thisPixel = pixels[location];
      let r = red(thisPixel);
      let g = green(thisPixel);
      let b = blue(thisPixel);

      let newR, newG, newB;

      if (dist(mouseX, mouseY, x, y) > 50) {
        newR = 0;
        newG = 0;
        newB = 0;
      }
      else {
        newR = r;
        newG = g;
        newB = b;
      }

      pixels[location] = color(newR, newG, newB);
    }
  }

  updatePixels();
}
