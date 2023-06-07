.. qnum::
   :prefix: sorting-quiz
   :start: 1

.. _sorting_practice_quiz:

Sorting Practice Quiz
-------------------------


Question 1
~~~~~~~~~~~

.. parsonsprob:: sorting-practice-quiz-1
    :language: javascript

    Rearrange the following to show the appropriate steps that occur during one pass of the bubble sort algorithm. The initial order of the list is [11, 7, 3, 14, 8, 6, 9, 2].
    -----
    [11, 7, 3, 14, 8, 6, 9, 2]
    [7, 11, 3, 14, 8, 6, 9, 2]
    [7, 3, 11, 14, 8, 6, 9, 2]
    [7, 3, 11, 14, 8, 6, 9, 2]
    [7, 3, 11, 8, 14, 6, 9, 2]
    [7, 3, 11, 8, 6, 14, 9, 2]
    [7, 3, 11, 8, 6, 9, 14, 2]
    [7, 3, 11, 8, 6, 9, 2, 14]


Question 2
~~~~~~~~~~~

.. mchoice:: sorting-practice-quiz-2
    :correct: b
    :answer_a: [1, 9, 19, 7, 3, 10, 13, 15, 8, 12]
    :answer_b: [1, 3, 7, 9, 10, 8, 12, 13, 15, 19]
    :answer_c: [1, 7, 3, 9, 10, 13, 8, 12, 15, 19]
    :answer_d: [1, 9, 19, 7, 3, 10, 13, 15, 8, 12]
    :feedback_a:  This answer represents three swaps.  A pass means that you continue swapping all the way to the end of the list.
    :feedback_b:  Very Good
    :feedback_c: A bubble sort contines to swap numbers up to index position passnum.  But remember that passnum starts at the length of the list - 1.
    :feedback_d: You have been doing an insertion sort, not a bubble sort.

    Suppose you have the following list of numbers to sort:
    [19, 1, 9, 7, 3, 10, 13, 15, 8, 12] 
    Which list represents the partially sorted list after three complete **passes** of bubble sort?



Question 3
~~~~~~~~~~~

.. mchoice:: sorting-practice-quiz-3
    :correct: d
    :answer_a: [7, 11, 12, 1, 6, 14, 8, 18, 19, 20]
    :answer_b: [7, 11, 12, 14, 19, 1, 6, 18, 8, 20]
    :answer_c: [11, 7, 12, 14, 1, 6, 8, 18, 19, 20]
    :answer_d: [11, 7, 12, 14, 8, 1, 6, 18, 19, 20]
    :feedback_a: Selection sort is similar to bubble sort (which you appear to have done) but uses fewer swaps
    :feedback_b: This looks like an insertion sort.
    :feedback_c: This one looks similar to the correct answer but instead of swapping the numbers have been shifted to the left to make room for the correct numbers.
    :feedback_d: Selection sort improves upon bubble sort by making fewer swaps.

    Suppose you have the following list of numbers to sort:
    [11, 7, 12, 14, 19, 1, 6, 18, 8, 20] 
    Which list represents the partially sorted list after three complete **passes** of selection sort?



Question 4
~~~~~~~~~~~

.. parsonsprob:: sorting-practice-quiz-4
    :language: javascript

    Rearrange the following to show the results of each pass of the selection sort algorithm. The initial order of the list is [11, 7, 3, 14, 8, 6, 9, 2].
    -----
    [11, 7, 3, 14, 8, 6, 9, 2]
    [11, 7, 3, 2, 8, 6, 9, 14]
    [9, 7, 3, 2, 8, 6, 11, 14]
    [6, 7, 3, 2, 8, 9, 11, 14]
    [6, 7, 3, 2, 8, 9, 11, 14]
    [6, 2, 3, 7, 8, 9, 11, 14]
    [3, 2, 6, 7, 8, 9, 11, 14]
    [2, 3, 6, 7, 8, 9, 11, 14]

  
Randomized Practice Questions
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

You can practice sorting by hand using bubble and selection sort here:
 `Randomized Sorting Practice Quiz </_static/sorting>`_ 