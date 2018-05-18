// DOM demo with base conversions
// Dan Schellenberg
// May 18, 2018

let questionInputs;
let answers;

function setup() {
  questionInputs = [];
  answers = [];

  createQuestion(2, 16);
  createQuestion(10, 2);
  createQuestion(16, 10);
  createQuestion(2, 10);
  createQuestion(10, 16);
  createQuestion(16, 2);
  addButtons();
}

function convert(number, baseFrom, baseTo) {
  return parseInt(number, baseFrom).toString(baseTo);
}

function createQuestion(baseFrom, baseTo) {
  let baseToText = {
    2: "binary",
    10: "decimal",
    16: "hexadecimal",
  };

  let randomDecimalNumber = int(random(17, 255));
  let displayValue = convert(randomDecimalNumber, 10, baseFrom);
  let answerData = {
    answer: convert(randomDecimalNumber, 10, baseTo),
    base: baseTo,
  };
  answers.push(answerData);

  let message = "Convert the following from " + baseToText[baseFrom] + " to " + baseToText[baseTo] + ": " + displayValue;
  let label = createElement("label", message);
  label.parent("quiz");
  let question = createInput("");
  question.class("form-control");
  question.parent("quiz");
  questionInputs.push(question);
}

function addButtons() {
  // check answers
  let checkButton = createButton("Check Answers");
  checkButton.attribute("type", "button");
  checkButton.parent("quiz");
  checkButton.class("btn btn-primary");
  checkButton.mousePressed(answerCheck);

  // reset the page -- by default, if ther eis no type attribute given,
  //  the html will cause this button to reload the page
  let resetButton = createButton("Pick New Questions");
  resetButton.parent("quiz");
  resetButton.class("btn btn-success");
}

function answerCheck() {
  for (let i=0; i<questionInputs.length; i++) {
    let theAnswer = answers[i].answer;
    let usersValue = questionInputs[i].value();

    if (answers[i].base === 2) {
      // use regular expressions to remove leading 0's from a binary number
      usersValue = usersValue.replace(/^0+/, "");
    }
    else if (answers[i].base === 16) {
      // convert hexadecimal value to lowercase
      usersValue = usersValue.toLowerCase();
      // remove the leading "x", if it exists
      usersValue = usersValue.replace(/^x/, "");
    }

    if (usersValue === theAnswer) {
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
