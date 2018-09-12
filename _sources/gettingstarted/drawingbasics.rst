Drawing Primitives and Color
=============================

.. topic:: Quick Overview of Day

    Draw primitive shapes in p5js. Explore storing color values.


Ideas from:
----------------

`Processing basic drawing tutorial <https://processing.org/tutorials/drawing/>`_ (though this is written for the Java version of Processing, the same ideas apply...)


`Processing color tutorial <https://p5js.org/learn/color.html>`_


p5js Example
------------------

p5js has a number of functions that get called automatically for you. The most important ones for now are ``setup()``, ``draw()``, ``keyTyped()`` and ``mousePressed()``.

.. p5:: first-demo
    :width: 400


    function setup() {
        createCanvas(400, 400);
    }

    function draw() {
        background(255);
        fill(0);
        ellipse(mouseX, mouseY, 50, 50);
    }


As you saw in the last sketch, we can get the current mouse position by simply using the keywords ``mouseX`` and ``mouseY``. Another incredibly useful set of keywords is ``pmouseX`` and ``pmouseY``, which stand for "previous" mouseX and mouseY locations.


Your Turn
---------

I want to have p5js make the line that is being drawn be wider when the mouse moves faster horizontally, and thinner when the mouse is moving slower horizontally. See if you can make that happen.

Here's a couple of hints:

- the formula for calculating the speed of the mouse's horizontal motion is the absolute value of the difference between mouseX and pmouseX
- abs(-5) will return 5
- look up the strokeWeight function in the `p5js.org reference <https://p5js.org/reference/>`_

.. p5:: drawingBasicsYourTurn1
    :width: 400


    function setup() {
        createCanvas(400, 400);
        background(255);
    }

    function draw() {

    }


When you manage to get it working, show me your revised, working version of the sketch. Just put your hand up and be prepared to show it to me.


To Remember
------------

- use ``keyTyped()`` instead of keyPressed()  **in keyTyped(), the key variable is case sensitive!**
- can return false; to override default behaviour of that key (like space key scrolling...)


p5js helpful variables
-----------------------

In addition to what we've already done, here's a quick list of system variables that you will likely find useful. You may want to look up more information about these using the `p5js.org reference <https://p5js.org/reference/>`_.

- ``width`` - Width (in pixels) of canvas
- ``height`` - Height (in pixels) of canvas
- ``frameCount`` - Number of frames processed
- ``frameRate()`` - Rate that frames are processed (per second)
- ``windowWidth`` - Width (in pixels) of entire screen
- ``windowHeight`` - Height (in pixels) of entire screen
- ``key`` - Most recent key pressed on the keyboard
- ``keyCode`` - Numeric code for key pressed on keyboard
- ``keyIsPressed`` - True or false? Is a key pressed?
- ``mouseIsPressed`` - True or false? Is the mouse pressed?
- ``mouseButton`` - Which button is pressed? Left, right, or center


Your Turn
----------

Create a sketch that makes the following happen:

- when the user clicks on the sketch AND is holding down the ``r`` key, draw a rectangle there

- when the user clicks on the sketch AND is holding down the ``e`` key, draw a circle there

- when the user hits the "w" key, reset the sketch with a white background

- when the user hits the "b" key, reset the sketch with a black background

You'll want to look up the ``mouseClicked()`` function in the  `p5js.org reference <https://p5js.org/reference/>`_.

.. p5:: drawingBasicsYourTurn2
    :width: 400


    function setup() {
        createCanvas(400, 400);
        background(255);
    }

    function draw() {

    }

Take it Further
----------------

- see if you can use the up/down arrow keys to adjust the size of the rectangle and circle that your program draws
- use some other key(s) to change the color used for the shapes

.. note:: If you want to use the right mouse button as an input for your sketch, you will want to disable the normal right mouse button behaviour of your browser. To do that, include the following in your ``setup()`` function: ``document.addEventListener("contextmenu", event => event.preventDefault())``.


Random
------

The random() function allows us to generate psuedo-random numbers for use in our code (psuedo-random in theory, but they are random enough that you don't have to care about it for what we're doing...).


Constrain
----------

Keeps a value within a certain range.

Example -- move image with mouse, but don't let it leave the left side of the screen.

.. p5:: constrainImage
    :width: 400


    function setup() {
        createCanvas(400, 400);
    }

    function draw() {
        background(255);

    }

Your Turn
----------

Create a sketch to make the following happen:

- when the mouse is on the left-hand side of your screen, rectangles should be drawn (all over the screen). The rectangles should be various shades of grey.
- when the mouse is on the right-hand side of the screen, circles should still be drawn all over the screen (in random colours).


.. p5:: drawingBasicsYourTurn3
    :width: 400


    function setup() {
        createCanvas(400, 400);
    }

    function draw() {
        background(255);
    }


Bouncing Ball
--------------

Bouncing ball demo (just bounce in one direction).

.. p5:: bouncingBall
    :width: 400


    function setup() {
        createCanvas(400, 400);
    }

    function draw() {
        background(255);
        // make a ball bounce
    }

Your Turn
----------

Now you add the following features:

- improve the code so that the ball can bounce both vertically AND horizontally.
- bounce on edge of ball (instead of the middle of the ball)
- make the ball speed up or slow down based on some condition (for example, whether the mouse is currently being pressed or not)
- implement at least one additional feature, such as changing the size or color of the ball based on certain conditions
- change the ball to something else (maybe a DVD logo?)


PImage
---------

Displaying images in p5js. Load them in the ``preload()`` function to guarantee they are available when you call them. Can also use a callback function to deal with it loading elsewhere.

.. p5:: pimageDemo
    :width: 400


    function setup() {
        createCanvas(400, 400);
    }

    function draw() {
        background(255);
    }


Your Turn
---------

- find a random image on the web and have it follow your mouse around your sketch
- now, include the ability to zoom in and out based on the left or right mouse button being pressed
- improve it by making the zooming occur based on mouse wheel scrolling

.. p5:: drawingBasicsYourTurn4
    :width: 400


    function setup() {
        createCanvas(400, 400);
    }

    function draw() {
        background(255);
    }
