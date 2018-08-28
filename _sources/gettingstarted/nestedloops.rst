Nested Loops
=============================

.. topic:: Quick Overview of Day

    Nested loops.


Nested Loops
-------------

Loop in a loop. Can draw interesting things.

Try to figure out what this will do **without** running it!

.. p5:: nested-example-1
    :width: 500
    :height: 700

    function setup() {
        createCanvas(400, 400);
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


Try to figure out what this will do **without** running it!

.. p5:: nested-example-2

    function setup() {
        createCanvas(400, 400);
    }

    function draw() {
        for (let i = 50; i < 140; i = i+5) {
            for (let j = 30; j < 75; j = j+5) {
                point(i, j);
            }
        }
    }


Your Turn
----------

You should now attempt to create a sketch that draws a basic chess board (alternating black and white squares). After getting the basic functionality working, see if you can find any ways of making your code more efficient. If you aren't familiar with chess, here's what it should look like:

.. image:: images/Chess_Board.svg

Your Turn
---------

How about this one?

.. image:: images/nested_loop_image.png


