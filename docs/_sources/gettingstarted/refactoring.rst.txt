Refactoring Code
=============================

.. topic:: Quick Overview of Day

    Refactor existing code to increase elegance.


Introduction to Refactoring Code
---------------------------------

Insert Stefan's presentation here... (code refactorization, saved in Google Drive CS20-30 IS Team)

Using Functions to Increase Readability
----------------------------------------

Let's improve the following code by using functions. Three logical functions to use might be move, bounce and display.

.. code-block:: javascript

    // Learning Processing
    // Daniel Shiffman
    // http://www.learningprocessing.com

    // Example 5-6: Bouncing Ball
    let x = 0;
    let speed = 1;

    function setup() {
        size(200,200);
    }

    function draw() {
        background(255);

        // Add the current speed to the x location.
        x = x + speed;

        // Remember, || means "or."
        if ((x > width) || (x < 0)) {
            // If the object reaches either edge, multiply speed by -1 to turn it around.
            speed = speed * -1;
        }

        // Display circle at x location
        stroke(0);
        fill(175);
        ellipse(x,100,32,32);
    }



Bouncing Rectangle
-------------------

Refactor the following code. Be sure the functionality of the program remains the same once you have completed your refactoring.

.. code-block:: javascript

	let a,b,c,d;
    function setup() {
    createCanvas(windowWidth, windowHeight);
    a=200; b=300; c=random(3,8); d=random(3,8);
    }
    function draw() {
    a+=c; b+=d;
    if (b>=height-75||b<=0){d=d*-1;}
    if (a>=width-250||a<=0){c=c*-1;}
    background(80,80,80);
    rect(a,b,250,75);
    }


.. // Rectangle Bounce
.. // Dan Schellenberg
.. // Dec 4, 2018

.. let x, y;
.. let rectWidth, rectHeight;
.. let dx, dy;

.. function setup() {
..   createCanvas(windowWidth, windowHeight);

..   //set rectangle attributes
..   x = width/2;
..   y = height/2;
..   rectWidth = 250;
..   rectHeight = 75;
..   dx = random(3, 8);
..   dy = random(3, 8);
.. }

.. function draw() {
..   moveRect();
..   displayRect();
.. }

.. function moveRect() {
..   // apply speed
..   x += dx;
..   y += dy;

..   //check for bounce
..   if (y + rectHeight >= height || y <= 0) {
..     dy = dy * -1;
..   }
..   if (x + rectWidth >= width || x <= 0) {
..     dx = dx * -1;
..   }
.. }

.. function displayRect() {
..   background(80, 80, 80);
..   rect(x, y, rectWidth, rectHeight);
.. }


Rollover
---------------

Refactor the following code. Be sure the functionality of the program remains the same once you have completed your refactoring.

.. code-block:: javascript

    // This example is adapted from Learning Processing Example 5-3 by Daniel Shiffman
    // http://www.learningprocessing.com
    // Refactor the following code. Be sure the refactored version:
    //  - is readable
    //  - is able to work easily with any canvas size

    function setup() {createCanvas(480, 270);}
    function draw() {
    background(255);stroke(0);line(240, 0, 240, 270);line(0, 135, 480, 135);
    noStroke();fill(0);
    if (mouseX<240&&mouseY<135){rect(0,0,240,135);}
    else if (mouseX>240&&mouseY<135){rect(240,0,240,135);}
    else if (mouseX<240&&mouseY>135){rect(0,135,240,135);}
    else if (mouseX>240&&mouseY>135){rect(240,135,240,135);}}



.. // Dan Schellenberg
.. // This example is adapted from Learning Processing Example 5-3 by Daniel Shiffman
.. // Dec 5, 2018

.. function setup() {
..   createCanvas(windowWidth, windowHeight);
.. }

.. function draw() {
..   background(255);
..   stroke(0);

..   // define edge points of quadrants
..   let horizontalMiddle = width/2;
..   let verticalMiddle = height/2;

..   // add quadrant lines
..   line(horizontalMiddle, 0, horizontalMiddle, height);
..   line(0, verticalMiddle, width, verticalMiddle);

..   // Fill a black color
..   noStroke();
..   fill(0);

..   // Depending on the mouse location, a different rectangle is displayed.    
 
..   // top left quadrant
..   if (mouseX < horizontalMiddle && mouseY < verticalMiddle) {
..     rect(0, 0, horizontalMiddle, verticalMiddle);
..   }
..   // top right quadrant
..   else if (mouseX > horizontalMiddle && mouseY < verticalMiddle) {
..     rect(horizontalMiddle, 0, horizontalMiddle, verticalMiddle);
..   }
..   // bottom left quadrant
..   else if (mouseX < horizontalMiddle && mouseY > verticalMiddle) {
..     rect(0, verticalMiddle, horizontalMiddle, verticalMiddle);
..   }
..   // bottom right quadrant
..   else if (mouseX > horizontalMiddle && mouseY > verticalMiddle) {
..     rect(horizontalMiddle, verticalMiddle, horizontalMiddle, verticalMiddle);
..   }
.. }


Target
-------

Refactor the following code. Be sure the functionality of the program remains the same once you have completed your refactoring.

.. code-block:: javascript

    function setup() {
    createCanvas(400, 400);
    }

    function draw() {
    background(240);
    ellipse(200, 200, 400, 400);
    ellipse(200, 200, 360, 360);
    ellipse(200, 200, 320, 320);
    ellipse(200, 200, 280, 280);
    ellipse(200, 200, 240, 240);
    ellipse(200, 200, 200, 200);
    ellipse(200, 200, 160, 160);
    ellipse(200, 200, 120, 120);
    ellipse(200, 200, 80, 80);
    ellipse(200, 200, 40, 40);
    }


.. let diameter, sliceWidth;
.. let x, y;

.. function setup() {
..   createCanvas(400, 400);
..   x = width / 2;
..   y = height / 2;
.. }

.. function draw() {
..   background(240);
  
..   // need to reset these values each loop
..   diameter = 400;
..   sliceWidth = diameter / 10;

..   // start by drawing the outside circle, and work your way inward
..   while (diameter > 10) {
..     ellipse(x, y, diameter, diameter);
..     diameter -= sliceWidth;
..   }
.. }



Colorful Target
-----------------

Refactor the following code. Be sure the functionality of the program remains the same once you have completed your refactoring.

.. code-block:: javascript

    function setup() {
    createCanvas(400, 400);
    }

    function draw() {
    background(240);
    stroke(200);
    fill("white");
    ellipse(200, 200, 400, 400);
    fill("white");
    ellipse(200, 200, 360, 360);
    fill("black");
    ellipse(200, 200, 320, 320);
    fill("black");
    ellipse(200, 200, 280, 280);
    fill("blue");
    ellipse(200, 200, 240, 240);
    fill("blue");
    ellipse(200, 200, 200, 200);
    fill("red");
    ellipse(200, 200, 160, 160);
    fill("red");
    ellipse(200, 200, 120, 120);
    fill("yellow");
    ellipse(200, 200, 80, 80);
    fill("yellow");
    ellipse(200, 200, 40, 40);
    }


.. // Colourful Target Example
.. // Dan Schellenberg
.. // Sept 27/18

.. let diameter, sliceWidth;
.. let x, y;
.. let targetColors = ["white", "white", "black", "black", "blue", "blue", "red", "red", "yellow", "yellow"];

.. function setup() {
..   createCanvas(400, 400);
..   x = width / 2;
..   y = height / 2;
.. }

.. function draw() {
..   background(240);
 
..   // change the stroke to gray so the two black rings are obvious
..   stroke(200);

..   // need to reset the diameter before each loop; we change it in loop
..   diameter = 400;
..   sliceWidth = diameter / 10;

..   // start with the outermost circle, and work your way inward
..   for (let i = 0; i < 10; i++) {
..     fill(targetColors[i]);
..     ellipse(x, y, diameter, diameter);
..     diameter -= sliceWidth;
..   }
.. }



Chess Board
------------

.. code-block:: javascript

    function setup() {
    createCanvas(600, 600);
    }

    function draw() {
    fill(255);
    rect(0,0,75,75);
    fill(0);
    rect(0,75,75,75);
    fill(255);
    rect(0,150,75,75);
    fill(0);
    rect(0,225,75,75);
    fill(255);
    rect(0,300,75,75);
    fill(0);
    rect(0,375,75,75);
    fill(255);
    rect(0,450,75,75);
    fill(0);
    rect(0,525,75,75);
    fill(0);
    rect(75,0,75,75);
    fill(255);
    rect(75,75,75,75);
    fill(0);
    rect(75,150,75,75);
    fill(255);
    rect(75,225,75,75);
    fill(0);
    rect(75,300,75,75);
    fill(255);
    rect(75,375,75,75);
    fill(0);
    rect(75,450,75,75);
    fill(255);
    rect(75,525,75,75);
    fill(255);
    rect(150,0,75,75);
    fill(0);
    rect(150,75,75,75);
    fill(255);
    rect(150,150,75,75);
    fill(0);
    rect(150,225,75,75);
    fill(255);
    rect(150,300,75,75);
    fill(0);
    rect(150,375,75,75);
    fill(255);
    rect(150,450,75,75);
    fill(0);
    rect(150,525,75,75);
    fill(0);
    rect(225,0,75,75);
    fill(255);
    rect(225,75,75,75);
    fill(0);
    rect(225,150,75,75);
    fill(255);
    rect(225,225,75,75);
    fill(0);
    rect(225,300,75,75);
    fill(255);
    rect(225,375,75,75);
    fill(0);
    rect(225,450,75,75);
    fill(255);
    rect(225,525,75,75);
    fill(255);
    rect(300,0,75,75);
    fill(0);
    rect(300,75,75,75);
    fill(255);
    rect(300,150,75,75);
    fill(0);
    rect(300,225,75,75);
    fill(255);
    rect(300,300,75,75);
    fill(0);
    rect(300,375,75,75);
    fill(255);
    rect(300,450,75,75);
    fill(0);
    rect(300,525,75,75);
    fill(0);
    rect(375,0,75,75);
    fill(255);
    rect(375,75,75,75);
    fill(0);
    rect(375,150,75,75);
    fill(255);
    rect(375,225,75,75);
    fill(0);
    rect(375,300,75,75);
    fill(255);
    rect(375,375,75,75);
    fill(0);
    rect(375,450,75,75);
    fill(255);
    rect(375,525,75,75);
    fill(255);
    rect(450,0,75,75);
    fill(0);
    rect(450,75,75,75);
    fill(255);
    rect(450,150,75,75);
    fill(0);
    rect(450,225,75,75);
    fill(255);
    rect(450,300,75,75);
    fill(0);
    rect(450,375,75,75);
    fill(255);
    rect(450,450,75,75);
    fill(0);
    rect(450,525,75,75);
    fill(0);
    rect(525,0,75,75);
    fill(255);
    rect(525,75,75,75);
    fill(0);
    rect(525,150,75,75);
    fill(255);
    rect(525,225,75,75);
    fill(0);
    rect(525,300,75,75);
    fill(255);
    rect(525,375,75,75);
    fill(0);
    rect(525,450,75,75);
    fill(255);
    rect(525,525,75,75);
    }


.. let boxSize;
.. let isFilledWithBlack;

.. function setup() {
..   createCanvas(600, 600);
..   boxSize = width/8;
..   isFilledWithBlack = false;
.. }

.. function draw() {
..   for (let i = 0; i < 8; i++) {
..     for (let j = 0; j < 8; j++) {
..       if (isFilledWithBlack) {
..         fill(0);
..       }
..       else {
..         fill(255);
..       }
..       rect(i * boxSize, j * boxSize, boxSize, boxSize);
..       isFilledWithBlack = !isFilledWithBlack;
..     }
..     isFilledWithBlack = !isFilledWithBlack;
..   }
.. }
