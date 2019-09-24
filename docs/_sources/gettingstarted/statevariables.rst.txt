State Variables
=============================

.. topic:: Quick Overview of Day

    Use state variables to control the flow of a program.


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

`Open an editable version of the above code in the p5js editor <https://editor.p5js.org/schellenberg/sketches/N1b8Tk-M9>`_ 


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


`Open an editable version of the above code in the p5js editor <https://editor.p5js.org/schellenberg/sketches/N51M3BkvY>`_ 


Practice Problem
----------------

Put a button in the middle of the screen. When it is clicked, switch to a screen that has a ball bouncing around.




