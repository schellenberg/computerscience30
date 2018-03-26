let img;
function preload() {
  img = loadImage("images/mammal-low.jpg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  image(img, 0, 0);
  // let d = pixelDensity();
  // let halfImage = img.width * img.height;
  loadPixels();
  for (let x =0; x < width; x++) {
    for (let y = 0; y < height; y++) {
      // pixels[x*width+y] = color(0);
      if (dist(mouseX, mouseY, x, y) > 100) {
        set(x,y, color(0));
      }
    }
  }
  // for (let i = 0; i < halfImage; i++) {
  //   pixels[i + halfImage] = pixels[i];
  // }
  updatePixels();
}
