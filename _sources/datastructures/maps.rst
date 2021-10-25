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

CodingJS Practice Problems
---------------------------

Map Level 1
~~~~~~~~~~~~

- `mapCount <https://codingjs.wmcicompsci.ca/exercise.html?name=mapCount&title=Map-1>`_ 
- `mapBully <https://codingjs.wmcicompsci.ca/exercise.html?name=mapBully&title=Map-1>`_ 
- `mapShare <https://codingjs.wmcicompsci.ca/exercise.html?name=mapShare&title=Map-1>`_ 
- `mapAB <https://codingjs.wmcicompsci.ca/exercise.html?name=mapAB&title=Map-1>`_ 
- `topping1 <https://codingjs.wmcicompsci.ca/exercise.html?name=topping1&title=Map-1>`_ 
- `topping2 <https://codingjs.wmcicompsci.ca/exercise.html?name=topping2&title=Map-1>`_ 
- `topping3 <https://codingjs.wmcicompsci.ca/exercise.html?name=topping3&title=Map-1>`_ 
- `mapAB2 <https://codingjs.wmcicompsci.ca/exercise.html?name=mapAB2&title=Map-1>`_ 
- `mapAB3 <https://codingjs.wmcicompsci.ca/exercise.html?name=mapAB3&title=Map-1>`_ 
- `mapAB4 <https://codingjs.wmcicompsci.ca/exercise.html?name=mapAB4&title=Map-1>`_ 

Map Level 2
~~~~~~~~~~~~

- `word0 <https://codingjs.wmcicompsci.ca/exercise.html?name=word0&title=Map-2>`_ 
- `wordLen <https://codingjs.wmcicompsci.ca/exercise.html?name=wordLen&title=Map-2>`_ 
- `pairs <https://codingjs.wmcicompsci.ca/exercise.html?name=pairs&title=Map-2>`_ 
- `wordCount <https://codingjs.wmcicompsci.ca/exercise.html?name=wordCount&title=Map-2>`_ 
- `firstChar <https://codingjs.wmcicompsci.ca/exercise.html?name=firstChar&title=Map-2>`_ 
- `wordAppend <https://codingjs.wmcicompsci.ca/exercise.html?name=wordAppend&title=Map-2>`_ 
- `wordMultiple <https://codingjs.wmcicompsci.ca/exercise.html?name=wordMultiple&title=Map-2>`_ 
- `allSwap <https://codingjs.wmcicompsci.ca/exercise.html?name=allSwap&title=Map-2>`_ 
- `firstSwap <https://codingjs.wmcicompsci.ca/exercise.html?name=firstSwap&title=Map-2>`_ 


Iterating Over a Map
------------------------

Sometimes you want to look at every key/value pair within a map. There are a number of ways to do this, but one of the simplest is to use a ``for...of`` loop, which could look like the following:

.. code-block:: javascript

	for (let [key, value] of someMap) {
	  // the key variable holds the value used to access something in the map
	  // the value variable holds whatever the contents are

	  // in other words, someMap.get(key) would return the same thing as value
	}

To practice iterating through a map, you should try the following questions from CodingJS:

- `mapLargest <https://codingjs.wmcicompsci.ca/exercise.html?name=mapLargest&title=Map-2>`_
- `mapLongestSentence <https://codingjs.wmcicompsci.ca/exercise.html?name=mapLongestSentence&title=Map-2>`_


More In Depth Demo
-------------------

Try beating my `mind reader </_static/mindreader>`_ built in p5js. I won't tell you how it works yet, but I do use the Map data type.

Assignment Idea
-----------------

Give :download:`starter code <../handouts/sentiment-analysis-starter-code.zip>` for movie review sentiment analysis, and have the students just fill in two functions (related to storing/accessing information from a Map). `Idea from Nifty assignments <http://nifty.stanford.edu/2016/manley-urness-movie-review-sentiment/>`_ 

Practice Quiz
--------------

To confirm that you understand maps, you should try the :ref:`maps_practice_quiz`.
