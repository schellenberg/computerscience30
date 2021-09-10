.. qnum::
   :prefix: recursion-quiz
   :start: 1

.. _recursion_practice_quiz:


Recursion Practice Quiz
---------------------------

Question 1
~~~~~~~~~~~

.. fillintheblank:: recursion_practice_1

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


Question 2
~~~~~~~~~~~

.. fillintheblank:: recursion_practice_2

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


Question 3
~~~~~~~~~~~

.. fillintheblank:: recursion_practice_3

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


Question 4
~~~~~~~~~~~

.. fillintheblank:: recursion_practice_4

    What would the following code print?::

        function mystery(n){
          if (n > 100) {
            return n;
          }
          else if (n < 50) {
            return mystery(n * 2);
          }
          else {
            return mystery(n * 3);
          }
        }

        console.log(mystery(5)); 

    - :240: Great!
      :.*: Try again!

.. reveal:: recursion_practice_4_hint
    :showtitle: Hint if You Are Stuck

    5 x 2 = 10
    10 x 2 = 20
    20 x 2 = 40
    40 x 2 = 80
    80 x 3 = 240


Question 5
~~~~~~~~~~~

.. fillintheblank:: recursion_practice_5

    What would the following code print?::

        function stringRecursion(str, c) {
          if (c === 0) {
            return str;
          }
          else if (str.slice(0,1) === "c") {
            return stringRecursion(str.slice(1) + "c", c - 1);
          }
          else if (str.slice(0,1) === "o") {
            return stringRecursion(str.slice(1) + "o", c - 2);
          }
          else {
            return stringRecursion(str.slice(1) + "n", c - 1);
          }
        }

        console.log(stringRecursion("cocoon", 9)); 

    - :cocoon: Great!
      :.*: Try again!

.. reveal:: recursion_practice_5_hint
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
