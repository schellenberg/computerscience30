Intro To JavaScript
=============================

.. topic:: Quick Overview of Day

    Review programming control structures learned in CS20, translating them from Python into JavaScript. CodingBat practice problems.


.. note:: To students: You can (and will) find a lot of outdated JavaScript tutorials on the web. Because JavaScript tries really hard to "work" no matter what, there are many things that work, but are not best practice. The biggest thing you need to keep in mind is that we won't ever use the ``var`` keyword (use ``let`` instead). When looking for a tutorial/help, you might find it useful to include the word ``es6`` in your search (chances are better that you'll get to a modern tutorial).

Variables and Data Types
------------------------

We use variables in our programs whenever we need to keep track of something that can change over time. Variables allow us to improve the reusability of our code.

We have to be careful how we name variables, since they can't be keywords like `if`, `while`, etc. A keyword is a word that already has a special meaning in the language we are programming in. 

JavaScript follows the camelCaseVariableNamingConvention, which means that your variables should start with a lowercase letter, and if they contain more than one word, you should capitalize each word that follows the first (like `helpfulVariable` or `thisIsSomethingElse`).

When declaring a new variable to be used in JavaScript, you should always write ``let`` before the name of the variable. For example, you might say: 

.. activecode:: variableNames
    :language: javascript
    :nocodelens:

    let name = "John Doe";
    let age = 17;

The fundamental data types that we will need to use in JavaScript include:

- **number** (such as ``3`` or ``-5`` or ``3.14``)
- **string** (such as ``"hello"`` or ``'Friday'`` or ``"5"``)
- **boolean** (``true`` or ``false``) 

Unlike Python, there aren't different types for ``int`` and ``float``; everything numeric is just a ``number``. You should also notice that unlike Python, boolean values are not capitalized (in JS, we use ``true``, not ``True``).

.. note:: Notice that at the end of each statement, we use a semicolon (``;``) to tell JavaScript that the statement is complete.

Math Operators
--------------

We can do math with JavaScript, but we need to know the operators to use. The following table shows the most frequently used math operators in JavaScript.

=======   ==============================    ===============       ======
Symbols   Operations                        Example               Output
=======   ==============================    ===============       ======
\+        Addition                          ``1 + 2``             3
\-        Subtraction                       ``2 - 1``             1
\*        Multiplication                    ``2 * 2``             4
/         Division                          ``5 / 2``             2.5
%         Modulo (remainder)                ``5 % 2``             1
\*\*      Power                             ``5 ** 2``            25
=======   ==============================    ===============       ======

If you are increasing or decreasing a variable by one, you can use the following shorthand:

.. activecode:: incrementingDemo
    :language: javascript
    :nocodelens:

    let a = 4;
    let b = 4;
    
    a++;    // a is now 5

    b--;    // b is now 3

.. note:: JavaScript uses ``//`` to indicate that everything that follows on that line will be a comment.

Handy Math Functions
---------------------

You can use some handy functions available through the ``Math`` object. Some that you will probably want to use are:

.. activecode:: mathFunctions
    :language: javascript
    :nocodelens:

    let nearestInt = Math.round(1.55);
    console.log(nearestInt);

    let nextLowestInt = Math.floor(1.55);
    console.log(nextLowestInt);

    let nextHighestInt = Math.ceil(1.2);
    console.log(nextHighestInt);


If you want to divide, but only keep the integer portion of the result, you could do that using something like:

.. activecode:: truncatingDivision
    :language: javascript
    :nocodelens:

    let someNumber = 42;
    let theQuotient = Math.floor(someNumber / 10);

    console.log(theQuotient);

Special Numerical Values
--------------------------

There are certain situations where you will encounter special values, including ``NaN``, ``Infinity``, and ``-Infinity``. ``NaN`` stands for Not a Number, and will show up if you attempt something like ``let edge = "Bono"/2``. The Infinity values show up if you exceed 1.79769313486231570e+308 (very unlikely in practice), but don't follow all the mathematical rules of infinity. It is, however, important to know about these values so that you can try to identify what has gone wrong if you encounter one while debugging one of your programs.

Operators
----------

.. note:: JavaScript is odd when it comes to checking for equality (uses truthy/falsey with ==), so we use three equal signs when checking for equality.

Relational

- ``===`` exactly equals
- ``!==`` does not exactly equal
- ``=`` assignment
- ``+=`` add or concatenate
- ``-=`` subtract
- ``>`` greater than
- ``>=`` greater than or equal to
- ``<`` less than
- ``<=`` less than or equal to 

Logical

- ``&&`` and
- ``||`` or
- ``!`` not


If / Else If / Else
--------------------

In JavaScript, blocks of code start and end using ``{`` and ``}``. **You should still indent your code properly** (to make your code readable), but the indentation doesn't affect the way your program runs.

.. activecode:: conditionalDemo
    :language: javascript
    :nocodelens:

    let someNumber = prompt("Pick a number");

    if (someNumber < 42) {
        console.log("Small number.");
    }
    else if (someNumber === 42) {
        console.log("The answer. To life, the universe, and everything.");
    }
    else {
        console.log("Large number.");
    }


.. note:: Try entering 42 above. Can you fix the problem?

While Loops
-----------

.. activecode:: whileLoop
    :language: javascript
    :nocodelens:

    let number = 0;

    while (number < 10) {
        number = number + 1;
        console.log(number);
    }


For Loop
--------

.. activecode:: forLoop
    :language: javascript
    :nocodelens:

    for (let number = 1; number <= 10; number++) {
        console.log(number);
    }
    console.log("Blastoff!");

Functions
----------

.. activecode:: functions
    :language: javascript
    :nocodelens:

    function adder(first, second) {
        let theAnswer = first + second;
        return theAnswer;
    }

    console.log(adder(2, 4));

Can return a value, or not. If not, result is ``undefined``.


Arrays
-------

Very similar to lists in Python. `Find out more from MDN reference <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array>`_

.. activecode:: arrayExample1
    :language: javascript
    :nocodelens:

    let groceryList = ["apples", "oranges", "peaches", "milk"];
    for (let item of groceryList) {
        console.log("Don't forget to buy " + item);
    }

.. note:: You can use ``for...of`` to iterate over characters in a string as well.

Can also iterate using the length property of the array:

.. activecode:: arrayExample2
    :language: javascript
    :nocodelens:

    let groceryList = ["apples", "oranges", "peaches", "milk"];
    for (let i=0; i<groceryList.length; i++) {
        console.log("Don't forget to buy " + groceryList[i]);
    }


CodingJS Practice Problems
----------------------------

- `parrotTrouble <https://codingjs.wmcicompsci.ca/exercise.html?name=parrotTrouble&title=Warmup-1>`_
- `diff21 <https://codingjs.wmcicompsci.ca/exercise.html?name=diff21&title=Warmup-1>`_
- `makes10 <https://codingjs.wmcicompsci.ca/exercise.html?name=makes10&title=Warmup-1>`_
- `nearHundred <https://codingjs.wmcicompsci.ca/exercise.html?name=nearHundred&title=Warmup-1>`_
- `sortaSum <https://codingjs.wmcicompsci.ca/exercise.html?name=sortaSum&title=Logic-1>`_
- `posNeg <https://codingjs.wmcicompsci.ca/exercise.html?name=posNeg&title=Warmup-1>`_
- `cigarParty <https://codingjs.wmcicompsci.ca/exercise.html?name=cigarParty&title=Logic-1>`_
- `dateFashion <https://codingjs.wmcicompsci.ca/exercise.html?name=dateFashion&title=Logic-1>`_
- `squirrelPlay <https://codingjs.wmcicompsci.ca/exercise.html?name=squirrelPlay&title=Logic-1>`_
- `love6 <https://codingjs.wmcicompsci.ca/exercise.html?name=love6&title=Logic-1>`_
- `nearTen <https://codingjs.wmcicompsci.ca/exercise.html?name=nearTen&title=Logic-1>`_


