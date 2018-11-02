JavaScript Maps
==================================

Depending on the language, these can be called Maps, Dictionaries, or associative arrays. Although there are differences in how they are implemented, the basic idea is the same. In the same way that we can use an array to store multiple values within one variable, we can use a ``map`` to store multiple values within a single variable. Instead of accessing the values based on an index number, however, we assign an arbitrary ``key`` to access it's associated value.

`MDN Map Reference <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map>`_ 

To create a map and set values:

.. code-block:: javascript

	let englishToFrench = new Map();
	englishToFrench.set("hello", "bonjour");
	englishToFrench.set("goodbye", "au revoir");


To access a value in the map:

.. code-block:: javascript

	englishToFrench.get("goodbye");


To check if a key exists inside a map:

.. code-block:: javascript

	if (englishToFrench.has("goodbye")) {
		console.log(englishToFrench.get("goodbye"));
	}


Note that we can save any type of data inside the value, not just a string. It can be a number, an object, an array, etc. A simple example would be to save coordinates (an x, y pair) into a map as an object...


More In Depth Demo
-------------------

Mind reader demo -- perhaps have the students play this ahead of time (prior to ever introducing the Map data type).

