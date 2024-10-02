JavaScript Arrays
========================

Basic Array Operations
-----------------------

Very similar to lists in Python. 

To create an array:

.. code-block:: javascript

    let stuff = [42, 56, "hello", 13, true];

To access a value in the array:

.. code-block:: javascript

    let stuff = [42, 56, "hello", 13, true];

    console.log(stuff[0]) // 42
    console.log(stuff[2]) // "hello"


To add a value at the end of the array:

.. code-block:: javascript

    stuff.push("another")
    // stuff now equals [42, 56, "hello", 13, true, "another"]

To remove a value from end of array:

.. code-block:: javascript

    let last = stuff.pop()
    // last now equals "another"
    // stuff now equals [42, 56, "hello", 13, true]

To add/remove from the front of the array, use ``unshift("something")`` and ``shift()`` respectively.

Iterating Through an Array
---------------------------

You can use a traditional for loop like this:

.. code-block:: javascript

    let stuff = [42, "hello", 15, "bye"];
    for (let i = 0; i < stuff.length; i++) {
        console.log(`This element is ${stuff[i]}`);
    }

There is also a ``for-of`` loop to make this simpler:

.. code-block:: javascript

    let stuff = [42, "hello", 15, "bye"];
    for (let thing of stuff) {
        console.log(`This element is ${thing}`);
    }



Removing Values From Anywhere in an Array
------------------------------------------

To remove a value from any spot within the array, you need to know it's index value. You can use:

.. code-block:: javascript

    let stuff = [42, 56, "hello", 13, true];
    stuff.splice(2, 1); //remove the element at index 2, just remove 1 element
    // stuff now equals [42, 56, 13, true]

If you are looping through an array of objects, and you don't know in advance which elements you are going to eliminate (perhaps they are removed after leaving the screen), you can do that using a classic backwards for loop (to avoid index value issues when removing an element from the array -- whiteboard drawing!):

.. code-block:: javascript

    //assume the stuff array is already created, and holds objects that have an isDead property
    for (let i = stuff.length - 1; i >= 0; i--) {
        if (stuff[i].isDead) {
            stuff.splice(i, 1);
        }
    }

You can also do this using a ``for-of`` loop, and using the ``.indexOf`` method.

.. code-block:: javascript

    //assume the stuff array is already created, and holds objects that have an isDead property
    for (let thing of stuff) {
        if (thing.isDead) {
            let theIndex = stuff.indexOf(thing);
            stuff.splice(theIndex, 1);
        }
    }


Making a Copy of an Array
--------------------------

If you need to make a copy of an array, be aware that assigning the array to a new variable only adds a pointer to the same memory location (this is known as passing by reference). To make this clear, consider the following:

.. code-block:: javascript

    let stuff = [52, 78, "hey"];
    let other = stuff;
    other[1] = 35;
    // now, both other and stuff equal [52, 35, "hey"]

If you want to create a copy of an array that is **not** pointing to the same memory location, you can create a `structured clone of the object <https://stackoverflow.com/questions/728360/how-do-i-correctly-clone-a-javascript-object>`_:

.. code-block:: javascript

    let stuff = [52, 78, "hey"];
    let other = structuredClone(stuff);
    other[1] = 35;
    // now, other equals [52, 35, "hey"]
    // and stuff equals [52, 78, "hey"]


Creating an Array of a Specific Size
------------------------------------

Since JavaScript arrays allow you to add/remove values from them easily, it is unusual for you to create an array of a specific size. You can, however, simply create the array, then push a bunch of default values into it. This means your array will never be filled with empty elements (which can save you from ``undefined`` errors in your code).

.. code-block:: javascript

    let emptyArray = [];
    for (let i=0; i<100; i++) {
        emptyArray.push(0);
    }

.. note:: 

    Another way of doing this is to call the *constructor* of the array data type. This creates an empty array (with no values in any of the element locations). You can fill it up with some default values using the ``.fill()`` method.

    .. code-block:: javascript

        let emptyArray = new Array(100);    // each value is currently empty
        emptyArray.fill(0);                 // now every element is a 0



Array Practice Questions
-------------------------

No Looping Required
~~~~~~~~~~~~~~~~~~~~

- `firstLast6 <https://codingjs.wmcicompsci.ca/exercise.html?name=firstLast6&title=Array-1>`_
- `sameFirstLast <https://codingjs.wmcicompsci.ca/exercise.html?name=sameFirstLast&title=Array-1>`_
- `makePi <https://codingjs.wmcicompsci.ca/exercise.html?name=makePi&title=Array-1>`_
- `commonEnd <https://codingjs.wmcicompsci.ca/exercise.html?name=commonEnd&title=Array-1>`_
- `sum3 <https://codingjs.wmcicompsci.ca/exercise.html?name=sum3&title=Array-1>`_
- `rotateLeft3 <https://codingjs.wmcicompsci.ca/exercise.html?name=rotateLeft3&title=Array-1>`_
- `reverse3 <https://codingjs.wmcicompsci.ca/exercise.html?name=reverse3&title=Array-1>`_
- `sum2 <https://codingjs.wmcicompsci.ca/exercise.html?name=sum2&title=Array-1>`_
- `has23 <https://codingjs.wmcicompsci.ca/exercise.html?name=has23&title=Array-1>`_
- `double23 <https://codingjs.wmcicompsci.ca/exercise.html?name=double23&title=Array-1>`_
- `makeMiddle <https://codingjs.wmcicompsci.ca/exercise.html?name=makeMiddle&title=Array-1>`_
- `midThree <https://codingjs.wmcicompsci.ca/exercise.html?name=midThree&title=Array-1>`_


Looping Required
~~~~~~~~~~~~~~~~~

- `countEvens <https://codingjs.wmcicompsci.ca/exercise.html?name=countEvens&title=Array-2>`_
- `has22 <https://codingjs.wmcicompsci.ca/exercise.html?name=has22&title=Array-2>`_
- `only14 <https://codingjs.wmcicompsci.ca/exercise.html?name=only14&title=Array-2>`_
- `lucky13 <https://codingjs.wmcicompsci.ca/exercise.html?name=lucky13&title=Array-2>`_
- `makeLast <https://codingjs.wmcicompsci.ca/exercise.html?name=makeLast&title=Array-1>`_
- `maxEnd3 <https://codingjs.wmcicompsci.ca/exercise.html?name=maxEnd3&title=Array-1>`_
- `fizzArray <https://codingjs.wmcicompsci.ca/exercise.html?name=fizzArray&title=Array-2>`_
- `has77 <https://codingjs.wmcicompsci.ca/exercise.html?name=has77&title=Array-2>`_
- `tripleUp <https://codingjs.wmcicompsci.ca/exercise.html?name=tripleUp&title=Array-2>`_
- `tenRun <https://codingjs.wmcicompsci.ca/exercise.html?name=tenRun&title=Array-2>`_
- `withoutTen <https://codingjs.wmcicompsci.ca/exercise.html?name=withoutTen&title=Array-2>`_
  
When you finish the questions listed above, just pick any of the questions from Array-1, Array-2 or Array-3. If you want a few more, check out the AP-1 section (problems sourced from previous AP Computer Science exams).


p5js Array Examples
--------------------

Terrain Generation
~~~~~~~~~~~~~~~~~~~

Use Perlin noise. Push values into an array. Draw it.


Basic demo of how to use Perlin noise is here:

.. youtube:: yth7PAxep9s
    :height: 315
    :width: 560
    :align: left
    :http: https

Bouncing Balls
~~~~~~~~~~~~~~~

Make a bunch of balls move around. Start with an empty array. Push balls into it every time the mouse is clicked. Random sizes, random speeds, random colors. Use object notation for each ball, so it looks something like:

.. code-block:: javascript

    let newBall = {
        x: random(width),
        y: random(height),
        diameter: random(25, 100),
        dx: random(-5, 5),
        dy: random(-5, 5),
    };


.. would have done, but it's really slow to do this with p5js
.. Pixel Array Demo
.. ~~~~~~~~~~~~~~~~~~

.. In general, the formula for getting at any pixel location inside the pixels[] array is:

..  ``(y * width) + x``

.. Need to use ``loadPixels()`` and ``updatePixels()``. Can use ``red()``, ``blue()``, and ``green()`` to get values from a color variable.


.. Apply some filters:

.. - inverse filter (255 - red, etc).
.. - grayscale (average RGB values, divide by 3)
.. - sepia  https://stackoverflow.com/questions/1061093/how-is-a-sepia-tone-created
.. - threshold filter (if brightness > some number, make it white; else make it black)


Arrays Practice Quiz
-------------------------

To confirm that you understand arrays, you should try the :ref:`arrays_practice_quiz`.
