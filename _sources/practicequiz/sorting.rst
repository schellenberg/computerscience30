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

    Rearrange the following to show the result of one pass of the bubble sort algorithm.
    -----
    [7, 11, 3, 14, 8, 6, 9, 2]
    [7, 11, 3, 14, 8, 6, 9, 2]


Question 2
~~~~~~~~~~~

.. fillintheblank:: sorting-practice-quiz-2

    What will the following program print?::

        let people = ["Ali", "Samin", "Blake", "Athiela", "Monica"];
        let otherPeople = people;
        otherPeople[0] = "Vrajesh";
        otherPeople[2] = "Hannah";
        console.log(people[2])

    - :Hannah: Great!
      :.*: Try again! Remember that otherPeople is created by reference.



Question 4
~~~~~~~~~~~

.. mchoice:: sorting-practice-quiz-4
  :random:

  What will the following program print?::

        let nums = [4,5,6];
        let newNums = [];
        for (let i=0; i<nums.length; i++) {
            let thisNumber = nums[i] * 2;
            newNums.push(thisNumber);
        }
        console.log(newNums);
  
  - [8, 10, 12]

    + Yes! Nicely done!

  - [12, 10, 8]

    - Try again!

  - [4, 5, 6]

    - Try again!

  - [6, 5, 4]

    - Try again!

  - [4, 4, 5, 5, 6, 6]

    - Try again!

  - [6, 6, 5, 5, 4, 4]

    - Try again!
