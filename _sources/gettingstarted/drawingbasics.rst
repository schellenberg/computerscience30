The Basics of p5js
=============================

.. topic:: Quick Overview of Day

    Draw primitive shapes in p5js. Explore storing color values.


Class Demo
------------------

p5js has a number of functions that get called automatically for you. The most important ones for now are ``setup()``, ``draw()``, ``keyIsDown()`` and ``mousePressed()``.

Live code a demo that does the following:

- displays a circle on the screen (talk about the coordinate plane)
- update the location of the circle so that it goes wherever the mouse goes (``mouseX`` and ``mouseY``)
- talk about why we use ``async function setup()`` (ensures any ``await`` calls in setup are completed before the ``draw()`` loop starts)
- use ``console.log()`` to provide diagnostic messages (super useful when debugging your code)
- make the circle start to move around the screen (global variables for x and y location, and x and y velocity; conditional statements to bounce when colliding with walls)
- have the circle change to a random color every time it collides with a wall
- whenever the mouse is pressed, choose new random values for x and y velocities
- use a random image from the web instead of the circle (PImage)
- if time/inclination allows, use the scroll wheel to change the size of the image moving around
- clean up the ``draw()`` loop so that it calls other user-defined functions


To Remember
------------

- use ``keyIsDown()`` with something like ``if (keyIsDown("r")) {`` or ``if (keyIsDown(UP_ARROW)) {``


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
- ``mouseX`` - Current horizontal location of the mouse
- ``mouseY`` - Current vertical location of the mouse


Async and Await (for Loading Images)
-------------------------------------

When we load an image on the web, it can take a little time. Your program does not want to freeze while waiting, so loading is asynchronous (happens in the background).

Think of it like this:

- ``async`` means "this function might need to wait for something".
- ``await`` means "pause here until this one thing is ready".

In p5, this is useful when you want your image (or other data) to be fully loaded before the ``draw()`` loop starts using it.

.. code-block:: javascript

        let someImage;

        async function setup() {
            createCanvas(windowWidth, windowHeight);

            // wait until the image finishes loading.
            someImage = await loadImage("https://images.pexels.com/photos/8474010/pexels-photo-8474010.jpeg?cs=srgb&dl=pexels-jaime-reimer-1376930-8474010.jpg&fm=jpg&w=640&h=427");
        }

        function draw() {
            background("white");
            image(someImage, mouseX, mouseY);
        }

Here is a `live version of that image loading sketch <https://editor.p5js.org/schellenberg/sketches/4TVRJrn-P>`_.


Your Turn
----------

Create a sketch that makes the following happen:

- displays an image of a character at some x and y location (save these in global variables)

- make the character move according to WASD controls (keyIsDown will be your friend here...)



Start of Class Mini-Challenge
----------------------------------

Create a sketch that makes the following happen:

- when the user clicks on the sketch AND is holding down the ``r`` key, draw a rectangle there

- when the user clicks on the sketch AND is holding down the ``c`` key, draw a circle there

- when the user hits the "w" key, reset the sketch with a white background

- when the user hits the "b" key, reset the sketch with a black background

You'll want to look up the ``mouseClicked()`` function in the  `p5js.org reference <https://p5js.org/reference/>`_.
It should look something like `this sketch <https://editor.p5js.org/schellenberg/full/_unxJaK-q>`_.


Take it Further
----------------

- see if you can use the up/down arrow keys to adjust the size of the rectangle and circle that your program draws
- use some other key(s) to change the color used for the shapes

.. note:: If you want to use the right mouse button as an input for your sketch, you will want to disable the normal right mouse button behaviour of your browser. To do that, include the following in your ``setup()`` function: ``document.addEventListener("contextmenu", event => event.preventDefault())``. If you are curious how this works, you'd need to look up arrow functions.



Another Mini-Challenge
------------------------

Create a sketch to make the following happen:

- when the mouse is on the left-hand side of your screen, rectangles should be drawn (on the left half of the screen). The rectangles should be various shades of grey.
- when the mouse is on the right-hand side of the screen, circles should be drawn on the right side of the screen (in random colours).

It should look something like `this sketch <https://editor.p5js.org/schellenberg/full/T6hYFKDM6>`_.


.. .. p5:: drawingBasicsYourTurn3
..     :width: 400


..     function setup() {
..       createCanvas(400, 400);
..     }

..     function draw() {
..       background(255);
..     }


.. Bouncing Ball
.. --------------

.. Bouncing ball demo (just bounce in one direction).

.. .. p5:: bouncingBall
..     :width: 400


..     function setup() {
..       createCanvas(400, 400);
..     }

..     function draw() {
..       background(255);
..       // make a ball bounce
..     }

.. Your Turn
.. ----------

.. Now you add the following features:

.. - improve the code so that the ball can bounce both vertically AND horizontally.
.. - bounce on edge of ball (instead of the middle of the ball)
.. - make the ball speed up or slow down based on some condition (for example, whether the mouse is currently being pressed or not)
.. - implement at least one additional feature, such as changing the size or color of the ball based on certain conditions
.. - change the ball to something else (maybe a DVD logo?)


.. PImage
.. ---------

.. Displaying images in p5js. Load them in the ``preload()`` function to guarantee they are available when you call them. Can also use a callback function to deal with it loading elsewhere.

.. .. p5:: pimageDemo
..     :width: 400


..     function setup() {
..       createCanvas(400, 400);
..     }

..     function draw() {
..       background(255);
..     }


.. Your Turn
.. ---------

.. - find a random image on the web and have it follow your mouse around your sketch
.. - now, include the ability to zoom in and out based on the left or right mouse button being pressed
.. - improve it by making the zooming occur based on mouse wheel scrolling

.. .. p5:: drawingBasicsYourTurn4
..     :width: 400


..     function setup() {
..       createCanvas(400, 400);
..     }

..     function draw() {
..       background(255);
..     }



References (check for more info):
----------------------------------

`p5js basic drawing tutorial <https://p5js.org/learn/coordinate-system-and-shapes.html>`_ -- Coordinate System and Shapes

`p5js color tutorial <https://p5js.or g/learn/color.html>`_ -- we'll mostly use RGB
