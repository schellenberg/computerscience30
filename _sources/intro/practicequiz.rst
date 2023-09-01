CS Basics Practice Quiz
=============================

Topics To Know
------------------------

- data types
- conditionals (if/else if/else)
- loops (while and/or for)
- functions
- boolean logic/logical operators 
- solving `CodingJS problems <https://codingjs.wmcicompsci.ca/>`_  to practice these ideas


Question 1
-----------

.. mchoice:: cs_basics_practice_quiz_1
    :answer_a: float
    :answer_b: int
    :answer_c: string
    :answer_d: number
    :answer_e: boolean
    :correct: e
    :feedback_a: Try again!
    :feedback_b: Try again!
    :feedback_c: Try again! Strings are enclosed in "quotation marks".
    :feedback_d: Try again!
    :feedback_e: Great! Booleans are either true or false.

    In JavaScript, what is the data type of:
    true


Question 2
-----------

.. mchoice:: cs_basics_practice_quiz_2
    :answer_a: float
    :answer_b: int
    :answer_c: string
    :answer_d: number
    :answer_e: boolean
    :correct: c
    :feedback_a: Try again!
    :feedback_b: Try again!
    :feedback_c: Great! Strings are enclosed in "quotation marks".
    :feedback_d: Try again!
    :feedback_e: Try again! Booleans are not enclosed in "quotation marks".

    In JavaScript, what is the data type of:
    "this is false"


Question 3
-----------

.. mchoice:: cs_basics_practice_quiz_3
    :answer_a: float
    :answer_b: int
    :answer_c: string
    :answer_d: number
    :answer_e: boolean
    :correct: d
    :feedback_a: Try again! There aren't different data types for int and float in JS.
    :feedback_b: Try again! There aren't different data types for int and float in JS.
    :feedback_c: Try again! Strings are enclosed in "quotation marks".
    :feedback_d: Great! There aren't different data types for int and float in JS.
    :feedback_e: Try again! Booleans are either true or false.

    In JavaScript, what is the data type of:
    56


Question 4
-----------

.. fillintheblank:: cs_basics_practice_quiz_4

    What will the following program print?::

        let someNumber = 10;
        while (someNumber <= 20) {
            if (someNumber < 18) {
                someNumber = someNumber + 3;
            }
            else {
                someNumber += 2;
            }
        }
        console.log(someNumber);

    - :21: Great!
      :.*: Try again! It might help to write down the steps in a t-chart on paper.


Question 5
-----------

.. fillintheblank:: cs_basics_practice_quiz_5

    What will the following program print?::

        let person = "Arthur Dent";
        let answer = 42;
        if (answer > 50) {
            person = "Ford Prefect";
        }
        if (answer > 30) {
            person = "Zaphod Beeblebrox";
        }
        if (answer > 10) {
            person = "Marvin";
        }
        console.log(person);

    - :Marvin: Great!
      :Zaphod Beeblebrox: Be careful! There is an if statement underneath that...
      :.*: Try again!



Question 6
-----------

.. fillintheblank:: cs_basics_practice_quiz_6

    What will the following program print?::

        let person = "Arthur Dent";
        let answer = 42;
        if (answer > 50) {
            person = "Ford Prefect";
        }
        else if (answer > 30) {
            person = "Zaphod Beeblebrox";
        }
        else if (answer > 10) {
            person = "Marvin";
        }
        console.log(person);

    - :Zaphod Beeblebrox: Great!
      :Marvin: Be careful! This is inside of an else-if block.
      :.*: Try again!


Question 7
-----------

.. fillintheblank:: cs_basics_practice_quiz_7

    What will the following program print?::

        function somethingUnknown(firstThing, secondThing) {
            if (secondThing === "Vogons") {
                return "Panic";
            }
            if (firstThing === "Trillian") {
                return "Don't Panic";
            }
            return 42;
        }
        console.log(somethingUnknown("Trillian", "Vogons"))

    - :Panic: Great!
      :Don't Panic: Careful. Return terminates a function.
      :.*: Try again!


Question 8
-----------

.. fillintheblank:: cs_basics_practice_quiz_8

    What will the following program print?::

        function somethingUnknown(firstThing, secondThing) {
            if (secondThing === "Vogons") {
                return "Panic";
            }
            if (firstThing === "Trillian") {
                return "Don't Panic";
            }
            return 42;
        }
        console.log(somethingUnknown("Trillian", "Ford"))

    - :Don't Panic: Great!
      :.*: Try again!


Question 9
-----------

.. fillintheblank:: cs_basics_practice_quiz_9

    What will the following program print?::

        function somethingUnknown(firstThing, secondThing) {
            if (secondThing === "Vogons") {
                return "Panic";
            }
            if (firstThing === "Trillian") {
                return "Don't Panic";
            }
            return 42;
        }
        console.log(somethingUnknown("Marvin", "Ford"))

    - :42: Great!
      :.*: Try again!


Question 10
-----------

.. mchoice:: cs_basics_practice_quiz_10
    :answer_a: true
    :answer_b: false
    :answer_c: An error will occur.
    :answer_d: None of the above.
    :correct: a
    :feedback_a: Great!
    :feedback_b: Try again!
    :feedback_c: Try again!
    :feedback_d: Try again!

    

    Given the following function and function call, what would be printed?::

        function mysteriousThing(x, y) {
            return (x === 6 || y !== 14 || x*y === 42);
        }
        console.log( mysteriousThing(3, 14) )



Question 11
-----------

.. mchoice:: cs_basics_practice_quiz_11
    :answer_a: true
    :answer_b: false
    :answer_c: An error will occur.
    :answer_d: None of the above.
    :correct: b
    :feedback_a: Try again!
    :feedback_b: Great!
    :feedback_c: Try again!
    :feedback_d: Try again!

    

    Given the following function and function call, what would be printed?::

        function mysteriousThing(x, y) {
            return (x === 6 || y !== 14 && x*y === 42);
        }
        console.log( mysteriousThing(3, 14) )


Question 12
-----------

First, turn on the Practice Quiz Mode of CodingJS. This will hide the test cases that are used when checking your code. Now solve the `loneTeen CodingJS practice problem <https://codingjs.wmcicompsci.ca/exercise.html?name=loneTeen&title=Warmup-1>`_.


Question 13
-----------

Make sure the Practice Quiz Mode of CodingJS is turned on. Now solve the `in1to10 CodingJS practice problem <https://codingjs.wmcicompsci.ca/exercise.html?name=in1To10&title=Logic-1>`_.


