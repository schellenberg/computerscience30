.. qnum::
   :prefix: variable-scope-quiz
   :start: 1

.. _variable_scope_practice_quiz:


Variable Scope Practice Quiz
-----------------------------


Question 1
~~~~~~~~~~~

.. mchoice:: variable-scope-practice-quiz-1
  :random:

  What would be the result of the following code?
  
  .. code-block:: javascript

    function setup() {
      createCanvas(400, 400);
      let x = 50;
    }

    function draw() {
      background("black");
      fill("white");
      rect(x, 50, 25, 25);
    }
  
  - ReferenceError: x is not defined

    + Yes! Nicely done!

  - A white rectangle is drawn on a black background at coordinates (50, 50), and with width and height of 25.

    - Try again!

  - None of these options

    - Try again!

  - A black rectangle is drawn on a white background at coordinates (50, 50), and with width and height of 25.

    - Try again!



Question 2
~~~~~~~~~~~

.. mchoice:: variable-scope-practice-quiz-2
  :random:

  What would be the result of the following code?
  
  .. code-block:: javascript

    let x = 50;

    function setup() {
      createCanvas(400, 400);
    }

    function draw() {
      background("black");
      fill("white");
      rect(x, 50, 25, 25);
    }
  
  - A white rectangle is drawn on a black background at coordinates (50, 50), and with width and height of 25.

    + Yes! Nicely done!

  - ReferenceError: x is not defined

    - Try again!

  - None of these options

    - Try again!

  - A black rectangle is drawn on a white background at coordinates (50, 50), and with width and height of 25.

    - Try again!


Question 3
~~~~~~~~~~~

.. mchoice:: variable-scope-practice-quiz-3
  :random:

  What would be the result of the following code?
  
  .. code-block:: javascript

    let x = 50;

    function setup() {
      createCanvas(400, 400);
    }

    function draw() {
      background("black");
      fill("white");
      rect(x, 50, 25, 25);
      x++;
    }
  
  - A white rectangle is drawn on a black background at coordinates (50, 50), and with width and height of 25. Each frame, the rectangle moves slightly to the right.

    + Yes! Nicely done!

  - A white rectangle is drawn on a black background at coordinates (50, 50), and with width and height of 25. Each frame, the rectangle moves slightly to the left.

    - Try again!

  - A white rectangle is drawn on a black background at coordinates (50, 50), and with width and height of 25.

    - Try again!

  - ReferenceError: x is not defined

    - Try again!

  - None of these options

    - Try again!


Question 4
~~~~~~~~~~~

.. mchoice:: variable-scope-practice-quiz-4
  :random:

  What would be the result of the following code?
  
  .. code-block:: javascript

    function setup() {
      createCanvas(400, 400);
    }

    function draw() {
      let x = 50;
      background("black");
      fill("white");
      rect(x, 50, 25, 25);
      x++;
    }

  - A white rectangle is drawn on a black background at coordinates (50, 50), and with width and height of 25.
  
    + Yes! Nicely done!

  - A white rectangle is drawn on a black background at coordinates (50, 50), and with width and height of 25. Each frame, the rectangle moves slightly to the left.

    - Try again!

  - A white rectangle is drawn on a black background at coordinates (50, 50), and with width and height of 25. Each frame, the rectangle moves slightly to the right.

    - Try again!

  - ReferenceError: x is not defined

    - Try again!

  - None of these options

    - Try again!


