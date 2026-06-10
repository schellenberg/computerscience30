let originalImage;
let grayscaleImage;
let quadrantShiftedImage;

let viewMode = "spotlight";
const SPOTLIGHT_RADIUS = 100;

async function setup() {
  originalImage = await loadImage("tigers.jpg");
  createCanvas(originalImage.width, originalImage.height);

  grayscaleImage = makeGrayscale(originalImage);
  quadrantShiftedImage = quadrantShifter(originalImage);
}

function draw() {
  if (viewMode === "grayscale") {
    image(grayscaleImage, 0, 0);
    return;
  }

  if (viewMode === "quadrant") {
    image(quadrantShiftedImage, 0, 0);
    return;
  }

  drawSpotlight(originalImage);
}

function drawSpotlight(sourceImage) {
  background(0);

  // Clip to a circular region so only that part of the image is visible.
  drawingContext.save();
  drawingContext.beginPath();
  drawingContext.arc(mouseX, mouseY, SPOTLIGHT_RADIUS, 0, TWO_PI);
  drawingContext.clip();
  image(sourceImage, 0, 0);
  drawingContext.restore();
}

function makeGrayscale(sourceImage) {
  const img = sourceImage.get();
  img.filter(GRAY);
  return img;
}

function quadrantShifter(sourceImage) {
  const img = createImage(sourceImage.width, sourceImage.height);
  const w2 = Math.floor(sourceImage.width / 2);
  const h2 = Math.floor(sourceImage.height / 2);

  // Copy each quadrant into its shifted location.
  img.copy(sourceImage, 0, 0, w2, h2, w2, 0, w2, h2);
  img.copy(sourceImage, w2, 0, sourceImage.width - w2, h2, w2, h2, sourceImage.width - w2, h2);
  img.copy(sourceImage, w2, h2, sourceImage.width - w2, sourceImage.height - h2, 0, h2, sourceImage.width - w2, sourceImage.height - h2);
  img.copy(sourceImage, 0, h2, w2, sourceImage.height - h2, 0, 0, w2, sourceImage.height - h2);

  return img;
}

function keyTyped() {
  if (key === "b") {
    viewMode = "grayscale";
  }
  else if (key === " ") {
    viewMode = "spotlight";
  }
  else if (key === "q") {
    viewMode = "quadrant";
  }
}