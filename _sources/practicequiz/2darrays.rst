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

    Rearrange the given code to create a 2 dimensional array. You can assume that the rows and cols variables have already been set as global variables.</p>
    -----
    let someArray = [];
    for (let y = 0; y < rows; i++) {
        someArray.push([])
        for (let x = 0; x < cols; x++) {
            someArray[y].push(0);
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
                counter++;
            }
        }
        console.log(counter);

    - :16: Great!
      :.*: Try again! Think about what that nested for loop is doing...


Question 3
~~~~~~~~~~~

.. fillintheblank:: 2d-arrays-practice-quiz-3

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
        console.log(counter);

    - :7: Great!
      :.*: Try again! Think about what that nested for loop is doing...


Question 4
~~~~~~~~~~~

.. fillintheblank:: 2d-arrays-practice-quiz-4

    What will the following program print?::

        let counter = 0;
        let someArray = [[0,1,1,0],
                         [1,0,1,0],
                         [1,0,0,0],
                         [0,1,0,1]];
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                counter += someArray[i][j];
            }
        }
        console.log(counter);

    - :5: Great!
      :.*: Try again! Look at the conditionals in the for loops...


Question 5
~~~~~~~~~~~

.. fillintheblank:: 2d-arrays-practice-quiz-5

    What will the following program print?::

        let counter = 0;
        let someArray = [[0,1,1,0],
                         [1,0,1,0],
                         [1,0,0,0],
                         [0,1,0,1]];
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                counter += someArray[i+1][j+1];
            }
        }
        console.log(counter);

    - :3: Great!
      :.*: Try again! Look at the conditionals in the for loops, and then what is being added to the counter variable.


