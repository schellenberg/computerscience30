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

  buttonAcrostic = createButton('Poem (Acrostic)');
  buttonAcrostic.position(input.x + input.width, 65);
  buttonAcrostic.mousePressed(generateAcrostic);

  buttonDiastic = createButton('Poem (Diastic)');
  buttonDiastic.position(input.x + input.width + buttonAcrostic.width, 65);
  buttonDiastic.mousePressed(generateDiastic);

  //Border for textbook that encloses resulting poem
  rect(20, 100, 470, 370);

}


function generateAcrostic() {

  //Clear any old poem on the screen, and redraw border
  background(255);
  textSize(12);
  textAlign(LEFT);
  rect(20, 100, 470, 370);


  //Do the work for creating the poem. Look at each character in the user's inputted seed phrase.
  //For each letter, find a word from the source text that starts with that letter and add it to
  //the poem.

  let poem = "";
  let seedWords = input.value();
  for (let i = 0; i < seedWords.length; i++) {
    let cur = seedWords.charAt(i);
    if (cur === " ") {   //ignore spaces in the seed phrase
      continue;
    }
    else {
      for (let j = 0; j < srcText.length; j++) {
        //For acrostic, look at the first letter of the current word, to match the current character 
        if (words[j].charAt(0) === cur) {
          print("1");
          poem += words[j] + " ";
          words.splice(j, 1); //remove chosen word from the array so it won't be chosen again next time.
          break;
        }
      }
    }
  }
  //Report the poem to the screen and to the console (to keep an ongoing record of generated poems.)

  text(poem, 25, 105, 430, 360);
  print(poem);
}


function generateDiastic() {

  //Clear any old poem on the screen, and redraw border
  background(255);
  textSize(12);
  textAlign(LEFT);
  rect(20, 100, 470, 370);


  //Do the work for creating the poem. Look at each character in the user's inputted seed phrase.
  //For each letter, look in the source text for a word that has the same letter in the same relative position
  //of that word.
  //
  // For instance, with the seed phrase:   cat
  //                                       012
  // One possible generated poem could be:  cold famished october
  //                                        0     1         2

  let poem = "";
  let seedWords = input.value();
  let currentPosition = 0;
  for (let i = 0; i < seedWords.length; i++) {
    let cur = seedWords.charAt(i);
    if (cur === " ") {   //ignore spaces in the seed phrase
      //presently, punctuation is not addressed...
      currentPosition = 0;   //if the word is done, reset the position marker
    }
    else {
      for (let j = 0; j < srcText.length; j++) {
        //only look into the current word if it is long enough to concievably be a match.
        //short-circuit evaluation prevents the index-out-of-bounds possible in the second half of the condition
        if (words[j].length > currentPosition && words[j].charAt(currentPosition) === seedWords.charAt(i)) {
          poem += words[j] + " ";
          words.splice(j, 1); //remove chosen word from the array so it won't be chosen again next time.
          break;
        }
      }
      currentPosition++;
    }


  }

  //Report the poem to the screen and to the console (to keep an ongoing record of generated poems.)

  text(poem, 25, 105, 430, 360);
  print(poem);

}

// Possible Extensions/Assignment for Students:
//  -> Instead of doing a livecode demo, talk through background/basic strategy of acrostic/diastic
//  -> Provide students with skeleton code to load text from file/web
//  -> Also provide psuedo-code for the two approaches

//  -> Students (in pairs), need to write two functions: generateAcrostic()  generateDiastic()
//  -> Write code to prevent 2 consecutive duplicate words being chosen for the poem
//  -> 


