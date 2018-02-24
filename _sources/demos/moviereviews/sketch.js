//Movie Reviews Sentiment Analyzer
//Dan Schellenberg
//Feb 24, 2018
//based on http://nifty.stanford.edu/2016/manley-urness-movie-review-sentiment/

let wordSentiments = new Map();
let reviewText;
let userReviewInput, submitButton;

function preload() {
  reviewText = loadStrings("movieReviews.txt");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  parseSentimentFile();

  background(255);
  createUI();
}

function draw() {

}

function createUI() {
  // add user input via html form
  userReviewInput = createInput("Enter your movie review text here!");
  userReviewInput.position(20, 65);
  userReviewInput.style("width:500px;");

  submitButton = createButton("Determine Sentiment");
  submitButton.position(userReviewInput.x, 90);
  submitButton.mousePressed(showSentiment);
}

function showSentiment() {
  let phrase = userReviewInput.value();
  let wordsEntered = phrase.split(" ");
  let sentimentSum = 0;
  for (let i = 0; i < wordsEntered.length; i++) {
    //get sentiment value of current word
    if (wordSentiments.has(wordsEntered[i])) {
      let theSentiment = wordSentiments.get(wordsEntered[i]).averageScore;
      sentimentSum += theSentiment;
    }

    //if word doesn't exist in map, just use a neutral value of 2
    else {
      sentimentSum += 2;
    }
  }

  let totalSentiment = sentimentSum / wordsEntered.length;

  background(255);
  fill(0);
  textSize(42);
  textAlign(CENTER);
  text(totalSentiment, width/2, height/2);

  if (totalSentiment > 3.25) {
    fill(36, 236, 12);
    text("Positive", width/2, height/2 + 50);
  }
  else if (totalSentiment > 2.25) {
    fill(41, 92, 226);
    text("Somewhat Positive", width/2, height/2 + 50);
  }
  else if (totalSentiment > 1.75) {
    fill(236, 157, 38);
    text("Neutral", width/2, height/2 + 50);
  }
  else if (totalSentiment > 0.75) {
    fill(236, 157, 38);
    text("Somewhat Negative", width/2, height/2 + 50);
  }
  else {
    fill(255, 0, 0);
    text("Negative", width/2, height/2 + 50);
  }
}

function parseSentimentFile() {
  // load data and populate maps/dictionaries
  for (let i = 0; i < reviewText.length; i++) {
    let words = reviewText[i].split(" ");
    let sentiment = int(words[0]);

    for (let j = 1; j < words.length; j++) {
      if (wordSentiments.has(words[j])) {
        //update map values
        let theScores = wordSentiments.get(words[j]).scores;
        theScores.push(sentiment);
        let newAverage = getSum(theScores) / theScores.length;

        let wordInfo = {
          scores : theScores,
          averageScore : newAverage,
        };
        wordSentiments.set(words[j], wordInfo);
      }
      else {
        //add new map values
        let theScores = [sentiment];
        let wordInfo = {
          scores : theScores,
          averageScore : sentiment,
        };
        wordSentiments.set(words[j], wordInfo);
      }
    }
  }
}

function getSum(numArray) {
  let theSum = 0;
  for (let i = 0; i < numArray.length; i++) {
    theSum += numArray[i];
  }
  return theSum;
}
