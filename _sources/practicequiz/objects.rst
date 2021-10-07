.. qnum::
   :prefix: objects-quiz
   :start: 1

.. _objects_practice_quiz:

Objects Practice Quiz
-------------------------

Question 1
~~~~~~~~~~~

.. fillintheblank:: objects-practice-quiz-1

    What will the following program print?::

        let counter = 0;
        let someArray = [[0,1,1,0],
                         [1,0,1,0],
                         [1,0,0,0],
                         [0,1,0,1]];
        for (let i = 0; i < someArray.length; i++) {
            for (let j = 0; j < someArray[i].length; j++) {
                counter++;
            }
        }
        console.log(counter);

    - :16: Great!
      :.*: Try again! Think about what that nested for loop is doing...


