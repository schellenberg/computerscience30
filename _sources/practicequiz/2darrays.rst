.. qnum::
   :prefix: 2darray-quiz
   :start: 1

.. _2darrays_practice_quiz:

2-D Arrays Practice Quiz
-------------------------


Question 1
~~~~~~~~~~~

.. parsonsprob:: 2d-arrays-practice-quiz-1
    :language: javascript

    Rearrange the given code to create a 2 dimensional array.</p>
    -----
    let rows = 20;
    let cols = 20;
    let someArray = [];
    for (let i = 0; i < cols; i++) {
        someArray.push([])
        for (let j = 0; j < rows; j++) {
            someArray[i].push(0);
        }
    }


Question 2
~~~~~~~~~~~

.. fillintheblank:: 2d-arrays-practice-quiz-2

    What will the following program print?::

        let counter = 0;
        let someArray = [[0,1,1,0],
                         [1,0,1,0],
                         [1,0,0,0],
                         [0,1,0,1]];
        for (let i = 0; i < someArray.length; i++) {
            for (let j = 0; j < someArray[i].length; j++) {
                counter += someArray[i][j];
            }
        }

    - :7: Great!
      :.*: Try again! Think about what that nested for loop is doing...
