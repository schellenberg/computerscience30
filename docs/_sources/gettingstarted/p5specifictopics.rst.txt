p5js Specific Topics
=============================

.. topic:: Quick Overview of Day

    Things you should know about drawing with p5js.


Translations
---------------

https://processing.org/tutorials/transform2d/


Rotations
----------

https://processing.org/tutorials/transform2d/



Rotating Towards Something (like the cursor)
----------------------------------------------

``atan2``

Your Turn
----------

Draw a clock face that looks like this:

.. image:: images/clockface.png

If you finish early, see if you can get it to have hands that actually work! Look in the reference for seconds(), etc.



Extra for Experts
--------------------

Try to make something like this happen:

`https://www.youtube.com/watch?v=duNzKIRJHuA <https://www.youtube.com/watch?v=duNzKIRJHuA>`_

Might want to look up frameCount, and remember how to use modular arithmetic.



PImage
---------

Displaying images in p5js. Load them in the ``preload()`` function to guarantee they are available when you call them. Can also use a callback function to deal with it loading elsewhere.


Your Turn
---------

- find a random image on the web and have it follow your mouse around your sketch
- now, include the ability to zoom in and out based on the left or right mouse button being pressed
- improve it by making the zooming occur based on mouse wheel scrolling


Super Handy Sprite Sheet Unpacker
----------------------------------

`https://github.com/ForkandBeard/Alferd-Spritesheet-Unpacker/releases <https://github.com/ForkandBeard/Alferd-Spritesheet-Unpacker/releases>`_


Piskel - free online sprite editor
-----------------------------------

`http://www.piskelapp.com/ <http://www.piskelapp.com/>`_


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


PVector
--------

Another helpful way to do movement -- does a bunch of rotational math for you.

- asteroids ship demo?
- cannon shooting from bottom of screen to wherever mouse is?