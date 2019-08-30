p5.scribble Library
========================


Installing a Library
---------------------

Since the p5.scribble library is not part of the default template, we will need to download it and link to it in our HTML file. You can download a copy of the library `from it's GitHub repository <https://github.com/generative-light/p5.scribble.js>`_ (click the green Clone or download button, then Download ZIP. Move the ``p5.scribble.js`` file into your project folder, so that it is at ``/js/p5.scribble.js``).

Your HTML file might look something like this:

.. code-block:: html

    <!doctype html>
    <html>
    <head>
        <script src="js/p5.js">
        <script src="js/p5.scribble.js">
        <script src="sketch.js">
    </head>
    <body>
    </body>
    </html>


Using the Scribble Library
----------------------------

Explore the `README of the GitHub repo <https://github.com/generative-light/p5.scribble.js>`_ (just scroll down). We will be using global mode.



Try This
---------

Create a scribbled rectangle. Experiment with drawing the rectangle in setup, then in draw. Experiment with bowing, roughness, maxOffset, color and strokeWeight.