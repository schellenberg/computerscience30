loadTable
========================

*From the p5js reference page*

Reads the contents of a file or URL and creates a p5.Table object with its values. If a file is specified, it must be located in the sketch's "data" folder. The filename parameter can also be a URL to a file found online. By default, the file is assumed to be comma-separated (in CSV format). Table only looks for a header row if the 'header' option is included.

This method is asynchronous, meaning it may not finish before the next line in your sketch is executed. Calling loadTable() inside preload() guarantees to complete the operation before setup() and draw() are called. Outside of preload(), you may supply a callback function to handle the object.


Important Functions to Know
----------------------------

- Table `findRows() <https://p5js.org/reference/#/p5.Table/findRows>`_ finds the rows in the Table that contain the value provided, and returns references to those rows. Returns an Array.
- TableRow `get() <https://p5js.org/reference/#/p5.TableRow/get>`_ retrieves a value from the TableRow's specified column


Demo
----------------

Get the .csv file of COVID cases from Health Canada `from this page <https://www.canada.ca/en/public-health/services/diseases/2019-novel-coronavirus-infection.html>`_. Find all the rows from the past two weeks for Saskatchewan. To make dealing with dates easier, import Moment.js in the index.html library.


Completed Demo For Reference
-----------------------------

If you'd like to check out a completed version of the demo, take a look at `this sketch <https://editor.p5js.org/schellenberg/sketches/lT9ZmeV5aE>`_
