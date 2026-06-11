
// pokemon example

let img;

async function setup() {
  createCanvas(windowWidth, windowHeight);

  imageMode(CENTER);
  await getPokemon("pikachu");
}

function draw() {
  background(220);

  image(img, mouseX, mouseY);
}

async function getPokemon(pokemonName) {
  let pokemon = await loadJSON(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

  console.log(pokemon);

  console.log(pokemon.name);
  console.log(pokemon.height);
  
  img = await loadImage(pokemon.sprites.front_default);
}


