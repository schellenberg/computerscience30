JavaScript Arrays
========================

Very similar to lists in Python. 

To create an array:

.. code-block:: javascript

	let stuff = [42, 56, "hello", 13, true];

To access a value in the array:

.. code-block:: javascript

	stuff[0] // 42
	stuff[2] // "hello"

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

If you need to make a copy of an array, be aware that assigning the array to a new variable only adds a pointer to the same memory location (this is known as passing by reference). To make this clear, consider the following:

.. code-block:: javascript

	let stuff = [52, 78, "hey"];
	let other = stuff;
	other[1] = 35;
	// now, both other and stuff equal [52, 35, "hey"]

If you want to create a copy of an array that is **not** pointing to the same memory location, you can do the following:

.. code-block:: javascript

    let stuff = [52, 78, "hey"];
	let other = stuff.slice();
	other[1] = 35;
	// now, other equals [52, 35, "hey"]
	// and stuff equals [52, 78, "hey"]

Since JavaScript arrays allow you to add/remove values from them easily, it is unusual for you to create an array of a specific size. However, if you want to create an array with a specific number of elements in it, you can call the *constructor* of the array data type. This creates an empty array, though. You can fill it up with some default values using the ``.fill()`` method.

.. code-block:: javascript

    let emptyArray = new Array(100);	// each value is currently empty
    emptyArray.fill(0);					// now every element is a 0

Another way of doing the same thing (which is often preferred), is to simply create the array, then push a bunch of default values into it. This means your array will never be filled with empty elements.

.. code-block:: javascript

    let emptyArray = [];
    for (let i=0; i<100; i++) {
    	emptyArray.push(0);
    }


Array Practice Questions
-------------------------

No Looping Required
~~~~~~~~~~~~~~~~~~~~

- `firstLast6 <https://codingjs.wmcicompsci.ca/exercise?name=firstLast6&title=Array-1>`_
- `sameFirstLast <https://codingjs.wmcicompsci.ca/exercise?name=sameFirstLast&title=Array-1>`_
- `makePi <https://codingjs.wmcicompsci.ca/exercise?name=makePi&title=Array-1>`_
- `commonEnd <https://codingjs.wmcicompsci.ca/exercise?name=commonEnd&title=Array-1>`_
- `sum3 <https://codingjs.wmcicompsci.ca/exercise?name=sum3&title=Array-1>`_
- `rotateLeft3 <https://codingjs.wmcicompsci.ca/exercise?name=rotateLeft3&title=Array-1>`_
- `reverse3 <https://codingjs.wmcicompsci.ca/exercise?name=reverse3&title=Array-1>`_
- `sum2 <https://codingjs.wmcicompsci.ca/exercise?name=sum2&title=Array-1>`_
- `has23 <https://codingjs.wmcicompsci.ca/exercise?name=has23&title=Array-1>`_
- `double23 <https://codingjs.wmcicompsci.ca/exercise?name=double23&title=Array-1>`_
- `makeMiddle <https://codingjs.wmcicompsci.ca/exercise?name=makeMiddle&title=Array-1>`_
- `midThree <https://codingjs.wmcicompsci.ca/exercise?name=midThree&title=Array-1>`_


Looping Required
~~~~~~~~~~~~~~~~~

- `countEvens <https://codingjs.wmcicompsci.ca/exercise?name=countEvens&title=Array-2>`_
- `has22 <https://codingjs.wmcicompsci.ca/exercise?name=has22&title=Array-2>`_
- `only14 <https://codingjs.wmcicompsci.ca/exercise?name=only14&title=Array-2>`_
- `lucky13 <https://codingjs.wmcicompsci.ca/exercise?name=lucky13&title=Array-2>`_
- `makeLast <https://codingjs.wmcicompsci.ca/exercise?name=makeLast&title=Array-1>`_
- `maxEnd3 <https://codingjs.wmcicompsci.ca/exercise?name=maxEnd3&title=Array-1>`_
- `fizzArray <https://codingjs.wmcicompsci.ca/exercise?name=fizzArray&title=Array-2>`_
- `has77 <https://codingjs.wmcicompsci.ca/exercise?name=has77&title=Array-2>`_
- `tripleUp <https://codingjs.wmcicompsci.ca/exercise?name=tripleUp&title=Array-2>`_
- `tenRun <https://codingjs.wmcicompsci.ca/exercise?name=tenRun&title=Array-2>`_
- `withoutTen <https://codingjs.wmcicompsci.ca/exercise?name=withoutTen&title=Array-2>`_
  
When you finish the questions listed above, just pick any of the questions from Array-1, Array-2 or Array-3. If you want a few more, check out the AP-1 secion (problems sourced from previous AP Computer Science exams).


p5js Array Examples
--------------------

Terrain Generation
~~~~~~~~~~~~~~~~~~~

Use Perlin noise. Push values into an array. Draw it.

Bouncing Balls
~~~~~~~~~~~~~~~

Make a bunch of balls move around. Start with an empty array. Push balls into it every time the mouse is clicked. Random sizes, random speeds, random colors. Use object notation for each ball, so it looks something like:

``let newBall = {
	x: random(width),
	y: random(height),
	diameter: random(25, 100),
	dx: random(-5, 5),
	dy: random(-5, 5),
};``


.. would have done, but it's really slow to do this with p5js
.. Pixel Array Demo
.. ~~~~~~~~~~~~~~~~~~

.. In general, the formula for getting at any pixel location inside the pixels[] array is:

.. 	``(y * width) + x``

.. Need to use ``loadPixels()`` and ``updatePixels()``. Can use ``red()``, ``blue()``, and ``green()`` to get values from a color variable.


.. Apply some filters:

.. - inverse filter (255 - red, etc).
.. - grayscale (average RGB values, divide by 3)
.. - sepia  https://stackoverflow.com/questions/1061093/how-is-a-sepia-tone-created
.. - threshold filter (if brightness > some number, make it white; else make it black)


