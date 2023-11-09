Object Oriented Programming
==================================

Using OOP, we can essentially create our own data types. Super useful if you need to make a bunch of the same type of thing... (think bullets, balls, particles, etc)

`MDN Classes Reference <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes>`_ 

To create a simple class:

.. code-block:: javascript

    class Dog {
        constructor(name) {
            this.name = name;
            this.age = 0;
        }

        bark() {
            console.log("Woof! My name is " + this.name);
        }
    }

    let myDog = new Dog("Snoopy");
    let otherDog = new Dog("Fido");

    function setup() {
        createCanvas(windowWidth, windowHeight);
        myDog.bark();
        otherDog.bark();
    }

    function draw() {

    }


Drawing Demo
-------------------

Walker OOP.

.. code-block:: javascript

    class Walker {
        constructor() {
            this.x = width/2;
            this.y = height/2;
            this.color = "red";
            this.speed = 5;
        }

        display() {
            fill(this.color);
            stroke(this.color);
            ellipse(this.x, this.y, 2, 2);
        }

        move() {
            let choice = random(100);
            if (choice < 25) {
            //up
            this.y -= this.speed;
            }
            else if (choice < 50) {
            //down
            this.y += this.speed;
            }
            else if (choice < 75) {
            //left
            this.x -= this.speed;
            }
            else {
            //right
            this.x += this.speed;
            }
        }
    }

    let tyler;
    let nevan;

    function setup() {
        createCanvas(windowWidth, windowHeight);
        tyler = new Walker();
        nevan = new Walker();
        nevan.color = "blue";
    }

    function draw() {
        tyler.move();
        nevan.move();

        tyler.display();
        nevan.display();
    }

Try This
---------

Change the probabilities for your random walker. Perhaps a particular walker has a tendency to head to the right side of the screen... 


Demo with Arrays of Objects
----------------------------

Fireworks / particle system thing

- create a single Particle, which displays an ellipse, and update moves it in a random direction and slowly makes it transparent 
- use the Particle class so that when you click the mouse, create 100 Particles in the mouse location, push them all into an array
    - note that this version will get laggy over time, as the number of Particles gets up into the thousands...
- adjust the initial demo to delete Particles that are no longer used
    - iterate backwards through the array so that you do not miss any elements... whiteboard explanation of this idea

Ball Bouncing Demo
--------------------

- create a Ball class that allows one Ball to bounce around the screen
- instantiate a bunch of Balls, and have them all bounce around the screen at the same time
- show how you can make them detect each other, and do a basic collision detection thing. Make the initial collision resolution super simple (maybe just swap dx and dy with the ball you collided with).


Connected Nodes Demo
---------------------

- create a MovingPoint class that makes a circle move around the screen randomly
    - use Perlin noise for the dx and dy values
    - make it wrap around the screen
    - increase the size of the point if the mouse is nearby
    - instantiate new points wherever the mouse is clicked
- now have the points connect to each other. If they are "close enough", draw a line between the points

More Demos
-----------------

- Button (displays and handles clicks -- create a class that allows you to draw buttons on the screen. Have the constructor take in values for the buttons x, y, width and height)
- Stickman (displays, moves, followsMouse, eats, bounceAround)
    - now use that to show multiple Stickmen on the screen, possibly doing different things
- Ball (displays, moves)
    - multiple instances 
    - try this: basic collision detection and handling
- Timer (start, pause, resume, setWaitTime)
    - now use that to show multiple Stickmen on the screen, possibly doing different things
- Bubble (display, bubbleUpToTop)
    - Create a bubble class that sends bubbles soaring upwards, but that cannot go up beyond the top of the screen. Find an image online and make them display as that image. Their movement upwards should be bubble-ish (so it should move side to side as well as floating upwards)
