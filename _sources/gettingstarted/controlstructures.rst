JavaScript Control Structures
=============================

.. topic:: Quick Overview of Day

    Discuss JavaScript control structures.


Comments
---------

Anything after ``//`` will be a comment on that line. Not really a control structure, but you should know it.


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


Functions
----------

.. code-block:: javascript

    function adder(first, second) {
        theAnswer = first + second;
        return theAnswer;
    }


p5js Example
------------------

p5js has a number of functions that get called automatically for you. The most important ones for now are ``setup()``, ``draw()``, ``keyTyped()`` and ``mousePressed()``. 

.. code-block:: javascript

    function setup() {
        createCanvas(600, 600);
    }

    function draw() {
        background(255);
        fill(0);
        ellipse(mouseX, mouseY, 50, 50);
    }


As you saw in the last sketch, we can get the current mouse position by simply using the keywords mouseX and mouseY. Another incredibly useful set of keywords is ``pmouseX`` and ``pmouseY``, which stand for "previous" mouseX and mouseY locations.


Your Turn
---------

I want to have Processing make the line that is being drawn be wider when the mouse moves faster horizontally, and thinner when the mouse is moving slower horizontally. See if you can make that happen.

Here's a couple of hints:

- the formula for calculating the speed of the mouse's horizontal motion is the absolute value of the difference between mouseX and pmouseX.
- abs(-5) will return 5 in Processing
- look up the strokeWeight function in the Processing.org reference (Links to an external site.)Links to an external site.

When you manage to get it working, show me your revised, working version of the sketch. Just put your hand up and be prepared to show it to me.


Your Turn
----------

Create a sketch that makes the following happen:

- when the user clicks on the sketch with the left mouse button, draw a rectangle there

- when the user clicks on the sketch with the right mouse button, draw a circle there

- when the user hits the "w" key, reset the sketch with a white background

- when the user hits the "b" key, reset the sketch with a black background
  


p5js helpful variables
-----------------------

In addition to what we've already done, here's a quick list of system variables that you will likely find useful:

width - Width (in pixels) of canvas
height - Height (in pixels) of canvas
frameCount - Number of frames processed
frameRate - Rate that frames are processed (per second)
displayWidth - Width (in pixels) of entire screen
displayHeight - Height (in pixels) of entire screen
key - Most recent key pressed on the keyboard
keyCode - Numeric code for key pressed on keyboard
keyPressed - True or false? Is a key pressed?
mousePressed - True or false? Is the mouse pressed?
mouseButton - Which button is pressed? Left, right, or center

