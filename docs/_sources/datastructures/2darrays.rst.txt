JavaScript Two Dimensional Arrays
==================================

Think of 2d arrays as rows and columns of a spreadsheet.


To create an two dimensional array:

.. code-block:: javascript

    let stuff = [[5, 10], ["thing", true, 42], [6, 3, 8, "happy"]];

To access a value in the array:

.. code-block:: javascript

    stuff[0] 	// [5, 10]
    stuff[0][1] // 10
    stuff[2] 	// [6, 3, 8, "happy"]
    stuff[2][3]	// "happy"


To add a value at the end of the array:

.. code-block:: javascript

    stuff.push([5, 2, "other"])
    // stuff now equals [[5, 10], ["thing", true, 42], [6, 3, 8, "happy"], [5, 2, "other"]]

To add a value inside one level of the array:

.. code-block:: javascript

    stuff[0].push("great")
    // stuff now equals [[5, 10, "great"], ["thing", true, 42], [6, 3, 8, "happy"], [5, 2, "other"]]


To remove a value from end of array:

.. code-block:: javascript

    let last = stuff.pop()
    // last now equals [5, 2, "other"]
    // stuff now equals [[5, 10, "great"], ["thing", true, 42], [6, 3, 8, "happy"]]

To add/remove from the front of the array, use ``unshift("something")`` and ``shift()`` respectively.


To create a 10x10 2d array, all filled with 0s.

.. code-block:: javascript

    let emptyArray = [];
    for (let i=0; i<10; i++) {
        emptyArray.push([])
        for (let j=0; j<10; j++) {
            emptyArray[i].push(0);
        }
    }

A handy function that will create a two dimensional array, all filled with 0s. 

.. code-block:: javascript

    function create2dArray(cols, rows) {
        let emptyArray = [];
        for (let i = 0; i < cols; i++) {
            emptyArray.push([])
            for (let j = 0; j < rows; j++) {
                emptyArray[i].push(0);
            }
        }
        return emptyArray;
    }

    let myArray = create2dArray(20, 20);


p5js Array Examples
--------------------

Draw Grid
~~~~~~~~~~~

Generate a 2d array. Make every entry either a 0 or a 1. Loop through the cols and rows to draw a grid based on the size of the array. If the current location in the array is a 0, fill with black. If it is a 0, fill with white. Generate a new grid each time the mouse is pressed.


Grid Neighbors
~~~~~~~~~~~~~~~

Create a grid. Store color data for the grid in a 2 dimensional array. When you click on a square, swap the colors of the current cell, and any cell orthogonally adjacent to it (NESW neighbors). It should be something like `this former student project <https://wmcicompsci.ca/makeitblue/>`_ , but just a static number of rows and columns.

To talk about/include:

- ``const`` variables (for number of rows/columns)
- using functions to improve the readability of your code


Conway's Game of Life
~~~~~~~~~~~~~~~~~~~~~~~

Introduce the Game of Life (`presentation <https://docs.google.com/presentation/d/1c3T1NS3HTJZfyx6o3RTOKx1vM-SApqSmMxigyOnU9l0/edit?usp=sharing>`_ and :download:`handout <../handouts/game-of-life-handout.pdf>`. Find some stable shapes. Be sure you completely understand how the game works **before** we attempt to code anything.

After everyone can determine the "next state" of the game, given a scenario, it's time to code it up.

Platformer Example
~~~~~~~~~~~~~~~~~~~

Load starting grid from a text file. Put images in the appropriate spots, based on which character was in the text file grid.


Sudoku Example
~~~~~~~~~~~~~~~

Hard code a 2d array sudoku initial grid, putting in 0's wherever you want a blank. Also make a 2d array containing the completed grid. Adapt the game of life code (or just start over) to display the sudoku grid.


2D Array CodingJS Practice Questions
-------------------------------------

- `count5in2x2 <https://codingjs.wmcicompsci.ca/exercise.html?name=count5in2x2&title=2dArray>`_
- `findLargest3x3 <https://codingjs.wmcicompsci.ca/exercise.html?name=findLargest3x3&title=2dArray>`_
- `count2d <https://codingjs.wmcicompsci.ca/exercise.html?name=count2d&title=2dArray>`_
- `count2d5s <https://codingjs.wmcicompsci.ca/exercise.html?name=count2d5s&title=2dArray>`_
- `findLargest2d <https://codingjs.wmcicompsci.ca/exercise.html?name=findLargest2d&title=2dArray>`_
- `notFive <https://codingjs.wmcicompsci.ca/exercise.html?name=notFive&title=2dArray>`_
- `lastSum <https://codingjs.wmcicompsci.ca/exercise.html?name=lastSum&title=2dArray>`_
- `neighborNESW <https://codingjs.wmcicompsci.ca/exercise.html?name=neighborNESW&title=2dArray>`_
- `neighborNESW2 <https://codingjs.wmcicompsci.ca/exercise.html?name=neighborNESW2&title=2dArray>`_

2-D Arrays Practice Quiz
-------------------------

To confirm that you understand 2d arrays, you should try the :ref:`2darrays_practice_quiz`.
