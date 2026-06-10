// Image Demo

let luigiImg;

async function setup() {
  luigiImg = await loadImage("luigi.png");
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
}

function draw() {
  background(220);
  image(luigiImg, mouseX, mouseY, luigiImg.width * 0.5, luigiImg.height * 0.5);
}
