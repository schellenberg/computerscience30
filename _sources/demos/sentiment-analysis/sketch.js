// Movie Sentiment Analysis Starter Code
// Your Name
// Put the Date Here

let reviewData; //used to load data from text file
let wordScores; //the Map that contains the score for each word
let phraseInput, analyseButton;
let result;

function preload() {
  reviewData = loadStrings("movieReviews.txt");
}


function setup() {
  //you shouldn't have to change anything in the setup function...
  phraseInput = createInput("");
  phraseInput.attribute("placeholder", "Enter a phrase to analyze");
  phraseInput.class("form-control");
  phraseInput.parent("phrase");

  analyseButton = createButton("Analyse Now");
  analyseButton.attribute("type", "button");  // note to self: button type instead of submit type
  analyseButton.parent("phrase");
  analyseButton.class("btn btn-primary");
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

  for (let review of reviewData) {
    let theWords = review.split(" ");
    let sentimentScore = int(theWords[0]);
    for (let i = 1; i < theWords.length; i++) {
      let word = theWords[i];
      if (wordScores.has(word)) {
        //add current score to average calculation
        let theScore = wordScores.get(word);
        theScore.timesSeen++;
        theScore.totalSum += sentimentScore;
        theScore.average = theScore.totalSum / theScore.timesSeen;
        wordScores.set(word, theScore);
      }
      else {
        //first time it's been seen
        let theScore = {
          timesSeen: 1,
          totalSum: sentimentScore,
          average: sentimentScore
        };
        wordScores.set(word, theScore);
      }
    }
  }
}

function runAnalysis() {
  let wordsToLookup = phraseInput.value().split(" ");
  // you need to look up each word typed in, which is given in the array above.
  // use those to calculate whether the average sentiment of all the words put together 

  let totalSentiment = 0;
  let relevantWordCount = 0;
  for (let word of wordsToLookup) {
    if (wordScores.has(word)) {
      totalSentiment += wordScores.get(word).average;
      relevantWordCount++;
    }
  }
  let averageSentiment = totalSentiment / relevantWordCount;

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
