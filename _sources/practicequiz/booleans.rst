.. qnum::
   :prefix: boolean-quiz
   :start: 1

.. _booleans_practice_quiz:


Booleans Practice Quiz
-------------------------


Question 1
~~~~~~~~~~~

.. fillintheblank:: booleans-practice-quiz-1

    What will the be the output of the following code?::

        let beta = true;
        let gamma = false;
        let delta = true;
        let epsilon = false;

        if (beta && epsilon) {
            console.log("boat");
        } else if (gamma || delta) {
            console.log("car");
        } else {
            console.log("train");
        }

    - :car: Great!
      :.*: Try again!


Question 2
~~~~~~~~~~~

.. fillintheblank:: booleans-practice-quiz-2

    What will the be the output of the following code?::

        let beta = true;
        let gamma = false;
        let delta = true;
        let epsilon = false;

        if (beta && !epsilon) {
            console.log("boat");
        } else if (!gamma || delta) {
            console.log("car");
        } else {
            console.log("train");
        }

    - :boat: Great!
      :.*: Try again!


Question 3
~~~~~~~~~~~

.. fillintheblank:: booleans-practice-quiz-3

    What will the be the output of the following code?::

        let beta = true;
        let gamma = false;
        let delta = true;
        let epsilon = false;

        if (!beta && delta || gamma) {
            console.log("boat");
        } else if (!gamma || delta && epsilon) {
            console.log("car");
        } else {
            console.log("train");
        }

    - :car: Great!
      :.*: Try again!


Question 4
~~~~~~~~~~~

.. fillintheblank:: booleans-practice-quiz-4

    What will the be the output of the following code?::

        let beta = true;
        let gamma = false;
        let delta = true;
        let epsilon = false;

        if (gamma && !epsilon || beta && !delta) {
            console.log("boat");
        } else if (!gamma && epsilon || delta && gamma) {
            console.log("car");
        } else {
            console.log("train");
        }

    - :train: Great!
      :.*: Try again!


Question 5
~~~~~~~~~~~

.. fillintheblank:: booleans-practice-quiz-5

    What will the be the output of the following code?::

        let beta = true;
        let gamma = false;
        let delta = true;
        let epsilon = false;

        if (!gamma || (epsilon && !epsilon || beta && !delta && gamma || !delta)) {
            console.log("boat");
        } else if (gamma || !epsilon) {
            console.log("car");
        } else {
            console.log("train");
        }

    - :boat: Great!
      :.*: Try again!