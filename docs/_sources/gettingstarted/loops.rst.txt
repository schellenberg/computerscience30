Loops and Nested Loops
=============================

.. topic:: Quick Overview of Day

    Explore for and while loops. Explore nested loops.


Remember that the ``draw()`` loop is already an infinite loop.

While Loops
-------------

While Loop Example::

  let i = 0;
  while (i < 10) {
    console.log(i);
    i++;
  }

For Loops
----------

For Loop Example::

  for (let i = 0; i < 10; i++) {
    console.log(i);
  }


Class Demo
-----------

Create a sketch that draws something similar to the following (do it with both a for and while loop):

.. image:: images/line-of-circles.png


Refactoring Example 1
----------------------

`Open this code, and refactor it using a for loop and while loop <https://editor.p5js.org/schellenberg/sketches/99xcneo7q>`_ 


Class Demo
-----------

Adapt the code above to add color to each of the rings of the target (hint: count up from 0, and use an array of colors to fill in the circles).


Nested Loops
-------------

Loop in a loop. Can draw interesting things.

Try to figure out what this will do **without** running it!

.. code-block:: javascript

    function setup() {
      createCanvas(300, 250);
    }

    function draw() {
      for (let i=0; i<width; i+= 5) {
        for (let j=0; j<height; j+= 5) {
          fill(int(random(255)), int(random(255)), int(random(255)));
          noStroke();
          rect(i, j, 5, 5);
        }
      }
    }

Once you thnk you know what it will do, you can `check your guess for example 1 by clicking here <https://editor.p5js.org/schellenberg/present/RpkErQVDV>`_.


Try to figure out what this will do **without** running it!

.. code-block:: javascript

    function setup() {
      createCanvas(windowWidth, windowHeight);
    }

    function draw() {
      for (let x = 0; x < width; x += 25) {
        for (let y = 0; y < height; y += 25) {
          fill(dist(x, y, mouseX, mouseY));
          circle(x, y, 10);
        }
      }
    }

Once you thnk you know what it will do, you can `check your guess for example 2 by clicking here <https://editor.p5js.org/schellenberg/present/xsaxKiUw8>`_.

Your Turn
----------

You should now attempt to create a sketch that draws a basic chess board (alternating black and white squares). After getting the basic functionality working, see if you can find any ways of making your code more efficient. If you aren't familiar with chess, here's what it should look like:

.. image:: images/Chess_Board.svg


If you finish before the rest of the class, see if you can draw this one:

.. image:: images/nested_loop_image.png


Class Demo
-----------

Create a grid. Store color data for the grid in a 2 dimensional array. When you click on a square, swap the colors of the current cell, and any cell orthogonally adjacent to it (NESW neighbors). It should be something like `this former student project <https://wmcicompsci.ca/makeitblue/>`_ , but just a static number of rows and columns.

To talk about/include:

- ``const`` variables (for number of rows/columns)
- using functions to improve the readability of your code


.. Refactoring Example 2
.. ----------------------

.. `Open this code, and refactor it using a for loop and an array <https://editor.p5js.org/schellenberg/sketches/thcEnD26l>`_ 

.. Demo
.. -----

.. Draw a archery target image using while loop. Then do it using a for loop. Then do it with a for loop, counting up from 0, and using an array of colors to fill in the circles.


Square Moving Around Screen
---------------------------

Create a sketch that accomplishes the following:

.. image:: images/moving_rectangle.gif

You can `open a live version of this here <https://editor.p5js.org/schellenberg/present/-4DTtO-om>`_ 

Have students attempt this first, *before* introducing the idea of a state variable.

State Variables
----------------

What are they?
Why bother?


Timing -- ``millis()``
-----------------------

You can find out how many milliseconds (thousands of a second) have elapsed since the run of the program began. 

.. code-block:: javascript

	let someTime;

	function setup() {
	  createCanvas(600,600);
	  someTime = 2000;
	}

	function draw() {
	  if (millis() < someTime) {
	    background(255);
	  }
	  else {
	    background(0);
	  }
	}

`Open an editable version of the millis example above in the p5js editor <https://editor.p5js.org/schellenberg/sketches/N1b8Tk-M9>`_ 


Try This
---------

Try to alter the code given above so that the background continues to switch from black to white once every 2 seconds.


Practice Problem
-----------------

Traffic light simluator. Start with the following code, and attempt to get a traffic light working. Can be done nicely with a state variable, and use of the ``millis()`` function.

.. code-block:: javascript

	// Traffic Light Starter Code
	// Your Name Here
	// The Date Here

	// GOAL: make a 'traffic light' simulator. For now, just have the light
	// changing according to time. You may want to investigate the millis()
	// function at https://p5js.org/reference/#/p5/millis

	function setup() {
	  createCanvas(600, 600);
	}

	function draw() {
	  background(255);
	  drawOutlineOfLights();
	}

	function drawOutlineOfLights() {
	  //box
	  rectMode(CENTER);
	  fill(0);
	  rect(width/2, height/2, 75, 200, 10);

	  //lights
	  fill(255);
	  ellipse(width/2, height/2 - 65, 50, 50); //top
	  ellipse(width/2, height/2, 50, 50); //middle
	  ellipse(width/2, height/2 + 65, 50, 50); //bottom
	}


`Open an editable version of the traffic light starter code above in the p5js editor <https://editor.p5js.org/schellenberg/sketches/N51M3BkvY>`_ 



