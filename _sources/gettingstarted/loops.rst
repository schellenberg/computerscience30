Loops - For and While
=============================

.. topic:: Quick Overview of Day

    For and while loops.


While Loops
-------------

While Loop Example::

  let i = 0;
  while (i < 10) {
    console.log(i);
    i++;
  }

For Loops
----------

For Loop Example::

  for (let i = 0; i < 10; i++) {
    console.log(i);
  }


Refactoring Example 1
----------------------

`Open this code, and refactor it using a for loop and while loop <https://editor.p5js.org/schellenberg/sketches/99xcneo7q>`_ 


Refactoring Example 2
----------------------

`Open this code, and refactor it using a for loop and an array <https://editor.p5js.org/schellenberg/sketches/thcEnD26l>`_ 

.. Demo
.. -----

.. Draw a archery target image using while loop. Then do it using a for loop. Then do it with a for loop, counting up from 0, and using an array of colors to fill in the circles.



Loops Practice Quiz
--------------------

Note that the same code fragments are used in each question below. You might find it useful to sketch out on paper what you think each code fragment will create, then match your answers with the images provided in the questions below.

.. mchoice:: loops-practice-quiz-1
  :random:

  Which of the following code fragments would generate the image below?
  
  .. image:: images/loops-1.png
  
  - .. code-block:: javascript

      for (let i = 0; i < 20; i++) {
        line(i*2, 0, i * 15, height);
      }

    + Yes! Nicely done!

  - .. code-block:: javascript

      for (let i = 40; i > 0; i--) {
        rect(i * 2, i * 2, i * 2, i * 5);
      }

    - Try again!

  - .. code-block:: javascript

      let i = 0;
      while (i < width) {
        line(0, i, width, i);
        i += 10;
      }

    - Try again!

  - .. code-block:: javascript

      for (let i = 0; i < width; i += 10) {
        line(i, 0, i, height);
      }

    - Try again!

  - .. code-block:: javascript

      for (let i = 0; i < width; i++) {
        if (i % 15 === 0) {
          line(0, 0, width, i);
        }
      }

    - Try again!

  - .. code-block:: javascript

      for (let i = 125; i > 50; i -= 15) {
        rect(i, i + 50, 10, i);
      }

    - Try again!

  - .. code-block:: javascript

      let i = 50;
      while (i < 170) {
        rect(i, i + 50, i, 10);
        i += 20;
      }

    - Try again!


.. mchoice:: loops-practice-quiz-2
  :random:

  Which of the following code fragments would generate the image below?
  
  .. image:: images/loops-2.png
  
  - .. code-block:: javascript

      for (let i = 0; i < 20; i++) {
        line(i*2, 0, i * 15, height);
      }

    - Try again!

  - .. code-block:: javascript

      for (let i = 40; i > 0; i--) {
        rect(i * 2, i * 2, i * 2, i * 5);
      }

    + Yes! Nicely done!

  - .. code-block:: javascript

      let i = 0;
      while (i < width) {
        line(0, i, width, i);
        i += 10;
      }

    - Try again!

  - .. code-block:: javascript

      for (let i = 0; i < width; i += 10) {
        line(i, 0, i, height);
      }

    - Try again!

  - .. code-block:: javascript

      for (let i = 0; i < width; i++) {
        if (i % 15 === 0) {
          line(0, 0, width, i);
        }
      }

    - Try again!

  - .. code-block:: javascript

      for (let i = 125; i > 50; i -= 15) {
        rect(i, i + 50, 10, i);
      }

    - Try again!

  - .. code-block:: javascript

      let i = 50;
      while (i < 170) {
        rect(i, i + 50, i, 10);
        i += 20;
      }

    - Try again!


.. mchoice:: loops-practice-quiz-3
  :random:

  Which of the following code fragments would generate the image below?
  
  .. image:: images/loops-3.png
  
  - .. code-block:: javascript

      for (let i = 0; i < 20; i++) {
        line(i*2, 0, i * 15, height);
      }

    - Try again!

  - .. code-block:: javascript

      for (let i = 40; i > 0; i--) {
        rect(i * 2, i * 2, i * 2, i * 5);
      }

    - Try again!

  - .. code-block:: javascript

      let i = 0;
      while (i < width) {
        line(0, i, width, i);
        i += 10;
      }

    + Yes! Nicely done!

  - .. code-block:: javascript

      for (let i = 0; i < width; i += 10) {
        line(i, 0, i, height);
      }

    - Try again!

  - .. code-block:: javascript

      for (let i = 0; i < width; i++) {
        if (i % 15 === 0) {
          line(0, 0, width, i);
        }
      }

    - Try again!

  - .. code-block:: javascript

      for (let i = 125; i > 50; i -= 15) {
        rect(i, i + 50, 10, i);
      }

    - Try again!

  - .. code-block:: javascript

      let i = 50;
      while (i < 170) {
        rect(i, i + 50, i, 10);
        i += 20;
      }

    - Try again!


.. mchoice:: loops-practice-quiz-4
  :random:

  Which of the following code fragments would generate the image below?
  
  .. image:: images/loops-4.png
  
  - .. code-block:: javascript

      for (let i = 0; i < 20; i++) {
        line(i*2, 0, i * 15, height);
      }

    - Try again!

  - .. code-block:: javascript

      for (let i = 40; i > 0; i--) {
        rect(i * 2, i * 2, i * 2, i * 5);
      }

    - Try again!

  - .. code-block:: javascript

      let i = 0;
      while (i < width) {
        line(0, i, width, i);
        i += 10;
      }

    - Try again!

  - .. code-block:: javascript

      for (let i = 0; i < width; i += 10) {
        line(i, 0, i, height);
      }

    + Yes! Nicely done!

  - .. code-block:: javascript

      for (let i = 0; i < width; i++) {
        if (i % 15 === 0) {
          line(0, 0, width, i);
        }
      }

    - Try again!

  - .. code-block:: javascript

      for (let i = 125; i > 50; i -= 15) {
        rect(i, i + 50, 10, i);
      }

    - Try again!

  - .. code-block:: javascript

      let i = 50;
      while (i < 170) {
        rect(i, i + 50, i, 10);
        i += 20;
      }

    - Try again!


.. mchoice:: loops-practice-quiz-5
  :random:

  Which of the following code fragments would generate the image below?
  
  .. image:: images/loops-5.png
  
  - .. code-block:: javascript

      for (let i = 0; i < 20; i++) {
        line(i*2, 0, i * 15, height);
      }

    - Try again!

  - .. code-block:: javascript

      for (let i = 40; i > 0; i--) {
        rect(i * 2, i * 2, i * 2, i * 5);
      }

    - Try again!

  - .. code-block:: javascript

      let i = 0;
      while (i < width) {
        line(0, i, width, i);
        i += 10;
      }

    - Try again!

  - .. code-block:: javascript

      for (let i = 0; i < width; i += 10) {
        line(i, 0, i, height);
      }

    - Try again!

  - .. code-block:: javascript

      for (let i = 0; i < width; i++) {
        if (i % 15 === 0) {
          line(0, 0, width, i);
        }
      }

    + Yes! Nicely done!

  - .. code-block:: javascript

      for (let i = 125; i > 50; i -= 15) {
        rect(i, i + 50, 10, i);
      }

    - Try again!

  - .. code-block:: javascript

      let i = 50;
      while (i < 170) {
        rect(i, i + 50, i, 10);
        i += 20;
      }

    - Try again!



.. mchoice:: loops-practice-quiz-6
  :random:

  Which of the following code fragments would generate the image below?
  
  .. image:: images/loops-6.png
  
  - .. code-block:: javascript

      for (let i = 0; i < 20; i++) {
        line(i*2, 0, i * 15, height);
      }

    - Try again!

  - .. code-block:: javascript

      for (let i = 40; i > 0; i--) {
        rect(i * 2, i * 2, i * 2, i * 5);
      }

    - Try again!

  - .. code-block:: javascript

      let i = 0;
      while (i < width) {
        line(0, i, width, i);
        i += 10;
      }

    - Try again!

  - .. code-block:: javascript

      for (let i = 0; i < width; i += 10) {
        line(i, 0, i, height);
      }

    - Try again!

  - .. code-block:: javascript

      for (let i = 0; i < width; i++) {
        if (i % 15 === 0) {
          line(0, 0, width, i);
        }
      }

    - Try again!

  - .. code-block:: javascript

      for (let i = 125; i > 50; i -= 15) {
        rect(i, i + 50, 10, i);
      }

    + Yes! Nicely done!

  - .. code-block:: javascript

      let i = 50;
      while (i < 170) {
        rect(i, i + 50, i, 10);
        i += 20;
      }

    - Try again!


.. mchoice:: loops-practice-quiz-7
  :random:

  Which of the following code fragments would generate the image below?
  
  .. image:: images/loops-7.png
  
  - .. code-block:: javascript

      for (let i = 0; i < 20; i++) {
        line(i*2, 0, i * 15, height);
      }

    - Try again!

  - .. code-block:: javascript

      for (let i = 40; i > 0; i--) {
        rect(i * 2, i * 2, i * 2, i * 5);
      }

    - Try again!

  - .. code-block:: javascript

      let i = 0;
      while (i < width) {
        line(0, i, width, i);
        i += 10;
      }

    - Try again!

  - .. code-block:: javascript

      for (let i = 0; i < width; i += 10) {
        line(i, 0, i, height);
      }

    - Try again!

  - .. code-block:: javascript

      for (let i = 0; i < width; i++) {
        if (i % 15 === 0) {
          line(0, 0, width, i);
        }
      }

    - Try again!

  - .. code-block:: javascript

      for (let i = 125; i > 50; i -= 15) {
        rect(i, i + 50, 10, i);
      }

    - Try again!

  - .. code-block:: javascript

      let i = 50;
      while (i < 170) {
        rect(i, i + 50, i, 10);
        i += 20;
      }

    + Yes! Nicely done!
