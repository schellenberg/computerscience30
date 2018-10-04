Object Basics
=============================

.. topic:: Quick Overview of Day

    Understanding object properties.

For now, you can think of an object as a container of properties. This will make more sense with an example or two:

.. code-block:: javascript

    let student = {
    	name: "Aaron",
    	age: 17
    };

    console.log(student.name);     // "Aaron"
    console.log(student.age);      // 17
    console.log(student.birthday); // undefined

.. note::

	Although you can use ``.`` or ``[]`` to access properties of an object, the ``.`` syntax is preferred.

Another example:

.. code-block:: javascript

    let circle = {
    	x: 200,
    	y: 300,
    	radius: 50
    };

    ellipse(circle.x, circle.y, circle.radius*2, circle.radius*2);


To update or add a value to an object:

.. code-block:: javascript

    let student = {
        name: "Aaron",
        age: 17
    };

    console.log(student.age)  // 17
    student.age = 18
    console.log(student.age)  // 18

    console.log(student.birthday) // undefined
    student.birthday = "Jan 1"
    console.log(student.birthday) // "Jan 1"

Objects are passed by reference, not copied (time for a memory drawing on the whiteboard!). Consider:

.. code-block:: javascript

    let student = {
        name: "Aaron",
        age: 17,
    };

    let anotherStudent = student;
    anotherStudent.name = "Catherine";

    console.log(student.name) // Catherine

Notice that this is very different than how a primitive (immutable) data type works. These are copied, not passed by reference:

.. code-block:: javascript

    let number = 42;
    let anotherNumber = number;

    anotherNumber = number;
    console.log(number)           // 42
    console.log(anotherNumber)    // 42

    anotherNumber = 15;
    console.log(number)           // 42
    console.log(anotherNumber)    // 15


.. note::

  Other than Number, String, and Boolean, everything you use in JavaScript will be an object. In other words, they will all be passed by reference, not copied. Be careful to make a **deep copy** yourself if you want a separate version of an array, for example.


Practice Problem
-----------------

Create a ball object. It should have x, y, radius, and color properties. Display it on the canvas. Make it move to the mouse whenever the mouse is pressed. Change the radius when w or s are pressed.

.. p5:: ballObjectDemo
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
  }

  function draw() {
    background(220);
    displayBall();
  }

  function displayBall() {
    fill(ball.fillColor);
    ellipse(ball.x, ball.y, ball.radius*2, ball.radius*2);
  }
