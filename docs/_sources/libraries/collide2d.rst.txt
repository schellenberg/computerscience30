collide2d Library
=================


Installing the Library in VSCodium
----------------------------------

With the cs30-p5 extension installed, you can add collide2d directly from the Command Palette:

1. Open the Command Palette (Ctrl+Shift+P).
2. Run Install p5 Contributor Library.
3. Choose collide2d from the list.

This downloads the collide2d JavaScript library into your libraries project folder, and adds a link to it from your index.html file so collision helper functions (such as ``collideRectCircle()``) are available in your sketch.


Using collide2d in p5
----------------------

The collide2d library gives you functions to test whether shapes overlap. A common first demo is rectangle-circle collision:

.. code-block:: javascript

        // Collide2d Demo

        let hit;

        async function setup() {
            createCanvas(windowWidth, windowHeight);
        }

        function draw() {
            background(220);

            hit = collideRectCircle(200, 200, 100, 150, mouseX, mouseY, 100);
            console.log(hit);

            if (hit) {
                fill("blue");
            }
            else {
                fill("white");
            }

            rect(200, 200, 100, 150);
            circle(mouseX, mouseY, 100);
        }

In this example:

- ``collideRectCircle(rectX, rectY, rectW, rectH, circleX, circleY, circleDiameter)`` returns ``true`` when the two shapes overlap.
- The rectangle turns blue on collision and white otherwise.
- ``console.log(hit)`` prints collision state each frame for debugging.


Try This
--------

1. Change the rectangle size and position.
2. Change the circle diameter.
3. Add a second rectangle and test both collisions.
