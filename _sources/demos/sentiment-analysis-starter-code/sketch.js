// Movie Sentiment Analysis Starter Code
// Your Name
// Put the Date Here

let reviewData; //used to load data from text file
let wordScores; //you need to make this a Map that contains the score for each word
let phraseInput, analyseButton;
let result;

function preload() {
  reviewData = loadStrings("assets/movieReviews.txt");
}


function setup() {
  //you shouldn't have to change anything in the setup function...
  phraseInput = createInput("");
  phraseInput.attribute("placeholder", "Enter a phrase to be analyzed...");
  phraseInput.parent("phrase");

  analyseButton = createButton("Analyse Now");
  analyseButton.attribute("type", "button");  // note to self: button type instead of submit type
  analyseButton.parent("phrase");
  analyseButton.mousePressed(runAnalysis);

  result = createP();
  result.parent("container");

  // note that an empty map has already been created for you
  wordScores = new Map();

  learnWordScores();
}

function draw() {
  // you don't need anything in the draw loop, as the runAnalysis function will get called
  // whenever the button is pressed (you can see how I did this in the setup function) 
}

function learnWordScores() {
  //need to loop through the information from the text file, and assign appropriate scores to each word
  // you will want to use the .split function built into JS (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split)

  
}

function runAnalysis() {
  let wordsToLookup = phraseInput.value().split(" ");
  // you need to look up each word typed in, which is given in the array above.
  // use those to calculate whether the average sentiment of all the words put together 



  // leave the function call below in your code so that your results will be automatically displayed
  // note that you will need to use a variable called averageSentiment for this to work.
  displayResults(averageSentiment);
}

function displayResults(averageSentiment) {
  if (averageSentiment > 2) {
    result.style("color", "green");
    result.html("Positive Statement<br>An average sentiment of " + averageSentiment);
  }
  else {
    result.style("color", "red");
    result.html("Negative Statement<br>An average sentiment of " + averageSentiment);
  }
}
