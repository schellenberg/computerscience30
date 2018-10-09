// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let originalImage;
let grayscaleImage, quadrantShiftedImage;

function preload() {
  originalImage = loadImage("assets/tigers.jpg");
}

function setup() {
  createCanvas(originalImage.width, originalImage.height);
  image(originalImage, 0, 0);
  grayscaleImage = makeGrayscale(originalImage);
  quadrantShiftedImage = quadrantShifter(originalImage);
}

function draw() {
  // image(spotlightFilter(originalImage), 0, 0);
}

function spotlightFilter(sourceImage) {
  let img = createImage(sourceImage.width, sourceImage.height);

  img.loadPixels();
  sourceImage.loadPixels();
  
  for (let x = 0; x < sourceImage.width; x++) {
    for (let y = 0; y < sourceImage.height; y++) {
      let p = sourceImage.get(x, y);
      let r, g, b;

      if (dist(x, y, mouseX, mouseY) < 50) {
        r = red(p);
        g = green(p);
        b = blue(p);
      }
      else {
        r = 0;
        g = 0;
        b = 0;
      }

      let newPixel = color(r, g, b);
      img.set(x, y, newPixel);
    }
  }
  
  img.updatePixels();
  return img;
}

function makeGrayscale(sourceImage) {
  let img = createImage(sourceImage.width, sourceImage.height);

  img.loadPixels();
  sourceImage.loadPixels();
  
  for (let x = 0; x < sourceImage.width; x++) {
    for (let y = 0; y < sourceImage.height; y++) {
      let p = sourceImage.get(x, y);

      let r = red(p);
      let g = green(p);
      let b = blue(p);

      let newPixel = color((r+g+b)/3, (r+g+b)/3, (r+g+b)/3);

      img.set(x, y, newPixel);
    }
  }
  
  img.updatePixels();
  return img;
}

function quadrantShifter(sourceImage) {
  let img = createImage(sourceImage.width, sourceImage.height);

  let horizontalMiddle = Math.floor(sourceImage.width / 2);
  let verticalMiddle = Math.floor(sourceImage.height / 2);

  img.loadPixels();
  sourceImage.loadPixels();
  
  for (let x = 0; x < sourceImage.width; x++) {
    for (let y = 0; y < sourceImage.height; y++) {
      let p = sourceImage.get(x, y);

      let r = red(p);
      let g = green(p);
      let b = blue(p);

      let newPixel = color(r, g, b);

      if (x < horizontalMiddle && y < verticalMiddle) {
        // in top left quadrant
        img.set(x + horizontalMiddle, y, p);
      }
      else if (x > horizontalMiddle && y < verticalMiddle) {
        // in the top right quadrant
        img.set(x, y + verticalMiddle, p);
      }
      else if (x > horizontalMiddle && y > verticalMiddle) {
        // in the bottom right quadrant
        img.set(x - horizontalMiddle, y, p);
      }
      else if (x < horizontalMiddle && y > verticalMiddle) {
        // in bottom left quadrant
        img.set(x, y - verticalMiddle, p);
      }
    }
  }
  
  img.updatePixels();
  return img;
}

function xBlur(sourceImage, blurRadius) {
  let img = createImage(sourceImage.width, sourceImage.height);

  img.loadPixels();
  sourceImage.loadPixels();
  
  for (let x = 0; x < sourceImage.width; x++) {
    for (let y = 0; y < sourceImage.height; y++) {
      let p = sourceImage.get(x, y);

      let redSum = 0;
      let greenSum = 0;
      let blueSum = 0;
    
      for (let i = -blurRadius; i <= blurRadius; i++) {
        let r = red(p);
        let g = green(p);
        let b = blue(p);

        redSum += r;
        greenSum += g;
        blueSum += b;

      }

      let newPixel = color(r, g, b);

    }
  }
  
  img.updatePixels();
  return img;
}

function keyTyped() {
  if (key === "b") {
    image(grayscaleImage, 0, 0);
  }
  else if (key === " ") {
    image(originalImage, 0, 0);
  }
  else if (key === "q") {
    background(255);
    image(quadrantShiftedImage, 0, 0);
  }
  

}