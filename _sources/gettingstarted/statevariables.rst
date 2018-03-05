State Variables
=============================

.. topic:: Quick Overview of Day

    Use state variables to control the flow of a program.


Square Moving Around Screen
---------------------------

Create a sketch that accomplishes the following:

*add an gif image here of a square moving around the outsides of a browser window*

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



Try This
---------

Try to alter the code given above so that the background continues to switch from black to white once every 2 seconds.


Practice Problem
-----------------

Traffic light simluator. Give students starter code, and have them attempt to get a traffic light working. Can be done nicely with a state variable, and use of the ``millis()`` function.

Practice Problem
----------------

Put a button in the middle of the screen. When it is clicked, switch to a screen that has a ball bouncing around.




