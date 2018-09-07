CS Basics Practice Quiz
=============================

Topics To Know
------------------------

- data types
- conditionals (if/else if/else)
- loops (while and/or for)
- functions
- boolean logic/logical operators - CodingBat practice is probably the best choice for getting this nailed down...


Question 1
-----------

.. mchoice:: booleans_practice_quiz_1
    :answer_a: True
    :answer_b: False
    :correct: a
    :feedback_a: Great!
    :feedback_b: Try again!

    What would the following print?::

        a = 6
        b = 10
        print(a == 6)


Question 8
-----------

.. fillintheblank:: functions_practice_quiz_7

    What will the following program print?::

        def a(x, y):
            x = x + 3
            y = y + 2
            return x+y

        x = 5
        y = 10
        z = a(x, y)

        print(x)

    - :5: Great!
      :8: Be careful! There are two variables called x (one global, and one local).
      :.*: Try again! Notice that we are returning the sum of x and y.
