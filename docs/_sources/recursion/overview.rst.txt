Recursion Explanation and Demos
==================================

Simply put, recursion is a function that calls itself.

.. youtube:: Mv9NEXX1VHc
    :height: 315
    :width: 560
    :align: left
    :http: https

.. `YouTube Link to Video <https://www.youtube.com/watch?v=Mv9NEXX1VHc>`_

Refresh your memory of factorials. Define factorials recursively (math, then code).

Practice problems from `CodingJS Recursion-1 <https://codingjs.wmcicompsci.ca/>`_ section. Be sure to do at least the following:

- `factorial <https://codingjs.wmcicompsci.ca/exercise.html?name=factorial&title=Recursion-1>`_ 
- `bunnyEars <https://codingjs.wmcicompsci.ca/exercise.html?name=bunnyEars&title=Recursion-1>`_ 
- `fibonacci <https://codingjs.wmcicompsci.ca/exercise.html?name=fibonacci&title=Recursion-1>`_ 
- `triangle <https://codingjs.wmcicompsci.ca/exercise.html?name=triangle&title=Recursion-1>`_ 
- `bunnyEars2 <https://codingjs.wmcicompsci.ca/exercise.html?name=bunnyEars2&title=Recursion-1>`_ 


Sierpinski Triangle
--------------------

Make a Sierpinski triangle drawing program in p5. 

.. image::  images/sierpinski-triangle.gif

Key ideas:

- use an object to hold point data (x and y coordinates)
- have a function that calculates the midpoint between two coordinates, and returns the resulting coordinate
- create a sierpinski(points, degree) recursive function. Use the degree as both the exit clause, as well as the index value to select a fill color from a list of colors


Fractal Circles
----------------

`Check out the demo here <https://p5js.org/examples/structure-recursion.html>`_.


Fractal Tree
-------------

If students are interested in another demo, build something like this `Coding Train fractal tree demo <https://www.youtube.com/watch?v=0jjeOYMjmDU>`_.


Practice Quiz
--------------


.. fillintheblank:: recursion_parsing_code_1

    What would the following code print?::

        function mystery(x, y){
          if (x < 1){
            return y;
          }
          else {
            return mystery(x - 1 , y + 1);
          }
        }

        console.log(mystery(5,10)); 

    - :15: Great!
      :.*: Try again!


.. fillintheblank:: recursion_parsing_code_2

    What would the following code print?::

        function mystery(n){
          if (n === 0) {
            return 1;
          }
          else {
            return 2 * mystery(n-1);
          }
        }

        console.log(mystery(6)); 

    - :64: Great!
      :.*: Try again!


.. fillintheblank:: recursion_parsing_code_3

    What would the following code print?::

        function printInfo(n){
          if (n < 0){
            return n;
          }
          else if (n > LIMIT) {
            return n;
          }
          else {
            console.log(n);
            printInfo(n + 100);
          }
        }

        let LIMIT = 500;
        printInfo(1); 

    Note: Although each print statement would happen on it's own line, just separate the lines with a space in your answer. For example, if the lines printed were 42, 58 and 106, you would enter ``42 58 106``.

    - :1 101 201 301 401: Great!
      :.*: Try again!


.. fillintheblank:: recursion_parsing_code_4

    What would the following code print?::

        function mystery(n){
          if (n > 100) {
            return n;
          }
          else if (n < 50) {
            mystery(n * 2);
          }
          else {
            mystery(n * 3);
          }
        }

        console.log(mystery(2)); 

    - :240: Great!
      :.*: Try again!

.. reveal:: recursion_parsing_code_4_hint
    :showtitle: Hint if You Are Stuck

    5 x 2 = 10
    10 x 2 = 20
    20 x 2 = 40
    40 x 2 = 80
    80 x 3 = 240

.. fillintheblank:: recursion_parsing_code_5

    What would the following code print?::

        function stringRecursion(str, c) {
          if (c === 0) {
            return str;
          }
          else if (str.slice(0,1) === "c") {
            stringRecursion(str.slice(1) + "c", c - 1);
          }
          else if (str.slice(0,1) === "o") {
            stringRecursion(str.slice(1) + "o", c - 2);
          }
          else {
            stringRecursion(str.slice(1) + "n", c - 1);
          }
        }

        console.log(stringRecursion("cocoon", 9)); 

    - :cocoon: Great!
      :.*: Try again!

.. reveal:: recursion_parsing_code_5_hint
    :showtitle: Hint if You Are Stuck

    ========  ===
    str       c
    ========  ===
    "cocoon"  9
    "ocoonc"  8
    "coonco"  6
    "ooncoc"  5
    "oncoco"  3
    "ncocoo"  1
    "cocoon"  0
    ========  ===


Extensions
-----------

Maze generator demo (already have a version built in my demos folder...). Warning -- This is a much more involved/challenging demo.