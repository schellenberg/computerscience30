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

We will spend our semeseter working on JavaScript, but it is useful to refresh your memory regarding HTML and CSS, since JavaScript is embedded within an HTML page.

Your first assignment of the semester will be to create a simple webpage that will be used as a directory/list of all your assignments for the semester. 


.. note:: 

    Although it is helpful to understand all the moving parts in a website, you can `download a copy of our p5js template folder <https://github.com/schellenberg/cs30-p5js-template/archive/master.zip>`_, extract the .zip file, then make/download a copy of this each time you are creating a new project. This way, you only need to really change the ``sketch.js`` file when creating a project.



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
        <!-- <script src="js/p5.sound.min.js"></script> -->
        <script src="sketch.js"></script>
      </head>
      <body>
      </body>
    </html>

