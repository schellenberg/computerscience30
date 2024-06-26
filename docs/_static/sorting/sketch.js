// DOM demo with sorting
// Dan Schellenberg
// Dec 11, 2019

// this is indented to show two major ideas:
// - how to use some of the DOM manipulation functions in p5js
// - using bootstrap (https://getbootstrap.com/) to style a page, instead of
//    using our own CSS (note that bootstrap's css is linked to in index.html)

let questionInputs;
let answers;
let theArray;

function setup() {
  questionInputs = [];
  answers = [];
  theArray = generateRandomArray(8, 15);

  createQuestion("bubble", "swap");
  createQuestion("bubble", "pass");
  createQuestion("selection", "swap");
  createQuestion("selection", "pass");
  addButtons();
}

// use some built-in javascript functions to convert bases
function convert(number, baseFrom, baseTo) {
  return parseInt(number, baseFrom).toString(baseTo);
}

function createQuestion(whichAlgorithm, swapOrPass) {

  let thingToFind;
  let message;

  if (whichAlgorithm === "bubble") {
    if (swapOrPass === "swap") {
      let maxSwaps = bubbleSort({theList: theArray, totalSwaps: true});
      let minSwaps = 5;
      while (minSwaps > maxSwaps) {
        minSwaps--;
      }
      let whichSwap = int(random(minSwaps, maxSwaps));
      thingToFind = whichSwap;

      let answerData = {
        answer: bubbleSort({theList: theArray, howManySwaps: whichSwap}),
        type: swapOrPass
      };
      answers.push(answerData);

      message = "Given the array <code>[" + str(theArray) + "]</code>, what is swap number " + thingToFind + " when using <strong>bubble</strong> sort?<br>If your answer was 5 and 8, write it as <code>5 8</code> (the values separated by a space).";
    }

    if (swapOrPass === "pass") {
      let maxPasses = bubbleSort({theList: theArray, totalPasses: true});
      let minPasses = 2;
      while (minPasses > maxPasses) {
        minPasses--;
      }
      let whichPass = int(random(minPasses, maxPasses));
      thingToFind = whichPass;

      let answerData = {
        answer: bubbleSort({theList: theArray, howManyPasses: whichPass}),
        type: swapOrPass
      };
      answers.push(answerData);

      message = "Given the array <code>[" + str(theArray) + "]</code>, what is the state of the array after pass number " + thingToFind + " when using <strong>bubble</strong> sort?<br>Write your answer in the form <code>[3,7,12,4,8,5]</code> (with no spaces between the values of the array).";
    }
  }

  if (whichAlgorithm === "selection") {
    if (swapOrPass === "swap") {
      let maxSwaps = selectionSort({theList: theArray, totalSwaps: true});
      let minSwaps = 2;
      while (minSwaps > maxSwaps) {
        minSwaps--;
      }
      let whichSwap = int(random(minSwaps, maxSwaps));
      thingToFind = whichSwap;

      let answerData = {
        answer: selectionSort({theList: theArray, howManySwaps: whichSwap}),
        type: swapOrPass
      };
      answers.push(answerData);

      message = "Given the array <code>[" + str(theArray) + "]</code>, what is swap number " + thingToFind + " when using <strong>selection</strong> sort?<br>If your answer was 5 and 8, write it as <code>5 8</code> (the values separated by a space).";
    }

    if (swapOrPass === "pass") {
      let maxPasses = selectionSort({theList: theArray, totalPasses: true});
      let minPasses = 2;
      while (minPasses > maxPasses) {
        minPasses--;
      }
      let whichPass = int(random(minPasses, maxPasses));
      thingToFind = whichPass;

      let answerData = {
        answer: selectionSort({theList: theArray, howManyPasses: whichPass}),
        type: swapOrPass
      };
      answers.push(answerData);

      message = "Given the array <code>[" + str(theArray) + "]</code>, what is the state of the array after pass number " + thingToFind + " when using <strong>selection</strong> sort?<br>Write your answer in the form <code>[3,7,12,4,8,5]</code> (with no spaces between the values of the array).";
    }
  }

  // add container div for label and question -- allows for icon validation
  let container = createElement("div");
  container.class("form-group position-relative");
  container.parent("quiz");

  // add label and question to the html form -- message was created above...
  let label = createElement("label", message);
  label.parent(container);

  let qustion;
  question = createInput("");
  question.class("form-control mb-3 question");
  question.parent(container);
  questionInputs.push(question);

  //add divs for icon feedback
  valid = createElement("div");
  valid.class("valid-feedback feedback-icon");
  valid.parent(container);

  validIcon = createElement("i");
  validIcon.class("fa fa-check");
  validIcon.parent(valid);

  invalid = createElement("div");
  invalid.class("invalid-feedback feedback-icon");
  invalid.parent(container);

  invalidIcon = createElement("i");
  invalidIcon.class("fa fa-times");
  invalidIcon.parent(invalid);
}

function addButtons() {
  // check answers button
  let checkButton = createButton("Check Answers");
  checkButton.attribute("type", "button");
  checkButton.parent("quiz");
  checkButton.class("btn btn-success mb-4 d-block");
  checkButton.mousePressed(answerCheck);

  // reset the page -- by default, if ther eis no type attribute given,
  //  the html will cause this button to reload the page
  let resetButton = createButton("Generate New Questions");
  resetButton.parent("quiz");
  resetButton.class("btn btn-primary d-block");
  resetButton.mousePressed(makeNew);
}

function makeNew() {
  location.reload();
  return false;
}

function answerCheck() {
  // look at each question, and determine if the answer is valid or not
  // uses bootstrap is-valid and is-invalid classes for styling...
  for (let i=0; i<questionInputs.length; i++) {
    let theAnswer = answers[i].answer;
    let usersValue = questionInputs[i].value();
    let answerIsRight = false;

    if (answers[i].type === "swap") {
      // use regular expressions to split the answer into parts
      let numbers = usersValue.split(/(\s+)/).filter( e => e.trim().length > 0);
      if (int(numbers[0]) === theAnswer.first && int(numbers[1]) === theAnswer.second ||
          int(numbers[1]) === theAnswer.first && int(numbers[0]) === theAnswer.second) {
        answerIsRight = true;
      }
    }
    else if (answers[i].type === "pass") {
      // convert hexadecimal value to lowercase
      if (usersValue === stringVersionOfArray(theAnswer)) {
        answerIsRight = true;
      }
    }

    if (answerIsRight) {
      // first get rid of any existing validation classes
      questionInputs[i].removeClass("is-invalid");
      questionInputs[i].removeClass("is-valid");
      // now add the correct validation class
      questionInputs[i].addClass("is-valid");
    }
    else {
      // first get rid of any existing validation classes
      questionInputs[i].removeClass("is-invalid");
      questionInputs[i].removeClass("is-valid");
      // now add the correct validation class
      questionInputs[i].addClass("is-invalid");
    }

  }
}

function stringVersionOfArray(someArray) {
  let theString = "[";
  for (let i = 0; i < someArray.length; i++) {
    theString = theString + someArray[i] + ",";
  }
  let cleanedString = theString.slice(0, -1) + "]";
  return cleanedString;
}

function generateRandomArray(howManyNumbers, maxSize) {
  let myArray = [];
  for (let i = 0; i < howManyNumbers; i++) {
    let value = floor(random(0, maxSize));
    myArray.push(value);
  }
  return myArray;
}

function bubbleSort({theList, howManySwaps = undefined, howManyPasses = undefined, totalSwaps = undefined, totalPasses = undefined}) {
  let localList = [...theList];
  let swapRequired = true;
  let swapNumber = 0;
  let passNumber = 0;

  while (swapRequired) {
    swapRequired = false;
    
    // one pass
    for (let i = 0; i < localList.length - 1; i++) {
      if (localList[i] > localList[i+1]) {
        // swap required
        let temp = localList[i];
        localList[i] = localList[i+1];
        localList[i+1] = temp;
        
        swapRequired = true;
        swapNumber++;

        if (swapNumber === howManySwaps) {
          return {first: localList[i], second: localList[i+1]};
        }
      } 
    }
    passNumber++;
    if (passNumber === howManyPasses) {
      return localList;
    }
  }

  if (totalPasses) {
    return passNumber;
  }
  if (totalSwaps) {
    return swapNumber;
  }

  return localList;
}


function selectionSort({theList, howManySwaps = undefined, howManyPasses = undefined, totalSwaps = undefined, totalPasses = undefined}) {

  let localList = [...theList];
  let swapNumber = 0;
  let passNumber = 0;

  let swapLocation = localList.length-1;
  let largestLocation = 0;
  
  while (swapLocation > 0) {
    largestLocation = 0;
    
    //one pass
    for (let i = 0; i <= swapLocation; i++) {
      if (localList[i] > localList[largestLocation]) {
        largestLocation = i;
      }
    }
    
    //swap
    let temp = localList[swapLocation];
    localList[swapLocation] = localList[largestLocation];
    localList[largestLocation] = temp;
    
    passNumber++;
    if (passNumber === howManyPasses) {
      return localList;
    }
    
    swapNumber++;
    if (swapNumber === howManySwaps) {
      return {first: localList[swapLocation], second: localList[largestLocation]};
    }
    
    swapLocation--;
  }

  if (totalPasses) {
    return passNumber;
  }
  if (totalSwaps) {
    return swapNumber;
  }
  
  return localList;
}