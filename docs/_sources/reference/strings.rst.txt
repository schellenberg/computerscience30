String Formatting and Methods
==============================

.. topic:: Quick Overview of Day

    Working with strings in JS.


String Concatenation
---------------------

Just like in Python, we can concatenate two strings together using a `+` sign.

Concatenation Example:

.. code-block:: javascript

  let name = "Dan";
  let message = "My name is " + name + ".";
  console.log(message);    // will output "My name is Dan."

Template Literals
------------------

Similar to f-strings in Python. You can evaluate variables (or anything, really) inside a template literal. Consider the examples below:
`MDN Template Literal Reference Page <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals>`_ 

Template Literal Example:

.. code-block:: javascript

  let name = "Dan";
  let message = `My name is ${name}.`;
  console.log(message);    // will output "My name is Dan."

  let age = 16;
  let future = `In twenty years, I'll be ${age + 20} years old.`;
  console.log(future);

String Methods
----------------------

`MDN Strings Methods reference <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Text_formatting#Methods_of_String>`_ 

The most important ones to know:

- `slice <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice>`_  (behaves very similar to string slicing in Python)
- `split <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split>`_ (splits a string into an array, based on separator passed in)
- `charAt <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charAt>`_ (gets the character at a specific index value)
- `indexOf <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf>`_ (searches for something inside a string)


CodingJS String Practice Problems
----------------------------------

If you want to improve your string manipulation skills, you can try the following:

- `helloName <https://codingjs.wmcicompsci.ca/exercise.html?name=helloName&title=String-1>`_ 
- `makeTags <https://codingjs.wmcicompsci.ca/exercise.html?name=makeTags&title=String-1>`_ 
- `extraEnd <https://codingjs.wmcicompsci.ca/exercise.html?name=extraEnd&title=String-1>`_ 
- `withoutEnd <https://codingjs.wmcicompsci.ca/exercise.html?name=withoutEnd&title=String-1>`_ 

- `doubleChar <https://codingjs.wmcicompsci.ca/exercise.html?name=doubleChar&title=String-2>`_ 
- `repeatSeparator <https://codingjs.wmcicompsci.ca/exercise.html?name=repeatSeparator&title=String-2>`_ 
