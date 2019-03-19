Helpful Built In JS Functions
=============================

.. topic:: Quick Overview of Day

    Listing a few built in JS functions, and where to find documentation for them.

While we will mostly be spending our time learning functions that are specific to p5js, it is helpful to realize that any built in JS function will also work while using the p5js library. One example of a helpful built in function is the ``setInterval`` and ``setTimeout`` functions. These functions allow you to run a specific function every *x* milliseconds, or after *x* milliseconds have gone by. Consider the following example, which would print *Hello* into your console every two seconds:

.. code-block:: javascript

    function sayHi() {
      console.log("Hello!");
    }

    window.setInterval(sayHi, 2000);

If you want want the function to repeat at a specifc interval for awhile, but then to stop, you need to keep track of the ID that the function returns. Consider the following:

.. code-block:: javascript

    function sayHi() {
      console.log("Hello!");
    }

    let intervalID = window.setInterval(sayHi, 2000);

    // assume that the following is triggered by
    // something else happening in your program...
    clearInterval(intervalID);

If you only want the function to occur **once**, you can use ``setTimeout`` instead:

.. code-block:: javascript

    function sayHi() {
      console.log("Hello!");
    }

    window.setTimeout(sayHi, 2000);

You can keep track of the id that ``setTimeout`` returns as well, if there is a chance you will cancel the event.

More Information
-----------------

A great place to look for information about built in functions is the `MDN Web Docs for JavaScript <https://developer.mozilla.org/en-US/docs/Web/JavaScript>`_. 

`setTimeout docs <https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout>`_ 

`setInterval docs <https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval>`_ 


p5js Example
-----------------

.. p5:: builtInFunctionsDemo
  :width: 400

  let ball;

  function setup() {
    createCanvas(400, 400);
    ball = {
      x: 100,
      y: 200,
      radius: 25,
      fillColor: color(255, 0, 0)
    }
    window.setInterval(setRandomBallColor, 1000); 
  }

  function draw() {
    background(220);
    moveBall();
    displayBall();
  }

  function moveBall() {
    ball.x = mouseX;
    ball.y = mouseY;
  }

  function displayBall() {
    fill(ball.fillColor);
    ellipse(ball.x, ball.y, ball.radius*2, ball.radius*2);
  }

  function setRandomBallColor() {
    let possibleColors = ["red", "green", "blue", "yellow", "orange", "white"];
    ball.fillColor = random(possibleColors);
  }
