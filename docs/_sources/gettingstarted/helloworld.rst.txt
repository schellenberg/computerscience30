Hello World
=============================

.. topic:: Quick Overview of Day

    Create a simple p5js project to understand all the moving parts...


Background Info
----------------

Front End Web Development

- HTML - semantic structure
- CSS - style
- JavaScript - logic


HTML
-----

.. code-block:: html

    <!DOCTYPE html>
    <html>
    <head>
        <title>Hello World</title>
    </head>
    <body>

    </body>
    </html>


CSS
----

Can be inline or external. External is greatly preferred.

.. code-block:: html

    body, html {
        padding: 0;
        margin: 0;
        height: 100%;
        overflow: hidden;
    }
    ::-webkit-scrollbar {
        display: none;
    }



JavaScript
-----------

Can also be inline or external. We will use external, specifically by editing a file called ``sketch.js``. The project folder should look something like this:

- project-name
    - css
        - ``style.css``
    - assets
        - any image and sound files you will be using
    - js
        - ``p5.js``
        - ``p5.min.js``
    - ``index.html``
    - ``sketch.js``

.. code-block:: html

    <!DOCTYPE html>
    <html>
      <head>
        <meta name="viewport" width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0>
        <style> body {padding: 0; margin: 0;} </style>
        <script src="js/p5.min.js"></script>
        <!-- <script src="js/p5.dom.min.js"></script> -->
        <!-- <script src="js/p5.sound.min.js"></script> -->
        <script src="sketch.js"></script>
      </head>
      <body>
      </body>
    </html>

