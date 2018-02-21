Template Stuff that might be useful sometime...

The General Accumulator Pattern
--------------------------------

.. code-block:: python

    initialize the accumulator variable
    repeat:
        modify the accumulator variable

    # when the loop terminates the accumulator has the correct value


Check Your Understanding
~~~~~~~~~~~~~~~~~~~~~~~~~~

.. mchoice:: test_question5_4_1
   :answer_a: The square function will return x instead of x * x
   :answer_b: The square function will cause an error
   :answer_c: The square function will work as expected and return x * x
   :answer_d: The square function will return 0 instead of x * x
   :correct: a
   :feedback_a: The variable running_total will be reset to 0 each time through the loop.   However because this assignment happens as the first instruction, the next instruction in the loop will set it back to x.   When the loop finishes, it will have the value x, which is what is returned.
   :feedback_b: Assignment statements are perfectly legal inside loops and will not cause an error.
   :feedback_c: By putting the statement that sets running_total to 0 inside the loop, that statement gets executed every time through the loop, instead of once before the loop begins.  The result is that running_total is 'cleared' (reset to 0) each time through the loop.
   :feedback_d: The line running_total = 0 is the first line in the for loop, but immediately after this line, the line running_total = running_total + x will execute, giving running_total a non-zero value  (assuming x is non-zero).

   Consider the following code:

   .. code-block:: python

        def square(x):
            running_total = 0
            for counter in range(x):
                running_total = running_total + x
            return running_total

   What happens if you put the initialization of running_total (the
   line running_total = 0) inside the for loop as the first
   instruction in the loop?


.. parsonsprob:: question5_4_1p

   Rearrange the code statements so that the program will add up the first n odd numbers where n is provided by the user.
   -----
   n = int(input('How many odd numbers would
   you like to add together?'))
   the_sum = 0
   odd_number = 1
   =====
   for counter in range(n):
   =====
      the_sum = the_sum + odd_number
      odd_number = odd_number + 2
   =====
   print(the_sum)


Dividing by 2::

    the_sum = (100 * 101) / 2

Writing this more generically to work for any number, the formula becomes:

.. math::

  S=\frac{n(n+1)}{2}

.. .. image:: images/sum_to_formula.png

Now that you understand Gauss' pattern for finding the sum of a series, rewrite the ``sum_to(n)`` function you created above, this time using the formula!

.. activecode:: sum_to_formula

    # use the formula given above



.. activecode:: my-sqrt

    def my_sqrt(n, number_of_guesses):
        # your code here

.. reveal:: reveal_my_sqrt_hint
    :showtitle: Need a hint?
    :hidetitle: Hide Hint

    Don't forget to update the value of old_guess within your loop!
