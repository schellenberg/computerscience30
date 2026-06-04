// Deterministic Poetry: Acrositc and Diastic
// Inspired by the work by poet Jackson Mac Low

// **** Fill out the remainder of the comment header!!! ****
// NAME(S)
// DATE

let srcText;
let words;
function preload() {
  //use preLoad to bring in source text from file. 
  srcText = loadStrings("sourceText.txt");
}

function setup() {
  createCanvas(500, 500);

  //Prepare the text. Since loaded Strings have each line from file as a separate element in the array, 
  //first, join() all the array elements together into one large string, separated by spaces.
  //second, split up that large string back into an array, using spaces and punctuation as the delimiters,
  //which yeilds and array where each element is an individual word from the source text.
  srcText = join(srcText, ' ');
  words = splitTokens(srcText, ' .,?!()');

  //UI Elements. A title, text field, and button.
  greeting = createElement('h2', 'Poetry Generator');
  greeting.position(20, 5);

  input = createInput();
  input.size(250, 15);
  input.position(20, 65);

  //When the Acrostic Button is pressed, the generateAcrostic() function will be called
  buttonAcrostic = createButton('Poem (Acrostic)');
  buttonAcrostic.position(input.x + input.width, 65);
  buttonAcrostic.mousePressed(generateAcrostic);

  //When the Acrostic Button is pressed, the generateDiastic() function will be called
  buttonDiastic = createButton('Poem (Diastic)');
  buttonDiastic.position(input.x + input.width + buttonAcrostic.width, 65);
  buttonDiastic.mousePressed(generateDiastic);

  //Border for textbook that encloses resulting poem
  rect(20, 100, 470, 370);

}

function drawBorder(){
  //small function to clear any previous poems from the screen, set up the text properties, and draw the border
  background(255);
  textSize(12);
  textAlign(LEFT);
  rect(20, 100, 470, 370);
}

function generateAcrostic() {

  //Clear any old poem on the screen, and redraw border
  drawBorder();

  //Do the work for creating the deterministic poem using the acrostic approach. 
  //Pseudocode:
  //  For each character in the seed phrase:
  //    Find a word in the source text (words array) that starts with the same letter, and add that word to the poem.
  //    If the current character is a space, ignore it.
  // 
  //Additional Tasks:
  //    When a word is added to the poem, remove that word from the words array so that it won't be selected multiple times
  //    Add some logic to ensure that the same word isn't chosen twice in a row and added to the poem:
  //      For instance a poem like "Evening of of antiques" should not be a possible output


  let poem = "";   //poem starts as an empty string. Use loop(s) to add to this!

  text(poem, 25, 105, 430, 360);
  print(poem);
}


function generateDiastic() {

 
  //Clear any old poem on the screen, and redraw border
  drawBorder();

  //Do the work for creating the deterministic poem using the diastic approach. 
  //Pseudocode:
  //  For each character in the seed phrase:
  //    Find a word in the source text (words array) that starts with the same letter, and add that word to the poem.
  //    If the current character is a space, ignore it.
  // 
  //Additional Tasks:
  //    When a word is added to the poem, remove that word from the words array so that it won't be selected multiple times
  //    Add some logic to ensure that the same word isn't chosen twice in a row and added to the poem:
  //      For instance a poem like "Evening of of antiques" should not be a possible output

  
  let poem = "";   //poem starts as an empty string. Use loop(s) to add to this!

  text(poem, 25, 105, 430, 360);
  print(poem);
  }



