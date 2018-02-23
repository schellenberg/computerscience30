JavaScript Data Types
=============================

.. topic:: Quick Overview of Day

    Discuss JavaScript data types. Stick to primitive-ish types (number, string, boolean).


Important Stuff
---------------

- ``number``, ``string`` and ``boolean`` are *mostly* primitive data types in JavaScript (only mostly, though, since they do have methods; they are immutable, though)
- all other data can be considered objects. We'll get into what that means in a few weeks...
  

Number Data Type
-----------------

- aren't different types for ``int`` and ``float``, which is a bit weird to get used to
- some special number values include:
	- ``NaN``, which is the result doing something mathematically goofy, like dividing a string by a number. Try it in the console.
	- ``Infinity``, which results when the value of a number is larger than 1.79769313486231570e+308. There's going to be some weird math going on if you use it, so be careful... `MDN docs <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Infinity>`_
	- can use exponential/scientific notation if you'd like: ``5e3`` === ``5000``, and ``6e-4`` === ``0.0006``


String Data Type
-----------------

- stick with double quotes (single works too, but convention is to use double)
- note that comparison is by value, not reference; "S" + "a" + "s" + "k" === "Sask"
- strings have properties and methods. A useful property to know about is ``length`` -- ``"Sask".length`` === 4. There are built in methods, such as ``"Sask".toUppercase()``. You can find many more at `MDN docs for string methods <https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Useful_string_methods>`_


