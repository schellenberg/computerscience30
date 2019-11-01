Variable Scope
=============================

.. topic:: Quick Overview of Day

    Discuss variable scope when using ``let`` or ``const``.


Local vs Global Scope
-----------------------

Use ``let`` and ``const`` instead of ``var``. ``let`` gives block based scoping, which is much better (and more consistent with every other language you will learn). If you are using example code that uses ``var``, you can *usually* just look at the example and use ``let`` anywhere you see ``var``.

When we use ``let`` and ``const`` assignment statements, JavaScript uses block based scope. A block begins with a ``{``, and ends with a ``}``.

Can you figure out what the image the following code will create?

.. p5:: scopeDemo
  :width: 400

  let a = 80;

    function setup() {
      createCanvas(700, 400);
      background(0);
      stroke(255);
      noLoop();
    }

    function draw() {
      line(a, 0, a, height);

      for (let a = 120; a < 200; a += 2) {
        line(a, 0, a, height);
      }

      drawAnotherLine();

      drawYetAnotherLine();

    }

    function drawAnotherLine() {
      let a = 320;
      line(a, 0, a, height);
    }

    function drawYetAnotherLine() {
      line(a + 5, 0, a + 5, height);
    }


Things to try:

- add a ``let a = 50;`` as the first line inside of the draw() loop
- move the ``let a = 50;`` to be the second line inside of the draw() loop (after the first line is drawn)
- try both of the above again, but this time remove the ``let``, so it simply reads ``a = 50;``

Be sure you understand exactly why each of the results of the situations above happen! You may want to open up the Chrome (or whatever browser you are using) console (F12, or Ctrl-Opt/Alt-J).


Practice Quiz
--------------

Needs to be created...