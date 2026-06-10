let img;

async function setup() {
  img = await loadImage("images/mammal-low.jpg");
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  image(img, 0, 0);

  //old processing method
  // // let d = pixelDensity();
  // // let halfImage = img.width * img.height;
  // loadPixels();
  // for (let x =0; x < width; x++) {
  //   for (let y = 0; y < height; y++) {
  //     // pixels[x*width+y] = color(0);
  //     if (dist(mouseX, mouseY, x, y) > 100) {
  //       set(x,y, color(0));
  //     }
  //   }
  // }
  // // for (let i = 0; i < halfImage; i++) {
  // //   pixels[i + halfImage] = pixels[i];
  // // }
  // updatePixels();


  //native javascript style
  background(0);

  // Draw only the visible circle region of the image around the mouse.
  drawingContext.save();
  drawingContext.beginPath();
  drawingContext.arc(mouseX, mouseY, 100, 0, Math.PI * 2);
  drawingContext.clip();
  image(img, 0, 0, width, height);
  drawingContext.restore();
}
