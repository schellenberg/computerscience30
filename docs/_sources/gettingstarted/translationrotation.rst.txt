Translation and Rotation
=============================

.. topic:: Quick Overview of Day

    Things you should know about translating and rotating in p5js.



Demo
-----

Start with a single rectangle on the screen. Turn it into a diamond shape using ``rotate()``. Notice that it is messed up. Use ``translate()`` to fix it. Add another rectangle, but make it something that shouldn't rotate (like a button near the bottom of the screen). Eventually get to code like the following:

.. p5:: rotate-demo
    :width: 400

    function setup() {
        createCanvas(400, 400);
        angleMode(DEGREES);
    }

    function draw() {
        background(220);
        fill(0);
        
        push();
        translate(140, 140);
        rotate(mouseX);
        // rectMode(CENTER);
        rect(0, 0, 25, 25);
        pop();
        
        //button
        rect(300, 250, 75, 25);
    }


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

Might want to look up ``frameCount``, and remember how to use modular arithmetic.
