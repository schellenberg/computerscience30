.. qnum::
   :prefix: maps-quiz
   :start: 1

.. _maps_practice_quiz:

Maps Practice Quiz
-------------------

Question 1
~~~~~~~~~~~

.. fillintheblank:: maps_1

    What would the following code print?::

		let wordArray = ["computer", "science", "thirty"];
		let myMap = new Map();

		for (let i = 0; i < wordArray.length; i++) {
		  myMap.set(wordArray[i], wordArray[i].length);
		}
		
		console.log(myMap.get("science"));

    - :7: Great!
      :.*: Try again!


Question 2
~~~~~~~~~~~

.. fillintheblank:: maps_2

    What would the following code print?::

		let wordArray = ["computer", "science", "thirty"];
		let myMap = new Map();
		
		for (let i = 0; i < wordArray.length; i++) {
		  myMap.set(wordArray[i], wordArray[i].length);
		}
		
		console.log(myMap.get("computer"));

    - :8: Great!
      :.*: Try again!


Question 3
~~~~~~~~~~~

.. fillintheblank:: maps_3

    What would the following code print?::

		function mapChanger(someMap){
		  if (someMap.has("a")) {
		    someMap.set("b", someMap.get("a"));
		  }
		  someMap.delete("c");
		  return someMap;
		}

		let myMap = new Map();
		myMap.set("a", "happy");
		myMap.set("b", "sad");
		myMap.set("c", "excited");

		myMap = mapChanger(myMap);
		console.log(myMap.get("b"));

    - :happy: Great!
      :.*: Try again!


Question 4
~~~~~~~~~~~

.. fillintheblank:: maps_4

    What would the following code print?::

		function mapChanger(someMap){
		  if (someMap.has("a")) {
		    someMap.set("b", someMap.get("a"));
		  }
		  someMap.delete("c");
		  return someMap;
		}

		let myMap = new Map();
		myMap.set("b", "sad");
		myMap.set("c", "excited");

		myMap = mapChanger(myMap);
		console.log(myMap.get("b"));

    - :sad: Great!
      :.*: Try again!


Question 5
~~~~~~~~~~~

.. fillintheblank:: maps_5

    What would the following code print?::

		function mapChanger(someMap){
		  if (someMap.has("a")) {
		    someMap.set("b", someMap.get("a"));
		  }
		  someMap.delete("c");
		  return someMap;
		}

		let myMap = new Map();
		myMap.set("b", "sad");
		myMap.set("c", "excited");

		myMap = mapChanger(myMap);
		console.log(myMap.get("c"));

    - :undefined: Great!
      :.*: Try again! What does JavaScript send back if you try to access something that doesn't exist?


Question 6
~~~~~~~~~~~

.. fillintheblank:: maps_6

    What would the following code print?::

		function otherMapChanger(someMap){
		  if (someMap.has("a") && someMap.has("b")) {
		    let combined = someMap.get("a") + someMap.get("b");
		    someMap.set("ab", combined);
		  }
		  return someMap;
		}

		let myMap = new Map();
		myMap.set("a", "happy");
		myMap.set("b", "sad");
		myMap.set("c", "excited");

		myMap = otherMapChanger(myMap);
		console.log(myMap.get("ab"));

    - :happysad: Great!
      :.*: Try again!


Question 7
~~~~~~~~~~~

.. fillintheblank:: maps_7

    What would the following code print?::

		function otherMapChanger(someMap){
		  if (someMap.has("a") && someMap.has("b")) {
		    let combined = someMap.get("a") + someMap.get("b");
		    someMap.set("ab", combined);
		  }
		  return someMap;
		}

		let myMap = new Map();
		myMap.set("b", "sad");
		myMap.set("c", "excited");

		myMap = otherMapChanger(myMap);
		console.log(myMap.get("ab"));

    - :undefined: Great!
      :.*: Try again! What does JavaScript send back if you try to access something that doesn't exist?


Question 8
~~~~~~~~~~~

Solve the `mapAB5 CodingJS array problem <https://codingjs.wmcicompsci.ca/exercise.html?name=mapAB5&title=Map-1>`_. 


Question 9
~~~~~~~~~~~

Solve the `pairs2 CodingJS array problem <https://codingjs.wmcicompsci.ca/exercise.html?name=pairs2&title=Map-2>`_. 
