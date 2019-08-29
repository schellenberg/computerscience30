loadStrings
========================

*From the p5js reference page*
Reads the contents of a file and creates a String array of its individual lines. If the name of the file is used as the parameter, as in the above example, the file must be located in the sketch directory/folder.

Alternatively, the file maybe be loaded from anywhere on the local computer using an absolute path (something that starts with / on Unix and Linux, or a drive letter on Windows), or the filename parameter can be a URL for a file found on a network. 

Important Functions to Know
----------------------------

- `loadStrings() <https://p5js.org/reference/#/p5/loadStrings>`_ to load a text file as an array of strings (one line per element). You should call this in a preload() function.
- either the `split() <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split>`_ method or `spread syntax <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax#94a3>`_ to convert a string into an array of characters


First Demo
----------------

Adapt the grid example to load a predefined 2D array (just defined as a variable in the code). Now convert that into a text file, removing all the square brackets and commas. Load the file in your sketch, and either convert each element into a number, or change the grid code to work with string characters.

