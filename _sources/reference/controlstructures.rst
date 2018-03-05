JavaScript Control Structures
=============================

.. topic:: Quick Overview of Day

    Discuss JavaScript control structures.


Comments
---------

Anything after ``//`` will be a comment on that line. Not really a control structure, but you should know it.


Operators
----------

JavaScript is odd when it comes to checking for equality (truthy/falsey problems with ==), so we use three equal signs when checking for equality.

Relational

- ``===`` exactly equals
- ``!==`` does not equal
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


.. code-block:: javascript

    let someNumber = prompt("Pick a number");

    if (someNumber < 42) {
        // do something
    }
    else if (someNumber === 42) {
        // do something else
    }
    else {
        // do some default action
    }


While Loops
-----------

.. code-block:: javascript

    let number = 0;

    while (number < 10) {
        console.log(number);
        number = number + 1;
    }


Do-While Loops
---------------

Guarantees the loop will happen at least once.

.. code-block:: javascript

    let answer;
    do {
        answer = prompt("Best NBA team?");
    }
    while (answer !== "Spurs");


For Loop
--------

.. code-block:: javascript

    for (let number = 10; number > 0; number = number - 1) {
        console.log(number);
    }
    console.log("Blastoff!");


Break
-----

Forces a loop to end immediately. Just include a ``break;`` statement inside the loop somewhere.


Try/Catch
----------

Useful if you are going to run code that might cause an error.

.. code-block:: javascript

    try {
        somethingNotDefined();
    } catch (theError) {
        console.log("Uh oh. You just had the following error: " + theError);    // console.log() is the same as print()
    }


Functions
----------

.. code-block:: javascript

    function adder(first, second) {
        theAnswer = first + second;
        return theAnswer;
    }

Can return a value, or not. If not, result is ``undefined``.


Throwing Exception
-------------------

If you want to create code that deals gracefully with possible errors. You can `read more about them here <https://eloquentjavascript.net/3rd_edition/08_error.html#h_zT3755/aOp>`_ . Consider:

.. code-block:: javascript

    function multiply(firstNumber, secondNumber) {
        if (typeof firstNumber !== "number" || typeof secondNumber !== "number") {
            throw "You cannot multiply unless both arguments are numbers!";
        }

        return firstNumber * secondNumber;
    }   

    print(multiply(4, 3))       // 12
    print(multiply(4, "foo"))   // Error in console: "You cannot multiply unless both arguments are numbers!"
                                // also crashes the program, since the there was no code to catch the exception


    try {
        multiply(4, "foo");
    } 
    catch (e) {
        console.log(e);         // printed in console: "You cannot multiply unless both arguments are numbers!"
    }                           //   doesn't crash the program, since the exception was caught!

