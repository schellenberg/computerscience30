JavaScript Data Types
=============================

.. topic:: Quick Overview of Day

    Discuss JavaScript data types. Stick to primitive-ish types (number, string, boolean).



Checking Data Types
-------------------

If you aren't sure what the data type of something is, you can check it using the ``typeof`` command. This works on both values (a piece of data) and variables (a container that holds a value).

.. activecode:: checkingDataTypes
    :language: javascript
    :nocodelens:

    console.log(typeof 5)
    
    // you will likely not use writeln, but it is helpful 
    // for me to simply output a value you can see
    writeln(typeof "21")


Where did the result of the ``console.log(typeof 5)`` go? Your web browser has a console built into it. Find it now, and you'll see the missing console.log call. You may want to use ``console.log()`` when debugging your projects.


Special Number Values
----------------------

- ``NaN``, which is the result doing something mathematically goofy, like dividing a string by a number. Try it in the console.
- ``Infinity``, which results when the value of a number is larger than 1.79769313486231570e+308. There's going to be some weird math going on if you use it, so be careful... `MDN docs <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Infinity>`_
- can use exponential/scientific notation if you'd like: ``5e3`` === ``5000``, and ``6e-4`` === ``0.0006``



Converting Between Data Types
-----------------------------

Sometimes you might need to convert from one data type to another. You can use the following functions to **type cast** data:

- ``String(x)`` to convert *x* to a string
- ``Number(x)`` to convert *x* to a number
- ``Boolean(x)`` to convert *x* to a boolean

.. activecode:: castingDataTypes
    :language: javascript
    :nocodelens:

    let a = 4;
    writeln( typeof a );

    let b = String(a);
    writeln( typeof b );
   
    let c = Number(b);
    writeln( typeof c );

    let d = Boolean(c);
    writeln(typeof d);



Important Stuff
---------------

- ``number``, ``string`` and ``boolean`` are *mostly* primitive data types in JavaScript (only mostly, though, since they do have methods; they are immutable, though)
- all other data can be considered objects. We'll get into what that means in a few weeks...


Number Data Type
-----------------

- aren't different types for ``int`` and ``float``, everything numeric is just a ``number``
- some special number values include:
	- ``NaN``, which is the result doing something mathematically goofy, like dividing a string by a number. Try it in the console.
	- ``Infinity``, which results when the value of a number is larger than 1.79769313486231570e+308. There's going to be some weird math going on if you use it, so be careful... `MDN docs <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Infinity>`_
	- can use exponential/scientific notation if you'd like: ``5e3`` === ``5000``, and ``6e-4`` === ``0.0006``
- you can use some handy functions available through the ``Math`` object. Some that you will probably want to use are:
  - ``let nearestInt = Math.round(1.55); // nearestInt is now 2``
  - ``let nextLowestInt = Math.floor(1.55); // nextLowestInt is now 1``
  - ``let nextHighestInt = Math.ceil(1.2); //nextHighestInt is now 2``
- if you want to divide, but only keep the integer portion of the result, you could do that using something like ``Math.floor(42 / 10);``

String Data Type
-----------------

- stick with double quotes (single works too, but convention is to use double)
- note that comparison is by value, not reference; so "S" + "a" + "s" + "k" === "Sask"
- strings have properties and methods. A useful property to know about is ``length`` -- ``"Sask".length`` === 4. There are built in methods, such as ``"Sask".toUppercase()``. You can find many more at `MDN docs for string methods <https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Useful_string_methods>`_


.. _objects_as_containers_ref:

Objects
--------

Everything else in JS is an **object**. Think of an object as a container of properties. This will make more sense with an example or two:

.. code-block:: javascript

    let student = {
    	name: "Aaron",
    	age: 17
    };

    print(student.name)		// "Aaron"
    print(student["name"])	// "Aaron"
    print(student.age)		// 17
    print(student["age"])	// 17
    print(student.birthday) // undefined

Although you can use ``.`` or ``[]`` to access properties of an object, the ``.`` syntax is preferred.

Another example:

.. code-block:: javascript

    let circle = {
    	x: 200,
    	y: 300,
    	radius: 50
    };

    circle.x = mouseX;
    circle.y = mouseY;
    ellipse(circle.x, circle.y, circle.radius, circle.radius);


To update or add a value to an object:

.. code-block:: javascript

    let student = {
        name: "Aaron",
        age: 17
    };

    print(student.age)  // 17
    student.age = 18
    print(student.age)  // 18

    print(student.birthday) // undefined
    student.birthday = "Jan 1"
    print(student.birthday) // "Jan 1"

Objects are passed by reference, not copied (time for a memory drawing on the whiteboard!). Consider:

.. code-block:: javascript

    let student = {
        name: "Aaron",
        age: 17,
    };

    anotherStudent = student;
    anotherStudent.name = "Catherine";

    print(student.name) // Catherine

Notice that this is very different than how a primitive (immutable) data type works. These are copied, not passed by reference:

.. code-block:: javascript

    let number = 42;
    let anotherNumber = number;

    anotherNumber = number;
    print(number)           // 42
    print(anotherNumber)    // 42

    anotherNumber = 15;
    print(number)           // 42
    print(anotherNumber)    // 15


.. note:: Other than Number, String, and Boolean, everything you use in JavaScript will be an object. In other words, they will all be passed by reference, not copied. Be careful to make a deep copy yourself if you want a separate version of an array, for example.

Arrays
-------

Very similar to lists in Python. `Find out more from MDN reference <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array>`_

.. code-block:: javascript

    let groceryList = ["apples", "oranges", "peaches", "milk"];
    for (let item of groceryList) {
        print("Don't forget to buy " + item);
    }

Can also iterate using the length property of the array:

.. code-block:: javascript

    let groceryList = ["apples", "oranges", "peaches", "milk"];
    for (let i=0; i<groceryList.length; i++) {
        print("Don't forget to buy " + groceryList[i]);
    }

Add to end of array with ``push()``:

.. code-block:: javascript

    let groceryList = ["apples", "oranges", "peaches", "milk"];
    groceryList.push("bananas");

    // ["apples", "oranges", "peaches", "milk", "bananas"]

Remove from end of array with ``pop()``:

.. code-block:: javascript

    let groceryList = ["apples", "oranges", "peaches", "milk"];
    let lastItem = groceryList.pop();

    // ["apples", "oranges", "peaches"]
    // lastItem == "milk"

You can also remove from the front of the array with ``shift()``, and add to the front of the array with ``unshift()``.

Make a copy of an array using:

.. code-block:: javascript

    let groceryList = ["apples", "oranges", "peaches", "milk"];
    let otherList = groceryList.slice()

    otherList[2] = "pears";
