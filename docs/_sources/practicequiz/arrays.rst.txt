.. qnum::
   :prefix: array-quiz
   :start: 1

.. _arrays_practice_quiz:

Arrays Practice Quiz
-------------------------


Question 1
~~~~~~~~~~~

.. parsonsprob:: arrays-practice-quiz-1
    :language: javascript

    Rearrange the given code to create an array with elements [10, 3, 42]. Note that you will need to use EVERY line of code.
    -----
    let nums = [];
    nums.push(10);
    nums.push(7);
    nums.pop();
    nums.push(3);
    nums.push(42);


Question 2
~~~~~~~~~~~

.. fillintheblank:: arrays-practice-quiz-2

    What will the following program print?::

        let people = ["Ali", "Samin", "Blake", "Athiela", "Monica"];
        let otherPeople = people;
        otherPeople[0] = "Vrajesh";
        otherPeople[2] = "Hannah";
        console.log(people[2])

    - :Hannah: Great!
      :.*: Try again! Remember that otherPeople is created by reference.


Question 3
~~~~~~~~~~~

.. fillintheblank:: arrays-practice-quiz-3

    What will the following program print?::

        let people = ["Ali", "Samin", "Blake", "Athiela", "Monica"];
        let otherPeople = [...people];
        otherPeople[0] = "Vrajesh";
        otherPeople[2] = "Hannah";
        console.log(people[2])

    - :Blake: Great!
      :.*: Try again! Remember that otherPeople is created by value (that's what the [...] does).


Question 4
~~~~~~~~~~~

.. mchoice:: arrays-practice-quiz-4
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


Question 5
~~~~~~~~~~~

.. mchoice:: arrays-practice-quiz-5
  :random:

  What will the following program print?::

        let nums = [4,5,6];
        let newNums = [];
        for (let i=0; i<nums.length*2; i++) {
            newNums.push(0);
        }
        newNums[newNums.length-1] = nums[nums.length-1];
        console.log(newNums);
  
  - [0, 0, 0, 0, 0, 6]

    + Yes! Nicely done!

  - [0, 0, 6]

    - Try again!

  - [0, 0, 0]

    - Try again!

  - [0, 0, 0, 0, 0, 4]

    - Try again!

  - [0, 0, 0, 0, 0, 0]

    - Try again!


Question 6
~~~~~~~~~~~

Solve the `maxEnd3 CodingJS array problem <https://codingjs.wmcicompsci.ca/exercise.html?name=maxEnd3&title=Array-1>`_. 


Question 7
~~~~~~~~~~~

Solve the `has12 CodingJS array problem <https://codingjs.wmcicompsci.ca/exercise.html?name=has12&title=Array-2>`_.

