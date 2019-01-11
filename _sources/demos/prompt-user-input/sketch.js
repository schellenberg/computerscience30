// Getting User Input Via JS Prompts Demo
// Note: this isn't really a great way to do this, but... it is pretty easy...

let someName, age;
let state;

function setup() {
  createCanvas(windowWidth, windowHeight);
  state = 0;
}

function draw() {
  background(220);

  if (state === 0) {
    someName = prompt("Who are you?");
    age = prompt("How old are you?");
    state = 1;
  }
  else if (state === 1) {
    textSize(32);
    text("Hello, " + someName + "! You are already " + age + " years old!", 30, 100);
  }
}
